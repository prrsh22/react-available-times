module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HOUR_IN_PIXELS = exports.HOUR_IN_PIXELS = 50;
var MINUTE_IN_PIXELS = exports.MINUTE_IN_PIXELS = HOUR_IN_PIXELS / 60;
var RULER_WIDTH_IN_PIXELS = exports.RULER_WIDTH_IN_PIXELS = 40;
var WEEKS_PER_TIMESPAN = exports.WEEKS_PER_TIMESPAN = 4;
var DAYS_IN_WEEK = exports.DAYS_IN_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(35);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inSameDay;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inSameDay(dateA, dateB, timeZone) {
  return _momentTimezone2.default.tz(dateA, timeZone).format('YYYYMMDD') === _momentTimezone2.default.tz(dateB, timeZone).format('YYYYMMDD');
}
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Constants = __webpack_require__(1);

module.exports = {
  validateDays: function validateDays(propValue, key, componentName, location, propFullName) {
    if (!_Constants.DAYS_IN_WEEK.includes(propValue[key])) {
      return new Error('Invalid prop ' + propFullName + ' supplied to ' + componentName + '. Validation failed.');
    }
    return true;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = positionInDay;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _Constants = __webpack_require__(1);

var _inSameDay = __webpack_require__(6);

var _inSameDay2 = _interopRequireDefault(_inSameDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function positionInDay(withinDay, date, timeZone) {
  if (!timeZone) {
    throw new Error('Missing timeZone');
  }
  if (!(0, _inSameDay2.default)(date, withinDay, timeZone)) {
    if (date < withinDay) {
      return 0;
    }
    return 17 * _Constants.HOUR_IN_PIXELS;
  }
  var mom = _momentTimezone2.default.tz(date, timeZone);
  return (mom.hours() - 7) * _Constants.HOUR_IN_PIXELS + mom.minutes() * _Constants.MINUTE_IN_PIXELS;
}
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = weekAt;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _dateIntervalString = __webpack_require__(19);

var _dateIntervalString2 = _interopRequireDefault(_dateIntervalString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function weekAt(weekStartsOn, atDate, timeZone) {
  if (!timeZone) {
    throw new Error('Missing timeZone');
  }
  // Create a copy so that we're not mutating the original
  var date = _momentTimezone2.default.tz(atDate, timeZone);
  if (date.day() === 0 && weekStartsOn === 'monday') {
    // We want sunday to be the last day here, so go back to saturday to make
    // sure we end up with the right week interval.
    date.add(-1, 'day');
  }

  // Set the clock to noon so that calculations to get following/previous days
  // work despite daylight savings time. We have to use local time (as opposed
  // to `setHoursUTC` so that we're not accidentally changing the date.
  date.hour(12).minute(0).second(0).millisecond(0);
  date.day(weekStartsOn === 'monday' ? 1 : 0);

  var start = _momentTimezone2.default.tz(date, timeZone);
  start.hour(0);

  var days = [];
  for (var i = 0; i < 7; i++) {
    days.push({
      date: date.toDate(),
      name: date.format('dddd'),
      abbreviated: date.format('ddd')
    });
    date.weekday(date.weekday() + 1);
  }
  var end = _momentTimezone2.default.tz(date, timeZone);
  end.hour(0);
  return {
    interval: (0, _dateIntervalString2.default)(days[0].date, days[days.length - 1].date, timeZone),
    days: days,
    start: start.toDate(),
    end: end.toDate()
  };
}
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _Constants = __webpack_require__(1);

var _Validators = __webpack_require__(7);

var _CalendarSelector = __webpack_require__(12);

var _CalendarSelector2 = _interopRequireDefault(_CalendarSelector);

var _Slider = __webpack_require__(16);

var _Slider2 = _interopRequireDefault(_Slider);

var _Week = __webpack_require__(18);

var _Week2 = _interopRequireDefault(_Week);

var _makeRecurring = __webpack_require__(24);

var _makeRecurring2 = _interopRequireDefault(_makeRecurring);

var _normalizeRecurringSelections = __webpack_require__(25);

var _normalizeRecurringSelections2 = _interopRequireDefault(_normalizeRecurringSelections);

var _AvailableTimes = __webpack_require__(36);

var _AvailableTimes2 = _interopRequireDefault(_AvailableTimes);

var _weekAt = __webpack_require__(9);

var _weekAt2 = _interopRequireDefault(_weekAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var leftArrowSvg = _react2.default.createElement(
  'svg',
  { height: '24', viewBox: '0 0 24 24', width: '24' },
  _react2.default.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' }),
  _react2.default.createElement('path', { d: 'M0-.5h24v24H0z', fill: 'none' })
);

var rightArrowSvg = _react2.default.createElement(
  'svg',
  { height: '24', viewBox: '0 0 24 24', width: '24' },
  _react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }),
  _react2.default.createElement('path', { d: 'M0-.25h24v24H0z', fill: 'none' })
);

function oneWeekAhead(date, tz) {
  var m = _momentTimezone2.default.tz(date, tz);
  m.week(m.week() + 1);
  return m.toDate();
}

function flatten(selections) {
  var result = [];
  Object.keys(selections).forEach(function (date) {
    result.push.apply(result, _toConsumableArray(selections[date]));
  });
  return result;
}

var AvailableTimes = function (_PureComponent) {
  _inherits(AvailableTimes, _PureComponent);

  function AvailableTimes(_ref) {
    var _ref$calendars = _ref.calendars,
        calendars = _ref$calendars === undefined ? [] : _ref$calendars,
        _ref$initialSelection = _ref.initialSelections,
        initialSelections = _ref$initialSelection === undefined ? [] : _ref$initialSelection,
        recurring = _ref.recurring,
        timeZone = _ref.timeZone,
        weekStartsOn = _ref.weekStartsOn,
        addable = _ref.addable;

    _classCallCheck(this, AvailableTimes);

    var _this = _possibleConstructorReturn(this, (AvailableTimes.__proto__ || Object.getPrototypeOf(AvailableTimes)).call(this));

    var selectedCalendars = calendars.filter(function (_ref2) {
      var selected = _ref2.selected;
      return selected;
    }).map(function (_ref3) {
      var id = _ref3.id;
      return id;
    });

    var normalizedSelections = recurring ? (0, _normalizeRecurringSelections2.default)(initialSelections, timeZone, weekStartsOn) : initialSelections;
    _this.state = {
      weeks: [],
      currentWeekIndex: 0,
      selectedCalendars: selectedCalendars,
      selections: normalizedSelections,
      availableWidth: 10
    };
    _this.selections = {};
    normalizedSelections.forEach(function (selection) {
      var week = (0, _weekAt2.default)(weekStartsOn, selection.start, timeZone);
      var existing = _this.selections[week.start] || [];
      existing.push(selection);
      _this.selections[week.start] = existing;
    });
    _this.handleWeekChange = _this.handleWeekChange.bind(_this);
    _this.moveBack = _this.move.bind(_this, -1);
    _this.moveForward = _this.move.bind(_this, 1);
    _this.move = _this.move.bind(_this);
    _this.handleHomeClick = function () {
      return _this.setState(function (_ref4) {
        var weeks = _ref4.weeks;
        return {
          currentWeekIndex: 0
        };
      });
    };
    _this.handleCalendarChange = _this.handleCalendarChange.bind(_this);
    _this.setRef = _this.setRef.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    return _this;
  }

  _createClass(AvailableTimes, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('resize', this.handleWindowResize);
      this.setState({
        weeks: this.expandWeeks(this.state.weeks, 0)
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref5) {
      var recurring = _ref5.recurring;

      if (recurring === this.props.recurring) {
        return;
      }
      this.setState({ currentWeekIndex: 0 });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref6) {
      var recurring = _ref6.recurring;

      if (recurring === this.props.recurring) {
        return;
      }
      this.triggerOnChange();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }, {
    key: 'setRef',
    value: function setRef(element) {
      if (!element) {
        return;
      }
      this.ref = element;
      this.setState({
        availableWidth: element.offsetWidth
      });
    }
  }, {
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.setState({
        availableWidth: this.ref.offsetWidth
      });
    }
  }, {
    key: 'triggerOnChange',
    value: function triggerOnChange() {
      var _this2 = this;

      var _props = this.props,
          onChange = _props.onChange,
          recurring = _props.recurring,
          timeZone = _props.timeZone,
          weekStartsOn = _props.weekStartsOn;

      var newSelections = flatten(this.selections);
      if (onChange) {
        if (recurring) {
          var startingFirstWeek = newSelections.filter(function (_ref7) {
            var start = _ref7.start;
            return start < _this2.state.weeks[0].end;
          });
          onChange(startingFirstWeek.map(function (selection) {
            return (0, _makeRecurring2.default)(selection, timeZone, weekStartsOn);
          }));
        } else {
          onChange(newSelections);
        }
      }
      return newSelections;
    }
  }, {
    key: 'handleWeekChange',
    value: function handleWeekChange(week, weekSelections) {
      this.selections[week.start] = weekSelections;
      var newSelections = this.triggerOnChange();
      this.setState({
        selections: newSelections
      });
    }
  }, {
    key: 'handleCalendarChange',
    value: function handleCalendarChange(selectedCalendars) {
      this.setState({ selectedCalendars: selectedCalendars });
      this.eventsStore.updateSelectedCalendars(selectedCalendars);
    }
  }, {
    key: 'expandWeeks',
    value: function expandWeeks(weeks, weekIndex) {
      if (weeks.length - weekIndex > _Constants.WEEKS_PER_TIMESPAN) {
        // no need to expand
        return weeks;
      }

      var _props2 = this.props,
          weekStartsOn = _props2.weekStartsOn,
          timeZone = _props2.timeZone;

      var newWeeks = weeks;
      var addedWeeks = 0;
      while (addedWeeks < _Constants.WEEKS_PER_TIMESPAN) {
        var week = newWeeks.length ? (0, _weekAt2.default)(weekStartsOn, oneWeekAhead(newWeeks[newWeeks.length - 1].days[3].date, timeZone), timeZone) : (0, _weekAt2.default)(weekStartsOn, new Date(), timeZone);
        newWeeks = newWeeks.concat(week);
        addedWeeks++;
      }
      return newWeeks;
    }
  }, {
    key: 'move',
    value: function move(increment) {
      var _this3 = this;

      this.setState(function (_ref8) {
        var currentWeekIndex = _ref8.currentWeekIndex,
            weeks = _ref8.weeks;

        var nextIndex = currentWeekIndex + increment;
        if (nextIndex < 0 || nextIndex > 1) {
          return undefined;
        }
        return {
          weeks: _this3.expandWeeks(weeks, nextIndex),
          currentWeekIndex: nextIndex
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          calendars = _props3.calendars,
          width = _props3.width,
          height = _props3.height,
          timeConvention = _props3.timeConvention,
          timeZone = _props3.timeZone,
          recurring = _props3.recurring,
          touchToDeleteSelection = _props3.touchToDeleteSelection,
          availableDays = _props3.availableDays,
          availableHourRange = _props3.availableHourRange,
          events = _props3.events,
          eventList = _props3.eventList,
          addable = _props3.addable,
          editable = _props3.editable,
          only30Min = _props3.only30Min;
      var _state = this.state,
          availableWidth = _state.availableWidth,
          currentWeekIndex = _state.currentWeekIndex,
          selectedCalendars = _state.selectedCalendars,
          selections = _state.selections,
          weeks = _state.weeks;


      var homeClasses = [_AvailableTimes2.default.home];
      if (currentWeekIndex !== 0) {
        homeClasses.push(_AvailableTimes2.default.homeActive);
      }

      return _react2.default.createElement(
        'div',
        {
          className: _AvailableTimes2.default.component,
          style: {
            height: height,
            width: width
          },
          ref: this.setRef
        },
        _react2.default.createElement(
          'div',
          {
            className: _AvailableTimes2.default.inner
          },
          !recurring && _react2.default.createElement(
            'div',
            { className: _AvailableTimes2.default.toolbar },
            _react2.default.createElement(
              'div',
              { className: _AvailableTimes2.default.buttons },
              _react2.default.createElement(
                'button',
                {
                  className: _AvailableTimes2.default.button,
                  onClick: this.moveBack
                },
                leftArrowSvg
              ),
              ' ',
              _react2.default.createElement(
                'button',
                {
                  className: _AvailableTimes2.default.button,
                  onClick: this.moveForward
                },
                rightArrowSvg
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _AvailableTimes2.default.interval },
              weeks[currentWeekIndex].interval
            ),
            calendars && calendars.length > 0 && _react2.default.createElement(
              'div',
              { className: _AvailableTimes2.default.calendarSelector },
              _react2.default.createElement(_CalendarSelector2.default, {
                calendars: calendars,
                selectedCalendars: selectedCalendars,
                onChange: this.handleCalendarChange
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _AvailableTimes2.default.main },
            _react2.default.createElement(
              _Slider2.default,
              {
                index: currentWeekIndex,
                onSlide: this.move,
                disabled: recurring
              },
              weeks.map(function (week, i) {
                if ((recurring || Math.abs(i - currentWeekIndex) > 1) && i !== 0) {
                  return _react2.default.createElement('span', { key: week.start });
                }
                return _react2.default.createElement(_Week2.default, {
                  timeConvention: timeConvention,
                  timeZone: timeZone,
                  availableWidth: availableWidth,
                  calendars: calendars,
                  key: week.start,
                  week: week,
                  events: events,
                  initialSelections: selections,
                  onChange: _this4.handleWeekChange,
                  height: height,
                  recurring: recurring,
                  touchToDeleteSelection: touchToDeleteSelection,
                  availableDays: availableDays,
                  availableHourRange: availableHourRange,
                  eventList: eventList,
                  addable: addable,
                  editable: editable,
                  only30Min: only30Min
                });
              })
            )
          )
        ),
        _react2.default.createElement(
          'button',
          {
            className: homeClasses.join(' '),
            onClick: this.handleHomeClick
          },
          leftArrowSvg
        )
      );
    }
  }]);

  return AvailableTimes;
}(_react.PureComponent);

exports.default = AvailableTimes;


AvailableTimes.propTypes = {
  editable: _propTypes2.default.bool,
  only30Min: _propTypes2.default.bool,
  addable: _propTypes2.default.bool,
  timeConvention: _propTypes2.default.oneOf(['12h', '24h']),
  timeZone: _propTypes2.default.string.isRequired,
  initialSelections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.number]),
    end: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.number])
  })),
  calendars: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    title: _propTypes2.default.string,
    color: _propTypes2.default.string,
    selected: _propTypes2.default.bool
  })),
  weekStartsOn: _propTypes2.default.oneOf(['sunday', 'monday']),
  onChange: _propTypes2.default.func,
  onEventsRequested: _propTypes2.default.func,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  recurring: _propTypes2.default.bool,
  touchToDeleteSelection: _propTypes2.default.bool,
  availableDays: _propTypes2.default.arrayOf(_Validators.validateDays),
  availableHourRange: _propTypes2.default.shape({
    start: _propTypes2.default.number,
    end: _propTypes2.default.number
  }).isRequired
};

