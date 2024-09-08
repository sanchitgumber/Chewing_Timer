import { useEffect, useState } from "react";

type Activity = "Start Now" | "ingest" | "chew" | "swallow and rest";

export default function useChewTimer() {
  const [activity, setActivity] = useState<Activity>("Start Now");
  const [isRunning, setIsRunning] = useState(false);
  const [activityTime, setActivityTime] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    if (isRunning) {
      changeToIngest();
    }
  }, [isRunning]);

  useEffect(() => {
    let animationFrameId: number;
    const updateTimer = () => {
      if (startTime) {
        const now = Date.now();
        const elapsed = now - startTime;
        const timeLeft = Math.max(0, activityTime * 1000 - elapsed);
        setRemainingTime(Math.ceil(timeLeft / 1000));
        if (timeLeft <= 0) {
          switchActivity();
        }
      }
      animationFrameId = requestAnimationFrame(updateTimer);
    };
    updateTimer();
    return () => cancelAnimationFrame(animationFrameId);
  }, [startTime, activityTime]);

  const switchActivity = () => {
    if (activity === "ingest") {
      changeToChew();
    } else if (activity === "chew") {
      changeToSwallow();
    } else if (activity === "swallow and rest") {
      changeToIngest();
    }
  };

  const changeToIngest = () => {
    setActivity("ingest");
    setActivityTime(3);
    setStartTime(Date.now());
  };

  const changeToChew = () => {
    setActivity("chew");
    setActivityTime(20);
    setStartTime(Date.now());
  };

  const changeToSwallow = () => {
    setActivity("swallow and rest");
    setActivityTime(3);
    setStartTime(Date.now());
  };

  return [
    activity,
    remainingTime,
    activityTime,
    isRunning,
    setIsRunning,
  ] as const;
}
