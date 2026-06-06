type Props = {
  buttonName: string;
  disabled?: boolean;
  onClick: () => void;
};
function TimerButtons({ buttonName, onClick, disabled = false }: Props) {
  return (
    <button className="counter" disabled={disabled} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export default TimerButtons;

// type Props = {
//   buttonName: string;
//   isTimerRunning: boolean;
//   onClick: () => void;
// };
// function TimerButtons({ isTimerRunning, buttonName, onClick }: Props) {
//   return (
//     <button className="counter" disabled={isTimerRunning} onClick={onClick}>
//       {buttonName}
//     </button>
//   );
// }

// export default TimerButtons;
