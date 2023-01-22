import * as React from 'react';
import Map, {Marker,Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './app.css'
const REACT_MAPBOX_TOKEN= 'pk.eyJ1Ijoic2hpbHBpNDciLCJhIjoiY2xjdzFtOXRuMXA4aTNybXNjcTY1eXEwbyJ9.fQsMY9DLe57wVnw3yDLJuQ';
// const [showPopup, setShowPopup] = React.useState(true);  
const App = () =>{
    return (
        <div className="App"> 
        
            <Map
      initialViewState={{
        latitude: 46,
        longitude: 17,
        zoom: 1 
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/shilpi47/clcyx6bh1003k14qtqi1590zo/draft"
    //   mapboxAccessToken={process.env.MAPBOX_TOKEN}
      mapboxAccessToken={REACT_MAPBOX_TOKEN}
    >

      <Marker longitude={2} latitude={48}></Marker>

    {

      <Popup longitude={2} latitude={48}
        anchor="top"
        // onClose={() => togglePopup(false)}
        >
        <div className="card">
        <label>Place</label>
        <h4 className='place'>Greenwich</h4>
        <label>Review</label>
        <p className='desc'>Beautiful place. I like it</p>
        {/* <label>Rating</label>
        <div className='stars'></div> */}
        <label>Information</label>
        <span className='username'>Created by <b>Shilpi</b></span>
        <span className='date'>1 hr ago</span>
        </div>
      </Popup>}
    </Map>
        </div>
    )
}

export default App;
