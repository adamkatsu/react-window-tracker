import { useEffect, useState } from 'react'


export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function windowResize(){
            setWindowWidth(window.innerWidth)
            console.log('resized');
        }
        window.addEventListener('resize', windowResize)

        return function() {
            window.removeEventListener('resize', windowResize)
        }
    }, [])

    return (
        <span>Window Width: {windowWidth}px</span>
    )
}