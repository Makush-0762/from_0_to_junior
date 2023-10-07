import React, {useState} from 'react';
import './App.css';
import ShowRandImg from './ShowRandImg.js';
import ImgRandPos from './ImgRandPos.js';
import OtherColor from './OtherColor.js';
import FooballField from './FooballField.js';
import BlackSquare from './BlackSquare.js';
import CatAndFish from './CatAndFish.js';
import FishEatCat from './FishEatCat.js';
import ShowMark from './ShowMark.js';
import Coin from './Coin.js';
import Тightstand from './Тightstand.js';

// function Button(props) {


//    // const [value, setValue] = useState(props.start);
//    // const [btText, setBtText] = useState('First Text');
//    // const [btColor, setBtColor] = useState('red');
//   const [randText, setRandText] = useState('Random Text');
//   const [randSize, setRandSize] = useState('14px');
//   const [size, setWidtn] = useState('');
//   const [btColor, setBtColor] = useState('');


//   const randTextClick = () => {
//     setRandText('sdfsdfsedcsdsDfcSD')
//     setRandSize('25px')
//     setBtColor('yellow')
//     setWidtn('500px')
//   }


//   return(
//     <>

//     </>
//   );
// }


function App() {

  return (
    <>

      {/* <Тightstand/> */}
      <Coin />
      {/* <ShowMark/> */}
      {/* <BlackSquare /> */}
      {/* <FishEatCat /> */}
      {/* <CatAndFish /> */}
      {/* <FooballField /> */}
      {/* <ImgRandPos /> */}
      {/* <OtherColor /> */}
      {/* <ShowRandImg /> */}
      {/* <Button /> */}
    </>
  );
}

export default App;
