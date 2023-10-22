import Content from "./Content.jsx";
import React from "react";

class Section extends React.Component {
    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        console.log('Section Function')
       return (
           <div>
               <h1>This a section</h1>
               <Content />
           </div>
       );
   }
}

export default Section;