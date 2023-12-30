import {useRef, useState} from "react";

export const useCopy = () => {
    const [isCopied, setCopy] = useState<boolean>(false)

    const outRef = useRef<HTMLSpanElement>(null)
    const copyOut = () => {

        if (outRef.current) {
            if (window.navigator) {
                navigator.clipboard.writeText(outRef?.current?.textContent!)
                    .then(() => {
                        setCopy(true)
                        const timer = setTimeout(() => {
                            setCopy(false)
                            clearTimeout(timer)
                        }, 1000)
                    })
                    .catch((e) => {
                        console.log(e)
                        setCopy(false)
                    })
            }
        }
    }

    return {

        copyOut,
        outRef,
        isCopied
    }

}