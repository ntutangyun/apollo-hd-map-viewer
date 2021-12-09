/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/apollo-hd-map-viewer";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../node_modules/babel-loader/lib/index.js?!../node_modules/eslint-loader/dist/cjs.js!./utils/webworker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@protobufjs/aspromise/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@protobufjs/aspromise/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "../node_modules/@protobufjs/base64/index.js":
/*!***************************************************!*\
  !*** ../node_modules/@protobufjs/base64/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "../node_modules/@protobufjs/codegen/index.js":
/*!****************************************************!*\
  !*** ../node_modules/@protobufjs/codegen/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = codegen;

/**
 * Begins generating a function.
 * @memberof util
 * @param {string[]} functionParams Function parameter names
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 */
function codegen(functionParams, functionName) {

    /* istanbul ignore if */
    if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = undefined;
    }

    var body = [];

    /**
     * Appends code to the function's body or finishes generation.
     * @typedef Codegen
     * @type {function}
     * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
     * @param {...*} [formatParams] Format parameters
     * @returns {Codegen|Function} Itself or the generated function if finished
     * @throws {Error} If format parameter counts do not match
     */

    function Codegen(formatStringOrScope) {
        // note that explicit array handling below makes this ~50% faster

        // finish the function
        if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose)
                console.log("codegen: " + source); // eslint-disable-line no-console
            source = "return " + source;
            if (formatStringOrScope) {
                var scopeKeys   = Object.keys(formatStringOrScope),
                    scopeParams = new Array(scopeKeys.length + 1),
                    scopeValues = new Array(scopeKeys.length),
                    scopeOffset = 0;
                while (scopeOffset < scopeKeys.length) {
                    scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                    scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                }
                scopeParams[scopeOffset] = source;
                return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
            }
            return Function(source)(); // eslint-disable-line no-new-func
        }

        // otherwise append to body
        var formatParams = new Array(arguments.length - 1),
            formatOffset = 0;
        while (formatOffset < formatParams.length)
            formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];
            switch ($1) {
                case "d": case "f": return String(Number(value));
                case "i": return String(Math.floor(value));
                case "j": return JSON.stringify(value);
                case "s": return String(value);
            }
            return "%";
        });
        if (formatOffset !== formatParams.length)
            throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
    }

    function toString(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
    }

    Codegen.toString = toString;
    return Codegen;
}

/**
 * Begins generating a function.
 * @memberof util
 * @function codegen
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 * @variation 2
 */

/**
 * When set to `true`, codegen will log generated code to console. Useful for debugging.
 * @name util.codegen.verbose
 * @type {boolean}
 */
codegen.verbose = false;


/***/ }),

/***/ "../node_modules/@protobufjs/eventemitter/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/@protobufjs/eventemitter/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "../node_modules/@protobufjs/fetch/index.js":
/*!**************************************************!*\
  !*** ../node_modules/@protobufjs/fetch/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = fetch;

var asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "../node_modules/@protobufjs/aspromise/index.js"),
    inquire   = __webpack_require__(/*! @protobufjs/inquire */ "../node_modules/@protobufjs/inquire/index.js");

var fs = inquire("fs");

/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */

/**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {FetchOptions} options Fetch options
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */
function fetch(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    } else if (!options)
        options = {};

    if (!callback)
        return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this

    // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
    if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined"
                ? fetch.xhr(filename, options, callback)
                : err
                ? callback(err)
                : callback(null, options.binary ? contents : contents.toString("utf8"));
        });

    // use the XHR version otherwise.
    return fetch.xhr(filename, options, callback);
}

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchOptions} [options] Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 * @variation 3
 */

/**/
fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange /* works everywhere */ = function fetchOnReadyStateChange() {

        if (xhr.readyState !== 4)
            return undefined;

        // local cors security errors return status 0 / empty string, too. afaik this cannot be
        // reliably distinguished from an actually empty file for security reasons. feel free
        // to send a pull request if you are aware of a solution.
        if (xhr.status !== 0 && xhr.status !== 200)
            return callback(Error("status " + xhr.status));

        // if binary data is expected, make sure that some sort of array is returned, even if
        // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
        if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
                buffer = [];
                for (var i = 0; i < xhr.responseText.length; ++i)
                    buffer.push(xhr.responseText.charCodeAt(i) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
    };

    if (options.binary) {
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
        if ("overrideMimeType" in xhr)
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
    }

    xhr.open("GET", filename);
    xhr.send();
};


/***/ }),

/***/ "../node_modules/@protobufjs/float/index.js":
/*!**************************************************!*\
  !*** ../node_modules/@protobufjs/float/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "../node_modules/@protobufjs/inquire/index.js":
/*!****************************************************!*\
  !*** ../node_modules/@protobufjs/inquire/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "../node_modules/@protobufjs/path/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@protobufjs/path/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal path module to resolve Unix, Windows and URL paths alike.
 * @memberof util
 * @namespace
 */
var path = exports;

var isAbsolute =
/**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */
path.isAbsolute = function isAbsolute(path) {
    return /^(?:\/|\w+:)/.test(path);
};

var normalize =
/**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */
path.normalize = function normalize(path) {
    path = path.replace(/\\/g, "/")
               .replace(/\/{2,}/g, "/");
    var parts    = path.split("/"),
        absolute = isAbsolute(path),
        prefix   = "";
    if (absolute)
        prefix = parts.shift() + "/";
    for (var i = 0; i < parts.length;) {
        if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
                parts.splice(--i, 2);
            else if (absolute)
                parts.splice(i, 1);
            else
                ++i;
        } else if (parts[i] === ".")
            parts.splice(i, 1);
        else
            ++i;
    }
    return prefix + parts.join("/");
};

/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */
path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized)
        includePath = normalize(includePath);
    if (isAbsolute(includePath))
        return includePath;
    if (!alreadyNormalized)
        originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};


/***/ }),

/***/ "../node_modules/@protobufjs/pool/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@protobufjs/pool/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "../node_modules/@protobufjs/utf8/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@protobufjs/utf8/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js?!../node_modules/eslint-loader/dist/cjs.js!./utils/webworker.js":
/*!******************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib??ref--15-1!../node_modules/eslint-loader/dist/cjs.js!./utils/webworker.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protobuf = __webpack_require__(/*! protobufjs/light */ "../node_modules/protobufjs/light.js");
var simWorldRoot = protobuf.Root.fromJSON(__webpack_require__(/*! proto_bundle/sim_world_proto_bundle.json */ "../proto_bundle/sim_world_proto_bundle.json"));

var SimWorldMessage = simWorldRoot.lookupType('apollo.dreamview.SimulationWorld');
var mapMessage = simWorldRoot.lookupType('apollo.hdmap.Map');
var cameraMessage = simWorldRoot.lookupType('apollo.dreamview.CameraUpdate');
var pointCloudRoot = protobuf.Root.fromJSON(__webpack_require__(/*! proto_bundle/point_cloud_proto_bundle.json */ "../proto_bundle/point_cloud_proto_bundle.json"));

var pointCloudMessage = pointCloudRoot.lookupType('apollo.dreamview.PointCloud');

self.addEventListener('message', function (event) {
  var message = null;
  var data = event.data.data;
  switch (event.data.source) {
    case 'realtime':
      if (typeof data === 'string') {
        message = JSON.parse(data);
      } else {
        message = SimWorldMessage.toObject(SimWorldMessage.decode(new Uint8Array(data)), { enums: String });
        message.type = 'SimWorldUpdate';
      }
      break;
    case 'map':
      message = mapMessage.toObject(mapMessage.decode(new Uint8Array(data)), { enums: String });
      message.type = 'MapData';
      break;
    case 'point_cloud':
      if (typeof data === 'string') {
        message = JSON.parse(data);
      } else {
        message = pointCloudMessage.toObject(pointCloudMessage.decode(new Uint8Array(data)), { arrays: true });
      }
      break;
    case 'camera':
      message = cameraMessage.toObject(cameraMessage.decode(new Uint8Array(data)), { enums: String });
      message.type = 'CameraData';
      break;
    case 'teleop':
      if (typeof data === 'string') {
        message = JSON.parse(data);
      }
      break;
    default:
      console.error('Unknown data source found:', event.data.source);
      break;
  }

  if (message) {
    self.postMessage(message);
  }
});

/***/ }),

/***/ "../node_modules/protobufjs/light.js":
/*!*******************************************!*\
  !*** ../node_modules/protobufjs/light.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// light library entry point.


module.exports = __webpack_require__(/*! ./src/index-light */ "../node_modules/protobufjs/src/index-light.js");

/***/ }),

/***/ "../node_modules/protobufjs/src/converter.js":
/*!***************************************************!*\
  !*** ../node_modules/protobufjs/src/converter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Runtime message from/to plain object converters.
 * @namespace
 */
var converter = exports;

var Enum = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    util = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

/**
 * Generates a partial value fromObject conveter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(d%s){", prop);
            for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
                if (field.repeated && values[keys[i]] === field.typeDefault) gen
                ("default:");
                gen
                ("case%j:", keys[i])
                ("case %i:", values[keys[i]])
                    ("m%s=%j", prop, values[keys[i]])
                    ("break");
            } gen
            ("}");
        } else gen
            ("if(typeof d%s!==\"object\")", prop)
                ("throw TypeError(%j)", field.fullName + ": object expected")
            ("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
    } else {
        var isUnsigned = false;
        switch (field.type) {
            case "double":
            case "float": gen
                ("m%s=Number(d%s)", prop, prop); // also catches "NaN", "Infinity"
                break;
            case "uint32":
            case "fixed32": gen
                ("m%s=d%s>>>0", prop, prop);
                break;
            case "int32":
            case "sint32":
            case "sfixed32": gen
                ("m%s=d%s|0", prop, prop);
                break;
            case "uint64":
                isUnsigned = true;
                // eslint-disable-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(util.Long)")
                    ("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)
                ("else if(typeof d%s===\"string\")", prop)
                    ("m%s=parseInt(d%s,10)", prop, prop)
                ("else if(typeof d%s===\"number\")", prop)
                    ("m%s=d%s", prop, prop)
                ("else if(typeof d%s===\"object\")", prop)
                    ("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
                break;
            case "bytes": gen
                ("if(typeof d%s===\"string\")", prop)
                    ("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)
                ("else if(d%s.length)", prop)
                    ("m%s=d%s", prop, prop);
                break;
            case "string": gen
                ("m%s=String(d%s)", prop, prop);
                break;
            case "bool": gen
                ("m%s=Boolean(d%s)", prop, prop);
                break;
            /* default: gen
                ("m%s=d%s", prop, prop);
                break; */
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.fromObject = function fromObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray;
    var gen = util.codegen(["d"], mtype.name + "$fromObject")
    ("if(d instanceof this.ctor)")
        ("return d");
    if (!fields.length) return gen
    ("return new this.ctor");
    gen
    ("var m=new this.ctor");
    for (var i = 0; i < fields.length; ++i) {
        var field  = fields[i].resolve(),
            prop   = util.safeProp(field.name);

        // Map fields
        if (field.map) { gen
    ("if(d%s){", prop)
        ("if(typeof d%s!==\"object\")", prop)
            ("throw TypeError(%j)", field.fullName + ": object expected")
        ("m%s={}", prop)
        ("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
            genValuePartial_fromObject(gen, field, /* not sorted */ i, prop + "[ks[i]]")
        ("}")
    ("}");

        // Repeated fields
        } else if (field.repeated) { gen
    ("if(d%s){", prop)
        ("if(!Array.isArray(d%s))", prop)
            ("throw TypeError(%j)", field.fullName + ": array expected")
        ("m%s=[]", prop)
        ("for(var i=0;i<d%s.length;++i){", prop);
            genValuePartial_fromObject(gen, field, /* not sorted */ i, prop + "[i]")
        ("}")
    ("}");

        // Non-repeated fields
        } else {
            if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
    ("if(d%s!=null){", prop); // !== undefined && !== null
        genValuePartial_fromObject(gen, field, /* not sorted */ i, prop);
            if (!(field.resolvedType instanceof Enum)) gen
    ("}");
        }
    } return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/**
 * Generates a partial value toObject converter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_toObject(gen, field, fieldIndex, prop) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) gen
            ("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop);
        else gen
            ("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
    } else {
        var isUnsigned = false;
        switch (field.type) {
            case "double":
            case "float": gen
            ("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
                break;
            case "uint64":
                isUnsigned = true;
                // eslint-disable-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
            ("if(typeof m%s===\"number\")", prop)
                ("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)
            ("else") // Long-like
                ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true": "", prop);
                break;
            case "bytes": gen
            ("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
                break;
            default: gen
            ("d%s=m%s", prop, prop);
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a runtime message to plain object converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.toObject = function toObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    if (!fields.length)
        return util.codegen()("return {}");
    var gen = util.codegen(["m", "o"], mtype.name + "$toObject")
    ("if(!o)")
        ("o={}")
    ("var d={}");

    var repeatedFields = [],
        mapFields = [],
        normalFields = [],
        i = 0;
    for (; i < fields.length; ++i)
        if (!fields[i].partOf)
            ( fields[i].resolve().repeated ? repeatedFields
            : fields[i].map ? mapFields
            : normalFields).push(fields[i]);

    if (repeatedFields.length) { gen
    ("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen
        ("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen
    ("}");
    }

    if (mapFields.length) { gen
    ("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen
        ("d%s={}", util.safeProp(mapFields[i].name));
        gen
    ("}");
    }

    if (normalFields.length) { gen
    ("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
            var field = normalFields[i],
                prop  = util.safeProp(field.name);
            if (field.resolvedType instanceof Enum) gen
        ("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
            else if (field.long) gen
        ("if(util.Long){")
            ("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)
            ("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)
        ("}else")
            ("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
            else if (field.bytes) {
                var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
                gen
        ("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))
        ("else{")
            ("d%s=%s", prop, arrayDefault)
            ("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)
        ("}");
            } else gen
        ("d%s=%j", prop, field.typeDefault); // also messages (=null)
        } gen
    ("}");
    }
    var hasKs2 = false;
    for (i = 0; i < fields.length; ++i) {
        var field = fields[i],
            index = mtype._fieldsArray.indexOf(field),
            prop  = util.safeProp(field.name);
        if (field.map) {
            if (!hasKs2) { hasKs2 = true; gen
    ("var ks2");
            } gen
    ("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)
        ("d%s={}", prop)
        ("for(var j=0;j<ks2.length;++j){");
            genValuePartial_toObject(gen, field, /* sorted */ index, prop + "[ks2[j]]")
        ("}");
        } else if (field.repeated) { gen
    ("if(m%s&&m%s.length){", prop, prop)
        ("d%s=[]", prop)
        ("for(var j=0;j<m%s.length;++j){", prop);
            genValuePartial_toObject(gen, field, /* sorted */ index, prop + "[j]")
        ("}");
        } else { gen
    ("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null
        genValuePartial_toObject(gen, field, /* sorted */ index, prop);
        if (field.partOf) gen
        ("if(o.oneofs)")
            ("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen
    ("}");
    }
    return gen
    ("return d");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};


/***/ }),

/***/ "../node_modules/protobufjs/src/decoder.js":
/*!*************************************************!*\
  !*** ../node_modules/protobufjs/src/decoder.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = decoder;

var Enum    = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    types   = __webpack_require__(/*! ./types */ "../node_modules/protobufjs/src/types.js"),
    util    = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

function missing(field) {
    return "missing required '" + field.name + "'";
}

/**
 * Generates a decoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function decoder(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen(["r", "l"], mtype.name + "$decode")
    ("if(!(r instanceof Reader))")
        ("r=Reader.create(r)")
    ("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field) { return field.map; }).length ? ",k" : ""))
    ("while(r.pos<c){")
        ("var t=r.uint32()");
    if (mtype.group) gen
        ("if((t&7)===4)")
            ("break");
    gen
        ("switch(t>>>3){");

    var i = 0;
    for (; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            type  = field.resolvedType instanceof Enum ? "int32" : field.type,
            ref   = "m" + util.safeProp(field.name); gen
            ("case %i:", field.id);

        // Map fields
        if (field.map) { gen
                ("r.skip().pos++") // assumes id 1 + key wireType
                ("if(%s===util.emptyObject)", ref)
                    ("%s={}", ref)
                ("k=r.%s()", field.keyType)
                ("r.pos++"); // assumes id 2 + value wireType
            if (types.long[field.keyType] !== undefined) {
                if (types.basic[type] === undefined) gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", ref, type);
            } else {
                if (types.basic[type] === undefined) gen
                ("%s[k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[k]=r.%s()", ref, type);
            }

        // Repeated fields
        } else if (field.repeated) { gen

                ("if(!(%s&&%s.length))", ref, ref)
                    ("%s=[]", ref);

            // Packable (always check for forward and backward compatiblity)
            if (types.packed[type] !== undefined) gen
                ("if((t&7)===2){")
                    ("var c2=r.uint32()+r.pos")
                    ("while(r.pos<c2)")
                        ("%s.push(r.%s())", ref, type)
                ("}else");

            // Non-packed
            if (types.basic[type] === undefined) gen(field.resolvedType.group
                    ? "%s.push(types[%i].decode(r))"
                    : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
            else gen
                    ("%s.push(r.%s())", ref, type);

        // Non-repeated
        } else if (types.basic[type] === undefined) gen(field.resolvedType.group
                ? "%s=types[%i].decode(r)"
                : "%s=types[%i].decode(r,r.uint32())", ref, i);
        else gen
                ("%s=r.%s()", ref, type);
        gen
                ("break");
    // Unknown fields
    } gen
            ("default:")
                ("r.skipType(t&7)")
                ("break")

        ("}")
    ("}");

    // Field presence
    for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen
    ("if(!m.hasOwnProperty(%j))", rfield.name)
        ("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }

    return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline */
}


/***/ }),

/***/ "../node_modules/protobufjs/src/encoder.js":
/*!*************************************************!*\
  !*** ../node_modules/protobufjs/src/encoder.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = encoder;

var Enum     = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    types    = __webpack_require__(/*! ./types */ "../node_modules/protobufjs/src/types.js"),
    util     = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

/**
 * Generates a partial message type encoder.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genTypePartial(gen, field, fieldIndex, ref) {
    return field.resolvedType.group
        ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0)
        : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
}

/**
 * Generates an encoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function encoder(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var gen = util.codegen(["m", "w"], mtype.name + "$encode")
    ("if(!w)")
        ("w=Writer.create()");

    var i, ref;

    // "when a message is serialized its known fields should be written sequentially by field number"
    var fields = /* initializes */ mtype.fieldsArray.slice().sort(util.compareFieldsById);

    for (var i = 0; i < fields.length; ++i) {
        var field    = fields[i].resolve(),
            index    = mtype._fieldsArray.indexOf(field),
            type     = field.resolvedType instanceof Enum ? "int32" : field.type,
            wireType = types.basic[type];
            ref      = "m" + util.safeProp(field.name);

        // Map fields
        if (field.map) {
            gen
    ("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name) // !== undefined && !== null
        ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)
            ("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === undefined) gen
            ("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
            else gen
            (".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen
        ("}")
    ("}");

            // Repeated fields
        } else if (field.repeated) { gen
    ("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null

            // Packed repeated
            if (field.packed && types.packed[type] !== undefined) { gen

        ("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)
        ("for(var i=0;i<%s.length;++i)", ref)
            ("w.%s(%s[i])", type, ref)
        ("w.ldelim()");

            // Non-packed
            } else { gen

        ("for(var i=0;i<%s.length;++i)", ref);
                if (wireType === undefined)
            genTypePartial(gen, field, index, ref + "[i]");
                else gen
            ("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);

            } gen
    ("}");

        // Non-repeated
        } else {
            if (field.optional) gen
    ("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name); // !== undefined && !== null

            if (wireType === undefined)
        genTypePartial(gen, field, index, ref);
            else gen
        ("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);

        }
    }

    return gen
    ("return w");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}


/***/ }),

/***/ "../node_modules/protobufjs/src/enum.js":
/*!**********************************************!*\
  !*** ../node_modules/protobufjs/src/enum.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Enum;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "../node_modules/protobufjs/src/object.js");
((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

var Namespace = __webpack_require__(/*! ./namespace */ "../node_modules/protobufjs/src/namespace.js"),
    util = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

/**
 * Constructs a new enum instance.
 * @classdesc Reflected enum.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {Object.<string,number>} [values] Enum values as an object, by name
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this enum
 * @param {Object.<string,string>} [comments] The value comments for this enum
 */
function Enum(name, values, options, comment, comments) {
    ReflectionObject.call(this, name, options);

    if (values && typeof values !== "object")
        throw TypeError("values must be an object");

    /**
     * Enum values by id.
     * @type {Object.<number,string>}
     */
    this.valuesById = {};

    /**
     * Enum values by name.
     * @type {Object.<string,number>}
     */
    this.values = Object.create(this.valuesById); // toJSON, marker

    /**
     * Enum comment text.
     * @type {string|null}
     */
    this.comment = comment;

    /**
     * Value comment texts, if any.
     * @type {Object.<string,string>}
     */
    this.comments = comments || {};

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    // Note that values inherit valuesById on their prototype which makes them a TypeScript-
    // compatible enum. This is used by pbts to write actual enum definitions that work for
    // static and reflection code alike instead of emitting generic object definitions.

    if (values)
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
            if (typeof values[keys[i]] === "number") // use forward entries only
                this.valuesById[ this.values[keys[i]] = values[keys[i]] ] = keys[i];
}

/**
 * Enum descriptor.
 * @interface IEnum
 * @property {Object.<string,number>} values Enum values
 * @property {Object.<string,*>} [options] Enum options
 */

/**
 * Constructs an enum from an enum descriptor.
 * @param {string} name Enum name
 * @param {IEnum} json Enum descriptor
 * @returns {Enum} Created enum
 * @throws {TypeError} If arguments are invalid
 */
Enum.fromJSON = function fromJSON(name, json) {
    var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
    enm.reserved = json.reserved;
    return enm;
};

/**
 * Converts this enum to an enum descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IEnum} Enum descriptor
 */
Enum.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options"  , this.options,
        "values"   , this.values,
        "reserved" , this.reserved && this.reserved.length ? this.reserved : undefined,
        "comment"  , keepComments ? this.comment : undefined,
        "comments" , keepComments ? this.comments : undefined
    ]);
};

/**
 * Adds a value to this enum.
 * @param {string} name Value name
 * @param {number} id Value id
 * @param {string} [comment] Comment, if any
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a value with this name or id
 */
Enum.prototype.add = function add(name, id, comment) {
    // utilized by the parser but not by .fromJSON

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (!util.isInteger(id))
        throw TypeError("id must be an integer");

    if (this.values[name] !== undefined)
        throw Error("duplicate name '" + name + "' in " + this);

    if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);

    if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);

    if (this.valuesById[id] !== undefined) {
        if (!(this.options && this.options.allow_alias))
            throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
    } else
        this.valuesById[this.values[name] = id] = name;

    this.comments[name] = comment || null;
    return this;
};

/**
 * Removes a value from this enum
 * @param {string} name Value name
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `name` is not a name of this enum
 */
Enum.prototype.remove = function remove(name) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    var val = this.values[name];
    if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);

    delete this.valuesById[val];
    delete this.values[name];
    delete this.comments[name];

    return this;
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Enum.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Enum.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
};


/***/ }),

/***/ "../node_modules/protobufjs/src/field.js":
/*!***********************************************!*\
  !*** ../node_modules/protobufjs/src/field.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Field;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "../node_modules/protobufjs/src/object.js");
((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

var Enum  = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    types = __webpack_require__(/*! ./types */ "../node_modules/protobufjs/src/types.js"),
    util  = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

var Type; // cyclic

var ruleRe = /^required|optional|repeated$/;

/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @name Field
 * @classdesc Reflected message field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a field from a field descriptor.
 * @param {string} name Field name
 * @param {IField} json Field descriptor
 * @returns {Field} Created field
 * @throws {TypeError} If arguments are invalid
 */
Field.fromJSON = function fromJSON(name, json) {
    return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
};

/**
 * Not an actual constructor. Use {@link Field} instead.
 * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports FieldBase
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function Field(name, id, type, rule, extend, options, comment) {

    if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = undefined;
    } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = undefined;
    }

    ReflectionObject.call(this, name, options);

    if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");

    if (!util.isString(type))
        throw TypeError("type must be a string");

    if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");

    if (extend !== undefined && !util.isString(extend))
        throw TypeError("extend must be a string");

    /**
     * Field rule, if any.
     * @type {string|undefined}
     */
    this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

    /**
     * Field type.
     * @type {string}
     */
    this.type = type; // toJSON

    /**
     * Unique field id.
     * @type {number}
     */
    this.id = id; // toJSON, marker

    /**
     * Extended type if different from parent.
     * @type {string|undefined}
     */
    this.extend = extend || undefined; // toJSON

    /**
     * Whether this field is required.
     * @type {boolean}
     */
    this.required = rule === "required";

    /**
     * Whether this field is optional.
     * @type {boolean}
     */
    this.optional = !this.required;

    /**
     * Whether this field is repeated.
     * @type {boolean}
     */
    this.repeated = rule === "repeated";

    /**
     * Whether this field is a map or not.
     * @type {boolean}
     */
    this.map = false;

    /**
     * Message this field belongs to.
     * @type {Type|null}
     */
    this.message = null;

    /**
     * OneOf this field belongs to, if any,
     * @type {OneOf|null}
     */
    this.partOf = null;

    /**
     * The field type's default value.
     * @type {*}
     */
    this.typeDefault = null;

    /**
     * The field's default value on prototypes.
     * @type {*}
     */
    this.defaultValue = null;

    /**
     * Whether this field's value should be treated as a long.
     * @type {boolean}
     */
    this.long = util.Long ? types.long[type] !== undefined : /* istanbul ignore next */ false;

    /**
     * Whether this field's value is a buffer.
     * @type {boolean}
     */
    this.bytes = type === "bytes";

    /**
     * Resolved type if not a basic type.
     * @type {Type|Enum|null}
     */
    this.resolvedType = null;

    /**
     * Sister-field within the extended type if a declaring extension field.
     * @type {Field|null}
     */
    this.extensionField = null;

    /**
     * Sister-field within the declaring namespace if an extended field.
     * @type {Field|null}
     */
    this.declaringField = null;

    /**
     * Internally remembers whether this field is packed.
     * @type {boolean|null}
     * @private
     */
    this._packed = null;

    /**
     * Comment for this field.
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Determines whether this field is packed. Only relevant when repeated and working with proto2.
 * @name Field#packed
 * @type {boolean}
 * @readonly
 */
Object.defineProperty(Field.prototype, "packed", {
    get: function() {
        // defaults to packed=true if not explicity set to false
        if (this._packed === null)
            this._packed = this.getOption("packed") !== false;
        return this._packed;
    }
});

/**
 * @override
 */
Field.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (name === "packed") // clear cached before setting
        this._packed = null;
    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
};

/**
 * Field descriptor.
 * @interface IField
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension field descriptor.
 * @interface IExtensionField
 * @extends IField
 * @property {string} extend Extended type
 */

/**
 * Converts this field to a field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IField} Field descriptor
 */
Field.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "rule"    , this.rule !== "optional" && this.rule || undefined,
        "type"    , this.type,
        "id"      , this.id,
        "extend"  , this.extend,
        "options" , this.options,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Resolves this field's type references.
 * @returns {Field} `this`
 * @throws {Error} If any reference cannot be resolved
 */
Field.prototype.resolve = function resolve() {

    if (this.resolved)
        return this;

    if ((this.typeDefault = types.defaults[this.type]) === undefined) { // if not a basic type, resolve it
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
            this.typeDefault = null;
        else // instanceof Enum
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
    }

    // use explicitly set default value if present
    if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
            this.typeDefault = this.resolvedType.values[this.typeDefault];
    }

    // remove unnecessary options
    if (this.options) {
        if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
            delete this.options.packed;
        if (!Object.keys(this.options).length)
            this.options = undefined;
    }

    // convert to internal data type if necesssary
    if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");

        /* istanbul ignore else */
        if (Object.freeze)
            Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)

    } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
            util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
    }

    // take special care of maps and repeated fields
    if (this.map)
        this.defaultValue = util.emptyObject;
    else if (this.repeated)
        this.defaultValue = util.emptyArray;
    else
        this.defaultValue = this.typeDefault;

    // ensure proper value on prototype
    if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;

    return ReflectionObject.prototype.resolve.call(this);
};

/**
 * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
 * @typedef FieldDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} fieldName Field name
 * @returns {undefined}
 */

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @param {T} [defaultValue] Default value
 * @returns {FieldDecorator} Decorator function
 * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
 */
Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {

    // submessage: decorate the submessage and use its name as the type
    if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;

    // enum reference: create a reflected copy of the enum and keep reuseing it
    else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;

    return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor)
            .add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
    };
};

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {Constructor<T>|string} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @returns {FieldDecorator} Decorator function
 * @template T extends Message<T>
 * @variation 2
 */
// like Field.d but without a default value

// Sets up cyclic dependencies (called in index-light)
Field._configure = function configure(Type_) {
    Type = Type_;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/index-light.js":
/*!*****************************************************!*\
  !*** ../node_modules/protobufjs/src/index-light.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = module.exports = __webpack_require__(/*! ./index-minimal */ "../node_modules/protobufjs/src/index-minimal.js");

protobuf.build = "light";

/**
 * A node-style callback as used by {@link load} and {@link Root#load}.
 * @typedef LoadCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Root} [root] Root, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} root Root namespace, defaults to create a new one if omitted.
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 */
function load(filename, root, callback) {
    if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
    } else if (!root)
        root = new protobuf.Root();
    return root.load(filename, callback);
}

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Promise<Root>} Promise
 * @see {@link Root#load}
 * @variation 3
 */
// function load(filename:string, [root:Root]):Promise<Root>

protobuf.load = load;

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 * @see {@link Root#loadSync}
 */
function loadSync(filename, root) {
    if (!root)
        root = new protobuf.Root();
    return root.loadSync(filename);
}

protobuf.loadSync = loadSync;

// Serialization
protobuf.encoder          = __webpack_require__(/*! ./encoder */ "../node_modules/protobufjs/src/encoder.js");
protobuf.decoder          = __webpack_require__(/*! ./decoder */ "../node_modules/protobufjs/src/decoder.js");
protobuf.verifier         = __webpack_require__(/*! ./verifier */ "../node_modules/protobufjs/src/verifier.js");
protobuf.converter        = __webpack_require__(/*! ./converter */ "../node_modules/protobufjs/src/converter.js");

// Reflection
protobuf.ReflectionObject = __webpack_require__(/*! ./object */ "../node_modules/protobufjs/src/object.js");
protobuf.Namespace        = __webpack_require__(/*! ./namespace */ "../node_modules/protobufjs/src/namespace.js");
protobuf.Root             = __webpack_require__(/*! ./root */ "../node_modules/protobufjs/src/root.js");
protobuf.Enum             = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js");
protobuf.Type             = __webpack_require__(/*! ./type */ "../node_modules/protobufjs/src/type.js");
protobuf.Field            = __webpack_require__(/*! ./field */ "../node_modules/protobufjs/src/field.js");
protobuf.OneOf            = __webpack_require__(/*! ./oneof */ "../node_modules/protobufjs/src/oneof.js");
protobuf.MapField         = __webpack_require__(/*! ./mapfield */ "../node_modules/protobufjs/src/mapfield.js");
protobuf.Service          = __webpack_require__(/*! ./service */ "../node_modules/protobufjs/src/service.js");
protobuf.Method           = __webpack_require__(/*! ./method */ "../node_modules/protobufjs/src/method.js");

// Runtime
protobuf.Message          = __webpack_require__(/*! ./message */ "../node_modules/protobufjs/src/message.js");
protobuf.wrappers         = __webpack_require__(/*! ./wrappers */ "../node_modules/protobufjs/src/wrappers.js");

// Utility
protobuf.types            = __webpack_require__(/*! ./types */ "../node_modules/protobufjs/src/types.js");
protobuf.util             = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

// Set up possibly cyclic reflection dependencies
protobuf.ReflectionObject._configure(protobuf.Root);
protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
protobuf.Root._configure(protobuf.Type);
protobuf.Field._configure(protobuf.Type);


/***/ }),

/***/ "../node_modules/protobufjs/src/index-minimal.js":
/*!*******************************************************!*\
  !*** ../node_modules/protobufjs/src/index-minimal.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(/*! ./writer */ "../node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "../node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__(/*! ./reader */ "../node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "../node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__(/*! ./rpc */ "../node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__(/*! ./roots */ "../node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();


/***/ }),

