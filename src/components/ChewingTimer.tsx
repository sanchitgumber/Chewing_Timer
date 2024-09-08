
import { Button } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/progress";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useChewTimer from "../../utils/useChewTimer";

interface ChewingTimerProps {
  className?: string;
}

const ChewingTimer: React.FC<ChewingTimerProps> = ({ className }) => {
  const [activity, remainingTime , activityTime , isRunning, setIsRunning] = useChewTimer();
  

  return (
    <Card
      className={`flex  flex-col items-center gap-11  bg-sky-950  ${className}`}
    >
      
      <CardHeader>
        <h1 className="text-white text-3xl bg-gradient-to-r from-emerald-200 to-yellow-300 text-transparent bg-clip-text">
          Chewing Timer
        </h1>
      </CardHeader>
      <CardBody className="flex c flex-col items-center gap-11">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
            label: "text-white cp",
          }}
          aria-label="Loading..."
          size="lg"
          value={remainingTime}
          maxValue={activityTime}
          color="warning"
          label={activity}
          showValueLabel={true}
          formatOptions={{ style: "unit", unit: "second" }}
        />
        <div className="flex justify-between w-full px-3">
          <Button
            variant="bordered"
            className="text-white bg-yellow-500"
            onClick={() => setIsRunning(true)}
          >
            Start
          </Button>

          <Button variant="bordered" className="text-white">
            reset
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ChewingTimer;
