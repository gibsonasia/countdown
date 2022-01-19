import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Get your covid vaccine package before February 3rd</h3>
                            <p>Why wait before you inject yourself with the reptile lords nano machines, when you can do it ASAP! Get your covid package before February 3rd to be an EPIC reptile!</p>

                            <MyButton
                            text="Purchase super duper covid package"
                            bck="#4f73eb"
                            color="#ffffff"
                            link="http://google.com"
                            />

                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;