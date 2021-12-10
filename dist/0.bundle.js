(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/Navigation lazy recursive ^\\.\\/.*Adapter$":
/*!*********************************************************************!*\
  !*** ./components/Navigation lazy ^\.\/.*Adapter$ namespace object ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BaiduMapAdapter": [
		"./components/Navigation/BaiduMapAdapter.js",
		1
	],
	"./GoogleMapAdapter": [
		"./components/Navigation/GoogleMapAdapter.js",
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./components/Navigation lazy recursive ^\\.\\/.*Adapter$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./components/Navigation/WindowResizeControl.js":
/*!******************************************************!*\
  !*** ./components/Navigation/WindowResizeControl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _dimension = __webpack_require__(/*! store/dimension */ "./store/dimension.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowResizeControl = function (_React$PureComponent) {
  (0, _inherits3.default)(WindowResizeControl, _React$PureComponent);

  function WindowResizeControl() {
    (0, _classCallCheck3.default)(this, WindowResizeControl);
    return (0, _possibleConstructorReturn3.default)(this, (WindowResizeControl.__proto__ || (0, _getPrototypeOf2.default)(WindowResizeControl)).apply(this, arguments));
  }

  (0, _createClass3.default)(WindowResizeControl, [{
    key: 'getMinimizingIcon',
    value: function getMinimizingIcon() {
      return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 20 20' },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { d: 'M20 0L0 20h20V0z', id: 'a' }),
          _react2.default.createElement('path', { d: 'M11.53 18.5l-.03-7h7', id: 'b' }),
          _react2.default.createElement('path', { d: 'M12 12l7 7', id: 'c' })
        ),
        _react2.default.createElement('use', { xlinkHref: '#a', opacity: '.8', fill: '#84b7FF' }),
        _react2.default.createElement('use', { xlinkHref: '#b', fillOpacity: '0', stroke: '#006AFF', strokeWidth: '2' }),
        _react2.default.createElement('use', { xlinkHref: '#c', fillOpacity: '0', stroke: '#006AFF', strokeWidth: '2' })
      );
    }
  }, {
    key: 'getMaximizingIcon',
    value: function getMaximizingIcon() {
      return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 20 20' },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { d: 'M20 0L0 20h20V0z', id: 'a' }),
          _react2.default.createElement('path', { d: 'M18.47 11.5l.03 7h-7', id: 'b' }),
          _react2.default.createElement('path', { d: 'M11 11l7 7', id: 'c' })
        ),
        _react2.default.createElement('use', { xlinkHref: '#a', opacity: '.8', fill: '#84b7FF' }),
        _react2.default.createElement('use', { xlinkHref: '#b', fillOpacity: '0', stroke: '#006AFF', strokeWidth: '2' }),
        _react2.default.createElement('use', { xlinkHref: '#c', fillOpacity: '0', stroke: '#006AFF', strokeWidth: '2' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          onClick = _props.onClick;


      var icon = null;
      switch (type) {
        case _dimension.MAP_SIZE.FULL:
          icon = this.getMinimizingIcon();
          break;
        case _dimension.MAP_SIZE.DEFAULT:
          icon = this.getMaximizingIcon();
          break;
        default:
          console.error('Unknown window size found:', type);
          break;
      }

      return _react2.default.createElement(
        'div',
        { className: 'window-resize-control', onClick: onClick },
        icon
      );
    }
  }]);
  return WindowResizeControl;
}(_react2.default.PureComponent);

exports.default = WindowResizeControl;

/***/ }),

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MapNavigator = __webpack_require__(/*! components/Navigation/MapNavigator */ "./components/Navigation/MapNavigator.js");

var _MapNavigator2 = _interopRequireDefault(_MapNavigator);

var _websocket = __webpack_require__(/*! store/websocket */ "./store/websocket/index.js");

var _websocket2 = _interopRequireDefault(_websocket);

var _dimension = __webpack_require__(/*! store/dimension */ "./store/dimension.js");

var _script_loader = __webpack_require__(/*! utils/script_loader */ "./utils/script_loader.js");

var _script_loader2 = _interopRequireDefault(_script_loader);

var _WindowResizeControl = __webpack_require__(/*! components/Navigation/WindowResizeControl */ "./components/Navigation/WindowResizeControl.js");

var _WindowResizeControl2 = _interopRequireDefault(_WindowResizeControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

    _this.scriptOnLoadHandler = _this.scriptOnLoadHandler.bind(_this);

    if (!_MapNavigator2.default.mapAPILoaded) {
      var onLoad = function onLoad() {
        console.log('Map API script loaded.');
      };
      if (PARAMETERS.navigation.map === 'BaiduMap') {
        // For Baidu Map, the callback function is set in the window Object level
        window.initMap = _this.scriptOnLoadHandler;
      } else if (PARAMETERS.navigation.map === 'GoogleMap') {
        // For Google Map, the callback function is set from the <Script>
        onLoad = _this.scriptOnLoadHandler;
      }

      (0, _script_loader2.default)({
        url: PARAMETERS.navigation.mapAPiUrl,
        onLoad: onLoad,
        onError: function onError() {
          console.log('Failed to load map api');
        }
      });
    }
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_MapNavigator2.default.mapAPILoaded) {
        this.scriptOnLoadHandler();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          hasRoutingControls = _props.hasRoutingControls,
          size = _props.size;


      if (hasRoutingControls && size === _dimension.MAP_SIZE.FULL) {
        _MapNavigator2.default.enableControls();
      } else {
        _MapNavigator2.default.disableControls();
      }
    }
  }, {
    key: 'scriptOnLoadHandler',
    value: function scriptOnLoadHandler() {
      __webpack_require__("./components/Navigation lazy recursive ^\\.\\/.*Adapter$")("./" + PARAMETERS.navigation.map + "Adapter").then(function (mapAdapterModule) {
        var MapAdapterClass = mapAdapterModule.default;
        var mapAdapter = new MapAdapterClass();
        _MapNavigator2.default.mapAPILoaded = true;
        _MapNavigator2.default.initialize(_websocket2.default, mapAdapter);
        _MapNavigator2.default.disableControls();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _MapNavigator2.default.reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          size = _props2.size,
          onResize = _props2.onResize;


      if (!['GoogleMap', 'BaiduMap'].includes(PARAMETERS.navigation.map)) {
        console.error('Map API ' + PARAMETERS.navigation.map + ' is not supported.');
        return null;
      }

      return _react2.default.createElement(
        'div',
        { displayname: 'navigation', className: 'navigation-view', style: { width: width, height: height } },
        _react2.default.createElement('div', { id: 'map_canvas' }),
        _react2.default.createElement(_WindowResizeControl2.default, { type: size, onClick: onResize })
      );
    }
  }]);
  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;

/***/ }),

/***/ "./utils/script_loader.js":
/*!********************************!*\
  !*** ./utils/script_loader.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadScriptAsync;
function loadScriptAsync(_ref) {
  var url = _ref.url,
      onLoad = _ref.onLoad,
      onError = _ref.onError;

  var script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  script.async = true;
  script.onload = onLoad;
  script.onerror = onError;
  document.body.appendChild(script);
}

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map