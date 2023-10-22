// eslint-disable-next-line react/prop-types
export default function HoverCounter({count, incrementCount, theme, time, switchTheme}) {
    const style = theme === 'dark' ? {backgroundColor: '#000000', color: '#ffffff'} : null;
    console.log('Hover Counter render')
    return (
        <>
            <h1 style={style} onMouseOver={incrementCount}>Hovered {count} times</h1>
            <button type={'button'} onClick={switchTheme}>Change Theme</button>
            <p>TIME: {time}</p>
        </>
    );
}