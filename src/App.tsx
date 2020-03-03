import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const App = () => {
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        onViewportChange={viewportData => setViewport({ ...viewportData })}
      />
    </div>
  )
}

export default App;
