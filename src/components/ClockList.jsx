import Clock from "./Clock.jsx";
function ClockList({quantities = []}) {
    return (
        <>
            <div>
                {quantities.map((key) => (
                    <Clock key={key} />
                ))}
            </div>
        </>
    );
}
export default ClockList;