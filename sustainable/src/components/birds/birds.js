import React, { Component } from 'react';
import BirdAnimation from './../bird-animation/bird-animation';
import './birds.css'

export default class Birds extends Component {
    render() {
        return (
            <div className="bird-rw">
              <div className="animation"> <BirdAnimation/> </div>  
      
                
            </div>
        )
    }
}
