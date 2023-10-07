import ImgCard  from './ImgCard'
import Title from '../elements/Title'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SubTitle from '../elements/SubTitle'
import Button from './Button';
import $ from 'jquery';
import IconCard from './IconCard'


// function Book (props){

//     return (
//         <>
//             {console.log(props.data)}
//         </>
//     )
// }


export default function FullCard() {


    useEffect(() => {
      $.ajax({
        url: 'https://openlibrary.org/subjects/fantasy.json?details=true',
        dataType: 'json',
        success: function (data) {
          Book(data);
        },
      });
    }, []);

    console.log(books.works);
    console.log(books.works[0]);
    let covered_id = books.works[0].cover_id
    let title = books.works[0].title
    let authors = books.works[0].authors[0].name
    console.log(books.works[0].cover_id);

 

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    axios
    .get("https://openlibrary.org/subjects/fantasy.json")
    .then(response => {
      setBooks(response);
    })
}, []);

console.log(books);
let arr = books.data;
let arrWorks = arr.works;
console.log(arrWorks);



const url=`https://covers.openlibrary.org/b/id/${covered_id}-M.jpg`

    return (
        <>
            <div className='row.books' style={{width:'290px', backgroundColor:'#daedff', padding:'20px'}}>
                <ImgCard />
                <Title  text={`Name book: `} 
                        fontSize={'18px'}
                        fontWeight={'600'}
                        textAlign={'center'}/>
                <SubTitle   text={`Author: `} 
                            fontSize={'14px'}/>
                <div style={{display:'flex'}}>
                    <Button text={'Read'}/>
                    <IconCard />
                </div>
            </div>

        </>
    )
}

// `${authors}`
// ${title}