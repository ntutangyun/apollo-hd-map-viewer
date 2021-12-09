(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/Navigation/BaiduMapAdapter.js":
/*!**************************************************!*\
  !*** ./components/Navigation/BaiduMapAdapter.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "../node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _coordinate_converter = __webpack_require__(/*! utils/coordinate_converter */ "./utils/coordinate_converter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaiduMapAdapter = function () {
  function BaiduMapAdapter() {
    (0, _classCallCheck3.default)(this, BaiduMapAdapter);

    this.map = null;
    this.controls = [];
    this.initializedCenter = false;
  }

  (0, _createClass3.default)(BaiduMapAdapter, [{
    key: 'isInitialized',
    value: function isInitialized() {
      return this.map !== null && (0, _keys2.default)(this.map).length > 0;
    }
  }, {
    key: 'loadMap',
    value: function loadMap(initPoint, divElementName) {
      this.map = new BMap.Map(divElementName, { enableMapClick: false });

      this.map.enableScrollWheelZoom();
      this.map.addControl(new BMap.MapTypeControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      }));
      this.map.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL,
        enableGeolocation: false
      }));
    }
  }, {
    key: 'setCenter',
    value: function setCenter(point) {
      if (this.initializedCenter) {
        this.map.setCenter(point);
      } else {
        this.map.centerAndZoom(point, 19);
        this.initializedCenter = true;
      }
    }
  }, {
    key: 'setZoom',
    value: function setZoom(zoom) {
      this.map.setZoom(zoom);
    }
  }, {
    key: 'addEventHandler',
    value: function addEventHandler(eventName, handlerFunction) {
      this.map.addEventListener(eventName, function (event) {
        var clickedLatLng = event.point;
        handlerFunction(clickedLatLng);
      });
    }
  }, {
    key: 'createPoint',
    value: function createPoint(_ref) {
      var lat = _ref.lat,
          lng = _ref.lng;

      return new BMap.Point(lng, lat);
    }
  }, {
    key: 'createMarker',
    value: function createMarker(point, title) {
      var draggable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var label = null;
      if (title) {
        label = new BMap.Label(title, {
          point: point,
          offset: new BMap.Size(15, -15)
        });
      }

      var marker = new BMap.Marker(point, {
        label: label,
        enableDragging: draggable,
        rotation: 5
      });
      marker.setLabel(label);
      this.map.addOverlay(marker);
      return marker;
    }
  }, {
    key: 'createPolyline',
    value: function createPolyline(path, color) {
      var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;
      var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2.0;

      var options = {
        geodesic: true,
        strokeColor: color,
        strokeOpacity: opacity,
        strokeWeight: weight
      };
      var polyline = new BMap.Polyline(path, options);
      this.map.addOverlay(polyline);
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

      var myControl = new NavigationControl(text, tip, color, new BMap.Size(offsetX, offsetY), onClickHandler);
      this.map.addControl(myControl);
      this.controls.push(myControl);
    }
  }, {
    key: 'disableControls',
    value: function disableControls() {
      var _this = this;

      this.controls.forEach(function (control) {
        _this.map.removeControl(control);
      });
    }
  }, {
    key: 'enableControls',
    value: function enableControls() {
      var _this2 = this;

      this.controls.forEach(function (control) {
        _this2.map.addControl(control);
      });
    }
  }, {
    key: 'getMarkerPosition',
    value: function getMarkerPosition(marker) {
      return marker.getPosition();
    }
  }, {
    key: 'updatePolyline',
    value: function updatePolyline(polyline, newPath) {
      polyline.setPath(newPath);
    }
  }, {
    key: 'removePolyline',
    value: function removePolyline(polyline) {
      this.map.removeOverlay(polyline);
    }
  }, {
    key: 'applyCoordinateOffset',
    value: function applyCoordinateOffset(_ref3) {
      var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
          lng = _ref4[0],
          lat = _ref4[1];

      return (0, _coordinate_converter.WGS84ToBD09LL)(lng, lat);
    }
  }]);
  return BaiduMapAdapter;
}();

exports.default = BaiduMapAdapter;

var NavigationControl = function (_BMap$Control) {
  (0, _inherits3.default)(NavigationControl, _BMap$Control);

  function NavigationControl(text, tip, color, offset, onClickHandler) {
    var _ref5;

    (0, _classCallCheck3.default)(this, NavigationControl);

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (_ref5 = NavigationControl.__proto__ || (0, _getPrototypeOf2.default)(NavigationControl)).call.apply(_ref5, [this].concat(args)));

    _this3.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    _this3.defaultOffset = offset;
    _this3.onClickHandler = onClickHandler;
    _this3.title = tip;
    _this3.text = text;
    _this3.backgroundColor = color;
    return _this3;
  }

  (0, _createClass3.default)(NavigationControl, [{
    key: 'initialize',
    value: function initialize(map) {
      var _this4 = this;

      var controlDiv = document.createElement('div');

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = this.backgroundColor;
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = this.title;
      controlDiv.appendChild(controlUI);

      // // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = this.text;
      controlUI.appendChild(controlText);

      map.getContainer().appendChild(controlDiv);

      controlUI.addEventListener('click', function () {
        _this4.onClickHandler(controlText);
      });

      return controlDiv;
    }
  }]);
  return NavigationControl;
}(BMap.Control);

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map