import React from 'react';
import {Button} from "antd";

import Frame from '../img/Frame-3.png'
import Vector from '../img/Vector.png'

import '../style/Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <img className={'frame'} src={Frame}/>
            <div className={'header-text-left'}>
                <div><a href="#">Why Sprig?</a></div>
                <div><a href="#">Product <img src={Vector} /></a></div>
                <div><a href="#">Customers <img src={Vector} /></a></div>
                <div><a href="#">Resources <img src={Vector} /></a></div>
                <div><a href="#">Plans <img src={Vector} /></a></div>
            </div>
            <div className={'header-text-right'}>
                <div><a href="#">Sign In</a></div>
                <div><a href="#">Talk to Sales</a></div>
                <Button
                    className='header-btn'
                    // onClick={}
                    type="primary"
                    size={'large'}
                    danger

                >
                    Start for Free
                </Button>
            </div>
        </div>

    );
};

export default Header;
