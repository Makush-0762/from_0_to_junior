import React from "react";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import FirstRow from "./First__Row/FirstRow";
import SecondRow from "./Second__Row/SecondRow";
import ThirdRow from "./Third__Row/ThirdRow";

export default function FooterContainer () {

    return(

        <>
            <DivBlockOnlyClass className="footer__container">
                <DivBlockOnlyClass className="footer__body body-footer">
                    <FirstRow />
                    <SecondRow />
                    <ThirdRow />
                </DivBlockOnlyClass>    
            </DivBlockOnlyClass>
        </>
    )
}