AvailableTimes.defaultProps = {
  only30Min: false,
  addable: true,
  editable: true,
  timeZone: _momentTimezone2.default.tz.guess(),
  weekStartsOn: 'monday',
  touchToDeleteSelection: 'ontouchstart' in window,
  availableDays: _Constants.DAYS_IN_WEEK,
  availableHourRange: { start: 0, end: 24 }
};
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _CalendarSelector = __webpack_require__(37);

var _CalendarSelector2 = _interopRequireDefault(_CalendarSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions */


var checkmarkSvg = _react2.default.createElement(
  'svg',
  { height: '24', viewBox: '0 0 24 24', width: '24' },
  _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
);

var CalendarSelector = function (_PureComponent) {
  _inherits(CalendarSelector, _PureComponent);

  function CalendarSelector() {
    _classCallCheck(this, CalendarSelector);

    var _this = _possibleConstructorReturn(this, (CalendarSelector.__proto__ || Object.getPrototypeOf(CalendarSelector)).call(this));

    _this.state = {
      open: false
    };
    _this.toggleOpen = _this.toggleOpen.bind(_this);
    _this.check = _this.toggleCalendar.bind(_this, true);
    _this.uncheck = _this.toggleCalendar.bind(_this, false);
    _this.renderCalendar = _this.renderCalendar.bind(_this);
    return _this;
  }

  _createClass(CalendarSelector, [{
    key: 'toggleOpen',
    value: function toggleOpen(event) {
      event.stopPropagation();
      this.setState(function (_ref) {
        var open = _ref.open;
        return { open: !open };
      });
    }
  }, {
    key: 'toggleCalendar',
    value: function toggleCalendar(visible, event) {
      var _props = this.props,
          selectedCalendars = _props.selectedCalendars,
          onChange = _props.onChange;

      var result = selectedCalendars.slice(0);
      if (visible) {
        result.push(event.target.value);
      } else {
        result.splice(result.indexOf(event.target.value), 1);
      }
      onChange(result);
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar(_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          foregroundColor = _ref2.foregroundColor,
          backgroundColor = _ref2.backgroundColor;
      var selectedCalendars = this.props.selectedCalendars;


      var checked = selectedCalendars.indexOf(id) !== -1;

      return (
        // eslint-disable-next-line jsx-a11y/label-has-for
        _react2.default.createElement(
          'label',
          {
            key: id,
            className: _CalendarSelector2.default.calendar,
            style: {}
          },
          _react2.default.createElement('input', {
            className: _CalendarSelector2.default.checkbox,
            type: 'checkbox',
            checked: checked,
            value: id,
            onChange: checked ? this.uncheck : this.check,
            style: { display: 'none' }
          }),
          _react2.default.createElement(
            'div',
            {
              className: _CalendarSelector2.default.box,
              style: {
                fill: foregroundColor,
                backgroundColor: backgroundColor
              }
            },
            checked && checkmarkSvg
          ),
          _react2.default.createElement(
            'div',
            {
              title: title,
              className: _CalendarSelector2.default.calendarTitle
            },
            title
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var calendars = this.props.calendars;


      return _react2.default.createElement(
        'div',
        { className: _CalendarSelector2.default.component },
        _react2.default.createElement(
          'button',
          {
            className: _CalendarSelector2.default.button,
            onClick: this.toggleOpen
          },
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 24 24' },
            _react2.default.createElement('path', { d: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z' })
          )
        ),
        this.state.open && _react2.default.createElement(
          'div',
          { className: _CalendarSelector2.default.modal },
          _react2.default.createElement('div', {
            className: _CalendarSelector2.default.clickTarget,
            onClick: this.toggleOpen,
            onTouchStart: this.toggleOpen
          }),
          _react2.default.createElement(
            'div',
            { className: _CalendarSelector2.default.menu },
            calendars.map(this.renderCalendar)
          )
        )
      );
    }
  }]);

  return CalendarSelector;
}(_react.PureComponent);

exports.default = CalendarSelector;


CalendarSelector.propTypes = {
  calendars: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  selectedCalendars: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  onChange: _propTypes2.default.func.isRequired
};
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(1);

var _TimeSlot = __webpack_require__(17);

var _TimeSlot2 = _interopRequireDefault(_TimeSlot);

var _hasOverlap = __webpack_require__(21);

var _hasOverlap2 = _interopRequireDefault(_hasOverlap);

var _inSameDay = __webpack_require__(6);

var _inSameDay2 = _interopRequireDefault(_inSameDay);

var _positionInDay = __webpack_require__(8);

var _positionInDay2 = _interopRequireDefault(_positionInDay);

var _Day = __webpack_require__(38);

var _Day2 = _interopRequireDefault(_Day);

var _toDate = __webpack_require__(26);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ROUND_TO_NEAREST_MINS = 15;

var Day = function (_PureComponent) {
  _inherits(Day, _PureComponent);

  function Day(_ref) {
    var initialSelections = _ref.initialSelections;

    _classCallCheck(this, Day);

    var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this));

    _this.state = {
      index: undefined,
      selections: initialSelections
    };
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleSizeChangeStart = _this.handleItemModification.bind(_this, 'end');
    _this.handleMoveStart = _this.handleItemModification.bind(_this, 'both');
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handleMouseTargetRef = function (element) {
      _this.mouseTargetRef = element;
    };
    return _this;
  }

  _createClass(Day, [{
    key: 'findSelectionAt',
    value: function findSelectionAt(date) {
      var selections = this.state.selections;

      for (var i = 0; i < selections.length; i++) {
        var selection = selections[i];
        if (selection.start.getTime() <= date.getTime() && selection.end.getTime() > date.getTime()) {
          return true;
        }
      }
      return undefined;
    }
  }, {
    key: 'blankFunc',
    value: function blankFunc() {
      return;
    }
  }, {
    key: 'relativeY',
    value: function relativeY(pageY) {
      var rounding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ROUND_TO_NEAREST_MINS;

      if (!this.props.editable) return;

      var _mouseTargetRef$getBo = this.mouseTargetRef.getBoundingClientRect(),
          top = _mouseTargetRef$getBo.top;

      var realY = pageY - top - (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      realY += this.props.hourLimits.top; // offset top blocker
      var snapTo = rounding / 60 * _Constants.HOUR_IN_PIXELS;
      return Math.floor(realY / snapTo) * snapTo;
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(_ref2) {
      var start = _ref2.start,
          end = _ref2.end;
      var _props = this.props,
          onChange = _props.onChange,
          index = _props.index;


      this.setState(function (_ref3) {
        var selections = _ref3.selections;

        for (var i = 0; i < selections.length; i++) {
          if (selections[i].start === start && selections[i].end === end) {
            selections.splice(i, 1);
            onChange(index, selections);
            return { selections: selections.slice(0) };
          }
        }
        return {};
      });
    }
  }, {
    key: 'handleItemModification',
    value: function handleItemModification(edge, _ref4, _ref5) {
      var start = _ref4.start,
          end = _ref4.end;
      var pageY = _ref5.pageY,
          currentTarget = _ref5.currentTarget;

      var position = this.relativeY(pageY);
      this.setState(function (_ref6) {
        var selections = _ref6.selections;

        for (var i = 0; i < selections.length; i++) {
          if (selections[i].start === start && selections[i].end === end) {
            return {
              edge: edge,
              index: i,
              lastKnownPosition: position,
              minLengthInMinutes: 30,
              target: currentTarget
            };
          }
        }
        return {};
      });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      this.touch = {
        startY: e.touches[0].pageY,
        startX: e.touches[0].pageX
      };
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      this.touch.currentY = e.touches[0].pageY;
      this.touch.currentX = e.touches[0].pageX;
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      var _this2 = this;

      var _touch = this.touch,
          startY = _touch.startY,
          currentY = _touch.currentY,
          startX = _touch.startX,
          currentX = _touch.currentX;

      if (Math.abs(startX - (currentX || startX)) < 20 && Math.abs(startY - (currentY || startY)) < 20) {
        this.handleMouseDown({ pageY: startY });
        setTimeout(function () {
          _this2.handleMouseUp();
        });
      }
      this.touch = undefined;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      var timeZone = this.props.timeZone;

      var position = this.relativeY(e.pageY, 30);
      var dateAtPosition = (0, _toDate2.default)(this.props.date, position, timeZone);

      if (this.findSelectionAt(dateAtPosition)) {
        return;
      }

      var end = (0, _toDate2.default)(this.props.date, position + _Constants.HOUR_IN_PIXELS / 2, timeZone);
      end = (0, _hasOverlap2.default)(this.state.selections, dateAtPosition, end) || end;
      if (end - dateAtPosition < 1800000) {
        // slot is less than 30 mins
        return;
      }
      this.setState(function (_ref7) {
        var selections = _ref7.selections;
        return {
          edge: 'end',
          index: selections.length,
          lastKnownPosition: position,
          minLengthInMinutes: 30,
          selections: selections.concat([{
            start: dateAtPosition,
            end: end
          }])
        };
      });
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'hasReachedTop',
    value: function hasReachedTop(_ref8) {
      var offsetTop = _ref8.offsetTop;
      var hourLimits = this.props.hourLimits;

      return offsetTop <= hourLimits.top;
    }
  }, {
    key: 'hasReachedBottom',
    value: function hasReachedBottom(_ref9) {
      var offsetTop = _ref9.offsetTop,
          offsetHeight = _ref9.offsetHeight;
      var hourLimits = this.props.hourLimits;

      return offsetTop + offsetHeight >= hourLimits.bottom;
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(_ref10) {
      var _this3 = this;

      var pageY = _ref10.pageY;

      if (typeof this.state.index === 'undefined') {
        return;
      }
      var _props2 = this.props,
          date = _props2.date,
          timeZone = _props2.timeZone;

      var position = this.relativeY(pageY);
      this.setState(function (_ref11) {
        var minLengthInMinutes = _ref11.minLengthInMinutes,
            selections = _ref11.selections,
            edge = _ref11.edge,
            index = _ref11.index,
            lastKnownPosition = _ref11.lastKnownPosition,
            target = _ref11.target;

        var selection = selections[index];
        var newMinLength = minLengthInMinutes;
        if (edge === 'both') {
          // move element
          var diff = (0, _toDate2.default)(date, position, timeZone).getTime() - (0, _toDate2.default)(date, lastKnownPosition, timeZone).getTime();
          var newStart = new Date(selection.start.getTime() + diff);
          var newEnd = new Date(selection.end.getTime() + diff);
          if ((0, _hasOverlap2.default)(selections, newStart, newEnd, index)) {
            return {};
          }
          if (_this3.hasReachedTop(target) && diff < 0) {
            // if has reached top blocker and it is going upwards, fix the newStart.
            newStart = selection.start;
          }

          if (_this3.hasReachedBottom(target) && diff > 0) {
            // if has reached bottom blocker and it is going downwards, fix.
            newEnd = selection.end;
          }

          if (newEnd - newStart <= 15 * 1000 * 60) return;

          selection.start = newStart;
          selection.end = newEnd;
        } else {

          if (!_this3.props.addable || _this3.props.only30Min) return;
          // stretch element
          var startPos = (0, _positionInDay2.default)(date, selection.start, timeZone);
          var minPos = startPos + minLengthInMinutes * _Constants.MINUTE_IN_PIXELS;
          if (minPos < position) {
            // We've exceeded 60 mins now, allow smaller
            newMinLength = 30;
          }
          var _newEnd = (0, _toDate2.default)(date, Math.max(minPos, position), timeZone);
          if ((0, _hasOverlap2.default)(selections, selection.start, _newEnd, index)) {
            // Collision! Let
            return {};
          }
          selection.end = _newEnd;
        }
        return {
          lastKnownPosition: position,
          minLengthInMinutes: newMinLength,
          selections: selections
        };
      });
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (typeof this.state.index === 'undefined') {
        return;
      }
      this.setState({
        edge: undefined,
        index: undefined,
        lastKnownPosition: undefined,
        minLengthInMinutes: undefined
      });
      this.props.onChange(this.props.index, this.state.selections);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          addable = _props3.addable,
          editable = _props3.editable,
          available = _props3.available,
          availableWidth = _props3.availableWidth,
          date = _props3.date,
          events = _props3.events,
          timeConvention = _props3.timeConvention,
          timeZone = _props3.timeZone,
          touchToDeleteSelection = _props3.touchToDeleteSelection,
          hourLimits = _props3.hourLimits,
          eventList = _props3.eventList,
          only30Min = _props3.only30Min;
      var _state = this.state,
          selections = _state.selections,
          index = _state.index;

      var classes = [_Day2.default.component];

      if (!available) {
        classes.push(_Day2.default.grayed);
      }

      if ((0, _inSameDay2.default)(date, new Date(), timeZone)) {
        classes.push(_Day2.default.today);
      }

      return _react2.default.createElement(
        'div',
        {
          className: classes.join(' '),
          style: {
            height: _Constants.HOUR_IN_PIXELS * 17,
            width: availableWidth
          }
        },
        eventList.map(function (_ref12, i) {
          var start = _ref12.start,
              end = _ref12.end,
              title = _ref12.title,
              width = _ref12.width,
              offset = _ref12.offset,
              isFixed = _ref12.isFixed;
          return _react2.default.createElement(_TimeSlot2.default
          // eslint-disable-next-line react/no-array-index-key
          , { key: i + title,
            timeConvention: timeConvention,
            timeZone: timeZone,
            date: date,
            start: start,
            end: end,
            title: title,
            width: width,
            offset: offset,
            isFixed: isFixed,
            frozen: true
          });
        }),
        _react2.default.createElement('div', {
          className: _Day2.default.grayed + ' ' + _Day2.default.block,
          style: {
            height: hourLimits.top,
            top: 0
          }
        }),
        _react2.default.createElement('div', {
          className: _Day2.default.grayed + ' ' + _Day2.default.block,
          style: {
            height: hourLimits.bottomHeight,
            top: hourLimits.bottom
          }
        }),
        editable && addable && available && _react2.default.createElement('div', {
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onMouseMove: this.handleMouseMove,
          onMouseOut: this.handleMouseUp,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd,
          className: _Day2.default.mouseTarget,
          ref: this.handleMouseTargetRef,
          style: {
            top: hourLimits.top,
            height: hourLimits.difference
          }
        }),
        editable && !addable && available && _react2.default.createElement('div', {
          onMouseDown: this.blankFunc,
          onMouseUp: this.handleMouseUp,
          onMouseMove: this.handleMouseMove,
          onMouseOut: this.handleMouseUp,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd,
          className: _Day2.default.mouseTarget,
          ref: this.handleMouseTargetRef,
          style: {
            top: hourLimits.top,
            height: hourLimits.difference
          } // 이미 선택된 슬롯은 수정할 수 있지만 새 슬롯 추가 불가
        }),
        !editable && available && _react2.default.createElement('div', {
          onMouseDown: this.blankFunc,
          onMouseUp: this.blankFunc,
          onMouseMove: this.blankFunc,
          onMouseOut: this.blankFunc,
          onTouchStart: this.blankFunc,
          onTouchMove: this.blankFunc,
          onTouchEnd: this.blankFunc,
          className: _Day2.default.mouseTarget,
          ref: this.handleMouseTargetRef,
          style: {
            top: hourLimits.top,
            height: hourLimits.difference
          }
        }),
        selections.map(function (_ref13, i) {
          var start = _ref13.start,
              end = _ref13.end;
          return _react2.default.createElement(_TimeSlot2.default
          // eslint-disable-next-line react/no-array-index-key
          , { key: i,
            timeConvention: timeConvention,
            timeZone: timeZone,
            date: date,
            start: start,
            end: end,
            active: typeof index !== 'undefined',
            onSizeChangeStart: _this4.handleSizeChangeStart,
            onMoveStart: _this4.handleMoveStart,
            onDelete: _this4.handleDelete,
            touchToDelete: touchToDeleteSelection,
            addable: addable,
            editable: editable
          });
        })
      );
    }
  }]);

  return Day;
}(_react.PureComponent);

exports.default = Day;


Day.propTypes = {
  addable: _propTypes2.default.bool,
  editable: _propTypes2.default.bool,
  available: _propTypes2.default.bool,
  availableWidth: _propTypes2.default.number.isRequired,
  hourLimits: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    bottomHeight: _propTypes2.default.number,
    difference: _propTypes2.default.number
  }).isRequired,
  timeConvention: _propTypes2.default.oneOf(['12h', '24h']),
  timeZone: _propTypes2.default.string.isRequired,

  date: _propTypes2.default.instanceOf(Date).isRequired,
  index: _propTypes2.default.number.isRequired,
  initialSelections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date),
    end: _propTypes2.default.instanceOf(Date)
  })),
  events: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date),
    end: _propTypes2.default.instanceOf(Date),
    title: _propTypes2.default.string,
    width: _propTypes2.default.number,
    offset: _propTypes2.default.number
  })),
  onChange: _propTypes2.default.func.isRequired,
  touchToDeleteSelection: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _DayHeader = __webpack_require__(39);

