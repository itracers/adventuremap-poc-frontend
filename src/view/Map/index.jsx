import React, { useState } from "react";
import { Map as MapContainer } from "./Map";
import { TileLayer } from "./TileLayer";
import { VectorLayer } from "./VectorLayer";
import { Select } from "./Select";
import { Fill, Stroke, Style } from "ol/style";
import { OSM, Vector } from "ol/source";
import { fromLonLat } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import countries from "../../data/countriesHD.json";

function valueToRgba(value, a) {
  let r = 255, g = 255, b = 0;
  if (value <= 50) {
    g = Math.floor((value / 50) * 255)
  } else if (value > 50) {
    r = Math.floor(255 - ((value - 50) / 50) * 255);
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}


const styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "red",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(255,0,0,0.2)",
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: "red",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(0,255,0,0.2)",
    }),
  }),
};

const styleFunction = function (feature) {
  let style = styles[feature.getGeometry().getType()];
  style.text = new Text({
    font: 'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',
    placement: "line",
    text: "ololo",
    backgroundFill: "white",
    fill: new Fill({
      color: "black",
    }),
  });
  const countryId = feature?.id_ || feature?.values_?.ISO_A3;
  if (countryId === "RUS") {
    style.fill_.color_ = "rgba(255,255,0,0.2)";
    style.stroke_.color_ = "rgba(255,255,0,0.2)";
  } else if (countryId === "-99") {
    style.fill_.color_ = "rgba(255,0,0,0.2)";
    style.stroke_.color_ = "rgba(255,0,0,0.2)";
  } else {
    style.fill_.color_ = valueToRgba(feature?.values_?.randomNumber, 0.2);
    style.stroke_.color_ = valueToRgba(feature?.values_?.randomNumber, 1);
  }
  return style;
};

countries.features = countries.features.map((country) => {
  country.properties.randomNumber = Math.round(Math.random()*100);
  if (country.geometry.type === "Polygon") {
    country.geometry.coordinates = country.geometry.coordinates.map((arr) => {
      return arr.map((arr2) => {
        return fromLonLat([arr2[0], arr2[1]]);
      });
    });
  } else {
    country.geometry.coordinates = country.geometry.coordinates.map((arr) => {
      return arr.map((arr2) => {
        return arr2.map((arr3) => {
          return fromLonLat([arr3[0], arr3[1]]);
        });
      });
    });
  }
  return country;
});
const geojsonObject = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "EPSG:3857",
    },
  },
  features: countries.features,
};
export const Map = () => {
  const [center] = useState([0, 0]); //Добавить сюда текущую страну
  const [zoom] = useState(2);
  const format = new GeoJSON();
  return (
    <MapContainer center={fromLonLat(center)} zoom={zoom}>
      <TileLayer source={new OSM()} />
      <VectorLayer
        source={
          new Vector({ features: format.readFeatures(geojsonObject), format })
        }
        style={styleFunction}
      />
      <Select />
    </MapContainer>
  );
};
