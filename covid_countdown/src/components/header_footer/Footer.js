import React from "react";
import './Footer.css'
import {FaTwitterSquare,
        FaFacebookSquare,
        FaInstagramSquare,
        FaYoutubeSquare } from 'react-icons/fa'


const Footer = () => {
    let iconStyles = {color: "black", height:"50px", width: "50px" } ; //Used to manage icons css
    return(
        <div className="main-footer">
            <div className="container-footer">
                <div className="row-footer">
                    {/* Column 1 */}
                    <div className="col1">
                        <ul classname="ulstuff">
                            <li class>Find us at:</li>
                            <li><strong>Address</strong></li>
                            <li>123 Main Street</li>
                            <li>New York, NY 10001</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col2">
                        <strong>WORLD REPTILIAN ORGANIZATION</strong>
                    </div>
                    {/* Column 3 */}
                
                    <div className="col3">
                        <input type="email" placeholder="Email Address" className="footer-input"></input> 
                        <button type="submit" value="submit" class="footer-button">Submit</button>
                        <p id="footer-p">Content Disclaimer: This is a fake website plase dont believe everything in here. 
                            We don’t actually believe covid 19 is fake in anyway, everything is a meme. Also, please don’t 
                            sue us for using the images</p>
                    </div>
                </div>

                <div className="row-footer">
                    <ul className="ulstuff">
                        <a href="#/" className="astuff">
                            <FaTwitterSquare style={iconStyles}/>
                        </a>
                        <a href="#/" className="astuff">
                            <FaFacebookSquare style={iconStyles}/>
                        </a>
                        <a href="#/" className="astuff">
                            <FaInstagramSquare style={iconStyles}/>
                        </a>
                        <a href="#/" className="astuff">
                            <FaYoutubeSquare style={iconStyles}/>
                        </a>
                    </ul>
                </div>

                <div className="row-footer">
                    <h5>© WORLD REPTILIAN ORGANIZATION. All rights reserved</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;