var _DayHeader2 = _interopRequireDefault(_DayHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayHeader = function (_Component) {
  _inherits(DayHeader, _Component);

  function DayHeader() {
    _classCallCheck(this, DayHeader);

    return _possibleConstructorReturn(this, (DayHeader.__proto__ || Object.getPrototypeOf(DayHeader)).apply(this, arguments));
  }

  _createClass(DayHeader, [{
    key: 'text',
    value: function text() {
      var _props = this.props,
          day = _props.day,
          availableWidth = _props.availableWidth;

      var dateNumber = day.date.getDate();
      if (availableWidth < 55) {
        return _react2.default.createElement(
          'span',
          null,
          day.abbreviated,
          _react2.default.createElement('br', null),
          dateNumber
        );
      }

      return day.abbreviated + ' ' + dateNumber;
    }
  }, {
    key: 'dateLessText',
    value: function dateLessText() {
      var _props2 = this.props,
          day = _props2.day,
          availableWidth = _props2.availableWidth;


      if (availableWidth < 55) {
        return day.abbreviated;
      }

      return day.name;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          availableWidth = _props3.availableWidth,
          events = _props3.events,
          hideDates = _props3.hideDates;

      var classes = [_DayHeader2.default.day];

      if (!this.props.available) {
        classes.push(_DayHeader2.default.transparent);
      }

      return _react2.default.createElement(
        'div',
        {
          className: _DayHeader2.default.component,
          style: {
            width: availableWidth
          }
        },
        _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          !hideDates && this.text(),
          hideDates && this.dateLessText()
        )
      );
    }
  }]);

  return DayHeader;
}(_react.Component);

