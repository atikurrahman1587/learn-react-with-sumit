import React from "react";

class Button extends React.Component {
    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // eslint-disable-next-line react/prop-types
        const {change:currentChange, locale:currentLocale} = this.props;
        // eslint-disable-next-line react/prop-types
        const {change:nextChange, locale:nextLocale} = nextProps;
        if(currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;

    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { change, locale, show, enable } = this.props
        if (!enable) return null;
        return (
            <>
                <button type={"button"} onClick={() => change(locale) }>{ locale === 'bn-BD' ? 'Change CLock' : 'ঘড়ি পরিবর্তন করুন'}</button>
                {show && <p>HEllO</p>}
            </>
        )
    }
}
export default Button