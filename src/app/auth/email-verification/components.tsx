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
import { useTimer } from '@/hooks/useTimer';
import { useUser } from '@/hooks/useUser';
import { emailCodeAtom } from '@/stores/user/emailCodeAtom';
import { prefixZeros } from '@/utils/format';

// timer constants
const TIME_LIMIT = 5 * 60 * 1000;

const EmailComponents = () => {
  const router = useRouter();

  const [codeArray, setCodeArray] = useState(new Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [{ email, id }, setEmailAtom] = useAtom(emailCodeAtom);
  const { userEmailCheck, userEmailVerification } = useUser();

  // 새로고침 등으로 store에 이메일 없는 경우
  useEffect(() => {
    if (email === '') {
      router.push('/auth/enter-email');
    }
  }, [email, router]);

  // timer
  const { isTimeExpired, minutes, seconds } = useTimer({
    timeLimit: TIME_LIMIT,
  });

  const handleChange = (val: string, idx: number) => {
    const hasNumber = /^[0-9]+$/.test(val);

    if (val !== '' && !hasNumber) return;

    if (val.length > 1) {
      const newArray = [...codeArray];

      for (let i = 0; i < val.length && idx + i < 6; i++) {
        newArray[idx + i] = val[i];
      }

      setCodeArray(newArray);
      inputRefs.current[Math.min(5, idx + val.length)]?.focus();
      return;
    }

    const newArray = [...codeArray];
    newArray[idx] = val;
    setCodeArray(newArray);

    if (val && idx < codeArray.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  // 백스페이스 입력 시 커서 이전 input으로 이동
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key !== 'Backspace') return;

    if (codeArray[idx] === '' && idx !== 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 시간 만료 후 확인 클릭 시 이메일 입력 페이지로 이동
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

  const submitEnabled = useMemo(() => {
    if (isTimeExpired) return true; // 시간 만료 시 버튼 활성화

    // 시간 만료 전 인증코드 모두 입력 시 버튼 활성화
    const isAllValues = codeArray.every((el) => el !== '');
    return isAllValues;
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

        {isTimeExpired ? (
          <p className="font-body-14 text-text-primary">
            인증 번호를 재전송해 주세요.
          </p>
        ) : (
          <p className="font-body-14 text-text-strong">
            {`${minutes}:${prefixZeros(seconds, 2)}`}
          </p>
        )}

        <button
          type="submit"
          className="button-primary h-12 rounded-xl w-full"
          disabled={!submitEnabled}
        >
          확인
        </button>

        <p className="font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong">
          {`메일이 오지 않으셨나요?\n스팸함을 확인하거나 인증 메일을 `}
          <strong
            className="font-title-14 cursor-pointer"
            onClick={async () => await userEmailCheck(email, true)}
          >
            재전송
          </strong>
          해 주세요.
        </p>
      </form>
    </>
  );
};

export default EmailComponents;