exports.default = DayHeader;


DayHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  day: _propTypes2.default.object,
  availableWidth: _propTypes2.default.number,
  events: _propTypes2.default.arrayOf(_propTypes2.default.object),
  hideDates: _propTypes2.default.bool,
  available: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ruler;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(1);

var _hours = __webpack_require__(22);

var _hours2 = _interopRequireDefault(_hours);

var _Ruler = __webpack_require__(40);

var _Ruler2 = _interopRequireDefault(_Ruler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ruler(_ref) {
  var timeConvention = _ref.timeConvention;

  return _react2.default.createElement(
    'div',
    {
      className: _Ruler2.default.component,
      style: { width: _Constants.RULER_WIDTH_IN_PIXELS }
    },
    (0, _hours2.default)(timeConvention).map(function (hour) {
      return _react2.default.createElement(
        'div',
        {
          key: hour,
          className: _Ruler2.default.hour,
          style: { height: _Constants.HOUR_IN_PIXELS }
        },
        _react2.default.createElement(
          'div',
          { className: _Ruler2.default.inner },
          hour !== '07' && hour !== '12am' ? hour : null
        )
      );
    })
  );
}
Ruler.propTypes = {
  timeConvention: _propTypes2.default.oneOf(['12h', '24h'])
};
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Slider = __webpack_require__(41);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var THRESHOLD_PERCENT = 15;

var Slider = function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this));

    _this.state = {
      offsetX: 0
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleRef = _this.handleRef.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'getTranslateValue',
    value: function getTranslateValue(i) {
      var index = this.props.index;

      var percentage = this.percentage();
      if (i === index) {
        return percentage;
      }
      if (i - index === 1) {
        // next week
        return 100 + percentage;
      }
      if (index - i === 1) {
        // previous week
        return -100 + percentage;
      }
      if (i - index > 0) {
        return 100;
      }
      if (i - index < 0) {
        return -100;
      }
      return undefined;
    }
  }, {
    key: 'percentage',
    value: function percentage() {
      var offsetX = this.state.offsetX;

      return offsetX !== 0 ? offsetX / this.width * 100 : 0;
    }
  }, {
    key: 'handleRef',
    value: function handleRef(element) {
      if (!element) {
        return;
      }
      this.width = element.offsetWidth;
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      if (this.props.disabled) {
        return;
      }
      this.setState({
        startX: event.touches[0].pageX
      });
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (this.props.disabled) {
        return;
      }
      var x = event.touches[0].pageX;
      this.setState(function (_ref) {
        var startX = _ref.startX;
        return {
          offsetX: x - startX
        };
      });
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      if (this.props.disabled) {
        return;
      }
      var percentage = this.percentage();
      if (Math.abs(percentage) > THRESHOLD_PERCENT) {
        this.props.onSlide(percentage < 0 ? 1 : -1);
      }
      this.setState({
        offsetX: 0,
        startX: undefined
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        {
          className: _Slider2.default.component,
          ref: this.handleRef
        },
        _react.Children.toArray(children).map(function (child, i) {
          var translate = _this2.getTranslateValue(i);
          return _react2.default.createElement(
            'div',
            {
              // eslint-disable-next-line react/no-array-index-key
              key: i,
              className: _Slider2.default.item,
              onTouchStart: _this2.handleTouchStart,
              onTouchMove: _this2.handleTouchMove,
              onTouchEnd: _this2.handleTouchEnd,
              style: {
                transform: 'translateX(' + translate + '%)',
                WebkitTransform: 'translateX(' + translate + '%)'
              }
            },
            child
          );
        })
      );
    }
  }]);

  return Slider;
}(_react.PureComponent);

