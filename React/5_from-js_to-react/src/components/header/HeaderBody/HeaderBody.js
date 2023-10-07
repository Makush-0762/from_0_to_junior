import React from "react";
import Link from "../../../elements/Link";
import BodyHeaderSearch from "./BodyHeaderSearch";
import BodyHeaderActions from "./BodyHeaderActions";


export default function HeaderBody () {
    
    return(

        <>
            <div className="header__body body-header">
              <div className="body-header__container">
                  <Link href='#' className="body-header__logo" text='Logo'/>
                  <BodyHeaderSearch/>
                  <BodyHeaderActions/>
              </div>
            </div>
        </>
    )
}