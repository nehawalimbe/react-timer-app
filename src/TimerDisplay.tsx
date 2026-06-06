type Props = {
    formattedTime: string;   
}
function TimerDisplay ({formattedTime}: Props) {
    return (<div>{formattedTime}</div>)
}

export default TimerDisplay;