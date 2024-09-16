import { useEffect, useMemo, useState } from 'react';

export interface UseTimerProps {
  timeLimit: number;
  interval?: number;
}

export const useTimer = ({ timeLimit, interval = 1000 }: UseTimerProps) => {
  const [currentTime, setCurrentTime] = useState(timeLimit);
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prev) => prev - interval);
    }, interval);

    if (currentTime <= 0) {
      clearInterval(timer);
      setIsTimeExpired(true);
    }

    return () => clearInterval(timer);
  }, [currentTime, interval]);

  const minutes = useMemo(() => {
    return Math.floor((currentTime / (60 * 1000)) % 60);
  }, [currentTime]);

  const seconds = useMemo(() => {
    return Math.floor((currentTime / 1000) % 60);
  }, [currentTime]);

  return {
    isTimeExpired,
    minutes,
    seconds,
    setCurrentTime,
  };
};
