import React from "react";
import Form from "../../../elements/Form";
import Input from "../../../elements/Input";
import Button from "../../../elements/Button";

export default function BodyHeaderSearch () {
    
    return(

        <>
             <div data-da=".catalog-header__container, 479.98" className="body-header__search">
                <Form action='#' className='search-header'>
                    <Input  name='form[]'
                            autocomplete='off ' 
                            type='text'  
                            dataError='Error' 
                            placeholder='Search' 
                            className="search-header__input" />
                    <Button type="submit" className="search-header__button _icon-search" text=''/>
                </Form>
             </div>
        </>
    )
}