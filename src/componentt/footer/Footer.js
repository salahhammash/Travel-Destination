import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <h2>SALAH</h2>
            <p>&copy; copyrigth </p>

            <ul className='buttons'>

            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook">Facebook</i></a>      
                <br></br>
                <a href="https://www.instagram.com/?hl=en" target="_blank"><i class="fab fa-instagram">Instagram</i></a>
                <br></br>
                        <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter">twitter</i></a>

            </ul>

        </div>
    )
}

export default Footer;




