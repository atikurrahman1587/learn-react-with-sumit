// import createContext from "../lib/Context.jsx";

import React from "react";

const  themeContext = React.createContext({
    theme: 'light',
    time : '01/01/1970'
});
export default themeContext;