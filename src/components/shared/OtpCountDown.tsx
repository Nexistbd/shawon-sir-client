/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

const OtpCountDown = ({ setIsEnable }: { setIsEnable: any }) => {
  const [seconds, setSeconds] = useState(120); // 5 minutes

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          setIsEnable(false);
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setIsEnable]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <span className=" p-3">
      {formatTime(minutes)}:{formatTime(remainingSeconds)}
    </span>
  );
};

export default OtpCountDown;
