import React from "react";

export default function Search() {



    let sRef = React.createRef();

    const handSubmit = (event) => {
        event.preventDefault();
        alert(sRef.current.value)
    }


    return (

        <>
            <form onSubmit={handSubmit} className="formHeader">
                <input type="text" placeholder={'Search'} className="textInput" ref={sRef}/>
                <input type="submit" className="search-btn" value=''/>
            </form>
        </>
    )
}