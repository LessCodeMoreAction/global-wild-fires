
import {Component} from 'react';

import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl';

import ControlPanel from './control-panel';
import {json as requestJson} from 'd3-request';


const TOKEN = 'pk.eyJ1IjoibWFiLTMiLCJhIjoiY2tkZ2ZwdWE3MHE4eDJzdDFkcDI2ZW85NCJ9.c3vnNZlIzJHrIkvdRRONhw';


const geolocateStyle = {
  position: 'absolute',
  top:0,
  left:0,
  padding: '10px',

};

const fullscreenControlStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px',
}

const NavStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px',

}

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
}


export default class Map extends Component {

  constructor(props) {

    super(props);
    this.state = {
      data: null,
      viewport: {
      width: '100vw',
      height: '93vh',
      latitude: 35.5868,
      longitude: -93.625,
      zoom: 2.5
    }
    };

  }



  componentDidMount() {
    requestJson(
      'http://34.222.243.90:3000/api/nasa/geo',
      (error, response) => {
        if (!error) {
          this._loadData(response);
        }
      }
    );
  }

  _loadData = data => this.setState({data});


  _updateViewport = viewport => {
    this.setState({viewport});
  };


  render() {


    const {viewport, data} = this.state;

    return (
      <MapGL 
      {...viewport}
    
     
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={this._updateViewport}
      mapboxApiAccessToken={TOKEN}


  

    >

      <Source type="geojson" data={data}>
      <Layer
            id="point"
            type="circle"
            paint={{
              'circle-radius': 5,
              'circle-color': 'red'
            }} />
      </Source>



      <div style={geolocateStyle}>
        <GeolocateControl />
      </div>

      <div style={fullscreenControlStyle}>
        <FullscreenControl />
      </div>

      <div style={NavStyle}>
        <NavigationControl /> 

      </div>

      <div style={scaleControlStyle}>
        <ScaleControl /> 
      </div>


      <ControlPanel containerComponent={this.props.containerComponent} />


    </MapGL>
    );

  }


}





