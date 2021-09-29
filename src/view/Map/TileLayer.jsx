import { useContext, useEffect } from "react";
import { MapContext } from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";

export const TileLayer = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let tileLayer = new OLTileLayer({ source });
    map.addLayer(tileLayer);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  return null;
};
