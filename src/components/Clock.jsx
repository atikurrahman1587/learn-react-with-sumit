import React from "react";
import Button from "./Button.jsx";

class Clock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };
    componentDidMount() {
        this.clockTimer = setInterval(() =>{this.thick()}, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    thick() {
        this.setState({
            date: new Date()
        });
    }
    handelClick = (locale)=> {
        this.setState({
            locale: locale
        })
    }
    render() {
        const {date, locale} = this.state;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <Button change={this.handelClick} locale={'en-US'} />
        //     );
        // }else {
        //     button = (
        //         <Button change={this.handelClick} locale={'bn-BD'} />
        //     );
        // }
        return (
            <>
                <h1>{date.toLocaleTimeString(locale)}</h1>
                {/*{button}*/}
                {locale === 'bn-BD' ? (
                        <Button change={this.handelClick} locale={'en-US'} show={false} enable />
                    ) : (
                        <Button change={this.handelClick} locale={'bn-BD'} show enable={false} />
                    )}
            </>
        );
    }
}
export default Clock