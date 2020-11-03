import React, { Component } from 'react';
import BirdAnimation from './../bird-animation/bird-animation';
import './birds.css'

export default class Birds extends Component {
    render() {
        return (
            <div className="bird-rw">
                <BirdAnimation/>
                <div className="background">
                <div className="calc-cont">
                     <div className=" sp header">Hi' I'M Expensie</div>
                     <div className="sp header2"><p>An&nbsp; </p>Expense Calculator</div>
                     <div className="sp header3">Here you can calculate your saving while kepping in mind our Environment</div>
                     <div className="sp button"><a>Let's Get Started</a></div>
                    </div>
                </div>
                
            </div>
        )
    }
}