exports.default = Slider;


Slider.propTypes = {
  index: _propTypes2.default.number,
  children: _propTypes2.default.node,
  onSlide: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _Constants = __webpack_require__(1);

var _positionInDay = __webpack_require__(8);

var _positionInDay2 = _interopRequireDefault(_positionInDay);

var _TimeSlot = __webpack_require__(42);

var _TimeSlot2 = _interopRequireDefault(_TimeSlot);

var _inSameDay = __webpack_require__(6);

var _inSameDay2 = _interopRequireDefault(_inSameDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOTTOM_GAP = _Constants.MINUTE_IN_PIXELS * 10;

var TimeSlot = function (_PureComponent) {
  _inherits(TimeSlot, _PureComponent);

  function TimeSlot() {
    _classCallCheck(this, TimeSlot);

    var _this = _possibleConstructorReturn(this, (TimeSlot.__proto__ || Object.getPrototypeOf(TimeSlot)).call(this));

    _this.handleResizerMouseDown = _this.handleResizerMouseDown.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.preventMove = function (e) {
      return e.stopPropagation();
    };
    return _this;
  }

  _createClass(TimeSlot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.creationTime = new Date().getTime();
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(event) {
      if (new Date().getTime() - this.creationTime < 500 || !this.props.editable) {
        // Just created. Ignore this event, as it's likely coming from the same
        // click event that created it.
        return;
      }
      event.stopPropagation();
      var _props = this.props,
          onDelete = _props.onDelete,
          end = _props.end,
          start = _props.start;

      onDelete({ end: end, start: start }, event);
    }
  }, {
    key: 'handleResizerMouseDown',
    value: function handleResizerMouseDown(event) {
      event.stopPropagation();
      var _props2 = this.props,
          onSizeChangeStart = _props2.onSizeChangeStart,
          end = _props2.end,
          start = _props2.start;

      onSizeChangeStart({ end: end, start: start }, event);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var _props3 = this.props,
          onMoveStart = _props3.onMoveStart,
          end = _props3.end,
          start = _props3.start;

      onMoveStart({ end: end, start: start }, event);
    }
  }, {
    key: 'formatTime',
    value: function formatTime(date) {
      var _props4 = this.props,
          timeConvention = _props4.timeConvention,
          timeZone = _props4.timeZone,
          frozen = _props4.frozen;

      var m = _momentTimezone2.default.tz(date, timeZone);
      if (timeConvention === '12h') {
        if (frozen && m.minute() === 0) {
          return m.format('ha');
        }
        return m.format('hh:mma');
      }
      if (frozen && m.minute() === 0) {
        return m.format('HH');
      }
      return m.format('HH:mm');
    }
  }, {
    key: 'timespan',
    value: function timespan() {
      var _props5 = this.props,
          start = _props5.start,
          end = _props5.end;

      return [this.formatTime(start), '-', this.formatTime(end)].join('');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          active = _props6.active,
          date = _props6.date,
          start = _props6.start,
          end = _props6.end,
          frozen = _props6.frozen,
          width = _props6.width,
          offset = _props6.offset,
          timeZone = _props6.timeZone,
          title = _props6.title,
          touchToDelete = _props6.touchToDelete,
          isFixed = _props6.isFixed,
          editable = _props6.editable,
          addable = _props6.addable;

      // 이벤트 다 때려박아서 보내주므로.. 다른 날 일정을 받게 되면 화면 표시 x

      if (!(0, _inSameDay2.default)(date, start, timeZone)) {
        return _react2.default.createElement('div', null);
      }

      var top = (0, _positionInDay2.default)(date, start, timeZone);
      var bottom = (0, _positionInDay2.default)(date, end, timeZone);

      var height = Math.max(bottom - top, 1);

      var classes = [_TimeSlot2.default.component];

      if (frozen) {
        classes.push(_TimeSlot2.default.frozen);
      }

      if (isFixed) {
        classes.push(_TimeSlot2.default.fixed);
      }

      if (active) {
        classes.push(_TimeSlot2.default.active);
      }

      var style = {
        top: top,
        height: height,
        cursor: editable ? 'grab' : 'default'
      };

      if (typeof width !== 'undefined' && typeof offset !== 'undefined') {
        style.width = 'calc(' + width * 100 + '% - 5px)';
        style.left = offset * 100 + '%';
      }

      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        _react2.default.createElement(
          'div',
          {
            className: classes.join(' '),
            style: style,
            onMouseDown: frozen || touchToDelete ? undefined : this.handleMouseDown,
            onClick: frozen || !touchToDelete ? undefined : this.handleDelete
          },
          _react2.default.createElement(
            'div',
            {
              className: _TimeSlot2.default.title,
              style: {
                // two lines of text in an hour
                lineHeight: _Constants.MINUTE_IN_PIXELS * 30 - BOTTOM_GAP / 2 + 'px'
              }
            },
            title && _react2.default.createElement(
              'span',
              null,
              title,
              _react2.default.createElement('br', null)
            ),
            this.timespan()
          ),
          !frozen && !touchToDelete && _react2.default.createElement(
            'div',
            null,
            addable && editable && _react2.default.createElement(
              'div',
              {
                className: _TimeSlot2.default.handle,
                onMouseDown: this.handleResizerMouseDown
              },
              '...'
            ),
            editable ? _react2.default.createElement(
              'button',
              {
                className: _TimeSlot2.default.delete,
                onClick: this.handleDelete,
                onMouseDown: this.preventMove
              },
              '\xD7'
            ) : null
          )
        )
      );
    }
  }]);

  return TimeSlot;
}(_react.PureComponent);

