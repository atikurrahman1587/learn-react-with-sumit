export default function BoilingVerdict({celsius = 0, scale}){
    if (celsius >= 100 && scale === 'c') {
        return <p>The Water would boil.</p>
    }
    if (celsius >= 212 && scale === 'f') {
        return <p>The Water would boil.</p>
    }
    return <p>The Water would not boil.</p>
}