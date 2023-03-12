import React from 'react'
import './Footer.css';


function Footer() {
    return (
        <div className='footer'>
            <h2>SALAH</h2>
            <p >&copy; copy right </p>

            <ul className='buttons'>
                <li>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook">Facebook</i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/?hl=en" target="_blank"><i className="fab fa-instagram">Instagram</i></a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=en" target="_blank"><i className="fab fa-twitter">twitter</i></a>
                </li>

            </ul>

        </div>
    )
}

export default Footer;




