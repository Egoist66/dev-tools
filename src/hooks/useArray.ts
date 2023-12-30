import {useToggle} from "./useToggle.ts";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {removeLettersFromArray, replaceNumbersWithS} from "../utils/cleanStringFromLetters.ts";
import {generateRandomArray, generateRandomStringArray} from "../utils/randomArray.ts";

type DigitArrayState = {
    count: number
    varName: string
    values: string
    arrOut: string
    isGenerated: boolean
}

export const useArray = () => {
    const {toggle, setToggleOnce, isToggled} = useToggle()
    const [open, setOpen] = useState<boolean>(true)
    const [randomArray, setRandomArray] = useState<string>('')


    const [arrayData, setArrayData] = useState<DigitArrayState>({
        count: 3,
        varName: '',
        values: '',
        arrOut: '',
        isGenerated: false

    })



    const setVarName = (e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            varName: e.currentTarget.value
        })
    }

    const generateRandom = (type: 'int' | 'str') => {
        if (type === 'int'){
            return generateRandomArray(arrayData.count)

        }

        if (type === 'str'){
            return  generateRandomStringArray(arrayData.count)
        }
    }



    const setValues = (e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            values: e.currentTarget.value
        })
    }

    const changeElemsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            count: +e.currentTarget.value
        })
    }, [arrayData.count])

    const generateManualArray = useCallback((removeDigit?: boolean) => {


        let arrVarName = arrayData.varName.trim()
        let arrValues = removeDigit ? removeLettersFromArray(arrayData.values.trim().split(" ")) : replaceNumbersWithS(arrayData.values.trim().split(" "))

        setArrayData({
            ...arrayData,
            arrOut: `${arrVarName} = [${arrValues}]`,
            isGenerated: true

        })

        setOpen(true)



    }, [arrayData.varName, arrayData.values])

    useEffect(() => {
        setArrayData({
            ...arrayData,
            isGenerated: false
        })
    }, [arrayData.varName, arrayData.values])

    return {
        generateManualArray,
        changeElemsCount,
        setValues,
        setVarName,
        setToggleOnce,
        generateRandom,
        toggle,
        isToggled,
        randomArray,
        setRandomArray,
        setOpen,
        open,
        ...arrayData
    }


}