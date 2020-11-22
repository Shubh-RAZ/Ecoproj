import React, { Component } from 'react';
import './plastic.css';
import Use_Plastics from './use_plastics.gif';
import Garbage_Managment from './garbage_management.gif';
import Plastic_River from './plastic_river.gif';
import Water_Pollution from './water_pollution.gif';
import Burning_Plastic from './burning_plastic.gif';
import Air_Pollution from './200.gif';
import Health_Problems from './health_problems.gif';
import Plastic_Soil from './plastic_soil.gif';
import Lose_Fertility from './soil_fertility.gif';
import Food_Quality from './food_quality.gif';

export default class PlasticTree extends Component {
    render() {
        return (
            <div class="tree_1">
                <ul>
                    <li>
                        <a href="#">
                            <div className = "container_1">
                            <img className = "image_1"src = {Use_Plastics} alt = "Excessive Use of Plastics"></img>
                                <div className = "overlay_1">
                                    <div className = "text_1">Excessive use of plastics</div>
                                </div>
                            </div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className = "container_1">
                                        <img className = "image_1"src = {Garbage_Managment} alt = "Poor Garbage Management"></img>
                                        <div className = "overlay_1">
                                            <div className = "text_1">Garbage Management</div>
                                        </div>
                                    </div>   
                                </a>   
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className = "container_1">
                                                <img className = "image_1"src = {Plastic_River} alt = "Plastic thrown in rivers and lakes"></img>
                                                <div className = "overlay_1">
                                                    <div className = "text_1">Plastic thrown in rivers and lakes</div>
                                                </div>
                                            </div>   
                                        </a>    
                                            
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container_1">
                                                        <img className = "image_1"src = {Water_Pollution} alt = "Water Pollution"></img>
                                                        <div className = "overlay_1">
                                                            <div className = "text_1">Water Pollution</div>
                                                        </div>
                                                    </div>
                                                </a>    
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className = "container_1">
                                                <img className = "image_1"src = {Burning_Plastic} alt = "Burning Plastic"></img>
                                                <div className = "overlay_1">
                                                    <div className = "text_1">Burning Plastic</div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container_1">
                                                        <img className = "image_1"src = {Air_Pollution} alt = "Air Pollution"></img>
                                                        <div className = "overlay_1">
                                                            <div className = "text_1">Air Pollution</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div className = "container_1">
                                                                <img className = "image_1"src = {Health_Problems} alt = "Health Problems"></img>
                                                                <div className = "overlay_1">
                                                                    <div className = "text_1">Health Problems</div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className = "container_1">
                                                <img className = "image_1"src = {Plastic_Soil} alt = "Plastic Pollution in soil"></img>
                                                <div className = "overlay_1">
                                                    <div className = "text_1">Plastic Pollution in soil</div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container_1">
                                                        <img className = "image_1"src = {Lose_Fertility} alt = "Soil lose fertility"></img>
                                                        <div className = "overlay_1">
                                                            <div className = "text_1">Soil lose fertility</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div className = "container_1">
                                                            <img className = "image_1"src = {Food_Quality} alt = "Food Quality"></img>
                                                                <div className = "overlay_1">
                                                                    <div className = "text_1">Food Quality drops</div>
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
                    </li>                
                </ul>
            </div>
        )
    }
}

