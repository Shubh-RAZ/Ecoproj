import React, { Component } from 'react';
import { loremIpsum } from "lorem-ipsum";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Sustainable from './components/sustainable/sustainable';
import Resources from './components/resources/resources';
import Solar from './components/renewable/solar/solar';
import Wind from './components/renewable/wind/wind';
import Hydro from './components/renewable/hydro/hydro';
import Geothermal from './components/renewable/geothermal/geothermal';
import Complaint from './components/complaint/complaint';
import Blogs from './components/blogs/blogs';
import Footer from './components/footer/footer';
import CreateBlog from './components/create-blog/create-blog';
import Birds from './components/birds/birds';
import Airfront from './components/airquality/airfront';


export default class App extends Component {
  render() {
    return (
      <div className="app-div">

        {Hydro}

        <switch>
          <Route path="/" exact component={Sustainable} />
         <Route path="/" exact component={Resources}/>
          <Route path='/' exact component={Complaint}/> 
          <Route path="/" exact component={Footer} />
          <Route path='/blog' exact component={Blogs}/>
          <Route path="/solar" exact component={Solar}/>
          <Route path="/birds" exact component ={Birds}/>
          <Route path="/wind" exact component={Wind}/>
          <Route path="/hydro" exact component={Hydro}/>
          <Route path="/geothermal" exact component={Geothermal}/>
          <Route path="/create-blog" exact component={CreateBlog}/>
          <Route path="/air-api" exact component={Airfront}/>
        </switch>
        
      </div>        
    )
  }
}