exports.default = TimeSlot;


TimeSlot.propTypes = {
  touchToDelete: _propTypes2.default.bool,
  timeConvention: _propTypes2.default.oneOf(['12h', '24h']),
  timeZone: _propTypes2.default.string.isRequired,

  active: _propTypes2.default.bool, // Whether the time slot is being changed
  date: _propTypes2.default.instanceOf(Date).isRequired, // The day in which the slot is displayed
  start: _propTypes2.default.instanceOf(Date).isRequired,
  end: _propTypes2.default.instanceOf(Date).isRequired,
  title: _propTypes2.default.string,
  frozen: _propTypes2.default.bool,

  onSizeChangeStart: _propTypes2.default.func,
  onMoveStart: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,

  // Props used to signal overlap
  width: _propTypes2.default.number,
  offset: _propTypes2.default.number
};

TimeSlot.defaultProps = {
  touchToDelete: false
};
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _moment = __webpack_require__(10);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(44);

var _Constants = __webpack_require__(1);

var _Validators = __webpack_require__(7);

var _Day = __webpack_require__(13);

var _Day2 = _interopRequireDefault(_Day);

var _DayHeader = __webpack_require__(14);

var _DayHeader2 = _interopRequireDefault(_DayHeader);

var _Ruler = __webpack_require__(15);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _getIncludedEvents = __webpack_require__(20);

var _getIncludedEvents2 = _interopRequireDefault(_getIncludedEvents);

var _Week = __webpack_require__(43);

var _Week2 = _interopRequireDefault(_Week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function flatten(selections) {
  var result = [];
  selections.forEach(function (selectionsInDay) {
    result.push.apply(result, _toConsumableArray(selectionsInDay));
  });
  return result;
}

function weekEvents(week, items, timeZone) {
  var result = [];
  week.days.forEach(function (_ref) {
    var date = _ref.date;

    var startMoment = _momentTimezone2.default.tz(date, timeZone).hour(0);
    var end = _momentTimezone2.default.tz(startMoment, timeZone).date(startMoment.date() + 1).toDate();
    var start = startMoment.toDate();
    result.push((0, _getIncludedEvents2.default)(items || [], start, end));
  });
  return result;
}

var cachedScrollbarWidth = void 0;
function computeWidthOfAScrollbar() {
  // based on https://davidwalsh.name/detect-scrollbar-width
  if (cachedScrollbarWidth) {
    return cachedScrollbarWidth;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style = '\n    width: 100px;\n    height: 100px;\n    overflow: scroll;\n    position: absolute;\n    top: -9999px;\n  ';
  document.body.appendChild(scrollDiv);
  cachedScrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return cachedScrollbarWidth;
}

var Week = function (_PureComponent) {
  _inherits(Week, _PureComponent);

  function Week(_ref2) {
    var week = _ref2.week,
        events = _ref2.events,
        initialSelections = _ref2.initialSelections,
        timeZone = _ref2.timeZone;

    _classCallCheck(this, Week);

    var _this = _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).call(this));

    _this.state = {
      dayEvents: weekEvents(week, events, timeZone),
      daySelections: weekEvents(week, initialSelections, timeZone)
    };
    _this.handleDayChange = _this.handleDayChange.bind(_this);
    _this.handleDaysRef = _this.handleDaysRef.bind(_this);
    _this.setDaysWidth = function () {
      return _this.setState({
        daysWidth: _this.daysRef.offsetWidth
      });
    };
    return _this;
  }

  _createClass(Week, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('resize', this.setDaysWidth);

      this.setState({
        widthOfAScrollbar: computeWidthOfAScrollbar()
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref3) {
      var week = _ref3.week,
          events = _ref3.events,
          timeZone = _ref3.timeZone;

      if (events === this.props.events) {
        // nothing changed
        return;
      }
      this.setState({
        dayEvents: weekEvents(week, events, timeZone)
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setDaysWidth);
    }
  }, {
    key: 'handleDaysRef',
    value: function handleDaysRef(element) {
      if (!element) {
        return;
      }
      this.daysRef = element;
      this.setState({ daysWidth: element.offsetWidth });
    }
  }, {
    key: 'handleDayChange',
    value: function handleDayChange(dayIndex, selections) {
      var _this2 = this;

      this.setState(function (_ref4) {
        var daySelections = _ref4.daySelections;
        var onChange = _this2.props.onChange;

        if (!onChange) {
          return undefined;
        }
        // eslint-disable-next-line no-param-reassign
        daySelections[dayIndex] = selections;
        var flattened = flatten(daySelections);
        onChange(_this2.props.week, flattened);
        return { daySelections: daySelections };
      });
    }

    // generate the props required for Day to block specific hours.

  }, {
    key: 'generateHourLimits',
    value: function generateHourLimits() {
      var availableHourRange = this.props.availableHourRange;

      return {
        top: availableHourRange.start * _Constants.HOUR_IN_PIXELS, // top blocker
        bottom: (availableHourRange.end - 7) * _Constants.HOUR_IN_PIXELS,
        bottomHeight: (24 - 7 - availableHourRange.end) * _Constants.HOUR_IN_PIXELS, // bottom height
        difference: (availableHourRange.end - availableHourRange.start - 7) * _Constants.HOUR_IN_PIXELS + _Constants.MINUTE_IN_PIXELS * 14
      };
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'renderLines',
    value: function renderLines() {
      var result = [];
      for (var i = 7; i < 24; i++) {
        result.push(_react2.default.createElement('div', {
          key: i,
          className: _Week2.default.hour,
          style: {
            height: _Constants.HOUR_IN_PIXELS
          }
        }));
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          week = _props.week,
          availableWidth = _props.availableWidth,
          timeConvention = _props.timeConvention,
          timeZone = _props.timeZone,
          recurring = _props.recurring,
          touchToDeleteSelection = _props.touchToDeleteSelection,
          availableDays = _props.availableDays,
          eventList = _props.eventList,
          addable = _props.addable,
          editable = _props.editable,
          only30Min = _props.only30Min;
      var _state = this.state,
          dayEvents = _state.dayEvents,
          daySelections = _state.daySelections,
          daysWidth = _state.daysWidth,
          widthOfAScrollbar = _state.widthOfAScrollbar;


      var filteredDays = week.days.map(function (day) {
        var updatedDay = day;
        var today = new Date();
        updatedDay.available = recurring ? true : today < updatedDay.date;
        return updatedDay;
      });
      return _react2.default.createElement(
        'div',
        { className: _Week2.default.component },
        _react2.default.createElement(
          'div',
          {
            className: _Week2.default.header,
            style: {
              marginLeft: _Constants.RULER_WIDTH_IN_PIXELS,
              maxWidth: daysWidth,
              marginRight: widthOfAScrollbar
            }
          },
          filteredDays.map(function (day, i) {
            return _react2.default.createElement(_DayHeader2.default, {
              timeZone: timeZone,
              availableWidth: (availableWidth - _Constants.RULER_WIDTH_IN_PIXELS) / 7,
              day: day,
              key: day.date,
              events: eventList,
              hideDates: recurring,
              available: day.available
            });
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: _Week2.default.daysWrapper,
            ref: function ref(element) {
              if (!element || _this3.alreadyScrolled) {
                return;
              }
              _this3.alreadyScrolled = true;
              // eslint-disable-next-line no-param-reassign
              element.scrollTop = _Constants.HOUR_IN_PIXELS * 6.5;
            }
          },
          _react2.default.createElement(
            'div',
            { className: _Week2.default.lines },
            this.renderLines()
          ),
          _react2.default.createElement(
            'div',
            {
              className: _Week2.default.days,
              ref: this.handleDaysRef
            },
            _react2.default.createElement(_Ruler2.default, { timeConvention: timeConvention }),
            filteredDays.map(function (day, i) {
              return _react2.default.createElement(_Day2.default, {
                available: day.available,
                availableWidth: (availableWidth - _Constants.RULER_WIDTH_IN_PIXELS) / 7,
                timeConvention: timeConvention,
                timeZone: timeZone,
                index: i,
                key: day.date,
                date: day.date,
                events: dayEvents[i],
                initialSelections: daySelections[i],
                onChange: _this3.handleDayChange,
                hourLimits: _this3.generateHourLimits(),
                touchToDeleteSelection: touchToDeleteSelection,
                eventList: eventList,
                addable: addable,
                editable: editable,
                only30Min: only30Min
              });
            })
          )
        )
      );
    }
  }]);

  return Week;
}(_react.PureComponent);

exports.default = Week;


Week.propTypes = {
  addable: _propTypes2.default.bool,
  availableWidth: _propTypes2.default.number.isRequired,
  timeConvention: _propTypes2.default.oneOf(['12h', '24h']),
  timeZone: _propTypes2.default.string.isRequired,
  events: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date),
    end: _propTypes2.default.instanceOf(Date),
    title: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    foregroundColor: _propTypes2.default.string,
    offset: _propTypes2.default.number,
    width: _propTypes2.default.number
  })),
  initialSelections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date),
    end: _propTypes2.default.instanceOf(Date)
  })),
  onChange: _propTypes2.default.func,
  // eslint-disable-next-line react/forbid-prop-types
  week: _propTypes2.default.object.isRequired,
  recurring: _propTypes2.default.bool,
  touchToDeleteSelection: _propTypes2.default.bool,
  availableDays: _propTypes2.default.arrayOf(_Validators.validateDays),
  availableHourRange: _propTypes2.default.shape({
    start: _propTypes2.default.number,
    end: _propTypes2.default.number
  }).isRequired
};
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateIntervalString;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dateIntervalString(fromDate, toDate, timeZone) {
  var from = _momentTimezone2.default.tz(fromDate, timeZone);
  var to = _momentTimezone2.default.tz(toDate, timeZone);
  if (from.month() === to.month()) {
    return [from.format('MMM D'), '–', // en dash
    to.format('D')].join(' ');
  }
  return [from.format('MMM D'), '–', // en dash
  to.format('MMM D')].join(' ');
}
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIncludedEvents;
function getIncludedEvents(events, dayStart, dayEnd) {
  return events.filter(function (_ref) {
    var start = _ref.start,
        end = _ref.end,
        allDay = _ref.allDay;

    if (allDay) {
      return dayStart >= start && dayStart < end;
    }
    return dayStart <= start && start < dayEnd || dayStart < end && end < dayEnd;
  });
}
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasOverlap;
function hasOverlap(events, start, end, ignoreIndex) {
  for (var i = 0; i < events.length; i++) {
    if (i === ignoreIndex) {
      // eslint-disable-next-line no-continue
      continue;
    }
    var selection = events[i];
    if (selection.start > start && selection.start < end) {
      // overlapping start
      return selection.start;
    }
    if (selection.end > start && selection.end < end) {
      // overlapping end
      return selection.end;
    }
    if (selection.start <= start && selection.end >= end) {
      // inside
      return selection.start;
    }
  }
  return undefined;
}
module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hours;

