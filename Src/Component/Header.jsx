import {  useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [gtext, settext] = useState('Login')
    function change() {
        settext(gtext == 'Login' ? 'Logout' : 'Login')
    }
    console.log('11111111111111 header render')
    return (
        <div className="header">
            <div className='logoContainer'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEh-4Zs_V2ml0jBtkvqObN3WJuQs2GczxJQX7dEYUtw&s=10' alt="Food" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>  <Link to='/about'>About Us</Link></li>
                    <li> <Link to='/ContactUs'>Contact Us</Link></li>
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