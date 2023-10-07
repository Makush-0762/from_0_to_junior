import React, {useState, useEffect, useRef} from "react";
import '../../App.css';
import '../../elements/Menu.css';
import {Link} from 'react-router-dom';

export default function Menu (){

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();

    function toggleDropdown() {
        setShowDropdown(!showDropdown);                                 
    }

    useEffect(() => {                               //На цей код особо не дивіться він злизаний, спішив не було 
        function handleClickOutside(event) {        //часу розбиратись, з Ref-фми тре більше часу пропрацювати щоб самому таке написати
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);

    return(
        <>

            <div className="bodyMunyList">
            <ul className="MemuList">
                <li><strong><Link to='/' className="listHome link">Home</Link></strong></li>
                <li class="dropdown"><strong><Link to='/tutorial'  className="dropbtn link">Tutorial&nbsp;</Link><span onClick={toggleDropdown} style={{cursor:'pointer'}}>⊽</span></strong>
                    <span ref={dropdownRef} id="dropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                        <Link to='/tutorial/html' className="link">HTML</Link>
                        <Link to='/tutorial/css' className="link">CSS</Link>
                        <Link to='/tutorial/javascript' className="link">JavaScript</Link>
                    </span>
                </li>
            </ul>
        </div>
        </>
    )
}