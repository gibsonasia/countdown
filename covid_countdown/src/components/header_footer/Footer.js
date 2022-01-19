import React from "react";
import './Footer.css'
import {FaTwitterSquare,
        FaFacebookSquare,
        FaInstagramSquare,
        FaYoutubeSquare } from 'react-icons/fa'


const Footer = () => {
    let iconStyles = {color: "black", height:"50px", width: "50px"} ; //Used to manage icons css
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col1">
                        <ul classname="list-unstyled">
                            <li>Find us at:</li>
                            <li><strong>Address</strong></li>
                            <li>123 Main Street</li>
                            <li>New York, NY 10001</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col2">
                        <h2>End of Covid 19</h2>
                    </div>
                    {/* Column 3 */}
                
                    <div className="col3">
                        <input type="email" placeholder="Email Address" ></input> 
                        <button type="submit" value="submit">Submit</button>
                        <p>Content Disclaimer: This is a fake website plase dont believe everything in here. 
                            Blah blah blah, we don’t actually believe covid 19 is fake in anyway. but the image 
                            looked good so its the footer. Also, please don’t sue us for using the images</p>
                    </div>
                </div>

                <div className="row">
                    <ul>
                        <a href="#/">
                            <FaTwitterSquare style={iconStyles}/>
                        </a>
                        <a href="#/">
                            <FaFacebookSquare style={iconStyles}/>
                        </a>
                        <a href="#/">
                            <FaInstagramSquare style={iconStyles}/>
                        </a>
                        <a href="#/">
                            <FaYoutubeSquare style={iconStyles}/>
                        </a>
                    </ul>
                </div>

                <div className="row">
                    <h5>© TTP WINTER 2022. All rights reserved</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;