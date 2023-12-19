import {useToggle} from "./useToggle.ts";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {removeLettersFromArray} from "../utils/cleanStringFromLetters.ts";
import {generateRandomArray} from "../utils/randomArray.ts";

type DigitArrayState = {
    digitCount: number
    digitVarName: string
    digitValues: string
    digitArrOut: string
    isGenerated: boolean
}

export const useDigitalArray = () => {
    const {toggle, setToggleOnce, isToggled} = useToggle()
    const [open, setOpen] = useState<boolean>(true)

    const [arrayData, setArrayData] = useState<DigitArrayState>({
        digitCount: 3,
        digitVarName: '',
        digitValues: '',
        digitArrOut: '',
        isGenerated: false

    })



    const setDigitVarName = (e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            digitVarName: e.currentTarget.value
        })
    }

    const generateRandom = () => {
       return generateRandomArray(arrayData.digitCount)
    }

    const setDigitValues = (e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            digitValues: e.currentTarget.value
        })
    }

    const changeDigitsElemsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            digitCount: +e.currentTarget.value
        })
    }, [arrayData.digitCount])

    const generateManualDigitArray = useCallback(() => {


        let arrVarName = arrayData.digitVarName.trim()
        let arrValues = removeLettersFromArray(arrayData.digitValues.trim().split(" "))

        setArrayData({
            ...arrayData,
            digitArrOut: `${arrVarName} = [${arrValues}]`,
            isGenerated: true

        })

        setOpen(true)



    }, [arrayData.digitVarName, arrayData.digitValues])

    useEffect(() => {
        setArrayData({
            ...arrayData,
            isGenerated: false
        })
    }, [arrayData.digitVarName, arrayData.digitValues])

    return {
        generateManualDigitArray,
        changeDigitsElemsCount,
        setDigitValues,
        setDigitVarName,
        setToggleOnce,
        generateRandom,
        toggle,
        isToggled,
        setOpen,
        open,
        ...arrayData
    }


}