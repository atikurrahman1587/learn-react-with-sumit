import WithCounter from "./HOC/WithCounter.jsx";
// eslint-disable-next-line react-refresh/only-export-components
const HoverCounter = (props) => {
    // eslint-disable-next-line react/prop-types
    const { count, incrementCount } = props;
    return (
        <>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export default WithCounter(HoverCounter);