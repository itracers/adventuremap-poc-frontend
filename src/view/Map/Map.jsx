import React, { useRef, useState, useEffect } from "react";
import { MapContext } from "./MapContext";
import { Map as MapDiv } from "./styled";
import * as ol from "ol";

export const Map = React.memo(({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      target: mapRef.current,
    };
    const mapObject = new ol.Map(options);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (map) map.getView().setZoom(zoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom]);
  useEffect(() => {
    if (map) map.getView().setCenter(center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...center]);
  return (
    <MapContext.Provider value={{ map }}>
      <MapDiv ref={mapRef}>{children}</MapDiv>
    </MapContext.Provider>
  );
});
