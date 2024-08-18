'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import NumberInput from '@/components/inputs/number/NumberInput';
import { prefixZeros } from '@/utils/format';
import { cn } from '@/utils/tailwind';

const EmailComponents = () => {
  const router = useRouter();

  const [codeArray, setCodeArray] = useState(new Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // timer
  const TIME_LIMIT = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [currentTime, setCurrentTime] = useState(TIME_LIMIT);
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  const reset = () => {
    setCurrentTime(TIME_LIMIT);
    // 이메일 전송 api 요청 추가
  };
  const handleChange = (val: string, idx: number) => {
    const newArray = [...codeArray];
    newArray[idx] = val;
    setCodeArray(newArray);

    if (val && idx < codeArray.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prev) => prev - INTERVAL);
    }, INTERVAL);

    if (currentTime <= 0) {
      clearInterval(timer);
      setIsTimeExpired(true);
    }

    return () => clearInterval(timer);
  }, [currentTime]);

  const minutes = useMemo(() => {
    return Math.floor((currentTime / (60 * 1000)) % 60);
  }, [currentTime]);

  const seconds = useMemo(() => {
    return prefixZeros(Math.floor((currentTime / 1000) % 60), 2);
  }, [currentTime]);

  const submitEnabled = useMemo(() => {
    const isAllValues = codeArray.every((el) => el !== '');
    return !isTimeExpired && isAllValues;
  }, [codeArray, isTimeExpired]);

  return (
    <form className="flex flex-col items-center gap-5 w-[22.25rem]">
      <div className="flex gap-2">
        {codeArray.map((val, idx) => (
          <NumberInput
            key={`code-${idx}`}
            value={val}
            onChange={(e) => handleChange(e.currentTarget.value, idx)}
            autoFocus={idx === 0}
            ref={(el: HTMLInputElement | null) => (inputRefs.current[idx] = el)}
          />
        ))}
      </div>
      <p
        className={
          (cn('font-body-14'),
          isTimeExpired ? 'text-text-primary' : 'text-text-strong')
        }
      >
        {isTimeExpired
          ? '인증 번호를 재전송해 주세요.'
          : `${minutes}:${seconds}`}
      </p>
      <button
        type="submit"
        className="button-primary h-12 rounded-xl w-full"
        onClick={() => router.push('/auth/password')}
        disabled={!submitEnabled}
      >
        확인
      </button>
      <p className="font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong">
        메일이 오지 않으셨나요?{'\n'}스팸함을 확인하거나 인증 메일을{' '}
        <span
          style={{ fontWeight: 700 }}
          className="cursor-pointer"
          onClick={reset}
        >
          재전송
        </span>
        해 주세요.
      </p>
    </form>
  );
};

export default EmailComponents;
