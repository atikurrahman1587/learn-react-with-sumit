import Counter from "../RenderProps/Counter.jsx";
import HoverCounter from "../RenderProps/HoverCounter.jsx";
import ThemeContext from "../../Context/ThemeContext.jsx";
import {useContext} from "react";

function Content() {
    const context = useContext(ThemeContext);
    const {theme, time, switchTheme} = context;
    console.log('Context render')
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} time={time} switchTheme={switchTheme} />
                )}
            </Counter>
        </div>
    );
}

export default Content;