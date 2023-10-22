import WithCounter from "./HOC/WithCounter.jsx";
// eslint-disable-next-line react-refresh/only-export-components
const ClickCounter = (props) => {
    // eslint-disable-next-line react/prop-types
    const { count, incrementCount } = props;
    return (
        <>
            <button type={"button"} onClick={incrementCount}>Clicked {count} times</button>
        </>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export default WithCounter(ClickCounter);