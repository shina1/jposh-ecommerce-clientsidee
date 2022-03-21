import { useEffect, useState } from "react";

export const ScreenWithAndHeight = () => {
    let windowInnerWidthAndHeight = [window.innerWidth, window.innerHeight]
    let [windowSize, setWindowSize] = useState(windowInnerWidthAndHeight)

    useEffect(()=>{
        const adjustWindowSize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener("resize", adjustWindowSize);

        return ()=> window.removeEventListener("resize", adjustWindowSize);
    }, []);
    return windowSize
}




