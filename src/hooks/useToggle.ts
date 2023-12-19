import {useCallback, useState} from "react";

export const useToggle = () => {
    const [isToggled, setToggle] = useState<boolean>(true)


    const toggle = useCallback(() => {
        setToggle(isToggled => !isToggled)
    }, [isToggled])

    const setToggleOnce = (bool: boolean) => {
        setToggle(bool)
    }

    return {
        isToggled,
        setToggleOnce,
        toggle
    }
}