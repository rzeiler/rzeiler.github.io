<template>
 
  <div id="map"></div>
</template>
 
<script>
import "ol/ol.css";

import { Map } from "ol";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import {
  defaults as defaultInteractions,
  MouseWheelZoom
} from "ol/interaction.js";
import VectorSource from "ol/source/Vector.js";
import GPX from "ol/format/GPX.js";
import { Tile, Vector as VectorLayer, rbush } from "ol/layer.js";
import { Circle, Fill, Stroke, Style } from "ol/style.js";

 function initMap(gpxpath) {
  var style = {
    Point: new Style({
      image: new Circle({
        fill: new Fill({
          color: "ff6600"
        }),
        radius: 5,
        stroke: new Stroke({
          color: "#ff6600",
          width: 15
        })
      })
    }),
    LineString: new Style({
      stroke: new Stroke({
        color: "#ff0",
        width: 4
      })
    }),
    MultiLineString: new Style({
      stroke: new Stroke({
        color: "#0066ff",
        width: 3
      })
    })
  };

  var _source = new VectorSource({
    url: gpxpath,
    format: new GPX()
  });

  var _vector = new VectorLayer({
    source: _source,
    style: function(feature) {
      return style[feature.getGeometry().getType()];
    }
  });

  var _title = new Tile({
    source: new XYZ({
      url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
  });

  var _view = new View({
    center: [0, 0],
    zoom: 10
  });

  var map = new Map({
    target: "map",
    layers: [_title, _vector],
    view: _view,
    interactions: defaultInteractions({ mouseWheelZoom: false })
  });

  function onPointermove(evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  }

  var displayFeatureInfo = function(pixel) {
    var features = [];
    map.forEachFeatureAtPixel(pixel, function(feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      var info = [];
      var i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get("ele"));
        info.push(features[i].get("desc"));
        info.push(features[i].get("name"));
      }
      //$("#info").html(info.join(", ") || "(unknown)");
      map.getTargetElement().style.cursor = "pointer";
    } else {
      //$("#info").html("&nbsp;");
      map.getTargetElement().style.cursor = "";
    }
  };

  function onChangeEnd(evt) {
    if (_source.getState() === "ready") {
      if (_source.getFeatures().length > 0) {
        map.getView().fit(_source.getExtent(), map.getSize());
      }
    }
  }

  map.on("pointermove", onPointermove);
  _source.on("change", onChangeEnd);
}

export default {
  name: "routenmap",
  props: ["gpx"],
  data() {
    return {
      val: this.gpx
    };
  },
  mounted() {
    this.$nextTick(function() {
      
        initMap(this.gpx);
     
    });
  }
};
</script>


<style scoped>
#map {
  display: block;
  border: 1px solid #888;
}

.content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}
</style>