/***/ "../node_modules/protobufjs/src/mapfield.js":
/*!**************************************************!*\
  !*** ../node_modules/protobufjs/src/mapfield.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = MapField;

// extends Field
var Field = __webpack_require__(/*! ./field */ "../node_modules/protobufjs/src/field.js");
((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

var types   = __webpack_require__(/*! ./types */ "../node_modules/protobufjs/src/types.js"),
    util    = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function MapField(name, id, keyType, type, options, comment) {
    Field.call(this, name, id, type, undefined, undefined, options, comment);

    /* istanbul ignore if */
    if (!util.isString(keyType))
        throw TypeError("keyType must be a string");

    /**
     * Key type.
     * @type {string}
     */
    this.keyType = keyType; // toJSON, marker

    /**
     * Resolved key type if not a basic type.
     * @type {ReflectionObject|null}
     */
    this.resolvedKeyType = null;

    // Overrides Field#map
    this.map = true;
}

/**
 * Map field descriptor.
 * @interface IMapField
 * @extends {IField}
 * @property {string} keyType Key type
 */

/**
 * Extension map field descriptor.
 * @interface IExtensionMapField
 * @extends IMapField
 * @property {string} extend Extended type
 */

/**
 * Constructs a map field from a map field descriptor.
 * @param {string} name Field name
 * @param {IMapField} json Map field descriptor
 * @returns {MapField} Created map field
 * @throws {TypeError} If arguments are invalid
 */
MapField.fromJSON = function fromJSON(name, json) {
    return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
};

/**
 * Converts this map field to a map field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMapField} Map field descriptor
 */
MapField.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "keyType" , this.keyType,
        "type"    , this.type,
        "id"      , this.id,
        "extend"  , this.extend,
        "options" , this.options,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
MapField.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;

    // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"
    if (types.mapKey[this.keyType] === undefined)
        throw Error("invalid key type: " + this.keyType);

    return Field.prototype.resolve.call(this);
};

/**
 * Map field decorator (TypeScript).
 * @name MapField.d
 * @function
 * @param {number} fieldId Field id
 * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
 * @returns {FieldDecorator} Decorator function
 * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
 */
MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {

    // submessage value: decorate the submessage and use its name as the type
    if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;

    // enum reference value: create a reflected copy of the enum and keep reuseing it
    else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;

    return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor)
            .add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
    };
};


/***/ }),

/***/ "../node_modules/protobufjs/src/message.js":
/*!*************************************************!*\
  !*** ../node_modules/protobufjs/src/message.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Message;

var util = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new message instance.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Properties<T>} [properties] Properties to set
 * @template T extends object = object
 */
function Message(properties) {
    // not used internally
    if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            this[keys[i]] = properties[keys[i]];
}

/**
 * Reference to the reflected type.
 * @name Message.$type
 * @type {Type}
 * @readonly
 */

/**
 * Reference to the reflected type.
 * @name Message#$type
 * @type {Type}
 * @readonly
 */

/*eslint-disable valid-jsdoc*/

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<T>} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.create = function create(properties) {
    return this.$type.create(properties);
};

/**
 * Encodes a message of this type.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.encode = function encode(message, writer) {
    return this.$type.encode(message, writer);
};

/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.$type.encodeDelimited(message, writer);
};

/**
 * Decodes a message of this type.
 * @name Message.decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.decode = function decode(reader) {
    return this.$type.decode(reader);
};

/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Message.decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.decodeDelimited = function decodeDelimited(reader) {
    return this.$type.decodeDelimited(reader);
};

/**
 * Verifies a message of this type.
 * @name Message.verify
 * @function
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {string|null} `null` if valid, otherwise the reason why it is not
 */
Message.verify = function verify(message) {
    return this.$type.verify(message);
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {T} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.fromObject = function fromObject(object) {
    return this.$type.fromObject(object);
};

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {T} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.toObject = function toObject(message, options) {
    return this.$type.toObject(message, options);
};

/**
 * Converts this message to JSON.
 * @returns {Object.<string,*>} JSON object
 */
Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util.toJSONOptions);
};

/*eslint-enable valid-jsdoc*/

/***/ }),

/***/ "../node_modules/protobufjs/src/method.js":
/*!************************************************!*\
  !*** ../node_modules/protobufjs/src/method.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Method;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "../node_modules/protobufjs/src/object.js");
((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

var util = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this method
 */
function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {

    /* istanbul ignore next */
    if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = undefined;
    } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = undefined;
    }

    /* istanbul ignore if */
    if (!(type === undefined || util.isString(type)))
        throw TypeError("type must be a string");

    /* istanbul ignore if */
    if (!util.isString(requestType))
        throw TypeError("requestType must be a string");

    /* istanbul ignore if */
    if (!util.isString(responseType))
        throw TypeError("responseType must be a string");

    ReflectionObject.call(this, name, options);

    /**
     * Method type.
     * @type {string}
     */
    this.type = type || "rpc"; // toJSON

    /**
     * Request type.
     * @type {string}
     */
    this.requestType = requestType; // toJSON, marker

    /**
     * Whether requests are streamed or not.
     * @type {boolean|undefined}
     */
    this.requestStream = requestStream ? true : undefined; // toJSON

    /**
     * Response type.
     * @type {string}
     */
    this.responseType = responseType; // toJSON

    /**
     * Whether responses are streamed or not.
     * @type {boolean|undefined}
     */
    this.responseStream = responseStream ? true : undefined; // toJSON

    /**
     * Resolved request type.
     * @type {Type|null}
     */
    this.resolvedRequestType = null;

    /**
     * Resolved response type.
     * @type {Type|null}
     */
    this.resolvedResponseType = null;

    /**
     * Comment for this method
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Method descriptor.
 * @interface IMethod
 * @property {string} [type="rpc"] Method type
 * @property {string} requestType Request type
 * @property {string} responseType Response type
 * @property {boolean} [requestStream=false] Whether requests are streamed
 * @property {boolean} [responseStream=false] Whether responses are streamed
 * @property {Object.<string,*>} [options] Method options
 */

/**
 * Constructs a method from a method descriptor.
 * @param {string} name Method name
 * @param {IMethod} json Method descriptor
 * @returns {Method} Created method
 * @throws {TypeError} If arguments are invalid
 */
Method.fromJSON = function fromJSON(name, json) {
    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
};

/**
 * Converts this method to a method descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMethod} Method descriptor
 */
Method.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "type"           , this.type !== "rpc" && /* istanbul ignore next */ this.type || undefined,
        "requestType"    , this.requestType,
        "requestStream"  , this.requestStream,
        "responseType"   , this.responseType,
        "responseStream" , this.responseStream,
        "options"        , this.options,
        "comment"        , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
Method.prototype.resolve = function resolve() {

    /* istanbul ignore if */
    if (this.resolved)
        return this;

    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);

    return ReflectionObject.prototype.resolve.call(this);
};


/***/ }),

/***/ "../node_modules/protobufjs/src/namespace.js":
/*!***************************************************!*\
  !*** ../node_modules/protobufjs/src/namespace.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Namespace;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "../node_modules/protobufjs/src/object.js");
((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

var Field    = __webpack_require__(/*! ./field */ "../node_modules/protobufjs/src/field.js"),
    util     = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

var Type,    // cyclic
    Service,
    Enum;

/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a namespace from JSON.
 * @memberof Namespace
 * @function
 * @param {string} name Namespace name
 * @param {Object.<string,*>} json JSON object
 * @returns {Namespace} Created namespace
 * @throws {TypeError} If arguments are invalid
 */
Namespace.fromJSON = function fromJSON(name, json) {
    return new Namespace(name, json.options).addJSON(json.nested);
};

/**
 * Converts an array of reflection objects to JSON.
 * @memberof Namespace
 * @param {ReflectionObject[]} array Object array
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
 */
function arrayToJSON(array, toJSONOptions) {
    if (!(array && array.length))
        return undefined;
    var obj = {};
    for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
    return obj;
}

Namespace.arrayToJSON = arrayToJSON;

/**
 * Tests if the specified id is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Namespace.isReservedId = function isReservedId(reserved, id) {
    if (reserved)
        for (var i = 0; i < reserved.length; ++i)
            if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
                return true;
    return false;
};

/**
 * Tests if the specified name is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Namespace.isReservedName = function isReservedName(reserved, name) {
    if (reserved)
        for (var i = 0; i < reserved.length; ++i)
            if (reserved[i] === name)
                return true;
    return false;
};

/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */
function Namespace(name, options) {
    ReflectionObject.call(this, name, options);

    /**
     * Nested objects by name.
     * @type {Object.<string,ReflectionObject>|undefined}
     */
    this.nested = undefined; // toJSON

    /**
     * Cached nested objects as an array.
     * @type {ReflectionObject[]|null}
     * @private
     */
    this._nestedArray = null;
}

function clearCache(namespace) {
    namespace._nestedArray = null;
    return namespace;
}

/**
 * Nested objects of this namespace as an array for iteration.
 * @name NamespaceBase#nestedArray
 * @type {ReflectionObject[]}
 * @readonly
 */
Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
    }
});

/**
 * Namespace descriptor.
 * @interface INamespace
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
 */

/**
 * Any extension field descriptor.
 * @typedef AnyExtensionField
 * @type {IExtensionField|IExtensionMapField}
 */

/**
 * Any nested object descriptor.
 * @typedef AnyNestedObject
 * @type {IEnum|IType|IService|AnyExtensionField|INamespace}
 */
// ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionField exists in the first place)

/**
 * Converts this namespace to a namespace descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {INamespace} Namespace descriptor
 */
Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
    return util.toObject([
        "options" , this.options,
        "nested"  , arrayToJSON(this.nestedArray, toJSONOptions)
    ]);
};

/**
 * Adds nested objects to this namespace from nested object descriptors.
 * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
 * @returns {Namespace} `this`
 */
Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    /* istanbul ignore else */
    if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
            nested = nestedJson[names[i]];
            ns.add( // most to least likely
                ( nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : nested.id !== undefined
                ? Field.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    }
    return this;
};

/**
 * Gets the nested object of the specified name.
 * @param {string} name Nested object name
 * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
 */
Namespace.prototype.get = function get(name) {
    return this.nested && this.nested[name]
        || null;
};

/**
 * Gets the values of the nested {@link Enum|enum} of the specified name.
 * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
 * @param {string} name Nested enum name
 * @returns {Object.<string,number>} Enum values
 * @throws {Error} If there is no such enum
 */
Namespace.prototype.getEnum = function getEnum(name) {
    if (this.nested && this.nested[name] instanceof Enum)
        return this.nested[name].values;
    throw Error("no such enum: " + name);
};

/**
 * Adds a nested object to this namespace.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name
 */
Namespace.prototype.add = function add(object) {

    if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");

    if (!this.nested)
        this.nested = {};
    else {
        var prev = this.get(object.name);
        if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
                // replace plain namespace but keep existing nested elements and options
                var nested = prev.nestedArray;
                for (var i = 0; i < nested.length; ++i)
                    object.add(nested[i]);
                this.remove(prev);
                if (!this.nested)
                    this.nested = {};
                object.setOptions(prev.options, true);

            } else
                throw Error("duplicate name '" + object.name + "' in " + this);
        }
    }
    this.nested[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
};

/**
 * Removes a nested object from this namespace.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this namespace
 */
Namespace.prototype.remove = function remove(object) {

    if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
    if (object.parent !== this)
        throw Error(object + " is not a member of " + this);

    delete this.nested[object.name];
    if (!Object.keys(this.nested).length)
        this.nested = undefined;

    object.onRemove(this);
    return clearCache(this);
};

/**
 * Defines additial namespaces within this one if not yet existing.
 * @param {string|string[]} path Path to create
 * @param {*} [json] Nested types to create from JSON
 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
 */
Namespace.prototype.define = function define(path, json) {

    if (util.isString(path))
        path = path.split(".");
    else if (!Array.isArray(path))
        throw TypeError("illegal path");
    if (path && path.length && path[0] === "")
        throw Error("path must be relative");

    var ptr = this;
    while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace))
                throw Error("path conflicts with non-namespace objects");
        } else
            ptr.add(ptr = new Namespace(part));
    }
    if (json)
        ptr.addJSON(json);
    return ptr;
};

/**
 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
 * @returns {Namespace} `this`
 */
Namespace.prototype.resolveAll = function resolveAll() {
    var nested = this.nestedArray, i = 0;
    while (i < nested.length)
        if (nested[i] instanceof Namespace)
            nested[i++].resolveAll();
        else
            nested[i++].resolve();
    return this.resolve();
};

/**
 * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
 * @param {string|string[]} path Path to look up
 * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
 * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 */
Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {

    /* istanbul ignore next */
    if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = undefined;
    } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [ filterTypes ];

    if (util.isString(path) && path.length) {
        if (path === ".")
            return this.root;
        path = path.split(".");
    } else if (!path.length)
        return this;

    // Start at root if path is absolute
    if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);

    // Test if the first part matches any nested object, and if so, traverse if path contains more
    var found = this.get(path[0]);
    if (found) {
        if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
                return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
            return found;

    // Otherwise try each nested namespace
    } else
        for (var i = 0; i < this.nestedArray.length; ++i)
            if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
                return found;

    // If there hasn't been a match, try again at the parent
    if (this.parent === null || parentAlreadyChecked)
        return null;
    return this.parent.lookup(path, filterTypes);
};

/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @name NamespaceBase#lookup
 * @function
 * @param {string|string[]} path Path to look up
 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 * @variation 2
 */
// lookup(path: string, [parentAlreadyChecked: boolean])

/**
 * Looks up the {@link Type|type} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type
 * @throws {Error} If `path` does not point to a type
 */
Namespace.prototype.lookupType = function lookupType(path) {
    var found = this.lookup(path, [ Type ]);
    if (!found)
        throw Error("no such type: " + path);
    return found;
};

/**
 * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Enum} Looked up enum
 * @throws {Error} If `path` does not point to an enum
 */
Namespace.prototype.lookupEnum = function lookupEnum(path) {
    var found = this.lookup(path, [ Enum ]);
    if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type or enum
 * @throws {Error} If `path` does not point to a type or enum
 */
Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
    var found = this.lookup(path, [ Type, Enum ]);
    if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Service|service} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Service} Looked up service
 * @throws {Error} If `path` does not point to a service
 */
Namespace.prototype.lookupService = function lookupService(path) {
    var found = this.lookup(path, [ Service ]);
    if (!found)
        throw Error("no such Service '" + path + "' in " + this);
    return found;
};

// Sets up cyclic dependencies (called in index-light)
Namespace._configure = function(Type_, Service_, Enum_) {
    Type    = Type_;
    Service = Service_;
    Enum    = Enum_;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/object.js":
/*!************************************************!*\
  !*** ../node_modules/protobufjs/src/object.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = ReflectionObject;

ReflectionObject.className = "ReflectionObject";

var util = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

var Root; // cyclic

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */
function ReflectionObject(name, options) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (options && !util.isObject(options))
        throw TypeError("options must be an object");

    /**
     * Options.
     * @type {Object.<string,*>|undefined}
     */
    this.options = options; // toJSON

    /**
     * Unique name within its namespace.
     * @type {string}
     */
    this.name = name;

    /**
     * Parent namespace.
     * @type {Namespace|null}
     */
    this.parent = null;

    /**
     * Whether already resolved or not.
     * @type {boolean}
     */
    this.resolved = false;

    /**
     * Comment text, if any.
     * @type {string|null}
     */
    this.comment = null;

    /**
     * Defining file name.
     * @type {string|null}
     */
    this.filename = null;
}

Object.defineProperties(ReflectionObject.prototype, {

    /**
     * Reference to the root namespace.
     * @name ReflectionObject#root
     * @type {Root}
     * @readonly
     */
    root: {
        get: function() {
            var ptr = this;
            while (ptr.parent !== null)
                ptr = ptr.parent;
            return ptr;
        }
    },

    /**
     * Full name including leading dot.
     * @name ReflectionObject#fullName
     * @type {string}
     * @readonly
     */
    fullName: {
        get: function() {
            var path = [ this.name ],
                ptr = this.parent;
            while (ptr) {
                path.unshift(ptr.name);
                ptr = ptr.parent;
            }
            return path.join(".");
        }
    }
});

/**
 * Converts this reflection object to its descriptor representation.
 * @returns {Object.<string,*>} Descriptor
 * @abstract
 */
ReflectionObject.prototype.toJSON = /* istanbul ignore next */ function toJSON() {
    throw Error(); // not implemented, shouldn't happen
};

/**
 * Called when this object is added to a parent.
 * @param {ReflectionObject} parent Parent added to
 * @returns {undefined}
 */
ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
        this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root = parent.root;
    if (root instanceof Root)
        root._handleAdd(this);
};

/**
 * Called when this object is removed from a parent.
 * @param {ReflectionObject} parent Parent removed from
 * @returns {undefined}
 */
ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root = parent.root;
    if (root instanceof Root)
        root._handleRemove(this);
    this.parent = null;
    this.resolved = false;
};

/**
 * Resolves this objects type references.
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;
    if (this.root instanceof Root)
        this.resolved = true; // only if part of a root
    return this;
};

/**
 * Gets an option value.
 * @param {string} name Option name
 * @returns {*} Option value or `undefined` if not set
 */
ReflectionObject.prototype.getOption = function getOption(name) {
    if (this.options)
        return this.options[name];
    return undefined;
};

/**
 * Sets an option.
 * @param {string} name Option name
 * @param {*} value Option value
 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (!ifNotSet || !this.options || this.options[name] === undefined)
        (this.options || (this.options = {}))[name] = value;
    return this;
};

/**
 * Sets multiple options.
 * @param {Object.<string,*>} options Options to set
 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
            this.setOption(keys[i], options[keys[i]], ifNotSet);
    return this;
};

/**
 * Converts this instance to its string representation.
 * @returns {string} Class name[, space, full name]
 */
ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className,
        fullName  = this.fullName;
    if (fullName.length)
        return className + " " + fullName;
    return className;
};

// Sets up cyclic dependencies (called in index-light)
ReflectionObject._configure = function(Root_) {
    Root = Root_;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/oneof.js":
/*!***********************************************!*\
  !*** ../node_modules/protobufjs/src/oneof.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = OneOf;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "../node_modules/protobufjs/src/object.js");
((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

var Field = __webpack_require__(/*! ./field */ "../node_modules/protobufjs/src/field.js"),
    util  = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object.<string,*>} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function OneOf(name, fieldNames, options, comment) {
    if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = undefined;
    }
    ReflectionObject.call(this, name, options);

    /* istanbul ignore if */
    if (!(fieldNames === undefined || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");

    /**
     * Field names that belong to this oneof.
     * @type {string[]}
     */
    this.oneof = fieldNames || []; // toJSON, marker

    /**
     * Fields that belong to this oneof as an array for iteration.
     * @type {Field[]}
     * @readonly
     */
    this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

    /**
     * Comment for this field.
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Oneof descriptor.
 * @interface IOneOf
 * @property {Array.<string>} oneof Oneof field names
 * @property {Object.<string,*>} [options] Oneof options
 */

/**
 * Constructs a oneof from a oneof descriptor.
 * @param {string} name Oneof name
 * @param {IOneOf} json Oneof descriptor
 * @returns {OneOf} Created oneof
 * @throws {TypeError} If arguments are invalid
 */
OneOf.fromJSON = function fromJSON(name, json) {
    return new OneOf(name, json.oneof, json.options, json.comment);
};

/**
 * Converts this oneof to a oneof descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IOneOf} Oneof descriptor
 */
OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options" , this.options,
        "oneof"   , this.oneof,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Adds the fields of the specified oneof to the parent if not already done so.
 * @param {OneOf} oneof The oneof
 * @returns {undefined}
 * @inner
 * @ignore
 */
function addFieldsToParent(oneof) {
    if (oneof.parent)
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
            if (!oneof.fieldsArray[i].parent)
                oneof.parent.add(oneof.fieldsArray[i]);
}

/**
 * Adds a field to this oneof and removes it from its current parent, if any.
 * @param {Field} field Field to add
 * @returns {OneOf} `this`
 */
OneOf.prototype.add = function add(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
    this.oneof.push(field.name);
    this.fieldsArray.push(field);
    field.partOf = this; // field.parent remains null
    addFieldsToParent(this);
    return this;
};

/**
 * Removes a field from this oneof and puts it back to the oneof's parent.
 * @param {Field} field Field to remove
 * @returns {OneOf} `this`
 */
OneOf.prototype.remove = function remove(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    var index = this.fieldsArray.indexOf(field);

    /* istanbul ignore if */
    if (index < 0)
        throw Error(field + " is not a member of " + this);

    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field.name);

    /* istanbul ignore else */
    if (index > -1) // theoretical
        this.oneof.splice(index, 1);

    field.partOf = null;
    return this;
};

/**
 * @override
 */
OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self = this;
    // Collect present fields
    for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
            field.partOf = self;
            self.fieldsArray.push(field);
        }
    }
    // Add not yet present fields
    addFieldsToParent(this);
};

/**
 * @override
 */
OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
            field.parent.remove(field);
    ReflectionObject.prototype.onRemove.call(this, parent);
};

/**
 * Decorator function as returned by {@link OneOf.d} (TypeScript).
 * @typedef OneOfDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} oneofName OneOf name
 * @returns {undefined}
 */

/**
 * OneOf decorator (TypeScript).
 * @function
 * @param {...string} fieldNames Field names
 * @returns {OneOfDecorator} Decorator function
 * @template T extends string
 */
OneOf.d = function decorateOneOf() {
    var fieldNames = new Array(arguments.length),
        index = 0;
    while (index < arguments.length)
        fieldNames[index] = arguments[index++];
    return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor)
            .add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
            get: util.oneOfGetter(fieldNames),
            set: util.oneOfSetter(fieldNames)
        });
    };
};


/***/ }),

/***/ "../node_modules/protobufjs/src/reader.js":
/*!************************************************!*\
  !*** ../node_modules/protobufjs/src/reader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
                return util.Buffer.isBuffer(buffer)
                    ? new BufferReader(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = create();

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "../node_modules/protobufjs/src/reader_buffer.js":
/*!*******************************************************!*\
  !*** ../node_modules/protobufjs/src/reader_buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(/*! ./reader */ "../node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();


/***/ }),

/***/ "../node_modules/protobufjs/src/root.js":
/*!**********************************************!*\
  !*** ../node_modules/protobufjs/src/root.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Root;

// extends Namespace
var Namespace = __webpack_require__(/*! ./namespace */ "../node_modules/protobufjs/src/namespace.js");
((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

var Field   = __webpack_require__(/*! ./field */ "../node_modules/protobufjs/src/field.js"),
    Enum    = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    OneOf   = __webpack_require__(/*! ./oneof */ "../node_modules/protobufjs/src/oneof.js"),
    util    = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

var Type,   // cyclic
    parse,  // might be excluded
    common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */
function Root(options) {
    Namespace.call(this, "", options);

    /**
     * Deferred extension fields.
     * @type {Field[]}
     */
    this.deferred = [];

    /**
     * Resolved file names of loaded files.
     * @type {string[]}
     */
    this.files = [];
}

/**
 * Loads a namespace descriptor into a root namespace.
 * @param {INamespace} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @returns {Root} Root namespace
 */
Root.fromJSON = function fromJSON(json, root) {
    if (!root)
        root = new Root();
    if (json.options)
        root.setOptions(json.options);
    return root.addJSON(json.nested);
};

/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {string|null} Resolved path to `target` or `null` to skip the file
 */
Root.prototype.resolvePath = util.path.resolve;

// A symbol-like function to safely signal synchronous loading
/* istanbul ignore next */
function SYNC() {} // eslint-disable-line no-empty-function

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} options Parse options
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 */
Root.prototype.load = function load(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = undefined;
    }
    var self = this;
    if (!callback)
        return util.asPromise(load, self, filename, options);

    var sync = callback === SYNC; // undocumented

    // Finishes loading by calling the callback (exactly once)
    function finish(err, root) {
        /* istanbul ignore if */
        if (!callback)
            return;
        var cb = callback;
        callback = null;
        if (sync)
            throw err;
        cb(err, root);
    }

    // Bundled definition existence checking
    function getBundledFileName(filename) {
        var idx = filename.lastIndexOf("google/protobuf/");
        if (idx > -1) {
            var altname = filename.substring(idx);
            if (altname in common) return altname;
        }
        return null;
    }

    // Processes a single file
    function process(filename, source) {
        try {
            if (util.isString(source) && source.charAt(0) === "{")
                source = JSON.parse(source);
            if (!util.isString(source))
                self.setOptions(source.options).addJSON(source.nested);
            else {
                parse.filename = filename;
                var parsed = parse(source, self, options),
                    resolved,
                    i = 0;
                if (parsed.imports)
                    for (; i < parsed.imports.length; ++i)
                        if (resolved = getBundledFileName(parsed.imports[i]) || self.resolvePath(filename, parsed.imports[i]))
                            fetch(resolved);
                if (parsed.weakImports)
                    for (i = 0; i < parsed.weakImports.length; ++i)
                        if (resolved = getBundledFileName(parsed.weakImports[i]) || self.resolvePath(filename, parsed.weakImports[i]))
                            fetch(resolved, true);
            }
        } catch (err) {
            finish(err);
        }
        if (!sync && !queued)
            finish(null, self); // only once anyway
    }

    // Fetches a single file
    function fetch(filename, weak) {

        // Skip if already loaded / attempted
        if (self.files.indexOf(filename) > -1)
            return;
        self.files.push(filename);

        // Shortcut bundled definitions
        if (filename in common) {
            if (sync)
                process(filename, common[filename]);
            else {
                ++queued;
                setTimeout(function() {
                    --queued;
                    process(filename, common[filename]);
                });
            }
            return;
        }

        // Otherwise fetch from disk or network
        if (sync) {
            var source;
            try {
                source = util.fs.readFileSync(filename).toString("utf8");
            } catch (err) {
                if (!weak)
                    finish(err);
                return;
            }
            process(filename, source);
        } else {
            ++queued;
            util.fetch(filename, function(err, source) {
                --queued;
                /* istanbul ignore if */
                if (!callback)
                    return; // terminated meanwhile
                if (err) {
                    /* istanbul ignore else */
                    if (!weak)
                        finish(err);
                    else if (!queued) // can't be covered reliably
                        finish(null, self);
                    return;
                }
                process(filename, source);
            });
        }
    }
    var queued = 0;

    // Assembling the root namespace doesn't require working type
    // references anymore, so we can load everything in parallel
    if (util.isString(filename))
        filename = [ filename ];
    for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self.resolvePath("", filename[i]))
            fetch(resolved);

    if (sync)
        return self;
    if (!queued)
        finish(null, self);
    return undefined;
};
// function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Promise<Root>} Promise
 * @variation 3
 */
// function load(filename:string, [options:IParseOptions]):Promise<Root>

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
 * @function Root#loadSync
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 */
Root.prototype.loadSync = function loadSync(filename, options) {
    if (!util.isNode)
        throw Error("not supported");
    return this.load(filename, options, SYNC);
};

/**
 * @override
 */
Root.prototype.resolveAll = function resolveAll() {
    if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
};

// only uppercased (and thus conflict-free) children are exposed, see below
var exposeRe = /^[A-Z]/;

/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */
function tryHandleExtension(root, field) {
    var extendedType = field.parent.lookup(field.extend);
    if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
    }
    return false;
}

/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */
Root.prototype._handleAdd = function _handleAdd(object) {
    if (object instanceof Field) {

        if (/* an extension field (implies not part of a oneof) */ object.extend !== undefined && /* not already handled */ !object.extensionField)
            if (!tryHandleExtension(this, object))
                this.deferred.push(object);

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            object.parent[object.name] = object.values; // expose enum values as property of its parent

    } else if (!(object instanceof OneOf)) /* everything else is a namespace */ {

        if (object instanceof Type) // Try to handle any deferred extensions
            for (var i = 0; i < this.deferred.length;)
                if (tryHandleExtension(this, this.deferred[i]))
                    this.deferred.splice(i, 1);
                else
                    ++i;
        for (var j = 0; j < /* initializes */ object.nestedArray.length; ++j) // recurse into the namespace
            this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
            object.parent[object.name] = object; // expose namespace as property of its parent
    }

    // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
    // properties of namespaces just like static code does. This allows using a .d.ts generated for
    // a static module with reflection-based solutions where the condition is met.
};

/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */
Root.prototype._handleRemove = function _handleRemove(object) {
    if (object instanceof Field) {

        if (/* an extension field */ object.extend !== undefined) {
            if (/* already handled */ object.extensionField) { // remove its sister field
                object.extensionField.parent.remove(object.extensionField);
                object.extensionField = null;
            } else { // cancel the extension
                var index = this.deferred.indexOf(object);
                /* istanbul ignore else */
                if (index > -1)
                    this.deferred.splice(index, 1);
            }
        }

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose enum values

    } else if (object instanceof Namespace) {

        for (var i = 0; i < /* initializes */ object.nestedArray.length; ++i) // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose namespaces

    }
};

// Sets up cyclic dependencies (called in index-light)
Root._configure = function(Type_, parse_, common_) {
    Type   = Type_;
    parse  = parse_;
    common = common_;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/roots.js":
/*!***********************************************!*\
  !*** ../node_modules/protobufjs/src/roots.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "../node_modules/protobufjs/src/rpc.js":
/*!*********************************************!*\
  !*** ../node_modules/protobufjs/src/rpc.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "../node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "../node_modules/protobufjs/src/rpc/service.js":
/*!*****************************************************!*\
  !*** ../node_modules/protobufjs/src/rpc/service.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/service.js":
/*!*************************************************!*\
  !*** ../node_modules/protobufjs/src/service.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

// extends Namespace
var Namespace = __webpack_require__(/*! ./namespace */ "../node_modules/protobufjs/src/namespace.js");
((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

var Method = __webpack_require__(/*! ./method */ "../node_modules/protobufjs/src/method.js"),
    util   = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js"),
    rpc    = __webpack_require__(/*! ./rpc */ "../node_modules/protobufjs/src/rpc.js");

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
function Service(name, options) {
    Namespace.call(this, name, options);

    /**
     * Service methods.
     * @type {Object.<string,Method>}
     */
    this.methods = {}; // toJSON, marker

    /**
     * Cached methods as an array.
     * @type {Method[]|null}
     * @private
     */
    this._methodsArray = null;
}

/**
 * Service descriptor.
 * @interface IService
 * @extends INamespace
 * @property {Object.<string,IMethod>} methods Method descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {IService} json Service descriptor
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */
Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    /* istanbul ignore else */
    if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
            service.add(Method.fromJSON(names[i], json.methods[names[i]]));
    if (json.nested)
        service.addJSON(json.nested);
    service.comment = json.comment;
    return service;
};

/**
 * Converts this service to a service descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IService} Service descriptor
 */
Service.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options" , inherited && inherited.options || undefined,
        "methods" , Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */ {},
        "nested"  , inherited && inherited.nested || undefined,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */
Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
});

function clearCache(service) {
    service._methodsArray = null;
    return service;
}

/**
 * @override
 */
Service.prototype.get = function get(name) {
    return this.methods[name]
        || Namespace.prototype.get.call(this, name);
};

/**
 * @override
 */
Service.prototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
    return Namespace.prototype.resolve.call(this);
};

/**
 * @override
 */
