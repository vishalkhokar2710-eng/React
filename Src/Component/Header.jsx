import { useState } from "react";

const Header = () => {
    const [gtext, settext] = useState('Login')
    function change() {
        settext(gtext == 'Login' ? 'Logout' : 'Login')
    }
    
    console.log('header render')
    return (
        <div className="header">
            <div className='logoContainer'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEh-4Zs_V2ml0jBtkvqObN3WJuQs2GczxJQX7dEYUtw&s=10' alt="Food" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="lgnBtn" id='lgn' onClick={() => change()}>
                        {gtext}
                        {console.log(gtext)}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;