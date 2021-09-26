import React, { useRef, useState, useEffect } from "react";
import { MapContext } from "./MapContext";
import {Map as MapDiv} from "./styled";
import * as ol from "ol";

export const Map = ({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  useEffect(() => {
    console.log(mapRef.current);
    let options = {
      view: new ol.View({ zoom, center }),
      target: mapRef.current,
    };
    const mapObject = new ol.Map(options);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);
  useEffect(() => {
    if (map) map.getView().setZoom(zoom);
  }, [zoom]);
  useEffect(() => {
    if (map) map.getView().setCenter(center);
  }, [center]);
  return (
    <MapContext.Provider value={{ map }}>
      <MapDiv ref={mapRef}>
        {children}
      </MapDiv>
    </MapContext.Provider>
  );
};
