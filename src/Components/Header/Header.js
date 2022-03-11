import React, { Component } from "react";
import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return ( 
            <div>
                <div className="outer-header">
                    <div className="header"> 
                        <div className="sub-header1">
                            <div className="header-icon"> 
                                <img src={require('../../Images/swiggy-1.svg')} alt="" style={{width:40+"px",height:40+"px"}}/> 
                            </div>
                            <div>set location</div>
                        </div>
                        <div className="sub-header2">
                            <div>
                                <i className="fa fa-circle"></i>Help
                            </div>
                            <div>
                                <i className="fa-solid fa-circle header-icon"></i>Sign in
                            </div>
                            <div>
                                <i className="fa-solid fa-circle header-icon"></i>Cart
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-header">
                    home/banaglaore/btm-bavnaglore/kitchens of punjab   
                </div>
            </div>

            
        )
    }
}

export default Header;