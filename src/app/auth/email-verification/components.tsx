'use client';

import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import NumberInput from '@/components/inputs/number/NumberInput';
import { useUser } from '@/hooks/useUser';
import { emailCodeAtom } from '@/stores/user/emailCodeAtom';
import { prefixZeros } from '@/utils/format';
import { cn } from '@/utils/tailwind';

// timer constants
const TIME_LIMIT = 5 * 60 * 1000;
const INTERVAL = 1000;

const EmailComponents = () => {
  const router = useRouter();

  const [codeArray, setCodeArray] = useState(new Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [{ email, id }, setEmailAtom] = useAtom(emailCodeAtom);
  const { userEmailVerification } = useUser();

  useEffect(() => {
    if (email === '') {
      router.push('/auth/enter-email');
    }
  }, [email, router]);

  // timer
  const [currentTime, setCurrentTime] = useState(TIME_LIMIT);
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  useEffect(() => {
    if (email === '') {
      router.push('/auth/enter-email');
    }
  }, [email, router]);

  const handleChange = (val: string, idx: number) => {
    if (val !== '' && !/^[0-9]$/.test(val)) return;

    const newArray = [...codeArray];
    newArray[idx] = val;
    setCodeArray(newArray);

    if (val && idx < codeArray.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key !== 'Backspace') return;

    if (codeArray[idx] === '' && idx !== 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isTimeExpired) {
      router.push('/auth/enter-email');
      setEmailAtom({ email: '', id: '' });
      return;
    }

    const res = await userEmailVerification(id, codeArray.join(''));

    if (res === 'success') {
      router.push('/auth/password');
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
    return (!isTimeExpired && isAllValues) || isTimeExpired;
  }, [codeArray, isTimeExpired]);

  return (
    <>
      <p className="font-body-14 mb-12 text-text-strong">
        <span className="font-title-14 mr-0.5">{email}</span>
        으로 전송된 인증 메일을 확인해 주세요.
      </p>
      <form
        className="flex flex-col items-center gap-5 w-[22.25rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2">
          {codeArray.map((val, idx) => (
            <NumberInput
              key={`code-${idx}`}
              value={val}
              onChange={(e) => handleChange(e.currentTarget.value, idx)}
              autoFocus={idx === 0}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              onKeyDown={(e) => handleKeyDown(e, idx)}
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
          disabled={!submitEnabled}
        >
          확인
        </button>
        <p className="font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong">
          {`메일이 오지 않으셨나요?\n스팸함을 확인하거나 인증 메일을 `}
          <strong className="font-title-14">재전송</strong>해 주세요.
        </p>
      </form>
    </>
  );
};

export default EmailComponents;