Service.prototype.add = function add(object) {

    /* istanbul ignore if */
    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * @override
 */
Service.prototype.remove = function remove(object) {
    if (object instanceof Method) {

        /* istanbul ignore if */
        if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */
Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i = 0, method; i < /* initializes */ this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = util.codegen(["r","c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
            m: method,
            q: method.resolvedRequestType.ctor,
            s: method.resolvedResponseType.ctor
        });
    }
    return rpcService;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/type.js":
/*!**********************************************!*\
  !*** ../node_modules/protobufjs/src/type.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Type;

// extends Namespace
var Namespace = __webpack_require__(/*! ./namespace */ "../node_modules/protobufjs/src/namespace.js");
((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

var Enum      = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    OneOf     = __webpack_require__(/*! ./oneof */ "../node_modules/protobufjs/src/oneof.js"),
    Field     = __webpack_require__(/*! ./field */ "../node_modules/protobufjs/src/field.js"),
    MapField  = __webpack_require__(/*! ./mapfield */ "../node_modules/protobufjs/src/mapfield.js"),
    Service   = __webpack_require__(/*! ./service */ "../node_modules/protobufjs/src/service.js"),
    Message   = __webpack_require__(/*! ./message */ "../node_modules/protobufjs/src/message.js"),
    Reader    = __webpack_require__(/*! ./reader */ "../node_modules/protobufjs/src/reader.js"),
    Writer    = __webpack_require__(/*! ./writer */ "../node_modules/protobufjs/src/writer.js"),
    util      = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js"),
    encoder   = __webpack_require__(/*! ./encoder */ "../node_modules/protobufjs/src/encoder.js"),
    decoder   = __webpack_require__(/*! ./decoder */ "../node_modules/protobufjs/src/decoder.js"),
    verifier  = __webpack_require__(/*! ./verifier */ "../node_modules/protobufjs/src/verifier.js"),
    converter = __webpack_require__(/*! ./converter */ "../node_modules/protobufjs/src/converter.js"),
    wrappers  = __webpack_require__(/*! ./wrappers */ "../node_modules/protobufjs/src/wrappers.js");

/**
 * Constructs a new reflected message type instance.
 * @classdesc Reflected message type.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Message name
 * @param {Object.<string,*>} [options] Declared options
 */
function Type(name, options) {
    Namespace.call(this, name, options);

    /**
     * Message fields.
     * @type {Object.<string,Field>}
     */
    this.fields = {};  // toJSON, marker

    /**
     * Oneofs declared within this namespace, if any.
     * @type {Object.<string,OneOf>}
     */
    this.oneofs = undefined; // toJSON

    /**
     * Extension ranges, if any.
     * @type {number[][]}
     */
    this.extensions = undefined; // toJSON

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    /*?
     * Whether this type is a legacy group.
     * @type {boolean|undefined}
     */
    this.group = undefined; // toJSON

    /**
     * Cached fields by id.
     * @type {Object.<number,Field>|null}
     * @private
     */
    this._fieldsById = null;

    /**
     * Cached fields as an array.
     * @type {Field[]|null}
     * @private
     */
    this._fieldsArray = null;

    /**
     * Cached oneofs as an array.
     * @type {OneOf[]|null}
     * @private
     */
    this._oneofsArray = null;

    /**
     * Cached constructor.
     * @type {Constructor<{}>}
     * @private
     */
    this._ctor = null;
}

Object.defineProperties(Type.prototype, {

    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {Object.<number,Field>}
     * @readonly
     */
    fieldsById: {
        get: function() {

            /* istanbul ignore if */
            if (this._fieldsById)
                return this._fieldsById;

            this._fieldsById = {};
            for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                var field = this.fields[names[i]],
                    id = field.id;

                /* istanbul ignore if */
                if (this._fieldsById[id])
                    throw Error("duplicate id " + id + " in " + this);

                this._fieldsById[id] = field;
            }
            return this._fieldsById;
        }
    },

    /**
     * Fields of this message as an array for iteration.
     * @name Type#fieldsArray
     * @type {Field[]}
     * @readonly
     */
    fieldsArray: {
        get: function() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
    },

    /**
     * Oneofs of this message as an array for iteration.
     * @name Type#oneofsArray
     * @type {OneOf[]}
     * @readonly
     */
    oneofsArray: {
        get: function() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
    },

    /**
     * The registered constructor, if any registered, otherwise a generic constructor.
     * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
     * @name Type#ctor
     * @type {Constructor<{}>}
     */
    ctor: {
        get: function() {
            return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {

            // Ensure proper prototype
            var prototype = ctor.prototype;
            if (!(prototype instanceof Message)) {
                (ctor.prototype = new Message()).constructor = ctor;
                util.merge(ctor.prototype, prototype);
            }

            // Classes and messages reference their reflected type
            ctor.$type = ctor.prototype.$type = this;

            // Mix in static methods
            util.merge(ctor, Message, true);

            this._ctor = ctor;

            // Messages have non-enumerable default values on their prototype
            var i = 0;
            for (; i < /* initializes */ this.fieldsArray.length; ++i)
                this._fieldsArray[i].resolve(); // ensures a proper value

            // Messages have non-enumerable getters and setters for each virtual oneof field
            var ctorProperties = {};
            for (i = 0; i < /* initializes */ this.oneofsArray.length; ++i)
                ctorProperties[this._oneofsArray[i].resolve().name] = {
                    get: util.oneOfGetter(this._oneofsArray[i].oneof),
                    set: util.oneOfSetter(this._oneofsArray[i].oneof)
                };
            if (i)
                Object.defineProperties(ctor.prototype, ctorProperties);
        }
    }
});

/**
 * Generates a constructor function for the specified type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
Type.generateConstructor = function generateConstructor(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen(["p"], mtype.name);
    // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype
    for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map) gen
            ("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen
            ("this%s=[]", util.safeProp(field.name));
    return gen
    ("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
        ("this[ks[i]]=p[ks[i]]");
    /* eslint-enable no-unexpected-multiline */
};

function clearCache(type) {
    type._fieldsById = type._fieldsArray = type._oneofsArray = null;
    delete type.encode;
    delete type.decode;
    delete type.verify;
    return type;
}

/**
 * Message type descriptor.
 * @interface IType
 * @extends INamespace
 * @property {Object.<string,IOneOf>} [oneofs] Oneof descriptors
 * @property {Object.<string,IField>} fields Field descriptors
 * @property {number[][]} [extensions] Extension ranges
 * @property {number[][]} [reserved] Reserved ranges
 * @property {boolean} [group=false] Whether a legacy group or not
 */

/**
 * Creates a message type from a message type descriptor.
 * @param {string} name Message name
 * @param {IType} json Message type descriptor
 * @returns {Type} Created message type
 */
Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    var names = Object.keys(json.fields),
        i = 0;
    for (; i < names.length; ++i)
        type.add(
            ( typeof json.fields[names[i]].keyType !== "undefined"
            ? MapField.fromJSON
            : Field.fromJSON )(names[i], json.fields[names[i]])
        );
    if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
            type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
    if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add( // most to least likely
                ( nested.id !== undefined
                ? Field.fromJSON
                : nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
    if (json.group)
        type.group = true;
    if (json.comment)
        type.comment = json.comment;
    return type;
};

/**
 * Converts this message type to a message type descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IType} Message type descriptor
 */
Type.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options"    , inherited && inherited.options || undefined,
        "oneofs"     , Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields"     , Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) { return !obj.declaringField; }), toJSONOptions) || {},
        "extensions" , this.extensions && this.extensions.length ? this.extensions : undefined,
        "reserved"   , this.reserved && this.reserved.length ? this.reserved : undefined,
        "group"      , this.group || undefined,
        "nested"     , inherited && inherited.nested || undefined,
        "comment"    , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
Type.prototype.resolveAll = function resolveAll() {
    var fields = this.fieldsArray, i = 0;
    while (i < fields.length)
        fields[i++].resolve();
    var oneofs = this.oneofsArray; i = 0;
    while (i < oneofs.length)
        oneofs[i++].resolve();
    return Namespace.prototype.resolveAll.call(this);
};

/**
 * @override
 */
Type.prototype.get = function get(name) {
    return this.fields[name]
        || this.oneofs && this.oneofs[name]
        || this.nested && this.nested[name]
        || null;
};

/**
 * Adds a nested object to this type.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
 */
Type.prototype.add = function add(object) {

    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Field && object.extend === undefined) {
        // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
        // The root object takes care of adding distinct sister-fields to the respective extended
        // type instead.

        // avoids calling the getter if not absolutely necessary because it's called quite frequently
        if (this._fieldsById ? /* istanbul ignore next */ this._fieldsById[object.id] : this.fieldsById[object.id])
            throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
            throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
            throw Error("name '" + object.name + "' is reserved in " + this);

        if (object.parent)
            object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {
        if (!this.oneofs)
            this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * Removes a nested object from this type.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this type
 */
Type.prototype.remove = function remove(object) {
    if (object instanceof Field && object.extend === undefined) {
        // See Type#add for the reason why extension fields are excluded here.

        /* istanbul ignore if */
        if (!this.fields || this.fields[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {

        /* istanbul ignore if */
        if (!this.oneofs || this.oneofs[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
};

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<{}>} Message instance
 */
Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
};

/**
 * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
 * @returns {Type} `this`
 */
Type.prototype.setup = function setup() {
    // Sets up everything at once so that the prototype chain does not have to be re-evaluated
    // multiple times (V8, soft-deopt prototype-check).

    var fullName = this.fullName,
        types    = [];
    for (var i = 0; i < /* initializes */ this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);

    // Replace setup methods with type-specific generated functions
    this.encode = encoder(this)({
        Writer : Writer,
        types  : types,
        util   : util
    });
    this.decode = decoder(this)({
        Reader : Reader,
        types  : types,
        util   : util
    });
    this.verify = verifier(this)({
        types : types,
        util  : util
    });
    this.fromObject = converter.fromObject(this)({
        types : types,
        util  : util
    });
    this.toObject = converter.toObject(this)({
        types : types,
        util  : util
    });

    // Inject custom wrappers for common types
    var wrapper = wrappers[fullName];
    if (wrapper) {
        var originalThis = Object.create(this);
        // if (wrapper.fromObject) {
            originalThis.fromObject = this.fromObject;
            this.fromObject = wrapper.fromObject.bind(originalThis);
        // }
        // if (wrapper.toObject) {
            originalThis.toObject = this.toObject;
            this.toObject = wrapper.toObject.bind(originalThis);
        // }
    }

    return this;
};

/**
 * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encode = function encode_setup(message, writer) {
    return this.setup().encode(message, writer); // overrides this method
};

/**
 * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
};

/**
 * Decodes a message of this type.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError<{}>} If required fields are missing
 */
Type.prototype.decode = function decode_setup(reader, length) {
    return this.setup().decode(reader, length); // overrides this method
};

/**
 * Decodes a message of this type preceeded by its byte length as a varint.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */
Type.prototype.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof Reader))
        reader = Reader.create(reader);
    return this.decode(reader, reader.uint32());
};

/**
 * Verifies that field values are valid and that required fields are present.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {null|string} `null` if valid, otherwise the reason why it is not
 */
Type.prototype.verify = function verify_setup(message) {
    return this.setup().verify(message); // overrides this method
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object to convert
 * @returns {Message<{}>} Message instance
 */
Type.prototype.fromObject = function fromObject(object) {
    return this.setup().fromObject(object);
};

/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @interface IConversionOptions
 * @property {Function} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {Function} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {Function} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
 * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
Type.prototype.toObject = function toObject(message, options) {
    return this.setup().toObject(message, options);
};

/**
 * Decorator function as returned by {@link Type.d} (TypeScript).
 * @typedef TypeDecorator
 * @type {function}
 * @param {Constructor<T>} target Target constructor
 * @returns {undefined}
 * @template T extends Message<T>
 */

/**
 * Type decorator (TypeScript).
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {TypeDecorator<T>} Decorator function
 * @template T extends Message<T>
 */
Type.d = function decorateType(typeName) {
    return function typeDecorator(target) {
        util.decorateType(target, typeName);
    };
};


/***/ }),

/***/ "../node_modules/protobufjs/src/types.js":
/*!***********************************************!*\
  !*** ../node_modules/protobufjs/src/types.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Common type constants.
 * @namespace
 */
var types = exports;

var util = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

var s = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];

function bake(values, offset) {
    var i = 0, o = {};
    offset |= 0;
    while (i < values.length) o[s[i + offset]] = values[i++];
    return o;
}

/**
 * Basic type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 * @property {number} bytes=2 Ldelim wire type
 */
types.basic = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2,
    /* bytes    */ 2
]);

/**
 * Basic type defaults.
 * @type {Object.<string,*>}
 * @const
 * @property {number} double=0 Double default
 * @property {number} float=0 Float default
 * @property {number} int32=0 Int32 default
 * @property {number} uint32=0 Uint32 default
 * @property {number} sint32=0 Sint32 default
 * @property {number} fixed32=0 Fixed32 default
 * @property {number} sfixed32=0 Sfixed32 default
 * @property {number} int64=0 Int64 default
 * @property {number} uint64=0 Uint64 default
 * @property {number} sint64=0 Sint32 default
 * @property {number} fixed64=0 Fixed64 default
 * @property {number} sfixed64=0 Sfixed64 default
 * @property {boolean} bool=false Bool default
 * @property {string} string="" String default
 * @property {Array.<number>} bytes=Array(0) Bytes default
 * @property {null} message=null Message default
 */
types.defaults = bake([
    /* double   */ 0,
    /* float    */ 0,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 0,
    /* sfixed32 */ 0,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 0,
    /* sfixed64 */ 0,
    /* bool     */ false,
    /* string   */ "",
    /* bytes    */ util.emptyArray,
    /* message  */ null
]);

/**
 * Basic long type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 */
types.long = bake([
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1
], 7);

/**
 * Allowed types for map keys with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 */
types.mapKey = bake([
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2
], 2);

/**
 * Allowed types for packed repeated fields with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 */
types.packed = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0
]);


/***/ }),

/***/ "../node_modules/protobufjs/src/util.js":
/*!**********************************************!*\
  !*** ../node_modules/protobufjs/src/util.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Various utility functions.
 * @namespace
 */
var util = module.exports = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

var roots = __webpack_require__(/*! ./roots */ "../node_modules/protobufjs/src/roots.js");

var Type, // cyclic
    Enum;

util.codegen = __webpack_require__(/*! @protobufjs/codegen */ "../node_modules/@protobufjs/codegen/index.js");
util.fetch   = __webpack_require__(/*! @protobufjs/fetch */ "../node_modules/@protobufjs/fetch/index.js");
util.path    = __webpack_require__(/*! @protobufjs/path */ "../node_modules/@protobufjs/path/index.js");

/**
 * Node's fs module if available.
 * @type {Object.<string,*>}
 */
util.fs = util.inquire("fs");

/**
 * Converts an object's values to an array.
 * @param {Object.<string,*>} object Object to convert
 * @returns {Array.<*>} Converted array
 */
util.toArray = function toArray(object) {
    if (object) {
        var keys  = Object.keys(object),
            array = new Array(keys.length),
            index = 0;
        while (index < keys.length)
            array[index] = object[keys[index++]];
        return array;
    }
    return [];
};

/**
 * Converts an array of keys immediately followed by their respective value to an object, omitting undefined values.
 * @param {Array.<*>} array Array to convert
 * @returns {Object.<string,*>} Converted object
 */
util.toObject = function toObject(array) {
    var object = {},
        index  = 0;
    while (index < array.length) {
        var key = array[index++],
            val = array[index++];
        if (val !== undefined)
            object[key] = val;
    }
    return object;
};

var safePropBackslashRe = /\\/g,
    safePropQuoteRe     = /"/g;

/**
 * Tests whether the specified name is a reserved word in JS.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
util.isReserved = function isReserved(name) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
};

/**
 * Returns a safe property accessor for the specified property name.
 * @param {string} prop Property name
 * @returns {string} Safe accessor
 */
util.safeProp = function safeProp(prop) {
    if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
        return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
    return "." + prop;
};

/**
 * Converts the first character of a string to upper case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
};

var camelCaseRe = /_([a-z])/g;

/**
 * Converts a string to camel case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.camelCase = function camelCase(str) {
    return str.substring(0, 1)
         + str.substring(1)
               .replace(camelCaseRe, function($0, $1) { return $1.toUpperCase(); });
};

/**
 * Compares reflected fields by id.
 * @param {Field} a First field
 * @param {Field} b Second field
 * @returns {number} Comparison value
 */
util.compareFieldsById = function compareFieldsById(a, b) {
    return a.id - b.id;
};

/**
 * Decorator helper for types (TypeScript).
 * @param {Constructor<T>} ctor Constructor function
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {Type} Reflected type
 * @template T extends Message<T>
 * @property {Root} root Decorators root
 */
util.decorateType = function decorateType(ctor, typeName) {

    /* istanbul ignore if */
    if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
            util.decorateRoot.remove(ctor.$type);
            ctor.$type.name = typeName;
            util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
    }

    /* istanbul ignore next */
    if (!Type)
        Type = __webpack_require__(/*! ./type */ "../node_modules/protobufjs/src/type.js");

    var type = new Type(typeName || ctor.name);
    util.decorateRoot.add(type);
    type.ctor = ctor; // sets up .encode, .decode etc.
    Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
    Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
    return type;
};

var decorateEnumIndex = 0;

/**
 * Decorator helper for enums (TypeScript).
 * @param {Object} object Enum object
 * @returns {Enum} Reflected enum
 */
util.decorateEnum = function decorateEnum(object) {

    /* istanbul ignore if */
    if (object.$type)
        return object.$type;

    /* istanbul ignore next */
    if (!Enum)
        Enum = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js");

    var enm = new Enum("Enum" + decorateEnumIndex++, object);
    util.decorateRoot.add(enm);
    Object.defineProperty(object, "$type", { value: enm, enumerable: false });
    return enm;
};

/**
 * Decorator root (TypeScript).
 * @name util.decorateRoot
 * @type {Root}
 * @readonly
 */
Object.defineProperty(util, "decorateRoot", {
    get: function() {
        return roots["decorated"] || (roots["decorated"] = new (__webpack_require__(/*! ./root */ "../node_modules/protobufjs/src/root.js"))());
    }
});


/***/ }),

/***/ "../node_modules/protobufjs/src/util/longbits.js":
/*!*******************************************************!*\
  !*** ../node_modules/protobufjs/src/util/longbits.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "../node_modules/protobufjs/src/util/minimal.js":
/*!******************************************************!*\
  !*** ../node_modules/protobufjs/src/util/minimal.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "../node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "../node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "../node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__(/*! @protobufjs/float */ "../node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "../node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "../node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(/*! @protobufjs/pool */ "../node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(/*! ./longbits */ "../node_modules/protobufjs/src/util/longbits.js");

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/protobufjs/src/verifier.js":
/*!**************************************************!*\
  !*** ../node_modules/protobufjs/src/verifier.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = verifier;

var Enum      = __webpack_require__(/*! ./enum */ "../node_modules/protobufjs/src/enum.js"),
    util      = __webpack_require__(/*! ./util */ "../node_modules/protobufjs/src/util.js");

function invalid(field, expected) {
    return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:"+field.keyType+"}" : "") + " expected";
}

/**
 * Generates a partial value verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyValue(gen, field, fieldIndex, ref) {
    /* eslint-disable no-unexpected-multiline */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(%s){", ref)
                ("default:")
                    ("return%j", invalid(field, "enum value"));
            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen
                ("case %i:", field.resolvedType.values[keys[j]]);
            gen
                    ("break")
            ("}");
        } else {
            gen
            ("{")
                ("var e=types[%i].verify(%s);", fieldIndex, ref)
                ("if(e)")
                    ("return%j+e", field.name + ".")
            ("}");
        }
    } else {
        switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32": gen
                ("if(!util.isInteger(%s))", ref)
                    ("return%j", invalid(field, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)
                    ("return%j", invalid(field, "integer|Long"));
                break;
            case "float":
            case "double": gen
                ("if(typeof %s!==\"number\")", ref)
                    ("return%j", invalid(field, "number"));
                break;
            case "bool": gen
                ("if(typeof %s!==\"boolean\")", ref)
                    ("return%j", invalid(field, "boolean"));
                break;
            case "string": gen
                ("if(!util.isString(%s))", ref)
                    ("return%j", invalid(field, "string"));
                break;
            case "bytes": gen
                ("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)
                    ("return%j", invalid(field, "buffer"));
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a partial key verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyKey(gen, field, ref) {
    /* eslint-disable no-unexpected-multiline */
    switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32": gen
            ("if(!util.key32Re.test(%s))", ref)
                ("return%j", invalid(field, "integer key"));
            break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64": gen
            ("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
                ("return%j", invalid(field, "integer|Long key"));
            break;
        case "bool": gen
            ("if(!util.key2Re.test(%s))", ref)
                ("return%j", invalid(field, "boolean key"));
            break;
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a verifier specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function verifier(mtype) {
    /* eslint-disable no-unexpected-multiline */

    var gen = util.codegen(["m"], mtype.name + "$verify")
    ("if(typeof m!==\"object\"||m===null)")
        ("return%j", "object expected");
    var oneofs = mtype.oneofsArray,
        seenFirstField = {};
    if (oneofs.length) gen
    ("var p={}");

    for (var i = 0; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            ref   = "m" + util.safeProp(field.name);

        if (field.optional) gen
        ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null

        // map fields
        if (field.map) { gen
            ("if(!util.isObject(%s))", ref)
                ("return%j", invalid(field, "object"))
            ("var k=Object.keys(%s)", ref)
            ("for(var i=0;i<k.length;++i){");
                genVerifyKey(gen, field, "k[i]");
                genVerifyValue(gen, field, i, ref + "[k[i]]")
            ("}");

        // repeated fields
        } else if (field.repeated) { gen
            ("if(!Array.isArray(%s))", ref)
                ("return%j", invalid(field, "array"))
            ("for(var i=0;i<%s.length;++i){", ref);
                genVerifyValue(gen, field, i, ref + "[i]")
            ("}");

        // required or present fields
        } else {
            if (field.partOf) {
                var oneofProp = util.safeProp(field.partOf.name);
                if (seenFirstField[field.partOf.name] === 1) gen
            ("if(p%s===1)", oneofProp)
                ("return%j", field.partOf.name + ": multiple values");
                seenFirstField[field.partOf.name] = 1;
                gen
            ("p%s=1", oneofProp);
            }
            genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen
        ("}");
    }
    return gen
    ("return null");
    /* eslint-enable no-unexpected-multiline */
}

/***/ }),

/***/ "../node_modules/protobufjs/src/wrappers.js":
/*!**************************************************!*\
  !*** ../node_modules/protobufjs/src/wrappers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Wrappers for common types.
 * @type {Object.<string,IWrapper>}
 * @const
 */
var wrappers = exports;

var Message = __webpack_require__(/*! ./message */ "../node_modules/protobufjs/src/message.js");

/**
 * From object converter part of an {@link IWrapper}.
 * @typedef WrapperFromObjectConverter
 * @type {function}
 * @param {Object.<string,*>} object Plain object
 * @returns {Message<{}>} Message instance
 * @this Type
 */

/**
 * To object converter part of an {@link IWrapper}.
 * @typedef WrapperToObjectConverter
 * @type {function}
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @this Type
 */

/**
 * Common type wrapper part of {@link wrappers}.
 * @interface IWrapper
 * @property {WrapperFromObjectConverter} [fromObject] From object converter
 * @property {WrapperToObjectConverter} [toObject] To object converter
 */

// Custom wrapper for Any
wrappers[".google.protobuf.Any"] = {

    fromObject: function(object) {

        // unwrap value type if mapped
        if (object && object["@type"]) {
            var type = this.lookup(object["@type"]);
            /* istanbul ignore else */
            if (type) {
                // type_url does not accept leading "."
                var type_url = object["@type"].charAt(0) === "." ?
                    object["@type"].substr(1) : object["@type"];
                // type_url prefix is optional, but path seperator is required
                return this.create({
                    type_url: "/" + type_url,
                    value: type.encode(type.fromObject(object)).finish()
                });
            }
        }

        return this.fromObject(object);
    },

    toObject: function(message, options) {

        // decode value if requested and unmapped
        if (options && options.json && message.type_url && message.value) {
            // Only use fully qualified type name after the last '/'
            var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            /* istanbul ignore else */
            if (type)
                message = type.decode(message.value);
        }

        // wrap value if unmapped
        if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            object["@type"] = message.$type.fullName;
            return object;
        }

        return this.toObject(message, options);
    }
};


/***/ }),

/***/ "../node_modules/protobufjs/src/writer.js":
/*!************************************************!*\
  !*** ../node_modules/protobufjs/src/writer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
                return new BufferWriter();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = create();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};


/***/ }),

/***/ "../node_modules/protobufjs/src/writer_buffer.js":
/*!*******************************************************!*\
  !*** ../node_modules/protobufjs/src/writer_buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(/*! ./writer */ "../node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "../node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../proto_bundle/point_cloud_proto_bundle.json":
/*!*****************************************************!*\
  !*** ../proto_bundle/point_cloud_proto_bundle.json ***!
  \*****************************************************/
/*! exports provided: nested, default */
/***/ (function(module) {

module.exports = {"nested":{"apollo":{"nested":{"dreamview":{"nested":{"PointCloud":{"fields":{"num":{"rule":"repeated","type":"float","id":1}}}}}}}}};

/***/ }),

/***/ "../proto_bundle/sim_world_proto_bundle.json":
/*!***************************************************!*\
  !*** ../proto_bundle/sim_world_proto_bundle.json ***!
  \***************************************************/
