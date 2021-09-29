import { useContext, useEffect } from "react";
import { MapContext } from "./MapContext";
import { Select as SelectConstructor } from "ol/interaction";
import { Fill, Stroke, Style } from "ol/style";

export const Select = ({ menuData, setMenuData }) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    const select = new SelectConstructor();
    map.addInteraction(select);
    const selectedFeatures = select.getFeatures();
    selectedFeatures.on(["add", "remove"], function () {
      const data = selectedFeatures.getArray().map(function (feature) {
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
        return { name: feature.values_.ADMIN, code: feature.values_.ISO_A3 };
      });
      if (data.length > 0) {
        setMenuData({
          isOpen: true,
          data: { ...menuData.data, country: data[0] },
        });
      } else {
        setMenuData({ isOpen: false });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  return null;
};
