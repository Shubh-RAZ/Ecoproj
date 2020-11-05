import React from "react";
class Airquality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      city: {},
      isLoaded: false,
      name : "",
    };
  }

  getAirquality (search) {
    fetch(
      `https://api.waqi.info/feed/${search}/?token=04c43dc59061d365fb26a043bfa1150d49f26e74`
    )
      .then((response) => response.json())
      .then((data) => {
        const newInfo = data.data;
        const newCity = newInfo.city;
        const loaded = true;
        const newName = search;
        const newState = Object.assign({}, this.state, {
          isLoaded: loaded,
          info: newInfo,
          city: newCity,
          name : newName
        });
        console.log(newInfo);
        this.setState(newState);
      });
  };

  componentDidMount () {
    this.getAirquality(this.props.search);
  }
  
  componentDidUpdate(prevProps){
    if(this.props.search !== prevProps.search)
        this.getAirquality(this.props.search);
  }

  render () {
    if (!this.state.isLoaded) {
      return <div>....Loading</div>;    
    } 
    else if(this.state.info === "Unknown station" || this.state.info === {}){
            return <div>No data available for {this.state.name} </div>
    }
    else {
      return (
        <div className="App">
          <h1>
            The AQI(Air Quality Index) in {this.state.name} is {this.state.info.aqi}{" "}
            today.
          </h1>
        </div>
      );
    }
  }
}
export default Airquality;