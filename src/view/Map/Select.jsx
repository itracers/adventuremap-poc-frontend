import { useContext, useEffect } from "react";
import { MapContext } from "./MapContext";
import { Select as SelectConstructor } from "ol/interaction";
import { Fill, Stroke, Style } from "ol/style";

export const Select = ({menuData, setMenuData}) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if(!map) return;
    const select = new SelectConstructor();
    map.addInteraction(select);
    const selectedFeatures = select.getFeatures();
    selectedFeatures.on(["add", "remove"], function () {
      const names = selectedFeatures.getArray().map(function (feature) {
        feature.setStyle(
          new Style({
            stroke: new Stroke({
              color: "blue",
            }),
            fill: new Fill({
              color: "rgba(0,0,255,0.2)",
            }),
          })
        );
        return feature.values_.ADMIN;
      });
      if (names.length > 0) {
        setMenuData({isOpen: true, data: {...menuData.data, country: names[0]}});
      } else {
        setMenuData({isOpen: false, data: {...menuData.data, country: names[0]}});
      }
    });
  }, [map]);
  return null;
};
