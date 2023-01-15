import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
const REACT_MAPBOX_TOKEN= 'pk.eyJ1Ijoic2hpbHBpNDciLCJhIjoiY2xjdzFtOXRuMXA4aTNybXNjcTY1eXEwbyJ9.fQsMY9DLe57wVnw3yDLJuQ';
const App = () =>{
    return (
        <div className="App">   
            <Map
      initialViewState={{
        latitude: 46,
        longitude: 17,
        zoom: 1 
      }}
      style={{width: 1500, height: 670}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    //   mapboxAccessToken={process.env.MAPBOX_TOKEN}
      mapboxAccessToken={REACT_MAPBOX_TOKEN}
    >
      <Marker longitude={2} latitude={48} anchor="bottom" >
      {/* <img src="./pin.png" /> */}
    </Marker>
    
    </Map>
        </div>
    )
}

export default App;
