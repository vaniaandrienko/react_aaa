import React from 'react';
import {Button} from "antd";

import '../style/Box-1.css'
import image from '../img/IMAGE.png'

const Box1 = () => {
    return (
        <div className={'box-1'}>
            <div className={'box-1-left'}>
                <p className={'box1-text-top'}>In-context user research that's fast and reliable.</p>
                <p className={'box1-text-botton'}>Ensure user research happens early and often with Sprig's targeted
                    microsurveys, video questions, and more.</p>
                <div className={'box1-btn-left'}>
                    <Button
                        className='box-btn-1'
                        // onClick={}
                        type="primary"
                        size={'large'}
                        danger

                    >
                        Start for Free
                    </Button><Button
                    className='box-btn-2'
                    // onClick={}
                    type="primary"
                    size={'large'}
                    danger

                >
                    Talk to Sales
                </Button>
                </div>

            </div>

            <div className={'box-1-right'}>
                <img className={'image'} src={image} alt=""/>
            </div>
        </div>
    );
};

export {Box1}