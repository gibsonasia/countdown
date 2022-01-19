import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    
    state = {
        prices:[100,150,250],
        positions:['1 Booster','2 Booster','3 Booster'],
        desc:[ 
            'With one booster shot, you will be able to upkeep your human apperance. We reccommend this one for the average consumer or reptile.',
        '2 booster shots will give you the ability to not only upkeep your human apperance, but also interchange between reptile form and human! WOWZA',
        '3 BOOSTER SHOTS, THIS IS THE MEGA SUPER DEAL! ALL THE BENEFITS OF THE PREVIOUS PACKAGES WITH THE ADDITION OF BECOMING MEGA BOWSER. '
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#29C5F6"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )
    render () {
        return (
            <div className="bck_black" id="pricing">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;