var _moment = __webpack_require__(10);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatTime(date, timeConvention) {
  if (timeConvention === '12h') {
    return date.format('ha');
  }
  return date.format('HH');
} // We're only using moment here to construct strings from 0am to 12pm. There's
// no need to use time zones.
function hours(timeConvention) {
  var result = [];
  var date = (0, _moment2.default)().minutes(0).seconds(0).milliseconds(0);
  for (var i = 7; i < 24; i++) {
    date.hour(i);
    result.push(formatTime(date, timeConvention));
  }
  return result;
}
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(11);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRecurring;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ONE_WEEK_MINUTES = 7 * 24 * 60;

function makeRecurring(_ref, timeZone, weekStartsOn) {
  var start = _ref.start,
      end = _ref.end;

  if (!timeZone) {
    throw new Error('Missing timeZone');
  }
  if (!weekStartsOn) {
    throw new Error('Missing weekStartsOn');
  }
  var weekStart = _momentTimezone2.default.tz(start, timeZone).hour(0).minute(0).seconds(0).milliseconds(0);

  // To avoid DST issues, move to the first week of the year (which should be
  // DST free).
  weekStart.week(0);
  var startM = _momentTimezone2.default.tz(start, timeZone).week(0);
  var endM = _momentTimezone2.default.tz(end, timeZone).week(0);

  weekStart.day(weekStartsOn === 'monday' ? 1 : 0);
  var weekStartMs = weekStart.toDate().getTime();
  var startMins = (startM.toDate().getTime() - weekStartMs) / 60000;
  var endMins = (endM.toDate().getTime() - weekStartMs) / 60000;

  if (startMins < 0) {
    // This happens when the event starts on a sunday, but monday is set to
    // first day.
    startMins = ONE_WEEK_MINUTES + startMins;
    endMins = ONE_WEEK_MINUTES + endMins;
  }
  return {
    start: startMins,
    end: endMins
  };
}
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeRecurringSelections;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _weekAt = __webpack_require__(9);

