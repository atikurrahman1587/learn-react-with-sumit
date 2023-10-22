// import ClockList from "./components/ClockList.jsx";
// import Form from "./components/Form.jsx";
// import Calculator from "./components/Calculator.jsx";
// import Text from "./components/Inheritance/Text.jsx";
// import Emoji from "./components/composition/Emoji.jsx";
// import Text from "./components/composition/Text.jsx";
// import Bracket from "./components/composition/Bracket.jsx";

// import ClickCounter from "./components/ClickCounter.jsx";
// import HoverCounter from "./components/HoverCounter.jsx";

import ClickCounter from "./components/RenderProps/ClickCounter.jsx";
// import HoverCounter from "./components/RenderProps/HoverCounter.jsx";
import Counter from "./components/RenderProps/Counter.jsx";
import Section from "./components/ContextAPI/Section.jsx";
import React from "react";
import ThemeContext from "./Context/ThemeContext.jsx";
// import User from "./components/User.jsx";

class App extends React.Component {
    //const quantities = [1,2,3];
    state = {
        theme: 'dark',
        time: new Date().getTime().toString(),
        switchTheme: () => {
            this.setState(({theme}) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    }
                } else {
                    return {
                        theme: 'dark',
                    }
                }
            })
        }
    }


  render() {
      return (
          <>
              <div className={"app"}>
                  <Counter>
                      {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
                  </Counter>
                  <ThemeContext.Provider value={this.state}>
                      <Section />
                  </ThemeContext.Provider>
                  {/*<Counter>*/}
                  {/*    {(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />}*/}
                  {/*</Counter>*/}
                  {/*<User render={(isLoggedIn) => isLoggedIn? 'Atikur' : 'Guest'}/>*/}
                  {/*<ClickCounter/>*/}
                  {/*<HoverCounter/>*/}
              </div>
              {/*<Emoji>*/}
              {/*    {({addEmoji}) => (*/}
              {/*        <Bracket>*/}
              {/*            {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}*/}
              {/*        </Bracket>*/}
              {/*    )}*/}
              {/*</Emoji>*/}
              {/*<Calculator />*/}
              {/*<Form />*/}
              {/*<ClockList quantities={quantities} />*/}
          </>
      )
  }
}
export default App
