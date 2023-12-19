import {ChangeEvent, FC, useCallback, useState} from "react";


type StringArrayState = {
    strCount: number
    strVarName: string
    strValues: string
}
export const StringArray: FC = () => {

    const [arrayData, setArrayData] = useState<StringArrayState>({
        strCount: 3,
        strVarName: '',
        strValues: ''

    })


    // @ts-ignore
    const changeStrElemsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            strCount: +e.currentTarget.value
        })
    }, [arrayData.strCount])



    return (
        <>




        </>
    )
}