import { CALL_STATUS, useVapi } from "./useVapi";
import { Loader2, Mic, Square } from "lucide-react";

const VapiButton = ({
  toggleCall,
  callStatus,
  audioLevel = 0,
}: Partial<ReturnType<typeof useVapi>>) => {
  const color =
    callStatus === CALL_STATUS.ACTIVE
      ? "red"
      : callStatus === CALL_STATUS.LOADING
      ? "orange"
      : "green";

  const buttonStyle = {
    borderRadius: "50%",
    width: "5rem",
    height: "5rem",
    color: "white",
    border: "none",
    boxShadow: `0px 0px ${5 + audioLevel * 10}px ${audioLevel * 2}px ${color}`,
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      className={`transition-transform duration-200 ease-in-out transform hover:scale-110 ${
        callStatus === CALL_STATUS.ACTIVE
          ? "bg-red-500 hover:bg-red-700"
          : callStatus === CALL_STATUS.LOADING
          ? "bg-orange-500 hover:bg-orange-700"
          : "bg-green-500 hover:bg-green-700 wobble"
      } flex items-center justify-center`}
      onClick={toggleCall}
    >
      {callStatus === CALL_STATUS.ACTIVE ? (
        <Square />
      ) : callStatus === CALL_STATUS.LOADING ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Mic />
      )}
    </button>
  );
};

export { VapiButton };
