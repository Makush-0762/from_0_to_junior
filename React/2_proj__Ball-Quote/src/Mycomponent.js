import React from "react";

    class Test extends React.Component {
        render () {
            return(
                <>
                    Це клас компонент
                </>
            );
        }
    }

function Mycomponent () {

    return (
        <>
            <Test />
            <div>Hello World!</div>
        </>
    );
}

export default Mycomponent;