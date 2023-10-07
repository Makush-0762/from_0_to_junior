    import React from "react";

    var arrQuote = [
        "“Що розум людини може осягнути і в що він може повірити, те він здатний досягти”, – Наполеон Хілл.",
        "“Прагніть не до успіху, а до цінностей, які він дає”, – Альберт Айнштайн.",
        "“Найскладніше почати діяти, все інше залежить тільки від наполегливості.”, – Амелія Ергарт.",
        "“Життя – це те, що з тобою відбувається, поки ти будуєш плани.”, Джон Леннон.",
        "“Логіка може привести вас. від пункту “А” до пункту “Б”, а уява – куди завгодно”, – Альберт Айнштайн.",
        "“Неосмислене життя не варте того, щоб його прожити.”, – Сократ.",
        "“80% успіху — це з’явитися в потрібному місці в потрібний час.”, – Вуді Аллен.",
        "“Ваш час обмежений, не витрачайте його, живучи чужим життям.”, – Стів Джобс.",
        "“Перемога – це ще не все, все – це постійне бажання перемагати.”, – Вінс Ломбарді."
    ]

    class Quote extends React.Component {

        constructor (props) {
            super(props);
            this.state = {
                quote: ""
            }
        }
        render(){
            const ShowQuote = () => {
                const randQuote = arrQuote[Math.floor(Math.random() * arrQuote.length)];
                this.setState({quote: randQuote});
            }
            const HideQuote = () => {
                this.setState({quote: ""})
            }
        return(
            <div className="bodyQuoteCompon">
                <div className="bodyQuote">
                    <p> {this.state.quote}</p>
                </div>

                <div className="bodyButton">
                    <button onClick={ShowQuote} className="buttonQuote">Show Quote</button>
                    <button onClick={HideQuote} className="buttonQuote"> Hide Quote</button>
                </div>
            </div>
        )
    }
}

export default Quote;















    // class HdQuote extends React.Component{
    //     constructor (props){
    //         super(props);
    //         this.state = {
    //             hdQuote: ""
    //         }

    //         }
    //         render(){
    //             const HideQuote = () => {
    //                 this.setState({quote: this.state.hdQuote})
    //             }
    //         return(
    //             <>
    //             <div className="bodyQuote">
    //                 <p> {this.state.hdQuote}</p>
    //             </div>
    //                 <div className="bodyButton">
    //                     <button onClick={HideQuote} className="buttonQuote">Hide Quote</button>
    //                 </div>
    //             </>
    //         )
    //     }
    //     }


    // class BtShow extends React.Component {
        
    //     render(){

    //         const ShowQuote = () => {
    //             let quote = document.getElementsById('ShowQuote');

    //             if(1) {
    //                 let randQuote = arrQuete[Math.floor(Math.random() * 10)];
    //             }
    //         }
            
    //         return(
    //             <button id="ShowQuote" className="buttonQuote" onСlick={ShowQuote}>Show Quote</button>
    //         )
    //     }
    // };