/*! exports provided: nested, default */
/***/ (function(module) {

module.exports = {"nested":{"apollo":{"nested":{"dreamview":{"nested":{"PolygonPoint":{"fields":{"x":{"type":"double","id":1},"y":{"type":"double","id":2},"z":{"type":"double","id":3,"options":{"default":0}},"gaussianInfo":{"type":"apollo.common.GaussianInfo","id":4}}},"Prediction":{"fields":{"probability":{"type":"double","id":1},"predictedTrajectory":{"rule":"repeated","type":"PolygonPoint","id":2}}},"Decision":{"fields":{"type":{"type":"Type","id":1,"options":{"default":"IGNORE"}},"polygonPoint":{"rule":"repeated","type":"PolygonPoint","id":2},"heading":{"type":"double","id":3},"latitude":{"type":"double","id":4},"longitude":{"type":"double","id":5},"positionX":{"type":"double","id":6},"positionY":{"type":"double","id":7},"length":{"type":"double","id":8,"options":{"default":2.8}},"width":{"type":"double","id":9,"options":{"default":1.4}},"height":{"type":"double","id":10,"options":{"default":1.8}},"stopReason":{"type":"StopReasonCode","id":11},"changeLaneType":{"type":"apollo.routing.ChangeLaneType","id":12}},"nested":{"Type":{"values":{"IGNORE":0,"STOP":1,"NUDGE":2,"YIELD":3,"OVERTAKE":4,"FOLLOW":5,"SIDEPASS":6}},"StopReasonCode":{"values":{"STOP_REASON_HEAD_VEHICLE":1,"STOP_REASON_DESTINATION":2,"STOP_REASON_PEDESTRIAN":3,"STOP_REASON_OBSTACLE":4,"STOP_REASON_SIGNAL":100,"STOP_REASON_STOP_SIGN":101,"STOP_REASON_YIELD_SIGN":102,"STOP_REASON_CLEAR_ZONE":103,"STOP_REASON_CROSSWALK":104,"STOP_REASON_EMERGENCY":105,"STOP_REASON_NOT_READY":106,"STOP_REASON_PULL_OVER":107}}}},"Object":{"fields":{"id":{"type":"string","id":1},"polygonPoint":{"rule":"repeated","type":"PolygonPoint","id":2},"heading":{"type":"double","id":3},"latitude":{"type":"double","id":4},"longitude":{"type":"double","id":5},"positionX":{"type":"double","id":6},"positionY":{"type":"double","id":7},"length":{"type":"double","id":8,"options":{"default":2.8}},"width":{"type":"double","id":9,"options":{"default":1.4}},"height":{"type":"double","id":10,"options":{"default":1.8}},"speed":{"type":"double","id":11},"speedAcceleration":{"type":"double","id":12},"speedJerk":{"type":"double","id":13},"spin":{"type":"double","id":14},"spinAcceleration":{"type":"double","id":15},"spinJerk":{"type":"double","id":16},"speedHeading":{"type":"double","id":17},"kappa":{"type":"double","id":18},"dkappa":{"type":"double","id":35},"signalSet":{"rule":"repeated","type":"string","id":19},"currentSignal":{"type":"string","id":20},"timestampSec":{"type":"double","id":21},"decision":{"rule":"repeated","type":"Decision","id":22},"yieldedObstacle":{"type":"bool","id":32,"options":{"default":false}},"throttlePercentage":{"type":"double","id":23},"brakePercentage":{"type":"double","id":24},"steeringPercentage":{"type":"double","id":25},"steeringAngle":{"type":"double","id":26},"steeringRatio":{"type":"double","id":27},"batteryPercentage":{"type":"int32","id":38},"gearLocation":{"type":"apollo.canbus.Chassis.GearPosition","id":39},"disengageType":{"type":"DisengageType","id":28},"type":{"type":"Type","id":29},"subType":{"type":"apollo.perception.PerceptionObstacle.SubType","id":34},"prediction":{"rule":"repeated","type":"Prediction","id":30},"confidence":{"type":"double","id":31,"options":{"default":1}},"obstaclePriority":{"type":"apollo.prediction.ObstaclePriority","id":33},"interactiveTag":{"type":"apollo.prediction.ObstacleInteractiveTag","id":40},"source":{"type":"apollo.perception.PerceptionObstacle.Source","id":36,"options":{"default":"HOST_VEHICLE"}},"v2xInfo":{"type":"apollo.perception.V2XInformation","id":37}},"nested":{"DisengageType":{"values":{"DISENGAGE_NONE":0,"DISENGAGE_UNKNOWN":1,"DISENGAGE_MANUAL":2,"DISENGAGE_EMERGENCY":3,"DISENGAGE_AUTO_STEER_ONLY":4,"DISENGAGE_AUTO_SPEED_ONLY":5,"DISENGAGE_CHASSIS_ERROR":6}},"Type":{"values":{"UNKNOWN":0,"UNKNOWN_MOVABLE":1,"UNKNOWN_UNMOVABLE":2,"PEDESTRIAN":3,"BICYCLE":4,"VEHICLE":5,"VIRTUAL":6,"CIPV":7}}}},"DelaysInMs":{"fields":{"chassis":{"type":"double","id":1},"localization":{"type":"double","id":3},"perceptionObstacle":{"type":"double","id":4},"planning":{"type":"double","id":5},"prediction":{"type":"double","id":7},"trafficLight":{"type":"double","id":8},"control":{"type":"double","id":9}}},"RoutePath":{"fields":{"point":{"rule":"repeated","type":"PolygonPoint","id":1}}},"Latency":{"fields":{"timestampSec":{"type":"double","id":1},"totalTimeMs":{"type":"double","id":2}}},"MapElementIds":{"fields":{"lane":{"rule":"repeated","type":"string","id":1},"crosswalk":{"rule":"repeated","type":"string","id":2},"junction":{"rule":"repeated","type":"string","id":3},"signal":{"rule":"repeated","type":"string","id":4},"stopSign":{"rule":"repeated","type":"string","id":5},"yield":{"rule":"repeated","type":"string","id":6},"overlap":{"rule":"repeated","type":"string","id":7},"road":{"rule":"repeated","type":"string","id":8},"clearArea":{"rule":"repeated","type":"string","id":9},"parkingSpace":{"rule":"repeated","type":"string","id":10},"speedBump":{"rule":"repeated","type":"string","id":11},"pncJunction":{"rule":"repeated","type":"string","id":12}}},"ControlData":{"fields":{"timestampSec":{"type":"double","id":1},"stationError":{"type":"double","id":2},"lateralError":{"type":"double","id":3},"headingError":{"type":"double","id":4},"currentTargetPoint":{"type":"apollo.common.TrajectoryPoint","id":5}}},"Notification":{"fields":{"timestampSec":{"type":"double","id":1},"item":{"type":"apollo.common.monitor.MonitorMessageItem","id":2}}},"SensorMeasurements":{"fields":{"sensorMeasurement":{"rule":"repeated","type":"Object","id":1}}},"SimulationWorld":{"fields":{"timestamp":{"type":"double","id":1},"sequenceNum":{"type":"uint32","id":2},"object":{"rule":"repeated","type":"Object","id":3},"autoDrivingCar":{"type":"Object","id":4},"trafficSignal":{"type":"Object","id":5},"routePath":{"rule":"repeated","type":"RoutePath","id":6},"routingTime":{"type":"double","id":7},"planningTrajectory":{"rule":"repeated","type":"Object","id":8},"mainStop":{"type":"Object","id":9,"options":{"deprecated":true}},"mainDecision":{"type":"Object","id":10},"speedLimit":{"type":"double","id":11},"delay":{"type":"DelaysInMs","id":12},"monitor":{"type":"apollo.common.monitor.MonitorMessage","id":13,"options":{"deprecated":true}},"notification":{"rule":"repeated","type":"Notification","id":14},"engageAdvice":{"type":"string","id":15},"latency":{"keyType":"string","type":"Latency","id":16},"mapElementIds":{"type":"MapElementIds","id":17},"mapHash":{"type":"uint64","id":18},"mapRadius":{"type":"double","id":19},"planningData":{"type":"apollo.planning_internal.PlanningData","id":20},"gps":{"type":"Object","id":21},"laneMarker":{"type":"apollo.perception.LaneMarkers","id":22},"controlData":{"type":"ControlData","id":23},"navigationPath":{"rule":"repeated","type":"apollo.common.Path","id":24},"isRssSafe":{"type":"bool","id":25,"options":{"default":true}},"shadowLocalization":{"type":"Object","id":26},"perceivedSignal":{"rule":"repeated","type":"Object","id":27},"stories":{"keyType":"string","type":"bool","id":28},"sensorMeasurements":{"keyType":"string","type":"SensorMeasurements","id":29},"isSirenOn":{"type":"bool","id":30,"options":{"default":false}}}},"Options":{"fields":{"legendDisplay":{"type":"bool","id":1,"options":{"default":true}},"x":{"type":"Axis","id":2},"y":{"type":"Axis","id":3},"aspectRatio":{"type":"double","id":4},"syncXyWindowSize":{"type":"bool","id":5,"options":{"default":false}}},"nested":{"Axis":{"fields":{"min":{"type":"double","id":1},"max":{"type":"double","id":2},"labelString":{"type":"string","id":3},"windowSize":{"type":"double","id":4},"stepSize":{"type":"double","id":5},"midValue":{"type":"double","id":6}}}}},"Line":{"fields":{"label":{"type":"string","id":1},"hideLabelInLegend":{"type":"bool","id":2,"options":{"default":false}},"point":{"rule":"repeated","type":"apollo.common.Point2D","id":3},"properties":{"keyType":"string","type":"string","id":4}}},"Polygon":{"fields":{"label":{"type":"string","id":1},"hideLabelInLegend":{"type":"bool","id":2,"options":{"default":false}},"point":{"rule":"repeated","type":"apollo.common.Point2D","id":3},"properties":{"keyType":"string","type":"string","id":4}}},"Car":{"fields":{"label":{"type":"string","id":1},"hideLabelInLegend":{"type":"bool","id":2,"options":{"default":false}},"x":{"type":"double","id":3},"y":{"type":"double","id":4},"heading":{"type":"double","id":5},"color":{"type":"string","id":6}}},"Chart":{"fields":{"title":{"type":"string","id":1},"options":{"type":"Options","id":2},"line":{"rule":"repeated","type":"Line","id":3},"polygon":{"rule":"repeated","type":"Polygon","id":4},"car":{"rule":"repeated","type":"Car","id":5}}},"CameraUpdate":{"fields":{"localization":{"rule":"repeated","type":"double","id":1,"options":{"packed":false}},"localization2cameraTf":{"rule":"repeated","type":"double","id":2,"options":{"packed":false}},"image":{"type":"bytes","id":3},"imageAspectRatio":{"type":"double","id":4}}}}},"common":{"nested":{"Direction":{"values":{"EAST":0,"WEST":1,"SOUTH":2,"NORTH":3,"NORTHEAST":4,"SOUTHEAST":5,"SOUTHWEST":6,"NORTHWEST":7}},"DriveEvent":{"fields":{"header":{"type":"apollo.common.Header","id":1},"event":{"type":"string","id":2},"location":{"type":"apollo.localization.Pose","id":3},"type":{"rule":"repeated","type":"Type","id":4,"options":{"packed":false}},"isReportable":{"type":"bool","id":5}},"nested":{"Type":{"values":{"CRITICAL":0,"PROBLEM":1,"DESIRED":2,"OUT_OF_SCOPE":3}}}},"EngageAdvice":{"fields":{"advice":{"type":"Advice","id":1,"options":{"default":"DISALLOW_ENGAGE"}},"reason":{"type":"string","id":2}},"nested":{"Advice":{"values":{"UNKNOWN":0,"DISALLOW_ENGAGE":1,"READY_TO_ENGAGE":2,"KEEP_ENGAGED":3,"PREPARE_DISENGAGE":4}}}},"ErrorCode":{"values":{"OK":0,"CONTROL_ERROR":1000,"CONTROL_INIT_ERROR":1001,"CONTROL_COMPUTE_ERROR":1002,"CONTROL_ESTOP_ERROR":1003,"PERFECT_CONTROL_ERROR":1004,"CANBUS_ERROR":2000,"CAN_CLIENT_ERROR_BASE":2100,"CAN_CLIENT_ERROR_OPEN_DEVICE_FAILED":2101,"CAN_CLIENT_ERROR_FRAME_NUM":2102,"CAN_CLIENT_ERROR_SEND_FAILED":2103,"CAN_CLIENT_ERROR_RECV_FAILED":2104,"LOCALIZATION_ERROR":3000,"LOCALIZATION_ERROR_MSG":3100,"LOCALIZATION_ERROR_LIDAR":3200,"LOCALIZATION_ERROR_INTEG":3300,"LOCALIZATION_ERROR_GNSS":3400,"PERCEPTION_ERROR":4000,"PERCEPTION_ERROR_TF":4001,"PERCEPTION_ERROR_PROCESS":4002,"PERCEPTION_FATAL":4003,"PERCEPTION_ERROR_NONE":4004,"PERCEPTION_ERROR_UNKNOWN":4005,"PREDICTION_ERROR":5000,"PLANNING_ERROR":6000,"PLANNING_ERROR_NOT_READY":6001,"HDMAP_DATA_ERROR":7000,"ROUTING_ERROR":8000,"ROUTING_ERROR_REQUEST":8001,"ROUTING_ERROR_RESPONSE":8002,"ROUTING_ERROR_NOT_READY":8003,"END_OF_INPUT":9000,"HTTP_LOGIC_ERROR":10000,"HTTP_RUNTIME_ERROR":10001,"RELATIVE_MAP_ERROR":11000,"RELATIVE_MAP_NOT_READY":11001,"DRIVER_ERROR_GNSS":12000,"DRIVER_ERROR_VELODYNE":13000,"STORYTELLING_ERROR":14000}},"StatusPb":{"fields":{"errorCode":{"type":"ErrorCode","id":1,"options":{"default":"OK"}},"msg":{"type":"string","id":2}}},"PointENU":{"fields":{"x":{"type":"double","id":1,"options":{"default":null}},"y":{"type":"double","id":2,"options":{"default":null}},"z":{"type":"double","id":3,"options":{"default":0}}}},"PointLLH":{"fields":{"lon":{"type":"double","id":1,"options":{"default":null}},"lat":{"type":"double","id":2,"options":{"default":null}},"height":{"type":"double","id":3,"options":{"default":0}}}},"Point2D":{"fields":{"x":{"type":"double","id":1,"options":{"default":null}},"y":{"type":"double","id":2,"options":{"default":null}}}},"Point3D":{"fields":{"x":{"type":"double","id":1,"options":{"default":null}},"y":{"type":"double","id":2,"options":{"default":null}},"z":{"type":"double","id":3,"options":{"default":null}}}},"Quaternion":{"fields":{"qx":{"type":"double","id":1,"options":{"default":null}},"qy":{"type":"double","id":2,"options":{"default":null}},"qz":{"type":"double","id":3,"options":{"default":null}},"qw":{"type":"double","id":4,"options":{"default":null}}}},"Polygon":{"fields":{"point":{"rule":"repeated","type":"Point3D","id":1}}},"Header":{"fields":{"timestampSec":{"type":"double","id":1},"moduleName":{"type":"string","id":2},"sequenceNum":{"type":"uint32","id":3},"lidarTimestamp":{"type":"uint64","id":4},"cameraTimestamp":{"type":"uint64","id":5},"radarTimestamp":{"type":"uint64","id":6},"version":{"type":"uint32","id":7,"options":{"default":1}},"status":{"type":"StatusPb","id":8},"frameId":{"type":"string","id":9}}},"SLPoint":{"fields":{"s":{"type":"double","id":1},"l":{"type":"double","id":2}}},"FrenetFramePoint":{"fields":{"s":{"type":"double","id":1},"l":{"type":"double","id":2},"dl":{"type":"double","id":3},"ddl":{"type":"double","id":4}}},"SpeedPoint":{"fields":{"s":{"type":"double","id":1},"t":{"type":"double","id":2},"v":{"type":"double","id":3},"a":{"type":"double","id":4},"da":{"type":"double","id":5}}},"PathPoint":{"fields":{"x":{"type":"double","id":1},"y":{"type":"double","id":2},"z":{"type":"double","id":3},"theta":{"type":"double","id":4},"kappa":{"type":"double","id":5},"s":{"type":"double","id":6},"dkappa":{"type":"double","id":7},"ddkappa":{"type":"double","id":8},"laneId":{"type":"string","id":9},"xDerivative":{"type":"double","id":10},"yDerivative":{"type":"double","id":11}}},"Path":{"fields":{"name":{"type":"string","id":1},"pathPoint":{"rule":"repeated","type":"PathPoint","id":2}}},"TrajectoryPoint":{"fields":{"pathPoint":{"type":"PathPoint","id":1},"v":{"type":"double","id":2},"a":{"type":"double","id":3},"relativeTime":{"type":"double","id":4},"da":{"type":"double","id":5},"steer":{"type":"double","id":6},"gaussianInfo":{"type":"GaussianInfo","id":7}}},"Trajectory":{"fields":{"name":{"type":"string","id":1},"trajectoryPoint":{"rule":"repeated","type":"TrajectoryPoint","id":2}}},"VehicleMotionPoint":{"fields":{"trajectoryPoint":{"type":"TrajectoryPoint","id":1},"steer":{"type":"double","id":2}}},"VehicleMotion":{"fields":{"name":{"type":"string","id":1},"vehicleMotionPoint":{"rule":"repeated","type":"VehicleMotionPoint","id":2}}},"GaussianInfo":{"fields":{"sigmaX":{"type":"double","id":1},"sigmaY":{"type":"double","id":2},"correlation":{"type":"double","id":3},"areaProbability":{"type":"double","id":4},"ellipseA":{"type":"double","id":5},"ellipseB":{"type":"double","id":6},"thetaA":{"type":"double","id":7}}},"VehicleSignal":{"fields":{"turnSignal":{"type":"TurnSignal","id":1},"highBeam":{"type":"bool","id":2},"lowBeam":{"type":"bool","id":3},"horn":{"type":"bool","id":4},"emergencyLight":{"type":"bool","id":5}},"nested":{"TurnSignal":{"values":{"TURN_NONE":0,"TURN_LEFT":1,"TURN_RIGHT":2}}}},"Transform":{"fields":{"sourceFrame":{"type":"bytes","id":1},"targetFrame":{"type":"bytes","id":2},"translation":{"type":"Point3D","id":3},"rotation":{"type":"Quaternion","id":4}}},"Extrinsics":{"fields":{"tansforms":{"rule":"repeated","type":"Transform","id":1}}},"VehicleBrand":{"values":{"LINCOLN_MKZ":0,"GEM":1,"LEXUS":2,"TRANSIT":3,"GE3":4,"WEY":5,"ZHONGYUN":6,"CH":7,"DKIT":8,"NEOLIX":9}},"VehicleID":{"fields":{"vin":{"type":"string","id":1},"plate":{"type":"string","id":2},"otherUniqueId":{"type":"string","id":3}}},"LatencyParam":{"fields":{"deadTime":{"type":"double","id":1},"riseTime":{"type":"double","id":2},"peakTime":{"type":"double","id":3},"settlingTime":{"type":"double","id":4}}},"VehicleParam":{"fields":{"brand":{"type":"VehicleBrand","id":1},"vehicleId":{"type":"VehicleID","id":2},"frontEdgeToCenter":{"type":"double","id":3,"options":{"default":null}},"backEdgeToCenter":{"type":"double","id":4,"options":{"default":null}},"leftEdgeToCenter":{"type":"double","id":5,"options":{"default":null}},"rightEdgeToCenter":{"type":"double","id":6,"options":{"default":null}},"length":{"type":"double","id":7,"options":{"default":null}},"width":{"type":"double","id":8,"options":{"default":null}},"height":{"type":"double","id":9,"options":{"default":null}},"minTurnRadius":{"type":"double","id":10,"options":{"default":null}},"maxAcceleration":{"type":"double","id":11,"options":{"default":null}},"maxDeceleration":{"type":"double","id":12,"options":{"default":null}},"maxSteerAngle":{"type":"double","id":13,"options":{"default":null}},"maxSteerAngleRate":{"type":"double","id":14,"options":{"default":null}},"minSteerAngleRate":{"type":"double","id":15,"options":{"default":null}},"steerRatio":{"type":"double","id":16,"options":{"default":null}},"wheelBase":{"type":"double","id":17,"options":{"default":null}},"wheelRollingRadius":{"type":"double","id":18,"options":{"default":null}},"maxAbsSpeedWhenStopped":{"type":"float","id":19,"options":{"default":null}},"brakeDeadzone":{"type":"double","id":20,"options":{"default":null}},"throttleDeadzone":{"type":"double","id":21,"options":{"default":null}},"steeringLatencyParam":{"type":"LatencyParam","id":22},"throttleLatencyParam":{"type":"LatencyParam","id":23},"brakeLatencyParam":{"type":"LatencyParam","id":24}}},"VehicleConfig":{"fields":{"header":{"type":"apollo.common.Header","id":1},"vehicleParam":{"type":"VehicleParam","id":2},"extrinsics":{"type":"Extrinsics","id":3}}},"monitor":{"nested":{"MonitorMessageItem":{"fields":{"source":{"type":"MessageSource","id":1,"options":{"default":"UNKNOWN"}},"msg":{"type":"string","id":2},"logLevel":{"type":"LogLevel","id":3,"options":{"default":"INFO"}}},"nested":{"MessageSource":{"values":{"UNKNOWN":1,"CANBUS":2,"CONTROL":3,"DECISION":4,"LOCALIZATION":5,"PLANNING":6,"PREDICTION":7,"SIMULATOR":8,"HWSYS":9,"ROUTING":10,"MONITOR":11,"HMI":12,"RELATIVE_MAP":13,"GNSS":14,"CONTI_RADAR":15,"RACOBIT_RADAR":16,"ULTRASONIC_RADAR":17,"MOBILEYE":18,"DELPHI_ESR":19,"STORYTELLING":20,"TASK_MANAGER":21}},"LogLevel":{"values":{"INFO":0,"WARN":1,"ERROR":2,"FATAL":3}}}},"MonitorMessage":{"fields":{"header":{"type":"apollo.common.Header","id":1},"item":{"rule":"repeated","type":"MonitorMessageItem","id":2}}}}}}},"localization":{"nested":{"Uncertainty":{"fields":{"positionStdDev":{"type":"apollo.common.Point3D","id":1},"orientationStdDev":{"type":"apollo.common.Point3D","id":2},"linearVelocityStdDev":{"type":"apollo.common.Point3D","id":3},"linearAccelerationStdDev":{"type":"apollo.common.Point3D","id":4},"angularVelocityStdDev":{"type":"apollo.common.Point3D","id":5}}},"LocalizationEstimate":{"fields":{"header":{"type":"apollo.common.Header","id":1},"pose":{"type":"apollo.localization.Pose","id":2},"uncertainty":{"type":"Uncertainty","id":3},"measurementTime":{"type":"double","id":4},"trajectoryPoint":{"rule":"repeated","type":"apollo.common.TrajectoryPoint","id":5},"msfStatus":{"type":"MsfStatus","id":6},"sensorStatus":{"type":"MsfSensorMsgStatus","id":7}}},"MeasureState":{"values":{"OK":0,"WARNNING":1,"ERROR":2,"CRITICAL_ERROR":3,"FATAL_ERROR":4}},"LocalizationStatus":{"fields":{"header":{"type":"apollo.common.Header","id":1},"fusionStatus":{"type":"MeasureState","id":2},"gnssStatus":{"type":"MeasureState","id":3,"options":{"deprecated":true}},"lidarStatus":{"type":"MeasureState","id":4,"options":{"deprecated":true}},"measurementTime":{"type":"double","id":5},"stateMessage":{"type":"string","id":6}}},"Pose":{"fields":{"position":{"type":"apollo.common.PointENU","id":1},"orientation":{"type":"apollo.common.Quaternion","id":2},"linearVelocity":{"type":"apollo.common.Point3D","id":3},"linearAcceleration":{"type":"apollo.common.Point3D","id":4},"angularVelocity":{"type":"apollo.common.Point3D","id":5},"heading":{"type":"double","id":6},"linearAccelerationVrf":{"type":"apollo.common.Point3D","id":7},"angularVelocityVrf":{"type":"apollo.common.Point3D","id":8},"eulerAngles":{"type":"apollo.common.Point3D","id":9}}},"LocalLidarStatus":{"values":{"MSF_LOCAL_LIDAR_NORMAL":0,"MSF_LOCAL_LIDAR_MAP_MISSING":1,"MSF_LOCAL_LIDAR_EXTRINSICS_MISSING":2,"MSF_LOCAL_LIDAR_MAP_LOADING_FAILED":3,"MSF_LOCAL_LIDAR_NO_OUTPUT":4,"MSF_LOCAL_LIDAR_OUT_OF_MAP":5,"MSF_LOCAL_LIDAR_NOT_GOOD":6,"MSF_LOCAL_LIDAR_UNDEFINED_STATUS":7}},"LocalLidarQuality":{"values":{"MSF_LOCAL_LIDAR_VERY_GOOD":0,"MSF_LOCAL_LIDAR_GOOD":1,"MSF_LOCAL_LIDAR_NOT_BAD":2,"MSF_LOCAL_LIDAR_BAD":3}},"LocalLidarConsistency":{"values":{"MSF_LOCAL_LIDAR_CONSISTENCY_00":0,"MSF_LOCAL_LIDAR_CONSISTENCY_01":1,"MSF_LOCAL_LIDAR_CONSISTENCY_02":2,"MSF_LOCAL_LIDAR_CONSISTENCY_03":3}},"GnssConsistency":{"values":{"MSF_GNSS_CONSISTENCY_00":0,"MSF_GNSS_CONSISTENCY_01":1,"MSF_GNSS_CONSISTENCY_02":2,"MSF_GNSS_CONSISTENCY_03":3}},"GnssPositionType":{"values":{"NONE":0,"FIXEDPOS":1,"FIXEDHEIGHT":2,"FLOATCONV":4,"WIDELANE":5,"NARROWLANE":6,"DOPPLER_VELOCITY":8,"SINGLE":16,"PSRDIFF":17,"WAAS":18,"PROPOGATED":19,"OMNISTAR":20,"L1_FLOAT":32,"IONOFREE_FLOAT":33,"NARROW_FLOAT":34,"L1_INT":48,"WIDE_INT":49,"NARROW_INT":50,"RTK_DIRECT_INS":51,"INS_SBAS":52,"INS_PSRSP":53,"INS_PSRDIFF":54,"INS_RTKFLOAT":55,"INS_RTKFIXED":56,"INS_OMNISTAR":57,"INS_OMNISTAR_HP":58,"INS_OMNISTAR_XP":59,"OMNISTAR_HP":64,"OMNISTAR_XP":65,"PPP_CONVERGING":68,"PPP":69,"INS_PPP_Converging":73,"INS_PPP":74,"MSG_LOSS":91}},"ImuMsgDelayStatus":{"values":{"IMU_DELAY_NORMAL":0,"IMU_DELAY_1":1,"IMU_DELAY_2":2,"IMU_DELAY_3":3,"IMU_DELAY_ABNORMAL":4}},"ImuMsgMissingStatus":{"values":{"IMU_MISSING_NORMAL":0,"IMU_MISSING_1":1,"IMU_MISSING_2":2,"IMU_MISSING_3":3,"IMU_MISSING_4":4,"IMU_MISSING_5":5,"IMU_MISSING_ABNORMAL":6}},"ImuMsgDataStatus":{"values":{"IMU_DATA_NORMAL":0,"IMU_DATA_ABNORMAL":1,"IMU_DATA_OTHER":2}},"MsfRunningStatus":{"values":{"MSF_SOL_LIDAR_GNSS":0,"MSF_SOL_X_GNSS":1,"MSF_SOL_LIDAR_X":2,"MSF_SOL_LIDAR_XX":3,"MSF_SOL_LIDAR_XXX":4,"MSF_SOL_X_X":5,"MSF_SOL_X_XX":6,"MSF_SOL_X_XXX":7,"MSF_SSOL_LIDAR_GNSS":8,"MSF_SSOL_X_GNSS":9,"MSF_SSOL_LIDAR_X":10,"MSF_SSOL_LIDAR_XX":11,"MSF_SSOL_LIDAR_XXX":12,"MSF_SSOL_X_X":13,"MSF_SSOL_X_XX":14,"MSF_SSOL_X_XXX":15,"MSF_NOSOL_LIDAR_GNSS":16,"MSF_NOSOL_X_GNSS":17,"MSF_NOSOL_LIDAR_X":18,"MSF_NOSOL_LIDAR_XX":19,"MSF_NOSOL_LIDAR_XXX":20,"MSF_NOSOL_X_X":21,"MSF_NOSOL_X_XX":22,"MSF_NOSOL_X_XXX":23,"MSF_RUNNING_INIT":24}},"MsfSensorMsgStatus":{"fields":{"imuDelayStatus":{"type":"ImuMsgDelayStatus","id":1},"imuMissingStatus":{"type":"ImuMsgMissingStatus","id":2},"imuDataStatus":{"type":"ImuMsgDataStatus","id":3}}},"MsfStatus":{"fields":{"localLidarConsistency":{"type":"LocalLidarConsistency","id":1},"gnssConsistency":{"type":"GnssConsistency","id":2},"localLidarStatus":{"type":"LocalLidarStatus","id":3},"localLidarQuality":{"type":"LocalLidarQuality","id":4},"gnssposPositionType":{"type":"GnssPositionType","id":5},"msfRunningStatus":{"type":"MsfRunningStatus","id":6}}}}},"canbus":{"nested":{"Chassis":{"fields":{"engineStarted":{"type":"bool","id":3},"engineRpm":{"type":"float","id":4,"options":{"default":null}},"speedMps":{"type":"float","id":5,"options":{"default":null}},"odometerM":{"type":"float","id":6,"options":{"default":null}},"fuelRangeM":{"type":"int32","id":7},"throttlePercentage":{"type":"float","id":8,"options":{"default":null}},"brakePercentage":{"type":"float","id":9,"options":{"default":null}},"steeringPercentage":{"type":"float","id":11,"options":{"default":null}},"steeringTorqueNm":{"type":"float","id":12,"options":{"default":null}},"parkingBrake":{"type":"bool","id":13},"highBeamSignal":{"type":"bool","id":14,"options":{"deprecated":true}},"lowBeamSignal":{"type":"bool","id":15,"options":{"deprecated":true}},"leftTurnSignal":{"type":"bool","id":16,"options":{"deprecated":true}},"rightTurnSignal":{"type":"bool","id":17,"options":{"deprecated":true}},"horn":{"type":"bool","id":18,"options":{"deprecated":true}},"wiper":{"type":"bool","id":19},"disengageStatus":{"type":"bool","id":20,"options":{"deprecated":true}},"drivingMode":{"type":"DrivingMode","id":21,"options":{"default":"COMPLETE_MANUAL"}},"errorCode":{"type":"ErrorCode","id":22,"options":{"default":"NO_ERROR"}},"gearLocation":{"type":"GearPosition","id":23},"steeringTimestamp":{"type":"double","id":24},"header":{"type":"apollo.common.Header","id":25},"chassisErrorMask":{"type":"int32","id":26,"options":{"default":0}},"signal":{"type":"apollo.common.VehicleSignal","id":27},"chassisGps":{"type":"ChassisGPS","id":28},"engageAdvice":{"type":"apollo.common.EngageAdvice","id":29},"wheelSpeed":{"type":"WheelSpeed","id":30},"surround":{"type":"Surround","id":31},"license":{"type":"License","id":32,"options":{"deprecated":true}},"vehicleId":{"type":"apollo.common.VehicleID","id":33},"batterySocPercentage":{"type":"int32","id":34,"options":{"default":-1}}},"nested":{"DrivingMode":{"values":{"COMPLETE_MANUAL":0,"COMPLETE_AUTO_DRIVE":1,"AUTO_STEER_ONLY":2,"AUTO_SPEED_ONLY":3,"EMERGENCY_MODE":4}},"ErrorCode":{"values":{"NO_ERROR":0,"CMD_NOT_IN_PERIOD":1,"CHASSIS_ERROR":2,"CHASSIS_ERROR_ON_STEER":6,"CHASSIS_ERROR_ON_BRAKE":7,"CHASSIS_ERROR_ON_THROTTLE":8,"CHASSIS_ERROR_ON_GEAR":9,"MANUAL_INTERVENTION":3,"CHASSIS_CAN_NOT_IN_PERIOD":4,"UNKNOWN_ERROR":5}},"GearPosition":{"values":{"GEAR_NEUTRAL":0,"GEAR_DRIVE":1,"GEAR_REVERSE":2,"GEAR_PARKING":3,"GEAR_LOW":4,"GEAR_INVALID":5,"GEAR_NONE":6}}}},"ChassisGPS":{"fields":{"latitude":{"type":"double","id":1},"longitude":{"type":"double","id":2},"gpsValid":{"type":"bool","id":3},"year":{"type":"int32","id":4},"month":{"type":"int32","id":5},"day":{"type":"int32","id":6},"hours":{"type":"int32","id":7},"minutes":{"type":"int32","id":8},"seconds":{"type":"int32","id":9},"compassDirection":{"type":"double","id":10},"pdop":{"type":"double","id":11},"isGpsFault":{"type":"bool","id":12},"isInferred":{"type":"bool","id":13},"altitude":{"type":"double","id":14},"heading":{"type":"double","id":15},"hdop":{"type":"double","id":16},"vdop":{"type":"double","id":17},"quality":{"type":"GpsQuality","id":18},"numSatellites":{"type":"int32","id":19},"gpsSpeed":{"type":"double","id":20}}},"GpsQuality":{"values":{"FIX_NO":0,"FIX_2D":1,"FIX_3D":2,"FIX_INVALID":3}},"WheelSpeed":{"fields":{"isWheelSpdRrValid":{"type":"bool","id":1,"options":{"default":false}},"wheelDirectionRr":{"type":"WheelSpeedType","id":2,"options":{"default":"INVALID"}},"wheelSpdRr":{"type":"double","id":3,"options":{"default":0}},"isWheelSpdRlValid":{"type":"bool","id":4,"options":{"default":false}},"wheelDirectionRl":{"type":"WheelSpeedType","id":5,"options":{"default":"INVALID"}},"wheelSpdRl":{"type":"double","id":6,"options":{"default":0}},"isWheelSpdFrValid":{"type":"bool","id":7,"options":{"default":false}},"wheelDirectionFr":{"type":"WheelSpeedType","id":8,"options":{"default":"INVALID"}},"wheelSpdFr":{"type":"double","id":9,"options":{"default":0}},"isWheelSpdFlValid":{"type":"bool","id":10,"options":{"default":false}},"wheelDirectionFl":{"type":"WheelSpeedType","id":11,"options":{"default":"INVALID"}},"wheelSpdFl":{"type":"double","id":12,"options":{"default":0}}},"nested":{"WheelSpeedType":{"values":{"FORWARD":0,"BACKWARD":1,"STANDSTILL":2,"INVALID":3}}}},"Sonar":{"fields":{"range":{"type":"double","id":1},"translation":{"type":"apollo.common.Point3D","id":2},"rotation":{"type":"apollo.common.Quaternion","id":3}}},"Surround":{"fields":{"crossTrafficAlertLeft":{"type":"bool","id":1},"crossTrafficAlertLeftEnabled":{"type":"bool","id":2},"blindSpotLeftAlert":{"type":"bool","id":3},"blindSpotLeftAlertEnabled":{"type":"bool","id":4},"crossTrafficAlertRight":{"type":"bool","id":5},"crossTrafficAlertRightEnabled":{"type":"bool","id":6},"blindSpotRightAlert":{"type":"bool","id":7},"blindSpotRightAlertEnabled":{"type":"bool","id":8},"sonar00":{"type":"double","id":9},"sonar01":{"type":"double","id":10},"sonar02":{"type":"double","id":11},"sonar03":{"type":"double","id":12},"sonar04":{"type":"double","id":13},"sonar05":{"type":"double","id":14},"sonar06":{"type":"double","id":15},"sonar07":{"type":"double","id":16},"sonar08":{"type":"double","id":17},"sonar09":{"type":"double","id":18},"sonar10":{"type":"double","id":19},"sonar11":{"type":"double","id":20},"sonarEnabled":{"type":"bool","id":21},"sonarFault":{"type":"bool","id":22},"sonarRange":{"rule":"repeated","type":"double","id":23,"options":{"packed":false}},"sonar":{"rule":"repeated","type":"Sonar","id":24}}},"License":{"fields":{"vin":{"type":"string","id":1,"options":{"deprecated":true}}}}}},"planning":{"nested":{"autotuning":{"nested":{"PathPointwiseFeature":{"fields":{"l":{"type":"double","id":1},"dl":{"type":"double","id":2},"ddl":{"type":"double","id":3},"kappa":{"type":"double","id":4},"obstacleInfo":{"rule":"repeated","type":"ObstacleFeature","id":5},"leftBoundFeature":{"type":"BoundRelatedFeature","id":6},"rightBoundFeature":{"type":"BoundRelatedFeature","id":7}},"nested":{"ObstacleFeature":{"fields":{"lateralDistance":{"type":"double","id":1}}},"BoundRelatedFeature":{"fields":{"boundDistance":{"type":"double","id":1},"crossableLevel":{"type":"CrossableLevel","id":2}},"nested":{"CrossableLevel":{"values":{"CROSS_FREE":0,"CROSS_ABLE":1,"CROSS_FORBIDDEN":2}}}}}},"SpeedPointwiseFeature":{"fields":{"s":{"type":"double","id":1,"options":{"default":0}},"t":{"type":"double","id":2,"options":{"default":0}},"v":{"type":"double","id":3,"options":{"default":0}},"speedLimit":{"type":"double","id":4,"options":{"default":0}},"acc":{"type":"double","id":5,"options":{"default":0}},"jerk":{"type":"double","id":6,"options":{"default":0}},"followObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":7},"overtakeObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":8},"nudgeObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":9},"stopObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":10},"collisionTimes":{"type":"int32","id":11,"options":{"default":0}},"virtualObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":12},"lateralAcc":{"type":"double","id":13,"options":{"default":0}},"pathCurvatureAbs":{"type":"double","id":14,"options":{"default":0}},"sidepassFrontObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":15},"sidepassRearObsFeature":{"rule":"repeated","type":"ObstacleFeature","id":16}},"nested":{"ObstacleFeature":{"fields":{"longitudinalDistance":{"type":"double","id":1},"obstacleSpeed":{"type":"double","id":2},"lateralDistance":{"type":"double","id":3,"options":{"default":10}},"probability":{"type":"double","id":4},"relativeV":{"type":"double","id":5}}}}},"TrajectoryPointwiseFeature":{"fields":{"pathInputFeature":{"type":"PathPointwiseFeature","id":1},"speedInputFeature":{"type":"SpeedPointwiseFeature","id":2}}},"TrajectoryFeature":{"fields":{"pointFeature":{"rule":"repeated","type":"TrajectoryPointwiseFeature","id":1}}},"PathPointRawFeature":{"fields":{"cartesianCoord":{"type":"apollo.common.PathPoint","id":1},"frenetCoord":{"type":"apollo.common.FrenetFramePoint","id":2}}},"SpeedPointRawFeature":{"fields":{"s":{"type":"double","id":1},"t":{"type":"double","id":2},"v":{"type":"double","id":3},"a":{"type":"double","id":4},"j":{"type":"double","id":5},"speedLimit":{"type":"double","id":6},"follow":{"rule":"repeated","type":"ObjectDecisionFeature","id":10},"overtake":{"rule":"repeated","type":"ObjectDecisionFeature","id":11},"virtualDecision":{"rule":"repeated","type":"ObjectDecisionFeature","id":13},"stop":{"rule":"repeated","type":"ObjectDecisionFeature","id":14},"collision":{"rule":"repeated","type":"ObjectDecisionFeature","id":15},"nudge":{"rule":"repeated","type":"ObjectDecisionFeature","id":12},"sidepassFront":{"rule":"repeated","type":"ObjectDecisionFeature","id":16},"sidepassRear":{"rule":"repeated","type":"ObjectDecisionFeature","id":17},"keepClear":{"rule":"repeated","type":"ObjectDecisionFeature","id":18}},"nested":{"ObjectDecisionFeature":{"fields":{"id":{"type":"int32","id":1},"relativeS":{"type":"double","id":2},"relativeL":{"type":"double","id":3},"relativeV":{"type":"double","id":4},"speed":{"type":"double","id":5}}}}},"ObstacleSTRawData":{"fields":{"obstacleStData":{"rule":"repeated","type":"ObstacleSTData","id":1},"obstacleStNudge":{"rule":"repeated","type":"ObstacleSTData","id":2},"obstacleStSidepass":{"rule":"repeated","type":"ObstacleSTData","id":3}},"nested":{"STPointPair":{"fields":{"sLower":{"type":"double","id":1},"sUpper":{"type":"double","id":2},"t":{"type":"double","id":3},"l":{"type":"double","id":4,"options":{"default":10}}}},"ObstacleSTData":{"fields":{"id":{"type":"int32","id":1},"speed":{"type":"double","id":2},"isVirtual":{"type":"bool","id":3},"probability":{"type":"double","id":4},"polygon":{"rule":"repeated","type":"STPointPair","id":8},"distribution":{"rule":"repeated","type":"STPointPair","id":9}}}}},"TrajectoryPointRawFeature":{"fields":{"pathFeature":{"type":"PathPointRawFeature","id":1},"speedFeature":{"type":"SpeedPointRawFeature","id":2}}},"TrajectoryRawFeature":{"fields":{"pointFeature":{"rule":"repeated","type":"TrajectoryPointRawFeature","id":1},"stRawData":{"type":"ObstacleSTRawData","id":2}}}}},"TargetLane":{"fields":{"id":{"type":"string","id":1},"startS":{"type":"double","id":2},"endS":{"type":"double","id":3},"speedLimit":{"type":"double","id":4}}},"ObjectIgnore":{"fields":{}},"StopReasonCode":{"values":{"STOP_REASON_HEAD_VEHICLE":1,"STOP_REASON_DESTINATION":2,"STOP_REASON_PEDESTRIAN":3,"STOP_REASON_OBSTACLE":4,"STOP_REASON_PREPARKING":5,"STOP_REASON_SIGNAL":100,"STOP_REASON_STOP_SIGN":101,"STOP_REASON_YIELD_SIGN":102,"STOP_REASON_CLEAR_ZONE":103,"STOP_REASON_CROSSWALK":104,"STOP_REASON_CREEPER":105,"STOP_REASON_REFERENCE_END":106,"STOP_REASON_YELLOW_SIGNAL":107,"STOP_REASON_PULL_OVER":108,"STOP_REASON_SIDEPASS_SAFETY":109,"STOP_REASON_PRE_OPEN_SPACE_STOP":200,"STOP_REASON_LANE_CHANGE_URGENCY":201,"STOP_REASON_EMERGENCY":202}},"ObjectStop":{"fields":{"reasonCode":{"type":"StopReasonCode","id":1},"distanceS":{"type":"double","id":2},"stopPoint":{"type":"apollo.common.PointENU","id":3},"stopHeading":{"type":"double","id":4},"waitForObstacle":{"rule":"repeated","type":"string","id":5}}},"ObjectNudge":{"fields":{"type":{"type":"Type","id":1},"distanceL":{"type":"double","id":2}},"nested":{"Type":{"values":{"LEFT_NUDGE":1,"RIGHT_NUDGE":2,"DYNAMIC_LEFT_NUDGE":3,"DYNAMIC_RIGHT_NUDGE":4}}}},"ObjectYield":{"fields":{"distanceS":{"type":"double","id":1},"fencePoint":{"type":"apollo.common.PointENU","id":2},"fenceHeading":{"type":"double","id":3},"timeBuffer":{"type":"double","id":4}}},"ObjectFollow":{"fields":{"distanceS":{"type":"double","id":1},"fencePoint":{"type":"apollo.common.PointENU","id":2},"fenceHeading":{"type":"double","id":3}}},"ObjectOvertake":{"fields":{"distanceS":{"type":"double","id":1},"fencePoint":{"type":"apollo.common.PointENU","id":2},"fenceHeading":{"type":"double","id":3},"timeBuffer":{"type":"double","id":4}}},"ObjectSidePass":{"fields":{"type":{"type":"Type","id":1}},"nested":{"Type":{"values":{"LEFT":1,"RIGHT":2}}}},"ObjectAvoid":{"fields":{}},"ObjectStatus":{"fields":{"motionType":{"type":"ObjectMotionType","id":1},"decisionType":{"type":"ObjectDecisionType","id":2}}},"ObjectStatic":{"fields":{}},"ObjectDynamic":{"fields":{}},"ObjectMotionType":{"oneofs":{"motionTag":{"oneof":["static","dynamic"]}},"fields":{"static":{"type":"ObjectStatic","id":1},"dynamic":{"type":"ObjectDynamic","id":2}}},"ObjectDecisionType":{"oneofs":{"objectTag":{"oneof":["ignore","stop","follow","yield","overtake","nudge","avoid","sidePass"]}},"fields":{"ignore":{"type":"ObjectIgnore","id":1},"stop":{"type":"ObjectStop","id":2},"follow":{"type":"ObjectFollow","id":3},"yield":{"type":"ObjectYield","id":4},"overtake":{"type":"ObjectOvertake","id":5},"nudge":{"type":"ObjectNudge","id":6},"avoid":{"type":"ObjectAvoid","id":7},"sidePass":{"type":"ObjectSidePass","id":8}}},"ObjectDecision":{"fields":{"id":{"type":"string","id":1},"perceptionId":{"type":"int32","id":2},"objectDecision":{"rule":"repeated","type":"ObjectDecisionType","id":3}}},"ObjectDecisions":{"fields":{"decision":{"rule":"repeated","type":"ObjectDecision","id":1}}},"MainStop":{"fields":{"reasonCode":{"type":"StopReasonCode","id":1},"reason":{"type":"string","id":2},"stopPoint":{"type":"apollo.common.PointENU","id":3},"stopHeading":{"type":"double","id":4},"changeLaneType":{"type":"apollo.routing.ChangeLaneType","id":5}}},"EmergencyStopHardBrake":{"fields":{}},"EmergencyStopCruiseToStop":{"fields":{}},"MainEmergencyStop":{"oneofs":{"task":{"oneof":["hardBrake","cruiseToStop"]}},"fields":{"reasonCode":{"type":"ReasonCode","id":1},"reason":{"type":"string","id":2},"hardBrake":{"type":"EmergencyStopHardBrake","id":3},"cruiseToStop":{"type":"EmergencyStopCruiseToStop","id":4}},"nested":{"ReasonCode":{"values":{"ESTOP_REASON_INTERNAL_ERR":1,"ESTOP_REASON_COLLISION":2,"ESTOP_REASON_ST_FIND_PATH":3,"ESTOP_REASON_ST_MAKE_DECISION":4,"ESTOP_REASON_SENSOR_ERROR":5}}}},"MainCruise":{"fields":{"changeLaneType":{"type":"apollo.routing.ChangeLaneType","id":1}}},"MainChangeLane":{"fields":{"type":{"type":"Type","id":1},"defaultLane":{"rule":"repeated","type":"TargetLane","id":2},"defaultLaneStop":{"type":"MainStop","id":3},"targetLaneStop":{"type":"MainStop","id":4}},"nested":{"Type":{"values":{"LEFT":1,"RIGHT":2}}}},"MainMissionComplete":{"fields":{"stopPoint":{"type":"apollo.common.PointENU","id":1},"stopHeading":{"type":"double","id":2}}},"MainNotReady":{"fields":{"reason":{"type":"string","id":1}}},"MainParking":{"fields":{"status":{"type":"ParkingStatus","id":1}},"nested":{"ParkingStatus":{"values":{"IN_PARKING":1}}}},"MainDecision":{"oneofs":{"task":{"oneof":["cruise","stop","estop","changeLane","missionComplete","notReady","parking"]}},"fields":{"cruise":{"type":"MainCruise","id":1},"stop":{"type":"MainStop","id":2},"estop":{"type":"MainEmergencyStop","id":3},"changeLane":{"type":"MainChangeLane","id":4,"options":{"deprecated":true}},"missionComplete":{"type":"MainMissionComplete","id":6},"notReady":{"type":"MainNotReady","id":7},"parking":{"type":"MainParking","id":8},"targetLane":{"rule":"repeated","type":"TargetLane","id":5,"options":{"deprecated":true}}}},"DecisionResult":{"fields":{"mainDecision":{"type":"MainDecision","id":1},"objectDecision":{"type":"ObjectDecisions","id":2},"vehicleSignal":{"type":"apollo.common.VehicleSignal","id":3}}},"IpoptReturnStatus":{"values":{"SOLVE_SUCCEEDED":0,"SOLVED_TO_ACCEPTABLE_LEVEL":1,"INFEASIBLE_PROBLEM_DETECTED":2,"SEARCH_DIRECTION_BECOMES_TOO_SMALL":3,"DIVERGIN_ITERATES":4,"USER_REQUESTED_STOP":5,"FEASIBLE_POINT_FOUND":6,"MAXIMUM_ITERATIONS_EXCEEDED":-1,"RESTORATION_FAILED":-2,"ERROR_IN_STEP_COMPUTATION":-3,"NOT_ENOUGH_DEGREES_OF_FREEDOM":-10,"INVALID_PROGRAM_DEFINITION":-11,"INVALID_OPTION":-12,"INVALID_NUMBER_DETECTED":-13,"UNRECOVERABLE_EXCEPTION":-100,"NONIPOPT_EXCEPTION_THROWN":-101,"INSUFFICIENT_MEMORY":-102,"INTERNAL_ERROR":199}},"StopPoint":{"fields":{"s":{"type":"double","id":1},"type":{"type":"Type","id":2,"options":{"default":"HARD"}}},"nested":{"Type":{"values":{"HARD":0,"SOFT":1}}}},"PlanningTarget":{"fields":{"stopPoint":{"type":"StopPoint","id":1},"cruiseSpeed":{"type":"double","id":2}}},"OverlapFeature":{"fields":{"id":{"type":"string","id":1},"distance":{"type":"double","id":2}}},"PlanningTag":{"fields":{"laneTurn":{"type":"apollo.hdmap.Lane.LaneTurn","id":1},"clearArea":{"type":"OverlapFeature","id":2},"crosswalk":{"type":"OverlapFeature","id":3},"pncJunction":{"type":"OverlapFeature","id":4},"signal":{"type":"OverlapFeature","id":5},"stopSign":{"type":"OverlapFeature","id":6},"yieldSign":{"type":"OverlapFeature","id":7}}},"ChassisFeature":{"fields":{"messageTimestampSec":{"type":"double","id":1},"speedMps":{"type":"float","id":2},"throttlePercentage":{"type":"float","id":3},"brakePercentage":{"type":"float","id":4},"steeringPercentage":{"type":"float","id":5},"gearLocation":{"type":"apollo.canbus.Chassis.GearPosition","id":6}}},"LocalizationFeature":{"fields":{"messageTimestampSec":{"type":"double","id":1},"position":{"type":"apollo.common.PointENU","id":2},"heading":{"type":"double","id":3},"linearVelocity":{"type":"apollo.common.Point3D","id":4},"linearAcceleration":{"type":"apollo.common.Point3D","id":5},"angularVelocity":{"type":"apollo.common.Point3D","id":6}}},"CommonPathPointFeature":{"fields":{"x":{"type":"double","id":1},"y":{"type":"double","id":2},"z":{"type":"double","id":3},"theta":{"type":"double","id":4},"s":{"type":"double","id":5},"laneId":{"type":"string","id":6}}},"CommonTrajectoryPointFeature":{"fields":{"pathPoint":{"type":"CommonPathPointFeature","id":1},"v":{"type":"double","id":2},"a":{"type":"double","id":3},"relativeTime":{"type":"double","id":4},"gaussianInfo":{"type":"apollo.common.GaussianInfo","id":5}}},"TrajectoryPointFeature":{"fields":{"timestampSec":{"type":"double","id":1},"trajectoryPoint":{"type":"CommonTrajectoryPointFeature","id":2}}},"PerceptionObstacleFeature":{"fields":{"timestampSec":{"type":"double","id":1},"position":{"type":"apollo.common.Point3D","id":2},"theta":{"type":"double","id":3},"velocity":{"type":"apollo.common.Point3D","id":4},"acceleration":{"type":"apollo.common.Point3D","id":5},"polygonPoint":{"rule":"repeated","type":"apollo.common.Point3D","id":6}}},"ObstacleTrajectoryFeature":{"fields":{"perceptionObstacleHistory":{"rule":"repeated","type":"PerceptionObstacleFeature","id":1},"evaluatedTrajectoryPoint":{"rule":"repeated","type":"TrajectoryPointFeature","id":2}}},"PredictionTrajectoryFeature":{"fields":{"probability":{"type":"double","id":1},"trajectoryPoint":{"rule":"repeated","type":"TrajectoryPointFeature","id":2}}},"PredictionObstacleFeature":{"fields":{"timestampSec":{"type":"double","id":1},"predictedPeriod":{"type":"double","id":2},"intent":{"type":"apollo.prediction.ObstacleIntent","id":3},"priority":{"type":"apollo.prediction.ObstaclePriority","id":4},"isStatic":{"type":"bool","id":5,"options":{"default":false}},"trajectory":{"rule":"repeated","type":"PredictionTrajectoryFeature","id":6}}},"ObstacleFeature":{"fields":{"id":{"type":"int32","id":1},"length":{"type":"double","id":2},"width":{"type":"double","id":3},"height":{"type":"double","id":4},"type":{"type":"apollo.perception.PerceptionObstacle.Type","id":5},"obstacleTrajectory":{"type":"ObstacleTrajectoryFeature","id":6},"obstaclePrediction":{"type":"PredictionObstacleFeature","id":7}}},"RoutingResponseFeature":{"fields":{"road":{"rule":"repeated","type":"apollo.routing.RoadSegment","id":1},"measurement":{"type":"apollo.routing.Measurement","id":2}}},"RoutingFeature":{"fields":{"routingResponse":{"type":"RoutingResponseFeature","id":1},"localRoutingLaneId":{"rule":"repeated","type":"string","id":2},"localRouting":{"type":"RoutingResponseFeature","id":3}}},"TrafficLightFeature":{"fields":{"color":{"type":"apollo.perception.TrafficLight.Color","id":1},"id":{"type":"string","id":2},"confidence":{"type":"double","id":3,"options":{"default":1}},"trackingTime":{"type":"double","id":4},"blink":{"type":"bool","id":5},"remainingTime":{"type":"double","id":6}}},"TrafficLightDetectionFeature":{"fields":{"messageTimestampSec":{"type":"double","id":1},"trafficLight":{"rule":"repeated","type":"TrafficLightFeature","id":2}}},"ADCTrajectoryPoint":{"fields":{"timestampSec":{"type":"double","id":1},"planningTag":{"type":"PlanningTag","id":2},"trajectoryPoint":{"type":"CommonTrajectoryPointFeature","id":3}}},"LearningOutput":{"fields":{"adcFutureTrajectoryPoint":{"rule":"repeated","type":"TrajectoryPointFeature","id":1}}},"LearningDataFrame":{"fields":{"messageTimestampSec":{"type":"double","id":1},"frameNum":{"type":"uint32","id":2},"mapName":{"type":"string","id":3},"planningTag":{"type":"PlanningTag","id":4},"chassis":{"type":"ChassisFeature","id":5},"localization":{"type":"LocalizationFeature","id":6},"obstacle":{"rule":"repeated","type":"ObstacleFeature","id":7},"routing":{"type":"RoutingFeature","id":8},"trafficLightDetection":{"type":"TrafficLightDetectionFeature","id":9},"adcTrajectoryPoint":{"rule":"repeated","type":"ADCTrajectoryPoint","id":10},"output":{"type":"LearningOutput","id":11}}},"LearningData":{"fields":{"learningDataFrame":{"rule":"repeated","type":"LearningDataFrame","id":1}}},"PlanningLearningData":{"fields":{"header":{"type":"apollo.common.Header","id":1},"learningDataFrame":{"type":"LearningDataFrame","id":2}}},"OpenSpaceFallBackDeciderConfig":{"fields":{"openSpacePredictionTimePeriod":{"type":"double","id":1,"options":{"default":5}},"openSpaceFallbackCollisionDistance":{"type":"double","id":2,"options":{"default":5}},"openSpaceFallbackStopDistance":{"type":"double","id":3,"options":{"default":2}},"openSpaceFallbackCollisionTimeBuffer":{"type":"double","id":4,"options":{"default":10}}}},"OpenSpacePreStopDeciderConfig":{"fields":{"stopType":{"type":"StopType","id":1},"rightawayStopDistance":{"type":"double","id":2,"options":{"default":2}},"stopDistanceToTarget":{"type":"double","id":3,"options":{"default":5}}},"nested":{"StopType":{"values":{"NOT_DEFINED":0,"PARKING":1,"PULL_OVER":2,"NARROW_STREET_U_TURN":3,"DEAD_END_PRE_STOP":4}}}},"OpenSpaceRoiDeciderConfig":{"fields":{"roiType":{"type":"RoiType","id":1},"roiLongitudinalRangeStart":{"type":"double","id":2,"options":{"default":10}},"roiLongitudinalRangeEnd":{"type":"double","id":3,"options":{"default":10}},"parkingStartRange":{"type":"double","id":4,"options":{"default":7}},"parkingInwards":{"type":"bool","id":5,"options":{"default":false}},"enablePerceptionObstacles":{"type":"bool","id":6},"parkingDepthBuffer":{"type":"double","id":7,"options":{"default":0.1}},"roiLineSegmentMinAngle":{"type":"double","id":8,"options":{"default":0.3}},"roiLineSegmentLength":{"type":"double","id":9,"options":{"default":1}},"roiLineSegmentLengthFromMap":{"type":"double","id":10,"options":{"default":10}},"perceptionObstacleFilteringDistance":{"type":"double","id":11,"options":{"default":1000}},"perceptionObstacleBuffer":{"type":"double","id":12},"curbHeadingTangentChangeUpperLimit":{"type":"double","id":13,"options":{"default":1}},"endPoseSDistance":{"type":"double","id":14,"options":{"default":10}},"parallelParkEndXBuffer":{"type":"double","id":15,"options":{"default":0.2}},"extendRightXBuffer":{"type":"double","id":16,"options":{"default":0}},"extendLeftXBuffer":{"type":"double","id":17,"options":{"default":0}}},"nested":{"RoiType":{"values":{"NOT_DEFINED":0,"PARKING":1,"PULL_OVER":2,"PARK_AND_GO":3,"NARROW_STREET_U_TURN":4,"DEAD_END":5}}}},"OpenSpaceTrajectoryPartitionConfig":{"fields":{"gearShiftMaxT":{"type":"double","id":1},"gearShiftUnitT":{"type":"double","id":2},"gearShiftPeriodDuration":{"type":"double","id":3},"interpolatedPiecesNum":{"type":"uint64","id":4},"initialGearCheckHorizon":{"type":"uint64","id":5},"headingSearchRange":{"type":"double","id":6},"headingTrackRange":{"type":"double","id":7},"distanceSearchRange":{"type":"double","id":8,"options":{"default":0.000001}},"headingOffsetToMidpoint":{"type":"double","id":9},"lateralOffsetToMidpoint":{"type":"double","id":10,"options":{"default":0.1}},"longitudinalOffsetToMidpoint":{"type":"double","id":11,"options":{"default":0.1}},"vehicleBoxIouThresholdToMidpoint":{"type":"double","id":12,"options":{"default":0.95}},"linearVelocityThresholdOnEgo":{"type":"double","id":13,"options":{"default":0.2}}}},"OpenSpaceTrajectoryProviderConfig":{"fields":{"openSpaceTrajectoryOptimizerConfig":{"type":"OpenSpaceTrajectoryOptimizerConfig","id":1}}},"OpenSpaceTrajectoryOptimizerConfig":{"fields":{"hybridAStarConfig":{"type":"HybridAStarConfig","id":1},"dualVariableWarmStartConfig":{"type":"DualVariableConfig","id":2},"distanceApproachTrajectorySmootherConfig":{"type":"DistanceApproachTrajectorySmootherConfig","id":3},"deltaT":{"type":"float","id":4,"options":{"default":0.5}},"isNearDestinationThreshold":{"type":"double","id":5,"options":{"default":0.001}},"plannerOpenSpaceConfig":{"type":"PlannerOpenSpaceConfig","id":6}}},"HybridAStarConfig":{"fields":{"xyGridResolution":{"type":"double","id":1,"options":{"default":0.2}},"phiGridResolution":{"type":"double","id":2,"options":{"default":0.05}},"nextNodeNum":{"type":"uint64","id":3,"options":{"default":10}},"stepSize":{"type":"double","id":4,"options":{"default":0.5}},"trajForwardPenalty":{"type":"double","id":5,"options":{"default":0}},"trajBackPenalty":{"type":"double","id":6,"options":{"default":0}},"trajGearSwitchPenalty":{"type":"double","id":7,"options":{"default":10}},"trajSteerPenalty":{"type":"double","id":8,"options":{"default":100}},"trajSteerChangePenalty":{"type":"double","id":9,"options":{"default":10}},"gridAStarXyResolution":{"type":"double","id":15,"options":{"default":0.1}},"nodeRadius":{"type":"double","id":16,"options":{"default":0.5}}}},"DualVariableMode":{"values":{"DUAL_VARIABLE_IPOPT":0,"DUAL_VARIABLE_IPOPTQP":1,"DUAL_VARIABLE_OSQP":2,"DUAL_VARIABLE_DEBUG":3}},"DualVariableConfig":{"fields":{"weightD":{"type":"double","id":1,"options":{"default":1}},"ipoptConfig":{"type":"IpoptSolverConfig","id":2},"qpFormat":{"type":"DualVariableMode","id":3},"minSafetyDistance":{"type":"double","id":4,"options":{"default":0}},"debugOsqp":{"type":"bool","id":5,"options":{"default":false}},"beta":{"type":"double","id":6,"options":{"default":1}}}},"DistanceApproachTrajectorySmootherConfig":{"fields":{"weightSteer":{"type":"double","id":1},"weightA":{"type":"double","id":2},"weightSteerRate":{"type":"double","id":3},"weightARate":{"type":"double","id":4},"weightX":{"type":"double","id":5},"weightY":{"type":"double","id":6},"weightPhi":{"type":"double","id":7},"weightV":{"type":"double","id":8},"weightSteerStitching":{"type":"double","id":9},"weightAStitching":{"type":"double","id":10},"weightFirstOrderTime":{"type":"double","id":11},"weightSecondOrderTime":{"type":"double","id":12},"minSafetyDistance":{"type":"double","id":13,"options":{"default":0}},"maxSpeedForward":{"type":"double","id":14,"options":{"default":3}},"maxSpeedReverse":{"type":"double","id":15,"options":{"default":2}},"maxAccelerationForward":{"type":"double","id":16,"options":{"default":2}},"maxAccelerationReverse":{"type":"double","id":17,"options":{"default":2}},"minTimeSampleScaling":{"type":"double","id":18,"options":{"default":0.1}},"maxTimeSampleScaling":{"type":"double","id":19,"options":{"default":10}},"useFixTime":{"type":"bool","id":20,"options":{"default":false}},"ipoptConfig":{"type":"IpoptSolverConfig","id":21},"enableConstraintCheck":{"type":"bool","id":22},"enableHandDerivative":{"type":"bool","id":23},"enableDerivativeCheck":{"type":"bool","id":24},"enableInitialFinalCheck":{"type":"bool","id":25,"options":{"default":false}}}},"IpoptSolverConfig":{"fields":{"ipoptPrintLevel":{"type":"int32","id":1},"mumpsMemPercent":{"type":"int32","id":2},"mumpsPivtol":{"type":"double","id":3},"ipoptMaxIter":{"type":"int32","id":4},"ipoptTol":{"type":"double","id":5},"ipoptAcceptableConstrViolTol":{"type":"double","id":6},"ipoptMinHessianPerturbation":{"type":"double","id":7},"ipoptJacobianRegularizationValue":{"type":"double","id":8},"ipoptPrintTimingStatistics":{"type":"string","id":9},"ipoptAlphaForY":{"type":"string","id":10},"ipoptRecalcY":{"type":"string","id":11},"ipoptMuInit":{"type":"double","id":12,"options":{"default":0.1}}}},"DrivingAction":{"values":{"NONE":100,"FOLLOW":0,"CHANGE_LEFT":1,"CHANGE_RIGHT":2,"PULL_OVER":3,"STOP":4,"RESUME_CRUISE":5}},"PadMessage":{"fields":{"header":{"type":"apollo.common.Header","id":1},"action":{"type":"DrivingAction","id":2}}},"DualWarmUpMode":{"values":{"IPOPT":0,"IPOPTQP":1,"OSQP":2,"DEBUG":3,"SLACKQP":4}},"DistanceApproachMode":{"values":{"DISTANCE_APPROACH_IPOPT":0,"DISTANCE_APPROACH_IPOPT_CUDA":1,"DISTANCE_APPROACH_IPOPT_FIXED_TS":2,"DISTANCE_APPROACH_IPOPT_FIXED_DUAL":3,"DISTANCE_APPROACH_IPOPT_RELAX_END":4,"DISTANCE_APPROACH_IPOPT_RELAX_END_SLACK":5}},"PlannerOpenSpaceConfig":{"fields":{"roiConfig":{"type":"ROIConfig","id":1},"warmStartConfig":{"type":"WarmStartConfig","id":2},"dualVariableWarmStartConfig":{"type":"DualVariableWarmStartConfig","id":3},"distanceApproachConfig":{"type":"DistanceApproachConfig","id":4},"iterativeAnchoringSmootherConfig":{"type":"IterativeAnchoringConfig","id":5},"trajectoryPartitionConfig":{"type":"TrajectoryPartitionConfig","id":6},"deltaT":{"type":"float","id":7,"options":{"default":1}},"isNearDestinationThreshold":{"type":"double","id":8,"options":{"default":0.001}},"enableCheckParallelTrajectory":{"type":"bool","id":9,"options":{"default":false}},"enableLinearInterpolation":{"type":"bool","id":10,"options":{"default":false}},"isNearDestinationThetaThreshold":{"type":"double","id":11,"options":{"default":0.05}}}},"ROIConfig":{"fields":{"roiLongitudinalRangeStart":{"type":"double","id":1,"options":{"default":10}},"roiLongitudinalRangeEnd":{"type":"double","id":2,"options":{"default":10}},"parkingStartRange":{"type":"double","id":3,"options":{"default":7}},"parkingInwards":{"type":"bool","id":4,"options":{"default":false}}}},"WarmStartConfig":{"fields":{"xyGridResolution":{"type":"double","id":1,"options":{"default":0.2}},"phiGridResolution":{"type":"double","id":2,"options":{"default":0.05}},"nextNodeNum":{"type":"uint64","id":3,"options":{"default":10}},"stepSize":{"type":"double","id":4,"options":{"default":0.5}},"trajForwardPenalty":{"type":"double","id":5,"options":{"default":0}},"trajBackPenalty":{"type":"double","id":6,"options":{"default":0}},"trajGearSwitchPenalty":{"type":"double","id":7,"options":{"default":10}},"trajSteerPenalty":{"type":"double","id":8,"options":{"default":100}},"trajSteerChangePenalty":{"type":"double","id":9,"options":{"default":10}},"gridAStarXyResolution":{"type":"double","id":15,"options":{"default":0.1}},"nodeRadius":{"type":"double","id":16,"options":{"default":0.5}},"sCurveConfig":{"type":"PiecewiseJerkSpeedOptimizerConfig","id":17}}},"DualVariableWarmStartConfig":{"fields":{"weightD":{"type":"double","id":1,"options":{"default":1}},"ipoptConfig":{"type":"IpoptConfig","id":2},"qpFormat":{"type":"DualWarmUpMode","id":3},"minSafetyDistance":{"type":"double","id":4,"options":{"default":0}},"debugOsqp":{"type":"bool","id":5,"options":{"default":false}},"beta":{"type":"double","id":6,"options":{"default":1}},"osqpConfig":{"type":"OSQPConfig","id":7}}},"DistanceApproachConfig":{"fields":{"weightSteer":{"type":"double","id":1},"weightA":{"type":"double","id":2},"weightSteerRate":{"type":"double","id":3},"weightARate":{"type":"double","id":4},"weightX":{"type":"double","id":5},"weightY":{"type":"double","id":6},"weightPhi":{"type":"double","id":7},"weightV":{"type":"double","id":8},"weightSteerStitching":{"type":"double","id":9},"weightAStitching":{"type":"double","id":10},"weightFirstOrderTime":{"type":"double","id":11},"weightSecondOrderTime":{"type":"double","id":12},"minSafetyDistance":{"type":"double","id":13,"options":{"default":0}},"maxSpeedForward":{"type":"double","id":14,"options":{"default":3}},"maxSpeedReverse":{"type":"double","id":15,"options":{"default":2}},"maxAccelerationForward":{"type":"double","id":16,"options":{"default":2}},"maxAccelerationReverse":{"type":"double","id":17,"options":{"default":2}},"minTimeSampleScaling":{"type":"double","id":18,"options":{"default":0.1}},"maxTimeSampleScaling":{"type":"double","id":19,"options":{"default":10}},"useFixTime":{"type":"bool","id":20,"options":{"default":false}},"ipoptConfig":{"type":"IpoptConfig","id":21},"enableConstraintCheck":{"type":"bool","id":22},"enableHandDerivative":{"type":"bool","id":23},"enableDerivativeCheck":{"type":"bool","id":24},"enableInitialFinalCheck":{"type":"bool","id":25,"options":{"default":false}},"distanceApproachMode":{"type":"DistanceApproachMode","id":26},"enableJacobianAd":{"type":"bool","id":27,"options":{"default":false}},"enableCheckInitialState":{"type":"bool","id":28,"options":{"default":false}},"weightEndState":{"type":"double","id":29,"options":{"default":0}},"weightSlack":{"type":"double","id":30,"options":{"default":0}}}},"IpoptConfig":{"fields":{"ipoptPrintLevel":{"type":"int32","id":1},"mumpsMemPercent":{"type":"int32","id":2},"mumpsPivtol":{"type":"double","id":3},"ipoptMaxIter":{"type":"int32","id":4},"ipoptTol":{"type":"double","id":5},"ipoptAcceptableConstrViolTol":{"type":"double","id":6},"ipoptMinHessianPerturbation":{"type":"double","id":7},"ipoptJacobianRegularizationValue":{"type":"double","id":8},"ipoptPrintTimingStatistics":{"type":"string","id":9},"ipoptAlphaForY":{"type":"string","id":10},"ipoptRecalcY":{"type":"string","id":11},"ipoptMuInit":{"type":"double","id":12,"options":{"default":0.1}}}},"OSQPConfig":{"fields":{"alpha":{"type":"double","id":1,"options":{"default":1}},"epsAbs":{"type":"double","id":2,"options":{"default":0.001}},"epsRel":{"type":"double","id":3,"options":{"default":0.001}},"maxIter":{"type":"int32","id":4,"options":{"default":10000}},"polish":{"type":"bool","id":5,"options":{"default":true}},"osqpDebugLog":{"type":"bool","id":6,"options":{"default":false}}}},"IterativeAnchoringConfig":{"fields":{"interpolatedDeltaS":{"type":"double","id":1,"options":{"default":0.1}},"reanchoringTrailsNum":{"type":"int32","id":2,"options":{"default":50}},"reanchoringPosStddev":{"type":"double","id":3,"options":{"default":0.25}},"reanchoringLengthStddev":{"type":"double","id":4,"options":{"default":1}},"estimateBound":{"type":"bool","id":5,"options":{"default":false}},"defaultBound":{"type":"double","id":6,"options":{"default":2}},"vehicleShortestDimension":{"type":"double","id":7,"options":{"default":1.04}},"femPosDeviationSmootherConfig":{"type":"FemPosDeviationSmootherConfig","id":8},"collisionDecreaseRatio":{"type":"double","id":9,"options":{"default":0.9}},"maxForwardV":{"type":"double","id":10,"options":{"default":2}},"maxReverseV":{"type":"double","id":11,"options":{"default":2}},"maxForwardAcc":{"type":"double","id":12,"options":{"default":3}},"maxReverseAcc":{"type":"double","id":13,"options":{"default":2}},"maxAccJerk":{"type":"double","id":14,"options":{"default":4}},"deltaT":{"type":"double","id":15,"options":{"default":0.2}},"sCurveConfig":{"type":"PiecewiseJerkSpeedOptimizerConfig","id":16}}},"TrajectoryPartitionConfig":{"fields":{"interpolatedPiecesNum":{"type":"uint64","id":1,"options":{"default":50}},"initialGearCheckHorizon":{"type":"uint64","id":2,"options":{"default":3}},"headingSearchingRange":{"type":"double","id":3,"options":{"default":0.3}},"gearShiftPeriodDuration":{"type":"double","id":4,"options":{"default":2}},"gearShiftMaxT":{"type":"double","id":5,"options":{"default":3}},"gearShiftUnitT":{"type":"double","id":6,"options":{"default":0.02}}}},"EStop":{"fields":{"isEstop":{"type":"bool","id":1},"reason":{"type":"string","id":2}}},"TaskStats":{"fields":{"name":{"type":"string","id":1},"timeMs":{"type":"double","id":2}}},"LatencyStats":{"fields":{"totalTimeMs":{"type":"double","id":1},"taskStats":{"rule":"repeated","type":"TaskStats","id":2},"initFrameTimeMs":{"type":"double","id":3}}},"JucType":{"values":{"UNKNOWN":0,"IN_ROAD":1,"CROSS_ROAD":2,"FORK_ROAD":3,"MAIN_SIDE":4,"DEAD_END":5}},"RSSInfo":{"fields":{"isRssSafe":{"type":"bool","id":1},"curDistLon":{"type":"double","id":2},"rssSafeDistLon":{"type":"double","id":3},"accLonRangeMinimum":{"type":"double","id":4},"accLonRangeMaximum":{"type":"double","id":5},"accLatLeftRangeMinimum":{"type":"double","id":6},"accLatLeftRangeMaximum":{"type":"double","id":7},"accLatRightRangeMinimum":{"type":"double","id":8},"accLatRightRangeMaximum":{"type":"double","id":9}}},"ADCTrajectory":{"fields":{"header":{"type":"apollo.common.Header","id":1},"totalPathLength":{"type":"double","id":2},"totalPathTime":{"type":"double","id":3},"estop":{"type":"EStop","id":6},"debug":{"type":"apollo.planning_internal.Debug","id":8},"isReplan":{"type":"bool","id":9,"options":{"default":false}},"gear":{"type":"apollo.canbus.Chassis.GearPosition","id":10},"trajectoryPoint":{"rule":"repeated","type":"apollo.common.TrajectoryPoint","id":12},"pathPoint":{"rule":"repeated","type":"apollo.common.PathPoint","id":13},"decision":{"type":"apollo.planning.DecisionResult","id":14},"latencyStats":{"type":"LatencyStats","id":15},"routingHeader":{"type":"apollo.common.Header","id":16},"rightOfWayStatus":{"type":"RightOfWayStatus","id":17},"laneId":{"rule":"repeated","type":"apollo.hdmap.Id","id":18},"engageAdvice":{"type":"apollo.common.EngageAdvice","id":19},"criticalRegion":{"type":"CriticalRegion","id":20},"trajectoryType":{"type":"TrajectoryType","id":21,"options":{"default":"UNKNOWN"}},"replanReason":{"type":"string","id":22},"targetLaneId":{"rule":"repeated","type":"apollo.hdmap.Id","id":23},"carInDeadEnd":{"type":"bool","id":24},"rssInfo":{"type":"RSSInfo","id":100}},"nested":{"RightOfWayStatus":{"values":{"UNPROTECTED":0,"PROTECTED":1}},"CriticalRegion":{"fields":{"region":{"rule":"repeated","type":"apollo.common.Polygon","id":1}}},"TrajectoryType":{"values":{"UNKNOWN":0,"NORMAL":1,"PATH_FALLBACK":2,"SPEED_FALLBACK":3,"PATH_REUSED":4}}}},"TaskConfig":{"oneofs":{"taskConfig":{"oneof":["creepDeciderConfig","laneChangeDeciderConfig","openSpaceFallbackDeciderConfig","openSpacePreStopDeciderConfig","openSpaceRoiDeciderConfig","pathAssessmentDeciderConfig","pathBoundsDeciderConfig","pathDeciderConfig","pathLaneBorrowDeciderConfig","pathReferenceDeciderConfig","pathReuseDeciderConfig","ruleBasedStopDeciderConfig","speedBoundsDeciderConfig","stBoundsDeciderConfig","openSpaceTrajectoryPartitionConfig","openSpaceTrajectoryProviderConfig","piecewiseJerkNonlinearSpeedOptimizerConfig","piecewiseJerkPathOptimizerConfig","piecewiseJerkSpeedOptimizerConfig","speedHeuristicOptimizerConfig","learningModelInferenceTaskConfig","learningModelInferenceTrajectoryTaskConfig"]}},"fields":{"taskType":{"type":"TaskType","id":1},"creepDeciderConfig":{"type":"CreepDeciderConfig","id":2},"laneChangeDeciderConfig":{"type":"LaneChangeDeciderConfig","id":3},"openSpaceFallbackDeciderConfig":{"type":"OpenSpaceFallBackDeciderConfig","id":4},"openSpacePreStopDeciderConfig":{"type":"OpenSpacePreStopDeciderConfig","id":5},"openSpaceRoiDeciderConfig":{"type":"OpenSpaceRoiDeciderConfig","id":6},"pathAssessmentDeciderConfig":{"type":"PathAssessmentDeciderConfig","id":7},"pathBoundsDeciderConfig":{"type":"PathBoundsDeciderConfig","id":8},"pathDeciderConfig":{"type":"PathDeciderConfig","id":9},"pathLaneBorrowDeciderConfig":{"type":"PathLaneBorrowDeciderConfig","id":10},"pathReferenceDeciderConfig":{"type":"PathReferenceDeciderConfig","id":11},"pathReuseDeciderConfig":{"type":"PathReuseDeciderConfig","id":12},"ruleBasedStopDeciderConfig":{"type":"RuleBasedStopDeciderConfig","id":13},"speedBoundsDeciderConfig":{"type":"SpeedBoundsDeciderConfig","id":14},"stBoundsDeciderConfig":{"type":"STBoundsDeciderConfig","id":15},"openSpaceTrajectoryPartitionConfig":{"type":"OpenSpaceTrajectoryPartitionConfig","id":16},"openSpaceTrajectoryProviderConfig":{"type":"OpenSpaceTrajectoryProviderConfig","id":17},"piecewiseJerkNonlinearSpeedOptimizerConfig":{"type":"PiecewiseJerkNonlinearSpeedOptimizerConfig","id":18},"piecewiseJerkPathOptimizerConfig":{"type":"PiecewiseJerkPathOptimizerConfig","id":19},"piecewiseJerkSpeedOptimizerConfig":{"type":"PiecewiseJerkSpeedOptimizerConfig","id":20},"speedHeuristicOptimizerConfig":{"type":"SpeedHeuristicOptimizerConfig","id":21},"learningModelInferenceTaskConfig":{"type":"LearningModelInferenceTaskConfig","id":22},"learningModelInferenceTrajectoryTaskConfig":{"type":"LearningModelInferenceTrajectoryTaskConfig","id":23}},"nested":{"TaskType":{"values":{"CREEP_DECIDER":1,"LANE_CHANGE_DECIDER":2,"NAVI_OBSTACLE_DECIDER":3,"NAVI_PATH_DECIDER":4,"NAVI_SPEED_DECIDER":5,"OPEN_SPACE_FALLBACK_DECIDER":6,"OPEN_SPACE_PRE_STOP_DECIDER":7,"OPEN_SPACE_ROI_DECIDER":8,"PATH_ASSESSMENT_DECIDER":9,"PATH_BOUNDS_DECIDER":10,"PATH_DECIDER":11,"PATH_LANE_BORROW_DECIDER":12,"PATH_REFERENCE_DECIDER":13,"PATH_REUSE_DECIDER":14,"RSS_DECIDER":15,"RULE_BASED_STOP_DECIDER":16,"SPEED_BOUNDS_PRIORI_DECIDER":17,"SPEED_BOUNDS_FINAL_DECIDER":18,"SPEED_DECIDER":19,"ST_BOUNDS_DECIDER":20,"OPEN_SPACE_TRAJECTORY_PARTITION":21,"OPEN_SPACE_TRAJECTORY_PROVIDER":22,"PIECEWISE_JERK_NONLINEAR_SPEED_OPTIMIZER":23,"PIECEWISE_JERK_PATH_OPTIMIZER":24,"PIECEWISE_JERK_SPEED_OPTIMIZER":25,"SPEED_HEURISTIC_OPTIMIZER":26,"LEARNING_MODEL_INFERENCE_TASK":27,"LEARNING_MODEL_INFERENCE_TRAJECTORY_TASK":28}}}},"ScenarioBareIntersectionUnprotectedConfig":{"fields":{"startBareIntersectionScenarioDistance":{"type":"double","id":1,"options":{"default":25}},"enableExplicitStop":{"type":"bool","id":2,"options":{"default":false}},"minPassSDistance":{"type":"double","id":3,"options":{"default":3}},"approachCruiseSpeed":{"type":"double","id":4,"options":{"default":6.7056}},"stopDistance":{"type":"double","id":5,"options":{"default":0.5}},"stopTimeoutSec":{"type":"float","id":6,"options":{"default":8}},"creepTimeoutSec":{"type":"float","id":7,"options":{"default":10}}}},"ScenarioEmergencyPullOverConfig":{"fields":{"maxStopDeceleration":{"type":"double","id":1,"options":{"default":3}},"slowDownDecelerationTime":{"type":"double","id":2,"options":{"default":3}},"targetSlowDownSpeed":{"type":"double","id":3,"options":{"default":2.5}},"stopDistance":{"type":"double","id":4,"options":{"default":1.5}}}},"ScenarioEmergencyStopConfig":{"fields":{"maxStopDeceleration":{"type":"double","id":1,"options":{"default":6}},"stopDistance":{"type":"double","id":2,"options":{"default":1}}}},"ScenarioLaneFollowConfig":{"fields":{}},"ScenarioLearningModelSampleConfig":{"fields":{}},"ScenarioNarrowStreetUTurnConfig":{"fields":{}},"ScenarioParkAndGoConfig":{"fields":{"frontObstacleBuffer":{"type":"double","id":1,"options":{"default":4}},"headingBuffer":{"type":"double","id":2,"options":{"default":0.5}},"minDistToDest":{"type":"double","id":3,"options":{"default":25}},"maxSteeringPercentageWhenCruise":{"type":"double","id":4,"options":{"default":90}}}},"ScenarioPullOverConfig":{"fields":{"startPullOverScenarioDistance":{"type":"double","id":1,"options":{"default":50}},"pullOverMinDistanceBuffer":{"type":"double","id":2,"options":{"default":10}},"maxDistanceStopSearch":{"type":"double","id":3,"options":{"default":25}},"maxSErrorToEndPoint":{"type":"double","id":4,"options":{"default":0.2}},"maxLErrorToEndPoint":{"type":"double","id":5,"options":{"default":0.5}},"maxThetaErrorToEndPoint":{"type":"double","id":6,"options":{"default":0.2}},"maxDistanceErrorToEndPoint":{"type":"double","id":7,"options":{"default":0.2}},"passDestinationThreshold":{"type":"double","id":8,"options":{"default":10}},"maxValidStopDistance":{"type":"double","id":9,"options":{"default":1}},"sDistanceToStopForOpenSpaceParking":{"type":"double","id":10,"options":{"default":7}}}},"ScenarioStopSignUnprotectedConfig":{"fields":{"startStopSignScenarioDistance":{"type":"double","id":1,"options":{"default":5}},"watchVehicleMaxValidStopDistance":{"type":"double","id":2,"options":{"default":5}},"maxValidStopDistance":{"type":"double","id":3,"options":{"default":3.5}},"stopDurationSec":{"type":"float","id":4,"options":{"default":1}},"minPassSDistance":{"type":"double","id":5,"options":{"default":3}},"stopTimeoutSec":{"type":"float","id":6,"options":{"default":8}},"creepTimeoutSec":{"type":"float","id":7,"options":{"default":10}}}},"ScenarioTrafficLightProtectedConfig":{"fields":{"startTrafficLightScenarioDistance":{"type":"double","id":1,"options":{"default":5}},"maxValidStopDistance":{"type":"double","id":2,"options":{"default":2}},"minPassSDistance":{"type":"double","id":3,"options":{"default":3}}}},"ScenarioTrafficLightUnprotectedLeftTurnConfig":{"fields":{"startTrafficLightScenarioDistance":{"type":"double","id":1,"options":{"default":5}},"approachCruiseSpeed":{"type":"double","id":2,"options":{"default":2.78}},"maxValidStopDistance":{"type":"double","id":3,"options":{"default":3.5}},"minPassSDistance":{"type":"double","id":4,"options":{"default":3}},"creepTimeoutSec":{"type":"float","id":5,"options":{"default":10}},"maxAdcSpeedBeforeCreep":{"type":"double","id":6,"options":{"default":5.56}}}},"ScenarioTrafficLightUnprotectedRightTurnConfig":{"fields":{"startTrafficLightScenarioDistance":{"type":"double","id":1,"options":{"default":5}},"enableRightTurnOnRed":{"type":"bool","id":2,"options":{"default":false}},"maxValidStopDistance":{"type":"double","id":3,"options":{"default":3.5}},"minPassSDistance":{"type":"double","id":4,"options":{"default":3}},"redLightRightTurnStopDurationSec":{"type":"float","id":5,"options":{"default":3}},"creepTimeoutSec":{"type":"float","id":6,"options":{"default":10}},"maxAdcSpeedBeforeCreep":{"type":"double","id":7,"options":{"default":3}}}},"ScenarioValetParkingConfig":{"fields":{"parkingSpotRangeToStart":{"type":"double","id":1,"options":{"default":20}},"maxValidStopDistance":{"type":"double","id":2,"options":{"default":1}}}},"ScenarioDeadEndTurnAroundConfig":{"fields":{"deadEndStartRange":{"type":"double","id":1,"options":{"default":20}},"maxValidStopDistance":{"type":"double","id":2,"options":{"default":1}}}},"ScenarioYieldSignConfig":{"fields":{"startYieldSignScenarioDistance":{"type":"double","id":1,"options":{"default":10}},"maxValidStopDistance":{"type":"double","id":2,"options":{"default":4.5}},"minPassSDistance":{"type":"double","id":3,"options":{"default":3}},"creepTimeoutSec":{"type":"float","id":4,"options":{"default":10}}}},"ScenarioConfig":{"oneofs":{"scenarioConfig":{"oneof":["laneFollowConfig","bareIntersectionUnprotectedConfig","emergencyPullOverConfig","emergencyStopConfig","learningModelSampleConfig","narrowStreetUTurnConfig","parkAndGoConfig","pullOverConfig","stopSignUnprotectedConfig","trafficLightProtectedConfig","trafficLightUnprotectedLeftTurnConfig","trafficLightUnprotectedRightTurnConfig","valetParkingConfig","yieldSignConfig","deadendTurnaroundConfig"]}},"fields":{"scenarioType":{"type":"ScenarioType","id":1},"laneFollowConfig":{"type":"ScenarioLaneFollowConfig","id":2},"bareIntersectionUnprotectedConfig":{"type":"ScenarioBareIntersectionUnprotectedConfig","id":3},"emergencyPullOverConfig":{"type":"ScenarioEmergencyPullOverConfig","id":4},"emergencyStopConfig":{"type":"ScenarioEmergencyStopConfig","id":5},"learningModelSampleConfig":{"type":"ScenarioLearningModelSampleConfig","id":6},"narrowStreetUTurnConfig":{"type":"ScenarioNarrowStreetUTurnConfig","id":7},"parkAndGoConfig":{"type":"ScenarioParkAndGoConfig","id":8},"pullOverConfig":{"type":"ScenarioPullOverConfig","id":9},"stopSignUnprotectedConfig":{"type":"ScenarioStopSignUnprotectedConfig","id":10},"trafficLightProtectedConfig":{"type":"ScenarioTrafficLightProtectedConfig","id":11},"trafficLightUnprotectedLeftTurnConfig":{"type":"ScenarioTrafficLightUnprotectedLeftTurnConfig","id":12},"trafficLightUnprotectedRightTurnConfig":{"type":"ScenarioTrafficLightUnprotectedRightTurnConfig","id":13},"valetParkingConfig":{"type":"ScenarioValetParkingConfig","id":14},"yieldSignConfig":{"type":"ScenarioYieldSignConfig","id":15},"deadendTurnaroundConfig":{"type":"ScenarioDeadEndTurnAroundConfig","id":18},"stageType":{"rule":"repeated","type":"StageType","id":16,"options":{"packed":false}},"stageConfig":{"rule":"repeated","type":"StageConfig","id":17}},"nested":{"ScenarioType":{"values":{"LANE_FOLLOW":0,"BARE_INTERSECTION_UNPROTECTED":2,"STOP_SIGN_PROTECTED":3,"STOP_SIGN_UNPROTECTED":4,"TRAFFIC_LIGHT_PROTECTED":5,"TRAFFIC_LIGHT_UNPROTECTED_LEFT_TURN":6,"TRAFFIC_LIGHT_UNPROTECTED_RIGHT_TURN":7,"YIELD_SIGN":8,"PULL_OVER":9,"VALET_PARKING":10,"EMERGENCY_PULL_OVER":11,"EMERGENCY_STOP":12,"NARROW_STREET_U_TURN":13,"PARK_AND_GO":14,"LEARNING_MODEL_SAMPLE":15,"DEADEND_TURNAROUND":16}},"StageType":{"values":{"NO_STAGE":0,"LANE_FOLLOW_DEFAULT_STAGE":1,"BARE_INTERSECTION_UNPROTECTED_APPROACH":200,"BARE_INTERSECTION_UNPROTECTED_INTERSECTION_CRUISE":201,"STOP_SIGN_UNPROTECTED_PRE_STOP":300,"STOP_SIGN_UNPROTECTED_STOP":301,"STOP_SIGN_UNPROTECTED_CREEP":302,"STOP_SIGN_UNPROTECTED_INTERSECTION_CRUISE":303,"TRAFFIC_LIGHT_PROTECTED_APPROACH":400,"TRAFFIC_LIGHT_PROTECTED_INTERSECTION_CRUISE":401,"TRAFFIC_LIGHT_UNPROTECTED_LEFT_TURN_APPROACH":410,"TRAFFIC_LIGHT_UNPROTECTED_LEFT_TURN_CREEP":411,"TRAFFIC_LIGHT_UNPROTECTED_LEFT_TURN_INTERSECTION_CRUISE":412,"TRAFFIC_LIGHT_UNPROTECTED_RIGHT_TURN_STOP":420,"TRAFFIC_LIGHT_UNPROTECTED_RIGHT_TURN_CREEP":421,"TRAFFIC_LIGHT_UNPROTECTED_RIGHT_TURN_INTERSECTION_CRUISE":422,"PULL_OVER_APPROACH":500,"PULL_OVER_RETRY_APPROACH_PARKING":501,"PULL_OVER_RETRY_PARKING":502,"EMERGENCY_PULL_OVER_SLOW_DOWN":600,"EMERGENCY_PULL_OVER_APPROACH":601,"EMERGENCY_PULL_OVER_STANDBY":602,"EMERGENCY_STOP_APPROACH":610,"EMERGENCY_STOP_STANDBY":611,"VALET_PARKING_APPROACHING_PARKING_SPOT":700,"VALET_PARKING_PARKING":701,"DEADEND_TURNAROUND_APPROACHING_TURNING_POINT":1100,"DEADEND_TURNAROUND_TURNING":1101,"PARK_AND_GO_CHECK":800,"PARK_AND_GO_CRUISE":801,"PARK_AND_GO_ADJUST":802,"PARK_AND_GO_PRE_CRUISE":803,"YIELD_SIGN_APPROACH":900,"YIELD_SIGN_CREEP":901,"LEARNING_MODEL_RUN":1000}},"StageConfig":{"fields":{"stageType":{"type":"StageType","id":1},"enabled":{"type":"bool","id":2,"options":{"default":true}},"taskType":{"rule":"repeated","type":"TaskConfig.TaskType","id":3,"options":{"packed":false}},"taskConfig":{"rule":"repeated","type":"TaskConfig","id":4}}}}},"PlannerPublicRoadConfig":{"fields":{}},"PlannerNaviConfig":{"fields":{"task":{"rule":"repeated","type":"TaskConfig.TaskType","id":1,"options":{"packed":false}},"naviPathDeciderConfig":{"type":"NaviPathDeciderConfig","id":2},"naviSpeedDeciderConfig":{"type":"NaviSpeedDeciderConfig","id":3},"naviObstacleDeciderConfig":{"type":"NaviObstacleDeciderConfig","id":4}}},"PlannerType":{"values":{"RTK":0,"PUBLIC_ROAD":1,"NAVI":2,"LATTICE":3}},"RtkPlanningConfig":{"fields":{"plannerType":{"type":"PlannerType","id":1}}},"StandardPlanningConfig":{"fields":{"plannerType":{"rule":"repeated","type":"PlannerType","id":1,"options":{"packed":false}},"plannerPublicRoadConfig":{"type":"PlannerPublicRoadConfig","id":2}}},"NavigationPlanningConfig":{"fields":{"plannerType":{"rule":"repeated","type":"PlannerType","id":1,"options":{"packed":false}},"plannerNaviConfig":{"type":"PlannerNaviConfig","id":4}}},"TopicConfig":{"fields":{"chassisTopic":{"type":"string","id":1},"hmiStatusTopic":{"type":"string","id":2},"localizationTopic":{"type":"string","id":3},"planningPadTopic":{"type":"string","id":4},"planningTrajectoryTopic":{"type":"string","id":5},"predictionTopic":{"type":"string","id":6},"relativeMapTopic":{"type":"string","id":7},"routingRequestTopic":{"type":"string","id":8},"routingResponseTopic":{"type":"string","id":9},"storyTellingTopic":{"type":"string","id":10},"trafficLightDetectionTopic":{"type":"string","id":11},"planningLearningDataTopic":{"type":"string","id":12}}},"PlanningConfig":{"oneofs":{"planningConfig":{"oneof":["rtkPlanningConfig","standardPlanningConfig","navigationPlanningConfig"]}},"fields":{"topicConfig":{"type":"TopicConfig","id":1},"learningMode":{"type":"PlanningLearningMode","id":2},"rtkPlanningConfig":{"type":"RtkPlanningConfig","id":3},"standardPlanningConfig":{"type":"StandardPlanningConfig","id":4},"navigationPlanningConfig":{"type":"NavigationPlanningConfig","id":5},"defaultTaskConfig":{"rule":"repeated","type":"TaskConfig","id":6}},"nested":{"PlanningLearningMode":{"values":{"NO_LEARNING":0,"E2E":1,"HYBRID":2,"RL_TEST":3,"E2E_TEST":4,"HYBRID_TEST":5}}}},"PlanningSemanticMapConfig":{"fields":{"resolution":{"type":"double","id":1},"height":{"type":"int32","id":100},"width":{"type":"int32","id":101},"egoIdxX":{"type":"int32","id":102},"egoIdxY":{"type":"int32","id":103},"maxRandDeltaPhi":{"type":"double","id":104},"maxEgoFutureHorizon":{"type":"double","id":105},"maxEgoPastHorizon":{"type":"double","id":106},"maxObsFutureHorizon":{"type":"double","id":107},"maxObsPastHorizon":{"type":"double","id":108},"baseMapPadding":{"type":"int32","id":200},"cityDrivingMaxSpeed":{"type":"double","id":201}}},"StatsGroup":{"fields":{"max":{"type":"double","id":1},"min":{"type":"double","id":2,"options":{"default":10000000000}},"sum":{"type":"double","id":3},"avg":{"type":"double","id":4},"num":{"type":"int32","id":5}}},"PlanningStats":{"fields":{"totalPathLength":{"type":"StatsGroup","id":1},"totalPathTime":{"type":"StatsGroup","id":2},"v":{"type":"StatsGroup","id":3},"a":{"type":"StatsGroup","id":4},"kappa":{"type":"StatsGroup","id":5},"dkappa":{"type":"StatsGroup","id":6}}},"BareIntersectionStatus":{"fields":{"currentPncJunctionOverlapId":{"type":"string","id":1},"donePncJunctionOverlapId":{"type":"string","id":2},"clearCounter":{"type":"uint32","id":3}}},"ChangeLaneStatus":{"fields":{"status":{"type":"Status","id":1},"pathId":{"type":"string","id":2},"timestamp":{"type":"double","id":3},"existLaneChangeStartPosition":{"type":"bool","id":4,"options":{"default":false}},"laneChangeStartPosition":{"type":"apollo.common.Point3D","id":5},"lastSucceedTimestamp":{"type":"double","id":6},"isCurrentOptSucceed":{"type":"bool","id":7,"options":{"default":false}},"isClearToChangeLane":{"type":"bool","id":8,"options":{"default":false}}},"nested":{"Status":{"values":{"IN_CHANGE_LANE":1,"CHANGE_LANE_FAILED":2,"CHANGE_LANE_FINISHED":3}}}},"CreepDeciderStatus":{"fields":{"creepClearCounter":{"type":"uint32","id":1}}},"StopTime":{"fields":{"obstacleId":{"type":"string","id":1},"stopTimestampSec":{"type":"double","id":2}}},"CrosswalkStatus":{"fields":{"crosswalkId":{"type":"string","id":1},"stopTime":{"rule":"repeated","type":"StopTime","id":2},"finishedCrosswalk":{"rule":"repeated","type":"string","id":3}}},"DestinationStatus":{"fields":{"hasPassedDestination":{"type":"bool","id":1,"options":{"default":false}}}},"EmergencyStopStatus":{"fields":{"stopFencePoint":{"type":"apollo.common.PointENU","id":1}}},"OpenSpaceStatus":{"fields":{"partitionedTrajectoriesIndexHistory":{"rule":"repeated","type":"string","id":1},"positionInit":{"type":"bool","id":2,"options":{"default":false}}}},"ParkAndGoStatus":{"fields":{"adcInitPosition":{"type":"apollo.common.PointENU","id":1},"adcInitHeading":{"type":"double","id":2},"inCheckStage":{"type":"bool","id":3},"adcAdjustEndPose":{"type":"apollo.common.PointENU","id":4}}},"PathDeciderStatus":{"fields":{"frontStaticObstacleCycleCounter":{"type":"int32","id":1,"options":{"default":0}},"ableToUseSelfLaneCounter":{"type":"int32","id":2,"options":{"default":0}},"isInPathLaneBorrowScenario":{"type":"bool","id":3,"options":{"default":false}},"frontStaticObstacleId":{"type":"string","id":4,"options":{"default":""}},"decidedSidePassDirection":{"rule":"repeated","type":"LaneBorrowDirection","id":5,"options":{"packed":false}}},"nested":{"LaneBorrowDirection":{"values":{"LEFT_BORROW":1,"RIGHT_BORROW":2}}}},"PullOverStatus":{"fields":{"pullOverType":{"type":"PullOverType","id":1},"planPullOverPath":{"type":"bool","id":2,"options":{"default":false}},"position":{"type":"apollo.common.PointENU","id":3},"theta":{"type":"double","id":4},"lengthFront":{"type":"double","id":5},"lengthBack":{"type":"double","id":6},"widthLeft":{"type":"double","id":7},"widthRight":{"type":"double","id":8}},"nested":{"PullOverType":{"values":{"PULL_OVER":1,"EMERGENCY_PULL_OVER":2}}}},"ReroutingStatus":{"fields":{"lastReroutingTime":{"type":"double","id":1},"needRerouting":{"type":"bool","id":2,"options":{"default":false}},"routingRequest":{"type":"apollo.routing.RoutingRequest","id":3}}},"SpeedDeciderStatus":{"fields":{"pedestrianStopTime":{"rule":"repeated","type":"StopTime","id":1}}},"ScenarioStatus":{"fields":{"scenarioType":{"type":"ScenarioConfig.ScenarioType","id":1},"stageType":{"type":"ScenarioConfig.StageType","id":2}}},"StopSignStatus":{"fields":{"currentStopSignOverlapId":{"type":"string","id":1},"doneStopSignOverlapId":{"type":"string","id":2},"waitForObstacleId":{"rule":"repeated","type":"string","id":3}}},"TrafficLightStatus":{"fields":{"currentTrafficLightOverlapId":{"rule":"repeated","type":"string","id":1},"doneTrafficLightOverlapId":{"rule":"repeated","type":"string","id":2}}},"YieldSignStatus":{"fields":{"currentYieldSignOverlapId":{"rule":"repeated","type":"string","id":1},"doneYieldSignOverlapId":{"rule":"repeated","type":"string","id":2},"waitForObstacleId":{"rule":"repeated","type":"string","id":3}}},"PlanningStatus":{"fields":{"bareIntersection":{"type":"BareIntersectionStatus","id":1},"changeLane":{"type":"ChangeLaneStatus","id":2},"creepDecider":{"type":"CreepDeciderStatus","id":3},"crosswalk":{"type":"CrosswalkStatus","id":4},"destination":{"type":"DestinationStatus","id":5},"emergencyStop":{"type":"EmergencyStopStatus","id":6},"openSpace":{"type":"OpenSpaceStatus","id":7},"parkAndGo":{"type":"ParkAndGoStatus","id":8},"pathDecider":{"type":"PathDeciderStatus","id":9},"pullOver":{"type":"PullOverStatus","id":10},"rerouting":{"type":"ReroutingStatus","id":11},"scenario":{"type":"ScenarioStatus","id":12},"speedDecider":{"type":"SpeedDeciderStatus","id":13},"stopSign":{"type":"StopSignStatus","id":14},"trafficLight":{"type":"TrafficLightStatus","id":15},"yieldSign":{"type":"YieldSignStatus","id":16}}},"QpSplineSmootherConfig":{"fields":{"splineOrder":{"type":"uint32","id":1,"options":{"default":5}},"maxSplineLength":{"type":"double","id":2,"options":{"default":25}},"regularizationWeight":{"type":"double","id":3,"options":{"default":0.1}},"secondDerivativeWeight":{"type":"double","id":4,"options":{"default":0}},"thirdDerivativeWeight":{"type":"double","id":5,"options":{"default":100}}}},"SpiralSmootherConfig":{"fields":{"maxDeviation":{"type":"double","id":1,"options":{"default":0.1}},"piecewiseLength":{"type":"double","id":2,"options":{"default":10}},"maxIteration":{"type":"uint32","id":3,"options":{"default":1000}},"optTol":{"type":"double","id":4,"options":{"default":1e-8}},"optAcceptableTol":{"type":"double","id":5,"options":{"default":0.000001}},"optAcceptableIteration":{"type":"uint32","id":6,"options":{"default":15}},"weightCurveLength":{"type":"double","id":7,"options":{"default":1}},"weightKappa":{"type":"double","id":8,"options":{"default":1}},"weightDkappa":{"type":"double","id":9,"options":{"default":100}}}},"DiscretePointsSmootherConfig":{"oneofs":{"SmootherConfig":{"oneof":["cosThetaSmoothing","femPosDeviationSmoothing"]}},"fields":{"smoothingMethod":{"type":"SmoothingMethod","id":3,"options":{"default":"FEM_POS_DEVIATION_SMOOTHING"}},"cosThetaSmoothing":{"type":"CosThetaSmootherConfig","id":4},"femPosDeviationSmoothing":{"type":"FemPosDeviationSmootherConfig","id":5}},"nested":{"SmoothingMethod":{"values":{"NOT_DEFINED":0,"COS_THETA_SMOOTHING":1,"FEM_POS_DEVIATION_SMOOTHING":2}}}},"ReferenceLineSmootherConfig":{"oneofs":{"SmootherConfig":{"oneof":["qpSpline","spiral","discretePoints"]}},"fields":{"maxConstraintInterval":{"type":"double","id":1,"options":{"default":5}},"longitudinalBoundaryBound":{"type":"double","id":2,"options":{"default":1}},"maxLateralBoundaryBound":{"type":"double","id":3,"options":{"default":0.5}},"minLateralBoundaryBound":{"type":"double","id":4,"options":{"default":0.2}},"numOfTotalPoints":{"type":"uint32","id":5,"options":{"default":500}},"curbShift":{"type":"double","id":6,"options":{"default":0.2}},"lateralBuffer":{"type":"double","id":7,"options":{"default":0.2}},"resolution":{"type":"double","id":8,"options":{"default":0.02}},"qpSpline":{"type":"QpSplineSmootherConfig","id":20},"spiral":{"type":"SpiralSmootherConfig","id":21},"discretePoints":{"type":"DiscretePointsSmootherConfig","id":22}}},"SLBoundary":{"fields":{"startS":{"type":"double","id":1},"endS":{"type":"double","id":2},"startL":{"type":"double","id":3},"endL":{"type":"double","id":4},"boundaryPoint":{"rule":"repeated","type":"apollo.common.SLPoint","id":5}}},"STDrivableBoundaryInstance":{"fields":{"t":{"type":"double","id":1},"sLower":{"type":"double","id":2},"sUpper":{"type":"double","id":3},"vObsLower":{"type":"double","id":4},"vObsUpper":{"type":"double","id":5}}},"STDrivableBoundary":{"fields":{"stBoundary":{"rule":"repeated","type":"STDrivableBoundaryInstance","id":1}}},"CreepDeciderConfig":{"fields":{"stopDistance":{"type":"double","id":1,"options":{"default":0.5}},"speedLimit":{"type":"double","id":2,"options":{"default":1}},"maxValidStopDistance":{"type":"double","id":3,"options":{"default":0.3}},"minBoundaryT":{"type":"double","id":4,"options":{"default":6}},"ignoreMaxStMinT":{"type":"double","id":5,"options":{"default":0.1}},"ignoreMinStMinS":{"type":"double","id":6,"options":{"default":15}}}},"LaneChangeDeciderConfig":{"fields":{"enableLaneChangeUrgencyCheck":{"type":"bool","id":1},"enablePrioritizeChangeLane":{"type":"bool","id":2,"options":{"default":false}},"enableRemoveChangeLane":{"type":"bool","id":3,"options":{"default":false}},"recklessChangeLane":{"type":"bool","id":4,"options":{"default":false}},"changeLaneSuccessFreezeTime":{"type":"double","id":5,"options":{"default":1.5}},"changeLaneFailFreezeTime":{"type":"double","id":6,"options":{"default":1}}}},"LearningModelInferenceTaskConfig":{"fields":{"modelType":{"type":"ModelType","id":1},"cpuModelFile":{"type":"string","id":2},"gpuModelFile":{"type":"string","id":3},"useCuda":{"type":"bool","id":4,"options":{"default":true}},"trajectoryDeltaT":{"type":"double","id":5,"options":{"default":0.2}},"allowEmptyLearningBasedData":{"type":"bool","id":6,"options":{"default":false}},"allowEmptyOutputTrajectory":{"type":"bool","id":7,"options":{"default":false}}},"nested":{"ModelType":{"values":{"CNN":1,"CNN_LSTM":2}}}},"LearningModelInferenceTrajectoryTaskConfig":{"fields":{"minAdcFutureTrajectoryTimeLength":{"type":"double","id":1,"options":{"default":2}}}},"NaviObstacleDeciderConfig":{"fields":{"minNudgeDistance":{"type":"double","id":1,"options":{"default":0.2}},"maxNudgeDistance":{"type":"double","id":2,"options":{"default":1.2}},"maxAllowNudgeSpeed":{"type":"double","id":3,"options":{"default":16.667}},"safeDistance":{"type":"double","id":4,"options":{"default":0.2}},"nudgeAllowTolerance":{"type":"double","id":5,"options":{"default":0.05}},"cyclesNumber":{"type":"uint32","id":6,"options":{"default":3}},"judgeDisCoeff":{"type":"double","id":7,"options":{"default":2}},"basisDisValue":{"type":"double","id":8,"options":{"default":30}},"lateralVelocityValue":{"type":"double","id":9,"options":{"default":0.5}},"speedDeciderDetectRange":{"type":"double","id":10,"options":{"default":1}},"maxKeepNudgeCycles":{"type":"uint32","id":11,"options":{"default":100}}}},"NaviPathDeciderConfig":{"fields":{"minPathLength":{"type":"double","id":1,"options":{"default":5}},"minLookForwardTime":{"type":"uint32","id":2,"options":{"default":2}},"maxKeepLaneDistance":{"type":"double","id":3,"options":{"default":0.8}},"maxKeepLaneShiftY":{"type":"double","id":4,"options":{"default":20}},"minKeepLaneOffset":{"type":"double","id":5,"options":{"default":15}},"keepLaneShiftCompensation":{"type":"double","id":6,"options":{"default":0.01}},"moveDestLaneConfigTalbe":{"type":"MoveDestLaneConfigTable","id":7},"moveDestLaneCompensation":{"type":"double","id":8,"options":{"default":0.35}},"maxKappaThreshold":{"type":"double","id":9,"options":{"default":0}},"kappaMoveDestLaneCompensation":{"type":"double","id":10,"options":{"default":0}},"startPlanPointFrom":{"type":"uint32","id":11,"options":{"default":0}}}},"MoveDestLaneConfigTable":{"fields":{"lateralShift":{"rule":"repeated","type":"ShiftConfig","id":1}}},"ShiftConfig":{"fields":{"maxSpeed":{"type":"double","id":1,"options":{"default":4.16}},"maxMoveDestLaneShiftY":{"type":"double","id":3,"options":{"default":0.4}}}},"NaviSpeedDeciderConfig":{"fields":{"preferredAccel":{"type":"double","id":1,"options":{"default":2}},"preferredDecel":{"type":"double","id":2,"options":{"default":2}},"preferredJerk":{"type":"double","id":3,"options":{"default":2}},"maxAccel":{"type":"double","id":4,"options":{"default":4}},"maxDecel":{"type":"double","id":5,"options":{"default":5}},"obstacleBuffer":{"type":"double","id":6,"options":{"default":0.5}},"safeDistanceBase":{"type":"double","id":7,"options":{"default":2}},"safeDistanceRatio":{"type":"double","id":8,"options":{"default":1}},"followingAccelRatio":{"type":"double","id":9,"options":{"default":0.5}},"softCentricAccelLimit":{"type":"double","id":10,"options":{"default":1.2}},"hardCentricAccelLimit":{"type":"double","id":11,"options":{"default":1.5}},"hardSpeedLimit":{"type":"double","id":12,"options":{"default":100}},"hardAccelLimit":{"type":"double","id":13,"options":{"default":10}},"enableSafePath":{"type":"bool","id":14,"options":{"default":true}},"enablePlanningStartPoint":{"type":"bool","id":15,"options":{"default":true}},"enableAccelAutoCompensation":{"type":"bool","id":16,"options":{"default":true}},"kappaPreview":{"type":"double","id":17,"options":{"default":0}},"kappaThreshold":{"type":"double","id":18,"options":{"default":0}}}},"PathAssessmentDeciderConfig":{"fields":{}},"PathBoundsDeciderConfig":{"fields":{"isLaneBorrowing":{"type":"bool","id":1},"isPullOver":{"type":"bool","id":2},"pullOverDestinationToAdcBuffer":{"type":"double","id":3,"options":{"default":25}},"pullOverDestinationToPathendBuffer":{"type":"double","id":4,"options":{"default":10}},"pullOverRoadEdgeBuffer":{"type":"double","id":5,"options":{"default":0.15}},"pullOverApproachLonDistanceAdjustFactor":{"type":"double","id":6,"options":{"default":1.5}},"adcBufferCoeff":{"type":"double","id":7,"options":{"default":1}},"isExtendLaneBoundsToIncludeAdc":{"type":"bool","id":8,"options":{"default":true}}}},"PathDeciderConfig":{"fields":{"staticObstacleBuffer":{"type":"double","id":1,"options":{"default":0.3}}}},"PathLaneBorrowDeciderConfig":{"fields":{"allowLaneBorrowing":{"type":"bool","id":1}}},"PathReferenceDeciderConfig":{"fields":{"minPathReferenceLength":{"type":"uint32","id":1,"options":{"default":20}},"weightXRefPathReference":{"type":"double","id":2}}},"PathReuseDeciderConfig":{"fields":{"reusePath":{"type":"bool","id":1}}},"PiecewiseJerkNonlinearSpeedOptimizerConfig":{"fields":{"accWeight":{"type":"double","id":1,"options":{"default":500}},"jerkWeight":{"type":"double","id":2,"options":{"default":100}},"latAccWeight":{"type":"double","id":3,"options":{"default":500}},"sPotentialWeight":{"type":"double","id":4,"options":{"default":10}},"refVWeight":{"type":"double","id":5,"options":{"default":10}},"refSWeight":{"type":"double","id":6,"options":{"default":10}},"endSWeight":{"type":"double","id":7,"options":{"default":10}},"endVWeight":{"type":"double","id":8,"options":{"default":10}},"endAWeight":{"type":"double","id":9,"options":{"default":10}},"softSBoundWeight":{"type":"double","id":10,"options":{"default":10}},"useWarmStart":{"type":"bool","id":100,"options":{"default":true}}}},"PiecewiseJerkPathOptimizerConfig":{"fields":{"defaultPathConfig":{"type":"PiecewiseJerkPathWeights","id":1},"laneChangePathConfig":{"type":"PiecewiseJerkPathWeights","id":2},"pathReferenceLWeight":{"type":"double","id":3,"options":{"default":0}}}},"PiecewiseJerkPathWeights":{"fields":{"lWeight":{"type":"double","id":1,"options":{"default":1}},"dlWeight":{"type":"double","id":2,"options":{"default":100}},"ddlWeight":{"type":"double","id":3,"options":{"default":1000}},"dddlWeight":{"type":"double","id":4,"options":{"default":10000}}}},"PiecewiseJerkSpeedOptimizerConfig":{"fields":{"accWeight":{"type":"double","id":1,"options":{"default":1}},"jerkWeight":{"type":"double","id":2,"options":{"default":10}},"kappaPenaltyWeight":{"type":"double","id":3,"options":{"default":1000}},"refSWeight":{"type":"double","id":4,"options":{"default":10}},"refVWeight":{"type":"double","id":5,"options":{"default":10}}}},"RuleBasedStopDeciderConfig":{"fields":{"maxAdcStopSpeed":{"type":"double","id":1,"options":{"default":0.3}},"maxValidStopDistance":{"type":"double","id":2,"options":{"default":0.5}},"searchBeamLength":{"type":"double","id":3,"options":{"default":5}},"searchBeamRadiusIntensity":{"type":"double","id":4,"options":{"default":0.08}},"searchRange":{"type":"double","id":5,"options":{"default":3.14}},"isBlockAngleThreshold":{"type":"double","id":6,"options":{"default":1.57}},"approachDistanceForLaneChange":{"type":"double","id":10,"options":{"default":80}},"urgentDistanceForLaneChange":{"type":"double","id":11,"options":{"default":50}}}},"SpeedBoundsDeciderConfig":{"fields":{"totalTime":{"type":"double","id":1,"options":{"default":7}},"boundaryBuffer":{"type":"double","id":2,"options":{"default":0.1}},"maxCentricAccelerationLimit":{"type":"double","id":3,"options":{"default":2}},"minimalKappa":{"type":"double","id":4,"options":{"default":0.00001}},"pointExtension":{"type":"double","id":5,"options":{"default":1}},"lowestSpeed":{"type":"double","id":6,"options":{"default":2.5}},"collisionSafetyRange":{"type":"double","id":7,"options":{"default":1}},"staticObsNudgeSpeedRatio":{"type":"double","id":8},"dynamicObsNudgeSpeedRatio":{"type":"double","id":9}}},"SpeedHeuristicOptimizerConfig":{"fields":{"defaultSpeedConfig":{"type":"DpStSpeedOptimizerConfig","id":1},"laneChangeSpeedConfig":{"type":"DpStSpeedOptimizerConfig","id":2}}},"DpStSpeedOptimizerConfig":{"fields":{"unitT":{"type":"double","id":1,"options":{"default":1}},"denseDimensionS":{"type":"int32","id":2,"options":{"default":41}},"denseUnitS":{"type":"double","id":3,"options":{"default":0.5}},"sparseUnitS":{"type":"double","id":4,"options":{"default":1}},"speedWeight":{"type":"double","id":10,"options":{"default":0}},"accelWeight":{"type":"double","id":11,"options":{"default":10}},"jerkWeight":{"type":"double","id":12,"options":{"default":10}},"obstacleWeight":{"type":"double","id":13,"options":{"default":1}},"referenceWeight":{"type":"double","id":14,"options":{"default":0}},"goDownBuffer":{"type":"double","id":15,"options":{"default":5}},"goUpBuffer":{"type":"double","id":16,"options":{"default":5}},"defaultObstacleCost":{"type":"double","id":20,"options":{"default":10000000000}},"defaultSpeedCost":{"type":"double","id":31,"options":{"default":1}},"exceedSpeedPenalty":{"type":"double","id":32,"options":{"default":10}},"lowSpeedPenalty":{"type":"double","id":33,"options":{"default":2.5}},"referenceSpeedPenalty":{"type":"double","id":34,"options":{"default":1}},"keepClearLowSpeedPenalty":{"type":"double","id":35,"options":{"default":10}},"accelPenalty":{"type":"double","id":40,"options":{"default":2}},"decelPenalty":{"type":"double","id":41,"options":{"default":2}},"positiveJerkCoeff":{"type":"double","id":50,"options":{"default":1}},"negativeJerkCoeff":{"type":"double","id":51,"options":{"default":300}},"maxAcceleration":{"type":"double","id":60,"options":{"default":4.5}},"maxDeceleration":{"type":"double","id":61,"options":{"default":-4.5}},"safeTimeBuffer":{"type":"double","id":70,"options":{"default":3}},"safeDistance":{"type":"double","id":71,"options":{"default":20}},"spatialPotentialPenalty":{"type":"double","id":80,"options":{"default":1}},"isLaneChanging":{"type":"bool","id":81,"options":{"default":false}}}},"STBoundsDeciderConfig":{"fields":{"totalTime":{"type":"double","id":1,"options":{"default":7}}}},"BacksideVehicleConfig":{"fields":{"backsideLaneWidth":{"type":"double","id":1,"options":{"default":4}}}},"CrosswalkConfig":{"fields":{"stopDistance":{"type":"double","id":1,"options":{"default":1}},"maxStopDeceleration":{"type":"double","id":2,"options":{"default":4}},"minPassSDistance":{"type":"double","id":3,"options":{"default":1}},"maxValidStopDistance":{"type":"double","id":4,"options":{"default":3}},"expandSDistance":{"type":"double","id":5,"options":{"default":2}},"stopStrictLDistance":{"type":"double","id":6,"options":{"default":4}},"stopLooseLDistance":{"type":"double","id":7,"options":{"default":5}},"stopTimeout":{"type":"double","id":8,"options":{"default":10}}}},"DestinationConfig":{"fields":{"stopDistance":{"type":"double","id":1,"options":{"default":0.5}}}},"KeepClearConfig":{"fields":{"enableKeepClearZone":{"type":"bool","id":1,"options":{"default":true}},"enableJunction":{"type":"bool","id":2,"options":{"default":true}},"minPassSDistance":{"type":"double","id":3,"options":{"default":2}},"alignWithTrafficSignTolerance":{"type":"double","id":4,"options":{"default":4.5}}}},"ReferenceLineEndConfig":{"fields":{"stopDistance":{"type":"double","id":1,"options":{"default":0.5}},"minReferenceLineRemainLength":{"type":"double","id":2,"options":{"default":50}}}},"ReroutingConfig":{"fields":{"cooldownTime":{"type":"double","id":1,"options":{"default":3}},"prepareReroutingTime":{"type":"double","id":2,"options":{"default":2}}}},"StopSignConfig":{"fields":{"enabled":{"type":"bool","id":1,"options":{"default":true}},"stopDistance":{"type":"double","id":2,"options":{"default":1}}}},"TrafficLightConfig":{"fields":{"enabled":{"type":"bool","id":1,"options":{"default":true}},"stopDistance":{"type":"double","id":2,"options":{"default":1}},"maxStopDeceleration":{"type":"double","id":3,"options":{"default":4}}}},"YieldSignConfig":{"fields":{"enabled":{"type":"bool","id":1,"options":{"default":true}},"stopDistance":{"type":"double","id":2,"options":{"default":1}},"startWatchDistance":{"type":"double","id":3,"options":{"default":2}}}},"TrafficRuleConfig":{"oneofs":{"config":{"oneof":["backsideVehicle","crosswalk","destination","keepClear","referenceLineEnd","rerouting","stopSign","trafficLight","yieldSign"]}},"fields":{"ruleId":{"type":"RuleId","id":1},"enabled":{"type":"bool","id":2},"backsideVehicle":{"type":"BacksideVehicleConfig","id":3},"crosswalk":{"type":"CrosswalkConfig","id":4},"destination":{"type":"DestinationConfig","id":5},"keepClear":{"type":"KeepClearConfig","id":6},"referenceLineEnd":{"type":"ReferenceLineEndConfig","id":7},"rerouting":{"type":"ReroutingConfig","id":8},"stopSign":{"type":"StopSignConfig","id":9},"trafficLight":{"type":"TrafficLightConfig","id":10},"yieldSign":{"type":"YieldSignConfig","id":11}},"nested":{"RuleId":{"values":{"BACKSIDE_VEHICLE":1,"CROSSWALK":2,"DESTINATION":3,"KEEP_CLEAR":4,"REFERENCE_LINE_END":5,"REROUTING":6,"STOP_SIGN":7,"TRAFFIC_LIGHT":8,"YIELD_SIGN":9}}}},"TrafficRuleConfigs":{"fields":{"config":{"rule":"repeated","type":"TrafficRuleConfig","id":1}}},"CosThetaSmootherConfig":{"fields":{"weightCosIncludedAngle":{"type":"double","id":1,"options":{"default":10000}},"weightAnchorPoints":{"type":"double","id":2,"options":{"default":1}},"weightLength":{"type":"double","id":3,"options":{"default":1}},"printLevel":{"type":"int32","id":4,"options":{"default":0}},"maxNumOfIterations":{"type":"int32","id":5,"options":{"default":500}},"acceptableNumOfIterations":{"type":"int32","id":6,"options":{"default":15}},"tol":{"type":"double","id":7,"options":{"default":1e-8}},"acceptableTol":{"type":"double","id":8,"options":{"default":0.1}},"ipoptUseAutomaticDifferentiation":{"type":"bool","id":9,"options":{"default":false}}}},"FemPosDeviationSmootherConfig":{"fields":{"weightFemPosDeviation":{"type":"double","id":2,"options":{"default":10000000000}},"weightRefDeviation":{"type":"double","id":3,"options":{"default":1}},"weightPathLength":{"type":"double","id":4,"options":{"default":1}},"applyCurvatureConstraint":{"type":"bool","id":5,"options":{"default":false}},"weightCurvatureConstraintSlackVar":{"type":"double","id":6,"options":{"default":100}},"curvatureConstraint":{"type":"double","id":7,"options":{"default":0.2}},"useSqp":{"type":"bool","id":8,"options":{"default":false}},"sqpFtol":{"type":"double","id":9,"options":{"default":0.0001}},"sqpCtol":{"type":"double","id":10,"options":{"default":0.001}},"sqpPenMaxIter":{"type":"int32","id":11,"options":{"default":10}},"sqpSubMaxIter":{"type":"int32","id":12,"options":{"default":100}},"maxIter":{"type":"int32","id":100,"options":{"default":500}},"timeLimit":{"type":"double","id":101,"options":{"default":0}},"verbose":{"type":"bool","id":102,"options":{"default":false}},"scaledTermination":{"type":"bool","id":103,"options":{"default":true}},"warmStart":{"type":"bool","id":104,"options":{"default":true}},"printLevel":{"type":"int32","id":200,"options":{"default":0}},"maxNumOfIterations":{"type":"int32","id":201,"options":{"default":500}},"acceptableNumOfIterations":{"type":"int32","id":202,"options":{"default":15}},"tol":{"type":"double","id":203,"options":{"default":1e-8}},"acceptableTol":{"type":"double","id":204,"options":{"default":0.1}}}},"QuadraticProgrammingProblem":{"fields":{"paramSize":{"type":"int32","id":1},"quadraticMatrix":{"type":"QPMatrix","id":2},"bias":{"rule":"repeated","type":"double","id":3,"options":{"packed":false}},"equalityMatrix":{"type":"QPMatrix","id":4},"equalityValue":{"rule":"repeated","type":"double","id":5,"options":{"packed":false}},"inequalityMatrix":{"type":"QPMatrix","id":6},"inequalityValue":{"rule":"repeated","type":"double","id":7,"options":{"packed":false}},"inputMarker":{"rule":"repeated","type":"double","id":8,"options":{"packed":false}},"optimalParam":{"rule":"repeated","type":"double","id":9,"options":{"packed":false}}}},"QPMatrix":{"fields":{"rowSize":{"type":"int32","id":1},"colSize":{"type":"int32","id":2},"element":{"rule":"repeated","type":"double","id":3,"options":{"packed":false}}}},"QuadraticProgrammingProblemSet":{"fields":{"problem":{"rule":"repeated","type":"QuadraticProgrammingProblem","id":1}}}}},"planning_internal":{"nested":{"Debug":{"fields":{"planningData":{"type":"PlanningData","id":2}}},"SpeedPlan":{"fields":{"name":{"type":"string","id":1},"speedPoint":{"rule":"repeated","type":"apollo.common.SpeedPoint","id":2}}},"StGraphBoundaryDebug":{"fields":{"name":{"type":"string","id":1},"point":{"rule":"repeated","type":"apollo.common.SpeedPoint","id":2},"type":{"type":"StBoundaryType","id":3}},"nested":{"StBoundaryType":{"values":{"ST_BOUNDARY_TYPE_UNKNOWN":1,"ST_BOUNDARY_TYPE_STOP":2,"ST_BOUNDARY_TYPE_FOLLOW":3,"ST_BOUNDARY_TYPE_YIELD":4,"ST_BOUNDARY_TYPE_OVERTAKE":5,"ST_BOUNDARY_TYPE_KEEP_CLEAR":6,"ST_BOUNDARY_TYPE_DRIVABLE_REGION":7}}}},"SLFrameDebug":{"fields":{"name":{"type":"string","id":1},"sampledS":{"rule":"repeated","type":"double","id":2,"options":{"packed":false}},"staticObstacleLowerBound":{"rule":"repeated","type":"double","id":3,"options":{"packed":false}},"dynamicObstacleLowerBound":{"rule":"repeated","type":"double","id":4,"options":{"packed":false}},"staticObstacleUpperBound":{"rule":"repeated","type":"double","id":5,"options":{"packed":false}},"dynamicObstacleUpperBound":{"rule":"repeated","type":"double","id":6,"options":{"packed":false}},"mapLowerBound":{"rule":"repeated","type":"double","id":7,"options":{"packed":false}},"mapUpperBound":{"rule":"repeated","type":"double","id":8,"options":{"packed":false}},"slPath":{"rule":"repeated","type":"apollo.common.SLPoint","id":9},"aggregatedBoundaryS":{"rule":"repeated","type":"double","id":10,"options":{"packed":false}},"aggregatedBoundaryLow":{"rule":"repeated","type":"double","id":11,"options":{"packed":false}},"aggregatedBoundaryHigh":{"rule":"repeated","type":"double","id":12,"options":{"packed":false}}}},"STGraphDebug":{"fields":{"name":{"type":"string","id":1},"boundary":{"rule":"repeated","type":"StGraphBoundaryDebug","id":2},"speedLimit":{"rule":"repeated","type":"apollo.common.SpeedPoint","id":3},"speedProfile":{"rule":"repeated","type":"apollo.common.SpeedPoint","id":4},"speedConstraint":{"type":"STGraphSpeedConstraint","id":5},"kernelCruiseRef":{"type":"STGraphKernelCuiseRef","id":6},"kernelFollowRef":{"type":"STGraphKernelFollowRef","id":7}},"nested":{"STGraphSpeedConstraint":{"fields":{"t":{"rule":"repeated","type":"double","id":1,"options":{"packed":false}},"lowerBound":{"rule":"repeated","type":"double","id":2,"options":{"packed":false}},"upperBound":{"rule":"repeated","type":"double","id":3,"options":{"packed":false}}}},"STGraphKernelCuiseRef":{"fields":{"t":{"rule":"repeated","type":"double","id":1,"options":{"packed":false}},"cruiseLineS":{"rule":"repeated","type":"double","id":2,"options":{"packed":false}}}},"STGraphKernelFollowRef":{"fields":{"t":{"rule":"repeated","type":"double","id":1,"options":{"packed":false}},"followLineS":{"rule":"repeated","type":"double","id":2,"options":{"packed":false}}}}}},"SignalLightDebug":{"fields":{"adcSpeed":{"type":"double","id":1},"adcFrontS":{"type":"double","id":2},"signal":{"rule":"repeated","type":"SignalDebug","id":3}},"nested":{"SignalDebug":{"fields":{"lightId":{"type":"string","id":1},"color":{"type":"apollo.perception.TrafficLight.Color","id":2},"lightStopS":{"type":"double","id":3},"adcStopDeceleration":{"type":"double","id":4},"isStopWallCreated":{"type":"bool","id":5}}}}},"DecisionTag":{"fields":{"deciderTag":{"type":"string","id":1},"decision":{"type":"apollo.planning.ObjectDecisionType","id":2}}},"ObstacleDebug":{"fields":{"id":{"type":"string","id":1},"slBoundary":{"type":"apollo.planning.SLBoundary","id":2},"decisionTag":{"rule":"repeated","type":"DecisionTag","id":3},"verticesXCoords":{"rule":"repeated","type":"double","id":4,"options":{"packed":false}},"verticesYCoords":{"rule":"repeated","type":"double","id":5,"options":{"packed":false}}}},"ReferenceLineDebug":{"fields":{"id":{"type":"string","id":1},"length":{"type":"double","id":2},"cost":{"type":"double","id":3},"isChangeLanePath":{"type":"bool","id":4},"isDrivable":{"type":"bool","id":5},"isProtected":{"type":"bool","id":6},"isOffroad":{"type":"bool","id":7},"minimumBoundary":{"type":"double","id":8},"averageKappa":{"type":"double","id":9,"options":{"deprecated":true}},"averageDkappa":{"type":"double","id":10,"options":{"deprecated":true}},"kappaRms":{"type":"double","id":11},"dkappaRms":{"type":"double","id":12},"kappaMaxAbs":{"type":"double","id":13},"dkappaMaxAbs":{"type":"double","id":14},"averageOffset":{"type":"double","id":15}}},"SampleLayerDebug":{"fields":{"slPoint":{"rule":"repeated","type":"apollo.common.SLPoint","id":1}}},"DpPolyGraphDebug":{"fields":{"sampleLayer":{"rule":"repeated","type":"SampleLayerDebug","id":1},"minCostPoint":{"rule":"repeated","type":"apollo.common.SLPoint","id":2}}},"ScenarioDebug":{"fields":{"scenarioType":{"type":"apollo.planning.ScenarioConfig.ScenarioType","id":1},"stageType":{"type":"apollo.planning.ScenarioConfig.StageType","id":2},"msg":{"type":"string","id":3}}},"Trajectories":{"fields":{"trajectory":{"rule":"repeated","type":"apollo.common.Trajectory","id":1}}},"OpenSpaceDebug":{"fields":{"trajectories":{"type":"apollo.planning_internal.Trajectories","id":1},"warmStartTrajectory":{"type":"apollo.common.VehicleMotion","id":2},"smoothedTrajectory":{"type":"apollo.common.VehicleMotion","id":3},"warmStartDualLambda":{"rule":"repeated","type":"double","id":4,"options":{"packed":false}},"warmStartDualMiu":{"rule":"repeated","type":"double","id":5,"options":{"packed":false}},"optimizedDualLambda":{"rule":"repeated","type":"double","id":6,"options":{"packed":false}},"optimizedDualMiu":{"rule":"repeated","type":"double","id":7,"options":{"packed":false}},"xyBoundary":{"rule":"repeated","type":"double","id":8,"options":{"packed":false}},"obstacles":{"rule":"repeated","type":"apollo.planning_internal.ObstacleDebug","id":9},"roiShiftPoint":{"type":"apollo.common.TrajectoryPoint","id":10},"endPoint":{"type":"apollo.common.TrajectoryPoint","id":11},"partitionedTrajectories":{"type":"apollo.planning_internal.Trajectories","id":12},"chosenTrajectory":{"type":"apollo.planning_internal.Trajectories","id":13},"isFallbackTrajectory":{"type":"bool","id":14},"fallbackTrajectory":{"type":"apollo.planning_internal.Trajectories","id":15},"trajectoryStitchingPoint":{"type":"apollo.common.TrajectoryPoint","id":16},"futureCollisionPoint":{"type":"apollo.common.TrajectoryPoint","id":17},"timeLatency":{"type":"double","id":18,"options":{"default":0}},"originPoint":{"type":"apollo.common.PointENU","id":19},"originHeadingRad":{"type":"double","id":20}}},"SmootherDebug":{"fields":{"isSmoothed":{"type":"bool","id":1},"type":{"type":"SmootherType","id":2,"options":{"default":"SMOOTHER_NONE"}},"reason":{"type":"string","id":3}},"nested":{"SmootherType":{"values":{"SMOOTHER_NONE":1,"SMOOTHER_CLOSE_STOP":2}}}},"PullOverDebug":{"fields":{"position":{"type":"apollo.common.PointENU","id":1},"theta":{"type":"double","id":2},"lengthFront":{"type":"double","id":3},"lengthBack":{"type":"double","id":4},"widthLeft":{"type":"double","id":5},"widthRight":{"type":"double","id":6}}},"PlanningData":{"fields":{"adcPosition":{"type":"apollo.localization.LocalizationEstimate","id":7},"chassis":{"type":"apollo.canbus.Chassis","id":8},"routing":{"type":"apollo.routing.RoutingResponse","id":9},"initPoint":{"type":"apollo.common.TrajectoryPoint","id":10},"path":{"rule":"repeated","type":"apollo.common.Path","id":6},"speedPlan":{"rule":"repeated","type":"SpeedPlan","id":13},"stGraph":{"rule":"repeated","type":"STGraphDebug","id":14},"slFrame":{"rule":"repeated","type":"SLFrameDebug","id":15},"predictionHeader":{"type":"apollo.common.Header","id":16},"signalLight":{"type":"SignalLightDebug","id":17},"obstacle":{"rule":"repeated","type":"ObstacleDebug","id":18},"referenceLine":{"rule":"repeated","type":"ReferenceLineDebug","id":19},"dpPolyGraph":{"type":"DpPolyGraphDebug","id":20},"latticeStImage":{"type":"LatticeStTraining","id":21},"relativeMap":{"type":"apollo.relative_map.MapMsg","id":22},"autoTuningTrainingData":{"type":"AutoTuningTrainingData","id":23},"frontClearDistance":{"type":"double","id":24},"chart":{"rule":"repeated","type":"apollo.dreamview.Chart","id":25},"scenario":{"type":"ScenarioDebug","id":26},"openSpace":{"type":"OpenSpaceDebug","id":27},"smoother":{"type":"SmootherDebug","id":28},"pullOver":{"type":"PullOverDebug","id":29},"hybridModel":{"type":"HybridModelDebug","id":30}}},"LatticeStPixel":{"fields":{"s":{"type":"int32","id":1},"t":{"type":"int32","id":2},"r":{"type":"uint32","id":3},"g":{"type":"uint32","id":4},"b":{"type":"uint32","id":5}}},"LatticeStTraining":{"fields":{"pixel":{"rule":"repeated","type":"LatticeStPixel","id":1},"timestamp":{"type":"double","id":2},"annotation":{"type":"string","id":3},"numSGrids":{"type":"uint32","id":4},"numTGrids":{"type":"uint32","id":5},"sResolution":{"type":"double","id":6},"tResolution":{"type":"double","id":7}}},"CostComponents":{"fields":{"costComponent":{"rule":"repeated","type":"double","id":1,"options":{"packed":false}}}},"AutoTuningTrainingData":{"fields":{"teacherComponent":{"type":"CostComponents","id":1},"studentComponent":{"type":"CostComponents","id":2}}},"CloudReferenceLineRequest":{"fields":{"laneSegment":{"rule":"repeated","type":"apollo.routing.LaneSegment","id":1}}},"CloudReferenceLineRoutingRequest":{"fields":{"routing":{"type":"apollo.routing.RoutingResponse","id":1}}},"CloudReferenceLineResponse":{"fields":{"segment":{"rule":"repeated","type":"apollo.common.Path","id":1}}},"HybridModelDebug":{"fields":{"usingLearningModelOutput":{"type":"bool","id":1,"options":{"default":false}},"learningModelOutputUsageRatio":{"type":"double","id":2},"learningModelOutputFailReason":{"type":"string","id":3},"evaluatedPathReference":{"type":"apollo.common.Path","id":4}}}}},"perception":{"nested":{"TrafficLightBox":{"fields":{"x":{"type":"int32","id":1},"y":{"type":"int32","id":2},"width":{"type":"int32","id":3},"height":{"type":"int32","id":4},"color":{"type":"TrafficLight.Color","id":5},"selected":{"type":"bool","id":6},"cameraName":{"type":"string","id":7}}},"TrafficLightDebug":{"fields":{"cropbox":{"type":"TrafficLightBox","id":1},"box":{"rule":"repeated","type":"TrafficLightBox","id":2},"signalNum":{"type":"int32","id":3},"validPos":{"type":"int32","id":4},"tsDiffPos":{"type":"double","id":5},"tsDiffSys":{"type":"double","id":6},"projectError":{"type":"int32","id":7},"distanceToStopLine":{"type":"double","id":8},"cameraId":{"type":"int32","id":9,"options":{"deprecated":true}},"cropRoi":{"rule":"repeated","type":"TrafficLightBox","id":10},"projectedRoi":{"rule":"repeated","type":"TrafficLightBox","id":11},"rectifiedRoi":{"rule":"repeated","type":"TrafficLightBox","id":12},"debugRoi":{"rule":"repeated","type":"TrafficLightBox","id":13}}},"TrafficLight":{"fields":{"color":{"type":"Color","id":1},"id":{"type":"string","id":2},"confidence":{"type":"double","id":3,"options":{"default":1}},"trackingTime":{"type":"double","id":4},"blink":{"type":"bool","id":5},"remainingTime":{"type":"double","id":6}},"nested":{"Color":{"values":{"UNKNOWN":0,"RED":1,"YELLOW":2,"GREEN":3,"BLACK":4}}}},"TrafficLightDetection":{"fields":{"header":{"type":"apollo.common.Header","id":2},"trafficLight":{"rule":"repeated","type":"TrafficLight","id":1},"trafficLightDebug":{"type":"TrafficLightDebug","id":3},"containLights":{"type":"bool","id":4},"cameraId":{"type":"CameraID","id":5}},"nested":{"CameraID":{"values":{"CAMERA_FRONT_LONG":0,"CAMERA_FRONT_NARROW":1,"CAMERA_FRONT_SHORT":2,"CAMERA_FRONT_WIDE":3}}}},"BBox2D":{"fields":{"xmin":{"type":"double","id":1},"ymin":{"type":"double","id":2},"xmax":{"type":"double","id":3},"ymax":{"type":"double","id":4}}},"LightStatus":{"fields":{"brakeVisible":{"type":"double","id":1},"brakeSwitchOn":{"type":"double","id":2},"leftTurnVisible":{"type":"double","id":3},"leftTurnSwitchOn":{"type":"double","id":4},"rightTurnVisible":{"type":"double","id":5},"rightTurnSwitchOn":{"type":"double","id":6}}},"V2XInformation":{"fields":{"v2xType":{"rule":"repeated","type":"V2XType","id":1,"options":{"packed":false}}},"nested":{"V2XType":{"values":{"NONE":0,"ZOMBIES_CAR":1,"BLIND_ZONE":2}}}},"SensorMeasurement":{"fields":{"sensorId":{"type":"string","id":1},"id":{"type":"int32","id":2},"position":{"type":"apollo.common.Point3D","id":3},"theta":{"type":"double","id":4},"length":{"type":"double","id":5},"width":{"type":"double","id":6},"height":{"type":"double","id":7},"velocity":{"type":"apollo.common.Point3D","id":8},"type":{"type":"PerceptionObstacle.Type","id":9},"subType":{"type":"PerceptionObstacle.SubType","id":10},"timestamp":{"type":"double","id":11},"box":{"type":"BBox2D","id":12}}},"Trajectory":{"fields":{"probability":{"type":"double","id":1},"trajectoryPoint":{"rule":"repeated","type":"apollo.common.TrajectoryPoint","id":2}}},"DebugMessage":{"fields":{"trajectory":{"rule":"repeated","type":"Trajectory","id":1}}},"PerceptionObstacle":{"fields":{"id":{"type":"int32","id":1},"position":{"type":"apollo.common.Point3D","id":2},"theta":{"type":"double","id":3},"velocity":{"type":"apollo.common.Point3D","id":4},"length":{"type":"double","id":5},"width":{"type":"double","id":6},"height":{"type":"double","id":7},"polygonPoint":{"rule":"repeated","type":"apollo.common.Point3D","id":8},"trackingTime":{"type":"double","id":9},"type":{"type":"Type","id":10},"timestamp":{"type":"double","id":11},"pointCloud":{"rule":"repeated","type":"double","id":12},"confidence":{"type":"double","id":13,"options":{"deprecated":true}},"confidenceType":{"type":"ConfidenceType","id":14,"options":{"deprecated":true}},"drops":{"rule":"repeated","type":"apollo.common.Point3D","id":15,"options":{"deprecated":true}},"acceleration":{"type":"apollo.common.Point3D","id":16},"anchorPoint":{"type":"apollo.common.Point3D","id":17},"bbox2d":{"type":"BBox2D","id":18},"subType":{"type":"SubType","id":19},"measurements":{"rule":"repeated","type":"SensorMeasurement","id":20},"heightAboveGround":{"type":"double","id":21,"options":{"default":null}},"positionCovariance":{"rule":"repeated","type":"double","id":22},"velocityCovariance":{"rule":"repeated","type":"double","id":23},"accelerationCovariance":{"rule":"repeated","type":"double","id":24},"lightStatus":{"type":"LightStatus","id":25},"msg":{"type":"DebugMessage","id":26},"source":{"type":"Source","id":27,"options":{"default":"HOST_VEHICLE"}},"v2xInfo":{"type":"V2XInformation","id":28}},"nested":{"Type":{"values":{"UNKNOWN":0,"UNKNOWN_MOVABLE":1,"UNKNOWN_UNMOVABLE":2,"PEDESTRIAN":3,"BICYCLE":4,"VEHICLE":5}},"ConfidenceType":{"values":{"CONFIDENCE_UNKNOWN":0,"CONFIDENCE_CNN":1,"CONFIDENCE_RADAR":2}},"SubType":{"values":{"ST_UNKNOWN":0,"ST_UNKNOWN_MOVABLE":1,"ST_UNKNOWN_UNMOVABLE":2,"ST_CAR":3,"ST_VAN":4,"ST_TRUCK":5,"ST_BUS":6,"ST_CYCLIST":7,"ST_MOTORCYCLIST":8,"ST_TRICYCLIST":9,"ST_PEDESTRIAN":10,"ST_TRAFFICCONE":11}},"Source":{"values":{"HOST_VEHICLE":0,"V2X":1}}}},"LaneMarker":{"fields":{"laneType":{"type":"apollo.hdmap.LaneBoundaryType.Type","id":1},"quality":{"type":"double","id":2},"modelDegree":{"type":"int32","id":3},"c0Position":{"type":"double","id":4},"c1HeadingAngle":{"type":"double","id":5},"c2Curvature":{"type":"double","id":6},"c3CurvatureDerivative":{"type":"double","id":7},"viewRange":{"type":"double","id":8},"longitudeStart":{"type":"double","id":9},"longitudeEnd":{"type":"double","id":10}}},"LaneMarkers":{"fields":{"leftLaneMarker":{"type":"LaneMarker","id":1},"rightLaneMarker":{"type":"LaneMarker","id":2},"nextLeftLaneMarker":{"rule":"repeated","type":"LaneMarker","id":3},"nextRightLaneMarker":{"rule":"repeated","type":"LaneMarker","id":4}}},"CIPVInfo":{"fields":{"cipvId":{"type":"int32","id":1},"potentialCipvId":{"rule":"repeated","type":"int32","id":2,"options":{"packed":false}}}},"PerceptionObstacles":{"fields":{"perceptionObstacle":{"rule":"repeated","type":"PerceptionObstacle","id":1},"header":{"type":"apollo.common.Header","id":2},"errorCode":{"type":"apollo.common.ErrorCode","id":3,"options":{"default":"OK"}},"laneMarker":{"type":"LaneMarkers","id":4},"cipvInfo":{"type":"CIPVInfo","id":5}}}}},"routing":{"nested":{"LaneWaypoint":{"fields":{"id":{"type":"string","id":1},"s":{"type":"double","id":2},"pose":{"type":"apollo.common.PointENU","id":3},"heading":{"type":"double","id":4}}},"LaneSegment":{"fields":{"id":{"type":"string","id":1},"startS":{"type":"double","id":2},"endS":{"type":"double","id":3}}},"ParkingSpaceType":{"values":{"VERTICAL_PLOT":0,"PARALLEL_PARKING":1}},"DeadEndRoutingType":{"values":{"ROUTING_OTHER":0,"ROUTING_IN":1,"ROUTING_OUT":2}},"ParkingInfo":{"fields":{"parkingSpaceId":{"type":"string","id":1},"parkingPoint":{"type":"apollo.common.PointENU","id":2},"parkingSpaceType":{"type":"ParkingSpaceType","id":3},"cornerPoint":{"type":"apollo.hdmap.Polygon","id":4}}},"DeadEndInfo":{"fields":{"deadEndRoutingType":{"type":"DeadEndRoutingType","id":1},"targetPoint":{"type":"apollo.common.PointENU","id":2}}},"RoutingRequest":{"fields":{"header":{"type":"apollo.common.Header","id":1},"waypoint":{"rule":"repeated","type":"LaneWaypoint","id":2},"blacklistedLane":{"rule":"repeated","type":"LaneSegment","id":3},"blacklistedRoad":{"rule":"repeated","type":"string","id":4},"broadcast":{"type":"bool","id":5,"options":{"default":true}},"parkingSpace":{"type":"apollo.hdmap.ParkingSpace","id":6,"options":{"deprecated":true}},"parkingInfo":{"type":"ParkingInfo","id":7},"deadEndInfo":{"type":"DeadEndInfo","id":8}}},"Measurement":{"fields":{"distance":{"type":"double","id":1}}},"ChangeLaneType":{"values":{"FORWARD":0,"LEFT":1,"RIGHT":2}},"Passage":{"fields":{"segment":{"rule":"repeated","type":"LaneSegment","id":1},"canExit":{"type":"bool","id":2},"changeLaneType":{"type":"ChangeLaneType","id":3,"options":{"default":"FORWARD"}}}},"RoadSegment":{"fields":{"id":{"type":"string","id":1},"passage":{"rule":"repeated","type":"Passage","id":2}}},"RoutingResponse":{"fields":{"header":{"type":"apollo.common.Header","id":1},"road":{"rule":"repeated","type":"RoadSegment","id":2},"measurement":{"type":"Measurement","id":3},"routingRequest":{"type":"RoutingRequest","id":4},"mapVersion":{"type":"bytes","id":5},"status":{"type":"apollo.common.StatusPb","id":6}}}}},"hdmap":{"nested":{"Projection":{"fields":{"proj":{"type":"string","id":1}}},"Header":{"fields":{"version":{"type":"bytes","id":1},"date":{"type":"bytes","id":2},"projection":{"type":"Projection","id":3},"district":{"type":"bytes","id":4},"generation":{"type":"bytes","id":5},"revMajor":{"type":"bytes","id":6},"revMinor":{"type":"bytes","id":7},"left":{"type":"double","id":8},"top":{"type":"double","id":9},"right":{"type":"double","id":10},"bottom":{"type":"double","id":11},"vendor":{"type":"bytes","id":12}}},"Map":{"fields":{"header":{"type":"Header","id":1},"crosswalk":{"rule":"repeated","type":"Crosswalk","id":2},"junction":{"rule":"repeated","type":"Junction","id":3},"lane":{"rule":"repeated","type":"Lane","id":4},"stopSign":{"rule":"repeated","type":"StopSign","id":5},"signal":{"rule":"repeated","type":"Signal","id":6},"yield":{"rule":"repeated","type":"YieldSign","id":7},"overlap":{"rule":"repeated","type":"Overlap","id":8},"clearArea":{"rule":"repeated","type":"ClearArea","id":9},"speedBump":{"rule":"repeated","type":"SpeedBump","id":10},"road":{"rule":"repeated","type":"Road","id":11},"parkingSpace":{"rule":"repeated","type":"ParkingSpace","id":12},"pncJunction":{"rule":"repeated","type":"PNCJunction","id":13},"rsu":{"rule":"repeated","type":"RSU","id":14}}},"ClearArea":{"fields":{"id":{"type":"Id","id":1},"overlapId":{"rule":"repeated","type":"Id","id":2},"polygon":{"type":"Polygon","id":3}}},"Crosswalk":{"fields":{"id":{"type":"Id","id":1},"polygon":{"type":"Polygon","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3}}},"Polygon":{"fields":{"point":{"rule":"repeated","type":"apollo.common.PointENU","id":1}}},"LineSegment":{"fields":{"point":{"rule":"repeated","type":"apollo.common.PointENU","id":1}}},"CurveSegment":{"oneofs":{"curveType":{"oneof":["lineSegment"]}},"fields":{"lineSegment":{"type":"LineSegment","id":1},"s":{"type":"double","id":6},"startPosition":{"type":"apollo.common.PointENU","id":7},"heading":{"type":"double","id":8},"length":{"type":"double","id":9}}},"Curve":{"fields":{"segment":{"rule":"repeated","type":"CurveSegment","id":1}}},"Id":{"fields":{"id":{"type":"string","id":1}}},"Junction":{"fields":{"id":{"type":"Id","id":1},"polygon":{"type":"Polygon","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3},"type":{"type":"Type","id":4}},"nested":{"Type":{"values":{"UNKNOWN":0,"IN_ROAD":1,"CROSS_ROAD":2,"FORK_ROAD":3,"MAIN_SIDE":4,"DEAD_END":5}}}},"LaneBoundaryType":{"fields":{"s":{"type":"double","id":1},"types":{"rule":"repeated","type":"Type","id":2,"options":{"packed":false}}},"nested":{"Type":{"values":{"UNKNOWN":0,"DOTTED_YELLOW":1,"DOTTED_WHITE":2,"SOLID_YELLOW":3,"SOLID_WHITE":4,"DOUBLE_YELLOW":5,"CURB":6}}}},"LaneBoundary":{"fields":{"curve":{"type":"Curve","id":1},"length":{"type":"double","id":2},"virtual":{"type":"bool","id":3},"boundaryType":{"rule":"repeated","type":"LaneBoundaryType","id":4}}},"LaneSampleAssociation":{"fields":{"s":{"type":"double","id":1},"width":{"type":"double","id":2}}},"Lane":{"fields":{"id":{"type":"Id","id":1},"centralCurve":{"type":"Curve","id":2},"leftBoundary":{"type":"LaneBoundary","id":3},"rightBoundary":{"type":"LaneBoundary","id":4},"length":{"type":"double","id":5},"speedLimit":{"type":"double","id":6},"overlapId":{"rule":"repeated","type":"Id","id":7},"predecessorId":{"rule":"repeated","type":"Id","id":8},"successorId":{"rule":"repeated","type":"Id","id":9},"leftNeighborForwardLaneId":{"rule":"repeated","type":"Id","id":10},"rightNeighborForwardLaneId":{"rule":"repeated","type":"Id","id":11},"type":{"type":"LaneType","id":12},"turn":{"type":"LaneTurn","id":13},"leftNeighborReverseLaneId":{"rule":"repeated","type":"Id","id":14},"rightNeighborReverseLaneId":{"rule":"repeated","type":"Id","id":15},"junctionId":{"type":"Id","id":16},"leftSample":{"rule":"repeated","type":"LaneSampleAssociation","id":17},"rightSample":{"rule":"repeated","type":"LaneSampleAssociation","id":18},"direction":{"type":"LaneDirection","id":19},"leftRoadSample":{"rule":"repeated","type":"LaneSampleAssociation","id":20},"rightRoadSample":{"rule":"repeated","type":"LaneSampleAssociation","id":21},"selfReverseLaneId":{"rule":"repeated","type":"Id","id":22}},"nested":{"LaneType":{"values":{"NONE":1,"CITY_DRIVING":2,"BIKING":3,"SIDEWALK":4,"PARKING":5,"SHOULDER":6}},"LaneTurn":{"values":{"NO_TURN":1,"LEFT_TURN":2,"RIGHT_TURN":3,"U_TURN":4}},"LaneDirection":{"values":{"FORWARD":1,"BACKWARD":2,"BIDIRECTION":3}}}},"LaneOverlapInfo":{"fields":{"startS":{"type":"double","id":1},"endS":{"type":"double","id":2},"isMerge":{"type":"bool","id":3},"regionOverlapId":{"type":"Id","id":4}}},"SignalOverlapInfo":{"fields":{}},"StopSignOverlapInfo":{"fields":{}},"CrosswalkOverlapInfo":{"fields":{"regionOverlapId":{"type":"Id","id":1}}},"JunctionOverlapInfo":{"fields":{}},"YieldOverlapInfo":{"fields":{}},"ClearAreaOverlapInfo":{"fields":{}},"SpeedBumpOverlapInfo":{"fields":{}},"ParkingSpaceOverlapInfo":{"fields":{}},"PNCJunctionOverlapInfo":{"fields":{}},"RSUOverlapInfo":{"fields":{}},"RegionOverlapInfo":{"fields":{"id":{"type":"Id","id":1},"polygon":{"rule":"repeated","type":"Polygon","id":2}}},"ObjectOverlapInfo":{"oneofs":{"overlapInfo":{"oneof":["laneOverlapInfo","signalOverlapInfo","stopSignOverlapInfo","crosswalkOverlapInfo","junctionOverlapInfo","yieldSignOverlapInfo","clearAreaOverlapInfo","speedBumpOverlapInfo","parkingSpaceOverlapInfo","pncJunctionOverlapInfo","rsuOverlapInfo"]}},"fields":{"id":{"type":"Id","id":1},"laneOverlapInfo":{"type":"LaneOverlapInfo","id":3},"signalOverlapInfo":{"type":"SignalOverlapInfo","id":4},"stopSignOverlapInfo":{"type":"StopSignOverlapInfo","id":5},"crosswalkOverlapInfo":{"type":"CrosswalkOverlapInfo","id":6},"junctionOverlapInfo":{"type":"JunctionOverlapInfo","id":7},"yieldSignOverlapInfo":{"type":"YieldOverlapInfo","id":8},"clearAreaOverlapInfo":{"type":"ClearAreaOverlapInfo","id":9},"speedBumpOverlapInfo":{"type":"SpeedBumpOverlapInfo","id":10},"parkingSpaceOverlapInfo":{"type":"ParkingSpaceOverlapInfo","id":11},"pncJunctionOverlapInfo":{"type":"PNCJunctionOverlapInfo","id":12},"rsuOverlapInfo":{"type":"RSUOverlapInfo","id":13}}},"Overlap":{"fields":{"id":{"type":"Id","id":1},"object":{"rule":"repeated","type":"ObjectOverlapInfo","id":2},"regionOverlap":{"rule":"repeated","type":"RegionOverlapInfo","id":3}}},"ParkingSpace":{"fields":{"id":{"type":"Id","id":1},"polygon":{"type":"Polygon","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3},"heading":{"type":"double","id":4}}},"ParkingLot":{"fields":{"id":{"type":"Id","id":1},"polygon":{"type":"Polygon","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3}}},"Passage":{"fields":{"id":{"type":"Id","id":1},"signalId":{"rule":"repeated","type":"Id","id":2},"yieldId":{"rule":"repeated","type":"Id","id":3},"stopSignId":{"rule":"repeated","type":"Id","id":4},"laneId":{"rule":"repeated","type":"Id","id":5},"type":{"type":"Type","id":6}},"nested":{"Type":{"values":{"UNKNOWN":0,"ENTRANCE":1,"EXIT":2}}}},"PassageGroup":{"fields":{"id":{"type":"Id","id":1},"passage":{"rule":"repeated","type":"Passage","id":2}}},"PNCJunction":{"fields":{"id":{"type":"Id","id":1},"polygon":{"type":"Polygon","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3},"passageGroup":{"rule":"repeated","type":"PassageGroup","id":4}}},"BoundaryEdge":{"fields":{"curve":{"type":"Curve","id":1},"type":{"type":"Type","id":2}},"nested":{"Type":{"values":{"UNKNOWN":0,"NORMAL":1,"LEFT_BOUNDARY":2,"RIGHT_BOUNDARY":3}}}},"BoundaryPolygon":{"fields":{"edge":{"rule":"repeated","type":"BoundaryEdge","id":1}}},"RoadBoundary":{"fields":{"outerPolygon":{"type":"BoundaryPolygon","id":1},"hole":{"rule":"repeated","type":"BoundaryPolygon","id":2}}},"RoadROIBoundary":{"fields":{"id":{"type":"Id","id":1},"roadBoundaries":{"rule":"repeated","type":"RoadBoundary","id":2}}},"RoadSection":{"fields":{"id":{"type":"Id","id":1},"laneId":{"rule":"repeated","type":"Id","id":2},"boundary":{"type":"RoadBoundary","id":3}}},"Road":{"fields":{"id":{"type":"Id","id":1},"section":{"rule":"repeated","type":"RoadSection","id":2},"junctionId":{"type":"Id","id":3},"type":{"type":"Type","id":4}},"nested":{"Type":{"values":{"UNKNOWN":0,"HIGHWAY":1,"CITY_ROAD":2,"PARK":3}}}},"RSU":{"fields":{"id":{"type":"Id","id":1},"junctionId":{"type":"Id","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3}}},"Subsignal":{"fields":{"id":{"type":"Id","id":1},"type":{"type":"Type","id":2},"location":{"type":"apollo.common.PointENU","id":3}},"nested":{"Type":{"values":{"UNKNOWN":1,"CIRCLE":2,"ARROW_LEFT":3,"ARROW_FORWARD":4,"ARROW_RIGHT":5,"ARROW_LEFT_AND_FORWARD":6,"ARROW_RIGHT_AND_FORWARD":7,"ARROW_U_TURN":8}}}},"SignInfo":{"fields":{"type":{"type":"Type","id":1}},"nested":{"Type":{"values":{"None":0,"NO_RIGHT_TURN_ON_RED":1}}}},"Signal":{"fields":{"id":{"type":"Id","id":1},"boundary":{"type":"Polygon","id":2},"subsignal":{"rule":"repeated","type":"Subsignal","id":3},"overlapId":{"rule":"repeated","type":"Id","id":4},"type":{"type":"Type","id":5},"stopLine":{"rule":"repeated","type":"Curve","id":6},"signInfo":{"rule":"repeated","type":"SignInfo","id":7}},"nested":{"Type":{"values":{"UNKNOWN":1,"MIX_2_HORIZONTAL":2,"MIX_2_VERTICAL":3,"MIX_3_HORIZONTAL":4,"MIX_3_VERTICAL":5,"SINGLE":6}}}},"SpeedBump":{"fields":{"id":{"type":"Id","id":1},"overlapId":{"rule":"repeated","type":"Id","id":2},"position":{"rule":"repeated","type":"Curve","id":3}}},"SpeedControl":{"fields":{"name":{"type":"string","id":1},"polygon":{"type":"apollo.hdmap.Polygon","id":2},"speedLimit":{"type":"double","id":3}}},"SpeedControls":{"fields":{"speedControl":{"rule":"repeated","type":"SpeedControl","id":1}}},"StopSign":{"fields":{"id":{"type":"Id","id":1},"stopLine":{"rule":"repeated","type":"Curve","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3},"type":{"type":"StopType","id":4}},"nested":{"StopType":{"values":{"UNKNOWN":0,"ONE_WAY":1,"TWO_WAY":2,"THREE_WAY":3,"FOUR_WAY":4,"ALL_WAY":5}}}},"YieldSign":{"fields":{"id":{"type":"Id","id":1},"stopLine":{"rule":"repeated","type":"Curve","id":2},"overlapId":{"rule":"repeated","type":"Id","id":3}}}}},"prediction":{"nested":{"Lane":{"fields":{"currentLaneFeature":{"rule":"repeated","type":"LaneFeature","id":1},"laneFeature":{"type":"LaneFeature","id":2},"nearbyLaneFeature":{"rule":"repeated","type":"LaneFeature","id":3},"laneGraph":{"type":"LaneGraph","id":4},"laneGraphOrdered":{"type":"LaneGraph","id":5},"labelUpdateTimeDelta":{"type":"double","id":26}}},"LaneFeature":{"fields":{"laneId":{"type":"string","id":1},"laneTurnType":{"type":"uint32","id":2},"laneS":{"type":"double","id":3},"laneL":{"type":"double","id":4},"angleDiff":{"type":"double","id":5},"distToLeftBoundary":{"type":"double","id":6},"distToRightBoundary":{"type":"double","id":7},"laneHeading":{"type":"double","id":8},"laneType":{"type":"apollo.hdmap.Lane.LaneType","id":9}}},"JunctionExit":{"fields":{"exitLaneId":{"type":"string","id":1},"exitPosition":{"type":"apollo.common.Point3D","id":2},"exitHeading":{"type":"double","id":3},"exitWidth":{"type":"double","id":4}}},"JunctionFeature":{"fields":{"junctionId":{"type":"string","id":1},"junctionRange":{"type":"double","id":2},"enterLane":{"type":"LaneFeature","id":3},"junctionExit":{"rule":"repeated","type":"JunctionExit","id":4},"junctionMlpFeature":{"rule":"repeated","type":"double","id":5,"options":{"packed":false}},"junctionMlpLabel":{"rule":"repeated","type":"int32","id":6,"options":{"packed":false}},"junctionMlpProbability":{"rule":"repeated","type":"double","id":7,"options":{"packed":false}},"startLaneId":{"rule":"repeated","type":"string","id":8}}},"ObstaclePriority":{"fields":{"priority":{"type":"Priority","id":25,"options":{"default":"NORMAL"}}},"nested":{"Priority":{"values":{"CAUTION":1,"NORMAL":2,"IGNORE":3}}}},"ObstacleInteractiveTag":{"fields":{"interactiveTag":{"type":"InteractiveTag","id":37,"options":{"default":"NONINTERACTION"}}},"nested":{"InteractiveTag":{"values":{"INTERACTION":1,"NONINTERACTION":2}}}},"Trajectory":{"fields":{"probability":{"type":"double","id":1},"trajectoryPoint":{"rule":"repeated","type":"apollo.common.TrajectoryPoint","id":2}}},"Feature":{"fields":{"id":{"type":"int32","id":1},"polygonPoint":{"rule":"repeated","type":"apollo.common.Point3D","id":30},"position":{"type":"apollo.common.Point3D","id":2},"frontPosition":{"type":"apollo.common.Point3D","id":27},"velocity":{"type":"apollo.common.Point3D","id":3},"rawVelocity":{"type":"apollo.common.Point3D","id":28},"acceleration":{"type":"apollo.common.Point3D","id":4},"velocityHeading":{"type":"double","id":5},"speed":{"type":"double","id":6},"acc":{"type":"double","id":7},"theta":{"type":"double","id":8},"length":{"type":"double","id":9},"width":{"type":"double","id":10},"height":{"type":"double","id":11},"trackingTime":{"type":"double","id":12},"timestamp":{"type":"double","id":13},"lane":{"type":"Lane","id":14},"junctionFeature":{"type":"JunctionFeature","id":26},"tPosition":{"type":"apollo.common.Point3D","id":16},"tVelocity":{"type":"apollo.common.Point3D","id":17,"options":{"deprecated":true}},"tVelocityHeading":{"type":"double","id":18,"options":{"deprecated":true}},"tSpeed":{"type":"double","id":19,"options":{"deprecated":true}},"tAcceleration":{"type":"apollo.common.Point3D","id":20,"options":{"deprecated":true}},"tAcc":{"type":"double","id":21,"options":{"deprecated":true}},"isStill":{"type":"bool","id":22,"options":{"default":false}},"type":{"type":"apollo.perception.PerceptionObstacle.Type","id":23},"labelUpdateTimeDelta":{"type":"double","id":24},"priority":{"type":"ObstaclePriority","id":25},"interactiveTag":{"type":"ObstacleInteractiveTag","id":37},"isNearJunction":{"type":"bool","id":29,"options":{"default":false}},"futureTrajectoryPoints":{"rule":"repeated","type":"PredictionTrajectoryPoint","id":31},"shortTermPredictedTrajectoryPoints":{"rule":"repeated","type":"apollo.common.TrajectoryPoint","id":32},"predictedTrajectory":{"rule":"repeated","type":"Trajectory","id":33},"adcTrajectoryPoint":{"rule":"repeated","type":"apollo.common.TrajectoryPoint","id":34},"adcTimestamp":{"type":"double","id":38},"adcLocalization":{"type":"apollo.perception.PerceptionObstacle","id":39},"surroundingLaneId":{"rule":"repeated","type":"string","id":35},"withinLaneId":{"rule":"repeated","type":"string","id":36}}},"ObstacleHistory":{"fields":{"feature":{"rule":"repeated","type":"Feature","id":1},"isTrainable":{"type":"bool","id":2,"options":{"default":false}}}},"FrameEnv":{"fields":{"timestamp":{"type":"double","id":1},"egoHistory":{"type":"ObstacleHistory","id":2},"obstaclesHistory":{"rule":"repeated","type":"ObstacleHistory","id":3}}},"LanePoint":{"fields":{"position":{"type":"apollo.common.Point3D","id":1},"heading":{"type":"double","id":2,"options":{"default":0}},"width":{"type":"double","id":3,"options":{"default":0}},"relativeS":{"type":"double","id":4,"options":{"default":0}},"relativeL":{"type":"double","id":5,"options":{"default":0}},"angleDiff":{"type":"double","id":6,"options":{"default":0}},"kappa":{"type":"double","id":7,"options":{"default":0}},"scenarioType":{"type":"ScenarioType","id":8},"speedLimit":{"type":"double","id":9}},"nested":{"ScenarioType":{"values":{"URBAN_ROAD":0,"JUNCTION":1,"HIGHWAY":2}}}},"LaneSegment":{"fields":{"laneId":{"type":"string","id":1},"startS":{"type":"double","id":2,"options":{"default":0}},"endS":{"type":"double","id":3,"options":{"default":0}},"laneTurnType":{"type":"uint32","id":4,"options":{"default":0}},"lanePoint":{"rule":"repeated","type":"LanePoint","id":5},"adcS":{"type":"double","id":7,"options":{"default":0}},"adcLanePointIdx":{"type":"int32","id":8,"options":{"default":0}},"totalLength":{"type":"double","id":6,"options":{"default":0}}}},"NearbyObstacle":{"fields":{"id":{"type":"int32","id":1},"s":{"type":"double","id":2},"l":{"type":"double","id":3}}},"StopSign":{"fields":{"stopSignId":{"type":"string","id":1},"laneId":{"type":"string","id":2},"laneS":{"type":"double","id":3},"laneSequenceS":{"type":"double","id":4}}},"LaneSequence":{"fields":{"laneSequenceId":{"type":"int32","id":1},"laneSegment":{"rule":"repeated","type":"LaneSegment","id":2},"adcLaneSegmentIdx":{"type":"int32","id":23,"options":{"default":0}},"pathPoint":{"rule":"repeated","type":"apollo.common.PathPoint","id":8},"laneType":{"type":"apollo.hdmap.Lane.LaneType","id":22},"laneS":{"type":"double","id":17},"laneL":{"type":"double","id":18},"vehicleOnLane":{"type":"bool","id":10},"nearbyObstacle":{"rule":"repeated","type":"NearbyObstacle","id":3},"stopSign":{"type":"StopSign","id":20},"rightOfWay":{"type":"int32","id":21},"features":{"type":"Features","id":4},"label":{"type":"int32","id":5,"options":{"default":0}},"probability":{"type":"double","id":6,"options":{"default":0}},"acceleration":{"type":"double","id":7,"options":{"default":0}},"timeToLaneCenter":{"type":"double","id":16},"timeToLaneEdge":{"type":"double","id":19},"behaviorType":{"type":"BehaviorType","id":9},"currLanePoint":{"rule":"repeated","type":"LanePoint","id":11},"leftNeighborPoint":{"rule":"repeated","type":"LanePoint","id":12},"rightNeighborPoint":{"rule":"repeated","type":"LanePoint","id":13},"leftNearbyObstacle":{"rule":"repeated","type":"NearbyObstacle","id":14},"rightNearbyObstacle":{"rule":"repeated","type":"NearbyObstacle","id":15}},"nested":{"Features":{"fields":{"mlpFeatures":{"rule":"repeated","type":"double","id":1,"options":{"packed":false}}}},"BehaviorType":{"values":{"NOT_GOTO_LANE":1,"CONSTANT_SPEED":2,"SMALL_ACCELERATION":3,"LARGE_ACCELERATION":4,"SMALL_DECELERATION":5,"LARGE_DECELERATION":6}}}},"LaneGraph":{"fields":{"laneSequence":{"rule":"repeated","type":"LaneSequence","id":1}}},"LaneObstacle":{"fields":{"obstacleId":{"type":"int32","id":1},"laneId":{"type":"string","id":2},"laneS":{"type":"double","id":3},"laneL":{"type":"double","id":4}}},"PredictionPathPoint":{"fields":{"x":{"rule":"required","type":"double","id":1},"y":{"rule":"required","type":"double","id":2},"velocityHeading":{"type":"double","id":3}}},"PredictionTrajectoryPoint":{"fields":{"pathPoint":{"rule":"required","type":"PredictionPathPoint","id":1},"timestamp":{"rule":"required","type":"double","id":2}}},"ObstacleIntent":{"fields":{"type":{"type":"Type","id":1,"options":{"default":"UNKNOWN"}}},"nested":{"Type":{"values":{"UNKNOWN":0,"STOP":1,"STATIONARY":2,"MOVING":3,"CHANGE_LANE":4,"LOW_ACCELERATION":5,"HIGH_ACCELERATION":6,"LOW_DECELERATION":7,"HIGH_DECELERATION":8}}}},"Intent":{"fields":{"type":{"type":"Type","id":1,"options":{"default":"UNKNOWN"}}},"nested":{"Type":{"values":{"UNKNOWN":0,"STOP":1,"CRUISE":2,"CHANGE_LANE":3}}}},"PredictionObstacle":{"fields":{"perceptionObstacle":{"type":"apollo.perception.PerceptionObstacle","id":1},"timestamp":{"type":"double","id":2},"predictedPeriod":{"type":"double","id":3},"trajectory":{"rule":"repeated","type":"Trajectory","id":4},"intent":{"type":"ObstacleIntent","id":5},"priority":{"type":"ObstaclePriority","id":6},"interactiveTag":{"type":"ObstacleInteractiveTag","id":9},"isStatic":{"type":"bool","id":7,"options":{"default":false}},"feature":{"rule":"repeated","type":"Feature","id":8}}},"PredictionObstacles":{"fields":{"header":{"type":"apollo.common.Header","id":1},"predictionObstacle":{"rule":"repeated","type":"PredictionObstacle","id":2},"perceptionErrorCode":{"type":"apollo.common.ErrorCode","id":3},"startTimestamp":{"type":"double","id":4},"endTimestamp":{"type":"double","id":5},"intent":{"type":"Intent","id":6},"scenario":{"type":"Scenario","id":7}}},"Scenario":{"fields":{"type":{"type":"Type","id":1,"options":{"default":"UNKNOWN"}},"junctionId":{"type":"string","id":2}},"nested":{"Type":{"values":{"UNKNOWN":0,"CRUISE":1000,"CRUISE_URBAN":1001,"CRUISE_HIGHWAY":1002,"JUNCTION":2000,"JUNCTION_TRAFFIC_LIGHT":2001,"JUNCTION_STOP_SIGN":2002}}}}}},"relative_map":{"nested":{"NavigationPath":{"fields":{"path":{"type":"apollo.common.Path","id":1},"pathPriority":{"type":"uint32","id":2}}},"NavigationInfo":{"fields":{"header":{"type":"apollo.common.Header","id":1},"navigationPath":{"rule":"repeated","type":"NavigationPath","id":2}}},"MapMsg":{"fields":{"header":{"type":"apollo.common.Header","id":1},"hdmap":{"type":"apollo.hdmap.Map","id":2},"navigationPath":{"keyType":"string","type":"NavigationPath","id":3},"laneMarker":{"type":"apollo.perception.LaneMarkers","id":4},"localization":{"type":"apollo.localization.LocalizationEstimate","id":5}}},"SampleParam":{"fields":{"straightSampleInterval":{"type":"double","id":1,"options":{"default":3}},"smallKappaSampleInterval":{"type":"double","id":2,"options":{"default":1}},"middleKappaSampleInterval":{"type":"double","id":3,"options":{"default":0.4}},"largeKappaSampleInterval":{"type":"double","id":4,"options":{"default":0.1}},"smallKappa":{"type":"double","id":5,"options":{"default":0.002}},"middleKappa":{"type":"double","id":6,"options":{"default":0.008}},"largeKappa":{"type":"double","id":7,"options":{"default":0.02}}}},"NavigatorConfig":{"fields":{"enableNavigatorDownsample":{"type":"bool","id":1,"options":{"default":true}},"sampleParam":{"type":"SampleParam","id":2}}},"MapGenerationParam":{"fields":{"defaultLeftWidth":{"type":"double","id":1,"options":{"default":1.75}},"defaultRightWidth":{"type":"double","id":2,"options":{"default":1.75}},"defaultSpeedLimit":{"type":"double","id":3,"options":{"default":29.0576}}}},"NavigationLaneConfig":{"fields":{"minLaneMarkerQuality":{"type":"double","id":1,"options":{"default":0.5}},"laneSource":{"type":"LaneSource","id":2},"maxLenFromNavigationLine":{"type":"double","id":3,"options":{"default":250}},"minLenForNavigationLane":{"type":"double","id":4,"options":{"default":150}},"maxLenForNavigationLane":{"type":"double","id":5,"options":{"default":250}},"ratioNavigationLaneLenToSpeed":{"type":"double","id":6,"options":{"default":8}},"maxDistanceToNavigationLine":{"type":"double","id":7,"options":{"default":15}},"minViewRangeToUseLaneMarker":{"type":"double","id":8,"options":{"default":0.5}},"minLaneHalfWidth":{"type":"double","id":9,"options":{"default":1.5}},"maxLaneHalfWidth":{"type":"double","id":10,"options":{"default":2}},"laneMarkerWeight":{"type":"double","id":11,"options":{"default":0.1}}},"nested":{"LaneSource":{"values":{"PERCEPTION":1,"OFFLINE_GENERATED":2}}}},"RelativeMapConfig":{"fields":{"mapParam":{"type":"MapGenerationParam","id":1},"navigationLane":{"type":"NavigationLaneConfig","id":2}}}}},"audio":{"nested":{"MovingResult":{"values":{"UNKNOWN":0,"APPROACHING":1,"DEPARTING":2,"STATIONARY":3}},"AudioType":{"values":{"UNKNOWN_TYPE":0,"POLICE":1,"AMBULANCE":2,"FIRETRUCK":3}},"AudioDirection":{"values":{"UNKNOWN_DIRECTION":0,"FRONT":1,"LEFT":2,"BACK":3,"RIGHT":4}},"AudioEvent":{"fields":{"header":{"type":"apollo.common.Header","id":1},"id":{"type":"int32","id":2},"movingResult":{"type":"apollo.audio.MovingResult","id":3,"options":{"default":"UNKNOWN"}},"audioType":{"type":"apollo.audio.AudioType","id":4,"options":{"default":"UNKNOWN_TYPE"}},"sirenIsOn":{"type":"bool","id":5},"audioDirection":{"type":"apollo.audio.AudioDirection","id":6,"options":{"default":"UNKNOWN_DIRECTION"}},"pose":{"type":"apollo.localization.Pose","id":7}}}}}}}}};

/***/ })

/******/ });
//# sourceMappingURL=worker.bundle.js.map