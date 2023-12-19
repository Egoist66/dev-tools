import {FC, memo} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {DigitArray} from "./DigitArray/DigitArray.tsx";
import {StringArray} from "./StringArray/StringArray.tsx";


export const ArrayControls: FC = memo(() => {

    return (

        <Tabs defaultActiveKey="digital array" className="mb-3">
            <Tab eventKey="digital array" title="Integer Array">
                <DigitArray />
            </Tab>

            <Tab eventKey="string array" title="String Array">
                <StringArray />
            </Tab>

        </Tabs>
    )
})