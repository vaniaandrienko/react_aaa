import React from 'react';

import '../style/Box-2.css'
import image1 from '../img/IMAGE-1.png'

const Box2 = () => {
    return (
        <div className={'box-2'}>
            <p className={'box-2-text'}>Trusted by the world's most innovative companies</p>
            <div className={'box2-img'}>
                <div className={'box2-img-1'}>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>


                </div>
                <div className={'box2-img-2'}>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>


                </div>
                <div className={'box2-img-2'}>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>
                    <img className={'img1'} src={image1} alt="image"/>


                </div>



            </div>

        </div>
    );
};

export {Box2}