var _weekAt2 = _interopRequireDefault(_weekAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeRecurringSelections(selections, timeZone, weekStartsOn) {
  if (!timeZone) {
    throw new Error('Missing timeZone');
  }
  if (!weekStartsOn) {
    throw new Error('Missing weekStartsOn');
  }

  var weekStart = _momentTimezone2.default.tz(new Date(), timeZone).hour(0).minute(0).seconds(0).milliseconds(0);
  weekStart.day(weekStartsOn === 'monday' ? 1 : 0);

  // To avoid DST issues, move to the first week of the year (which should be
  // DST free).
  weekStart.week(1);

  var midCurrentWeek = _momentTimezone2.default.tz((0, _weekAt2.default)(weekStartsOn, new Date(), timeZone).days[3].date, timeZone);

  return selections.map(function (_ref) {
    var start = _ref.start,
        end = _ref.end;

    var startM = _momentTimezone2.default.tz(weekStart, timeZone);
    var endM = _momentTimezone2.default.tz(weekStart, timeZone);
    startM.week(midCurrentWeek.week());
    endM.week(midCurrentWeek.week());
    startM.add(start, 'minutes');
    endM.add(end, 'minutes');
    return {
      start: startM.toDate(),
      end: endM.toDate()
    };
  });
}
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _momentTimezone = __webpack_require__(0);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _Constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(day, pixelsFromTop, timeZone) {
  if (!timeZone) {
    throw new Error('Missing timeZone');
  }
  var m = _momentTimezone2.default.tz(day, timeZone);
  var hours = Math.floor(pixelsFromTop / _Constants.HOUR_IN_PIXELS);
  var minutes = Math.ceil(pixelsFromTop % _Constants.HOUR_IN_PIXELS / _Constants.HOUR_IN_PIXELS * 60);
  m.hour(hours + 7).minutes(minutes).seconds(0).milliseconds(0);
  return m.toDate();
}
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-AvailableTimes_component,\n.rat-AvailableTimes_component * {\n  box-sizing: border-box;\n}\n\n.rat-AvailableTimes_component {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  font-size: 12px;\n  line-height: 1.2;\n  font-family: helvetica, arial, sans-serif;\n  color: #666;\n}\n\n.rat-AvailableTimes_inner {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.rat-AvailableTimes_main {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  position: relative;\n  overflow: hidden;\n}\n\n.rat-AvailableTimes_toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  padding: 10px 20px 25px 15px;\n  font-size: 18px;\n}\n\n.rat-AvailableTimes_buttons {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin: 2px 10px -2px 0px;\n}\n\n.rat-AvailableTimes_button {\n  border-radius: 3px;\n  background-color: transparent;\n  border: 0;\n  padding: 2px 5px;\n  cursor: pointer;\n  fill: #666;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.rat-AvailableTimes_button:focus {\n  outline: none;\n}\n\n.rat-AvailableTimes_button:hover {\n  background-color: #F6FAFE;\n}\n\n.rat-AvailableTimes_button:active {\n  fill: #4477BD;\n}\n\n.rat-AvailableTimes_interval {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  -ms-flex-preferred-size: 150px;\n      flex-basis: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.rat-AvailableTimes_calendarSelector {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin-left: 15px;\n}\n\n.rat-AvailableTimes_home {\n  transition: opacity .3s;\n  position: absolute;\n  bottom: 10px;\n  left: 5px;\n  border-radius: 50%;\n  border: none;\n  background-color: #4285f4;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  opacity: 0;\n  pointer-events: none;\n  width: 40px;\n  height: 40px;\n  fill: #fff;\n  transition: all 0.2s;\n}\n\n.rat-AvailableTimes_homeActive {\n  pointer-events: inherit;\n  cursor: pointer;\n  opacity: 1;\n  line-height: 0;\n}\n\n.rat-AvailableTimes_home:focus {\n  outline: none;\n}\n\n.rat-AvailableTimes_home:hover {\n  background-color: #0070e0;\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-AvailableTimes_component",
	"inner": "rat-AvailableTimes_inner",
	"main": "rat-AvailableTimes_main",
	"toolbar": "rat-AvailableTimes_toolbar",
	"buttons": "rat-AvailableTimes_buttons",
	"button": "rat-AvailableTimes_button",
	"interval": "rat-AvailableTimes_interval",
	"calendarSelector": "rat-AvailableTimes_calendarSelector",
	"home": "rat-AvailableTimes_home",
	"homeActive": "rat-AvailableTimes_homeActive"
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-CalendarSelector_component {\n  position: relative;\n  line-height: 0;\n  font-size: 14px;\n}\n\n.rat-CalendarSelector_modal {\n  z-index: 1;\n}\n\n.rat-CalendarSelector_clickTarget {\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.rat-CalendarSelector_menu {\n  z-index: 1;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 200px;\n  min-height: 150px;\n  max-height: 100vh;\n  position: absolute;\n  right: 0;\n  top: 100%;\n  text-align: left;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  padding: 5px 0px;\n  line-height: 1;\n}\n\n.rat-CalendarSelector_calendar {\n  cursor: pointer;\n  display: block;\n  padding: 5px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.rat-CalendarSelector_checkbox {\n  margin-right: 10px;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n}\n\n.rat-CalendarSelector_button {\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #666;\n  fill: #666;\n  cursor: pointer;\n  line-height: 0;\n}\n\n.rat-CalendarSelector_button svg {\n  height: 19px;\n}\n\n.rat-CalendarSelector_button:active {\n  fill: #4477BD;\n  color: #4477BD;\n}\n\n.rat-CalendarSelector_button:focus {\n  outline: none;\n}\n\n.rat-CalendarSelector_box {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  border-radius: 3px;\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.rat-CalendarSelector_calendarTitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-CalendarSelector_component",
	"modal": "rat-CalendarSelector_modal",
	"clickTarget": "rat-CalendarSelector_clickTarget",
	"menu": "rat-CalendarSelector_menu",
	"calendar": "rat-CalendarSelector_calendar",
	"checkbox": "rat-CalendarSelector_checkbox",
	"button": "rat-CalendarSelector_button",
	"box": "rat-CalendarSelector_box",
	"calendarTitle": "rat-CalendarSelector_calendarTitle"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-Day_component {\n  border-left: 1px solid #d6d6d6;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rat-Day_today {\n  background-color: rgba(195, 253, 147, 0.2);\n}\n\n.rat-Day_grayed {\n  background-image: linear-gradient(-45deg, #f6f6f6 25%, transparent 25%, transparent 50%, #f6f6f6 50%, #f6f6f6 75%, transparent 75%, transparent);\n  background-size: 10px 10px;\n  border-bottom: none;\n}\n\n.rat-Day_block {\n  position: absolute;\n  width: 100%;\n}\n\n.rat-Day_mouseTarget {\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  cursor: default;\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-Day_component",
	"today": "rat-Day_today",
	"grayed": "rat-Day_grayed",
	"block": "rat-Day_block",
	"mouseTarget": "rat-Day_mouseTarget"
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-DayHeader_component {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.rat-DayHeader_day {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 5px;\n  text-align: center;\n}\n\n.rat-DayHeader_transparent {\n  opacity: 0.25;\n}\n\n.rat-DayHeader_events {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  text-align: left;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  border-top: 1px solid #d6d6d6;\n  min-height: 15px;\n  border-left: 1px solid #d6d6d6;\n}\n\n.rat-DayHeader_event {\n  -ms-flex-preferred-size: 33.3333%;\n      flex-basis: 33.3333%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  padding: 3px;\n  background-color: #d6dfe5;\n  border-left: 1px solid #acacac;\n  font-weight: 100;\n  color: #3d464d;\n  margin: 1px;\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-DayHeader_component",
	"day": "rat-DayHeader_day",
	"transparent": "rat-DayHeader_transparent",
	"events": "rat-DayHeader_events",
	"event": "rat-DayHeader_event"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-Ruler_component {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n  background-color: #fff;\n}\n.rat-Ruler_hour {\n  text-align: right;\n  padding: 2px 5px;\n}\n\n.rat-Ruler_inner {\n  transform: translateY(-70%);\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-Ruler_component",
	"hour": "rat-Ruler_hour",
	"inner": "rat-Ruler_inner"
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-Slider_component {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.rat-Slider_item {\n  transition: transform .2s;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-Slider_component",
	"item": "rat-Slider_item"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-TimeSlot_component {\n  background-color: #00A0B3;\n  opacity: 0.8;\n  position: absolute;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n}\n\n.rat-TimeSlot_active {\n  pointer-events: none;\n}\n\n.rat-TimeSlot_delete {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  padding: 0 5px;\n  border: none;\n  background-color: #fff;\n  display: none;\n  font-size: 20px;\n  line-height: 1;\n  color: #999;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.rat-TimeSlot_component:hover .rat-TimeSlot_delete {\n  display: block;\n}\n\n.rat-TimeSlot_frozen {\n  background-color: #93cff7;\n  border-left: 1px solid #acacac;\n  color: #3d464d;\n  opacity: 1;\n  cursor: default;\n}\n\n.rat-TimeSlot_fixed {\n  background-color: #f52a4c;\n  border-left: 1px solid #acacac;\n  color: #fff;\n  opacity: 1;\n  cursor: default;\n}\n\n.rat-TimeSlot_handle {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  cursor: ns-resize;\n}\n\n.rat-TimeSlot_title {\n  padding: 0px 5px;\n  font-size: 10px;\n  font-weight: 100;\n  overflow: hidden;\n  max-height: 100%;\n  pointer-events: none;\n  word-wrap: break-word;\n}\n", ""]);

// exports
exports.locals = {
	"component": "rat-TimeSlot_component",
	"active": "rat-TimeSlot_active",
	"delete": "rat-TimeSlot_delete",
	"frozen": "rat-TimeSlot_frozen",
	"fixed": "rat-TimeSlot_fixed",
	"handle": "rat-TimeSlot_handle",
	"title": "rat-TimeSlot_title"
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rat-Week_component {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.rat-Week_days,\n.rat-Week_header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n\n.rat-Week_header {\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n\n.rat-Week_daysWrapper {\n  position: relative;\n  overflow: auto;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.rat-Week_allDayLabel {\n  position: absolute;\n  left: -35px;\n  bottom: 3px;\n  font-size: 10px;\n  line-height: 1;\n}\n\n.rat-Week_header {\n  position: relative;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  border-bottom: 2px solid #d6d6d6;\n}\n\n.rat-Week_lines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.rat-Week_hour {\n  border-bottom: 1px solid #d6d6d6;\n  pointer-events: none;\n}\n\n", ""]);

// exports
exports.locals = {
	"component": "rat-Week_component",
	"days": "rat-Week_days",
	"header": "rat-Week_header",
	"daysWrapper": "rat-Week_daysWrapper",
	"allDayLabel": "rat-Week_allDayLabel",
	"lines": "rat-Week_lines",
	"hour": "rat-Week_hour"
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./AvailableTimes.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./AvailableTimes.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./CalendarSelector.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./CalendarSelector.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Day.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Day.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./DayHeader.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./DayHeader.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Ruler.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Ruler.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Slider.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Slider.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./TimeSlot.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./TimeSlot.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Week.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!../node_modules/postcss-loader/index.js??ref--1-2!./Week.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("moment/locale/ko");

/***/ })
/******/ ]);