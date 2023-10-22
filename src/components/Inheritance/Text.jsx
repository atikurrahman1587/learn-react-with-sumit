import Emoji from "./Emoji.jsx";

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }
    render() {
        const decoratedText = this.addEmoji('I am Javascript language','😜');
        return super.render(decoratedText)
    }
}