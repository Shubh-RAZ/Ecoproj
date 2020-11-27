import React, { Component } from 'react';
import './tree.css';
import Stubble_Burning from './stubble-burning.jpg';
import Air_Pollution from './200.gif';
import Health_Issues from './health-issues.jpg';
import Soil from './soil.jpg';
import Farmer from './farmer.jpg';
import Fertilizer from './fertilizer.jpg';
import Food_Quality from './food_quality.jpg';

export default class Tree extends Component {
    render() {
        return (
            <div class="tree_1">
                <ul>
                    <li>
                        <a href="#">
                            <div className = "container_1">
                                <img className = "image_1"src = {Stubble_Burning} alt = "Stubble burning"></img>
                                <div className = "overlay_1">
                                    <div className = "text_1">Stubble Burning</div>
                                </div>
                            </div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className = "container_1">   
                                        <img className = "image_1"src = {Air_Pollution} alt = "Air Pollution"/>
                                        <div className = "overlay_1">
                                            <div className = "text_1">Air Pollution</div>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                        <div className = "container_1"> 
                                            <img className = "image_1"src = {Health_Issues} alt = "Health Issues"/>
                                            <div className = "overlay_1">
                                                <div className = "text_1">Health Issues</div>
                                            </div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div className = "container_1"> 
                                        <img className = "image_1"src = {Soil} alt = "Loss of moisture and useful microbes"/>
                                        <div className = "overlay_1">
                                            <div className = "text_1">Loss of moisture and useful microbes</div>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li><a href="#">
                                        <div className = "container_1"> 
                                            <img className = "image_1"src = {Farmer} alt = "Loss to farmer"/>
                                            <div className = "overlay_1">
                                                <div className = "text_1">Loss to Farmers</div>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li>
                                        <a href="#">
                                            <div className = "container_1"> 
                                                <img className = "image_1"src = {Fertilizer} alt = "Use of fertilizers"/>
                                                <div className = "overlay_1">
                                                    <div className = "text_1">Use of fertilizers</div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container_1">
                                                        <img className = "image_1"src = {Food_Quality} alt = "Food Quality"/>
                                                        <div className = "overlay_1">
                                                            <div className = "text_1">Drop in Food Quality</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}