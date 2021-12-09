(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/Navigation/GoogleMapAdapter.js":
/*!***************************************************!*\
  !*** ./components/Navigation/GoogleMapAdapter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _coordinate_converter = __webpack_require__(/*! utils/coordinate_converter */ "./utils/coordinate_converter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleMapAdapter = function () {
  function GoogleMapAdapter() {
    (0, _classCallCheck3.default)(this, GoogleMapAdapter);

    this.map = null;
    this.controls = [];
  }

  (0, _createClass3.default)(GoogleMapAdapter, [{
    key: 'isInitialized',
    value: function isInitialized() {
      return this.map !== null;
    }
  }, {
    key: 'loadMap',
    value: function loadMap(initPoint, divElementName) {
      var mapOptions = {
        center: initPoint,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false
      };
      this.map = new google.maps.Map(document.getElementById(divElementName), mapOptions);
    }
  }, {
    key: 'setCenter',
    value: function setCenter(point) {
      this.map.setCenter(point);
    }
  }, {
    key: 'setZoom',
    value: function setZoom(zoom) {
      this.map.setZoom(zoom);
    }
  }, {
    key: 'addEventHandler',
    value: function addEventHandler(eventName, handler) {
      google.maps.event.addListener(this.map, eventName, function (event) {
        var clickedLatLng = event.latLng;
        handler(clickedLatLng);
      });
    }
  }, {
    key: 'createPoint',
    value: function createPoint(_ref) {
      var lat = _ref.lat,
          lng = _ref.lng;

      return new google.maps.LatLng(lat, lng);
    }
  }, {
    key: 'createMarker',
    value: function createMarker(point, title) {
      var draggable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var marker = new google.maps.Marker({
        position: point,
        label: title,
        draggable: draggable,
        map: this.map
      });
      return marker;
    }
  }, {
    key: 'createPolyline',
    value: function createPolyline(path, color) {
      var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;
      var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2.0;

      var polyline = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: color,
        strokeOpacity: opacity,
        strokeWeight: weight,
        map: this.map
      });
      return polyline;
    }
  }, {
    key: 'createControl',
    value: function createControl(_ref2) {
      var text = _ref2.text,
          tip = _ref2.tip,
          color = _ref2.color,
          offsetX = _ref2.offsetX,
          offsetY = _ref2.offsetY,
          onClickHandler = _ref2.onClickHandler;

      var controlDiv = document.createElement('div');

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = color;
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = tip;
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = text;
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function () {
        onClickHandler(controlText);
      });

      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
      this.controls.push(controlDiv);
    }
  }, {
    key: 'disableControls',
    value: function disableControls() {
      this.controls.forEach(function (control) {
        control.style.display = 'none';
      });
    }
  }, {
    key: 'enableControls',
    value: function enableControls() {
      this.controls.forEach(function (control) {
        control.style.display = 'block';
      });
    }
  }, {
    key: 'getMarkerPosition',
    value: function getMarkerPosition(marker) {
      var position = marker.getPosition();
      return { lat: position.lat(), lng: position.lng() };
    }
  }, {
    key: 'updatePolyline',
    value: function updatePolyline(polyline, newPath) {
      polyline.setPath(newPath);
    }
  }, {
    key: 'removePolyline',
    value: function removePolyline(polyline) {
      polyline.setMap(null);
    }
  }, {
    key: 'applyCoordinateOffset',
    value: function applyCoordinateOffset(_ref3) {
      var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
          lng = _ref4[0],
          lat = _ref4[1];

      return (0, _coordinate_converter.WGS84ToGCJ02)(lng, lat);
    }
  }]);
  return GoogleMapAdapter;
}();

exports.default = GoogleMapAdapter;

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map