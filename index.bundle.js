'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var initial = 'default';
var ThemeContext = React.createContext([initial, function () { }]);
var ThemeProvider = function (props) {
    var _a = React.useState(props.initial || initial), theme = _a[0], setTheme = _a[1];
    return (React.createElement(ThemeContext.Provider, { value: [theme, setTheme] }, props.children));
};
var useThemeContext = function () {
    return React.useContext(ThemeContext);
};

var Dimensions = {
    get: function (type) {
        return {
            width: typeof window === 'undefined' ? 0 : window.innerWidth,
            height: typeof window === 'undefined' ? 0 : window.innerHeight,
        };
    },
    addEventListener: function (event, callback) {
        if (typeof window === 'undefined')
            return;
        window.addEventListener('resize', callback);
    },
    removeEventListener: function (event, callback) {
        if (typeof window === 'undefined')
            return;
        window.removeEventListener('resize', callback);
    },
};
var setDimensions = function (dep) {
    Dimensions = dep;
};

var useRefState = function (initialValue) {
    var _a = React.useState(initialValue), value = _a[0], setValue = _a[1];
    var valueRef = React.useRef(initialValue);
    var valueInRender = value;
    var getLatestValueToUseInFunction = function () {
        return valueRef.current;
    };
    var setValue2 = function (newValue) {
        valueRef.current = newValue;
        setValue(newValue);
    };
    return [
        valueInRender,
        getLatestValueToUseInFunction,
        setValue2,
    ];
};

var minWidthBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1380,
    xxxl: 1560,
};
var getResponsiveRule = function (viewportWidth, rules) {
    for (var customBreakpoint in rules) {
        if (typeof minWidthBreakpoints[customBreakpoint] === 'number')
            continue;
        if (!customBreakpoint.includes('px'))
            continue;
        var breakpointWidth = +customBreakpoint.replace('px', '');
        if (isNaN(breakpointWidth))
            continue;
        minWidthBreakpoints[customBreakpoint] = breakpointWidth;
    }
    var breakpoints = Object.keys(minWidthBreakpoints).sort(function (a, b) {
        var widthA = minWidthBreakpoints[a];
        if (typeof widthA !== 'number')
            return 1;
        var widthB = minWidthBreakpoints[b];
        if (typeof widthB !== 'number')
            return 1;
        return widthA > widthB ? -1 : 1;
    });
    var currentBreakpoint = 'xs';
    for (var i = 0; i <= breakpoints.length; i++) {
        var breakpointCode = breakpoints[i];
        var compareWidth = minWidthBreakpoints[breakpointCode];
        if (typeof compareWidth !== 'number')
            continue;
        if (viewportWidth >= compareWidth) {
            currentBreakpoint = breakpointCode;
            if (!rules[breakpointCode])
                continue;
            break;
        }
    }
    var responsiveRule = rules[currentBreakpoint];
    return responsiveRule;
};
var allBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
function throttle(fn, threshhold, scope) {
    var last, deferTimer;
    return function () {
        var context = this;
        var now = +new Date, args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        }
        else {
            last = now;
            fn.apply(context, args);
        }
    };
}
var useWindowWidthBreakpoint = function (accepts) {
    if (accepts === void 0) { accepts = allBreakpoints; }
    var ruleObject = (function () {
        var allRule = {
            xs: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
            xxl: 'xxl',
            xxxl: 'xxxl',
        };
        var obj = {};
        for (var key in allRule) {
            if (!!accepts.includes(key)) {
                obj[key] = allRule[key];
            }
        }
        return obj;
    })();
    var measureBreakpointFromWidth = function () {
        return getResponsiveRule(Dimensions.get('window').width, ruleObject);
    };
    var _a = useRefState(measureBreakpointFromWidth()), breakpoint = _a[0], getCurrentBreakpoint = _a[1], setBreakpoint = _a[2];
    var updateBreakpoint = throttle(function () {
        var newBreakpoint = measureBreakpointFromWidth();
        if (newBreakpoint !== getCurrentBreakpoint()) {
            setBreakpoint(newBreakpoint);
        }
    }, 300);
    React.useEffect(function () {
        var unsubcription = Dimensions.addEventListener('change', updateBreakpoint);
        return function () {
            if (typeof Dimensions.removeEventListener === 'function') {
                Dimensions.removeEventListener('change', updateBreakpoint);
            }
            else if (!!unsubcription && !!unsubcription.remove) {
                unsubcription.remove();
            }
        };
    }, []);
    return breakpoint;
};

var useCombineStyle = function (_a) {
    var theme = _a.theme, rStyle = _a.rStyle, computedStyle = _a.computedStyle, style = _a.style, propsStyle = _a.propsStyle;
    var currentTheme = useThemeContext()[0];
    var breakpoint = useWindowWidthBreakpoint(Object.keys(rStyle || {}));
    var responsiveStyle = rStyle && rStyle[breakpoint] ? rStyle[breakpoint] : {};
    var allStyle = Array.isArray(style) ? __spreadArray([
        (theme ? theme[currentTheme] : {}),
        responsiveStyle,
        computedStyle,
        propsStyle
    ], style, true) : __assign(__assign(__assign(__assign(__assign({}, (theme ? theme[currentTheme] : {})), responsiveStyle), computedStyle), propsStyle), style);
    return allStyle;
};

var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'aspectRatio', 'backfaceVisibility', 'backgroundColor', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomWidth', 'borderColor', 'borderLeftColor', 'borderLeftWidth', 'borderRadius', 'borderRightColor', 'borderRightWidth', 'borderStyle', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopWidth', 'borderWidth', 'bottom', 'color', 'decomposedMatrix', 'direction', 'display', 'elevation', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'height', 'includeFontPadding', 'justifyContent', 'left', 'letterSpacing', 'lineHeight', 'margin', 'marginBottom', 'marginHorizontal', 'marginLeft', 'marginRight', 'marginTop', 'marginVertical', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'opacity', 'overflow', 'overlayColor', 'padding', 'paddingBottom', 'paddingHorizontal', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingVertical', 'position', 'right', 'rotation', 'scaleX', 'scaleY', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'textAlign', 'textAlignVertical', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textShadowColor', 'textShadowOffset', 'textShadowRadius', 'tintColor', 'top', 'transform', 'transformMatrix', 'translateX', 'translateY', 'width', 'writingDirection', 'zIndex'];
var hasNumber = function (myString) {
    return /\d/.test(myString);
};
var propsToStyle = function (props) {
    var _a;
    if (props === void 0) { props = {}; }
    var style = {};
    for (var key in props) {
        if (styleProperties.includes(key))
            style[key] = props[key];
        else if (hasNumber(key)) {
            var matchArr = key.match(/\d+/g);
            if (matchArr != null && matchArr.length === 1 && key.indexOf(matchArr[0]) === key.length - matchArr[0].length) {
                var numberValue = Number(matchArr[0]);
                var propertyValue = key.substring(0, key.indexOf(matchArr[0]));
                if (styleProperties.includes(propertyValue)) {
                    var styleObject = (_a = {},
                        _a[propertyValue] = numberValue,
                        _a);
                    style = Object.assign(style, styleObject);
                }
            }
        }
    }
    return style;
};
var usePropsStyle = function (props) {
    return React.useMemo(function () {
        return propsToStyle(props);
    }, [props]);
};

var QuickComponent = (function () {
    function QuickComponent() {
        this.propsBank = {};
        this.defaultProps = {};
        this.shouldDetectStyleProps = false;
    }
    QuickComponent.prototype.addProps = function (name, objProps) {
        this.propsBank[name] = __assign({ name: name }, objProps);
        return this.propsBank[name];
    };
    QuickComponent.prototype.setupDefaultProps = function (defaultArrayProps, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.shouldDetectStyleProps = Boolean(options.shouldDetectStyleProps);
        defaultArrayProps.forEach(function (v) {
            _this.defaultProps[v.name] = true;
        });
    };
    QuickComponent.prototype._withoutStyle = function (_a) {
        _a.style; var props = __rest(_a, ["style"]);
        return __assign({}, props);
    };
    QuickComponent.prototype._combineProps = function (p) {
        var combinedProps = {
            theme: Object.assign({}, p.theme),
            computedStyle: Object.assign({}, p.computedStyle),
            style: Array.isArray(p.style) ? p.style.slice() : Object.assign({}, p.style),
            rStyle: Object.assign({}, p.rStyle),
            props: Object.assign({}, __assign(__assign({}, this.defaultProps), p.props)),
        };
        for (var key in combinedProps.props) {
            if (this.propsBank[key] && combinedProps.props[key] === true) {
                var bankData = this.propsBank[key];
                if (bankData.theme) {
                    for (var themeValue in bankData.theme) {
                        combinedProps.theme = combinedProps.theme || {};
                        combinedProps.theme[themeValue] = __assign(__assign({}, combinedProps.theme[themeValue]), bankData.theme[themeValue]);
                    }
                }
                if (bankData.style) {
                    combinedProps.computedStyle = __assign(__assign({}, combinedProps.computedStyle), bankData.style);
                }
                if (bankData.rStyle) {
                    for (var breakpoint in bankData.rStyle) {
                        combinedProps.rStyle = combinedProps.rStyle || {};
                        combinedProps.rStyle[breakpoint] = __assign(__assign({}, combinedProps.rStyle[breakpoint]), bankData.rStyle[breakpoint]);
                    }
                }
                if (bankData.props) {
                    combinedProps.props = __assign(__assign({}, combinedProps.props), bankData.props);
                }
                delete combinedProps.props[key];
            }
        }
        for (var key in combinedProps.props) {
            if (this.propsBank[key] && combinedProps.props[key] === true)
                return this._combineProps(combinedProps);
        }
        return combinedProps;
    };
    QuickComponent.prototype.make = function (Comp) {
        var _this = this;
        var NewComp = function (p) {
            var _a;
            var combinedProps = React.useMemo(function () {
                return _this._combineProps({
                    props: _this._withoutStyle(p),
                    style: !p.style ? {} : typeof p.style === 'number' ? [p.style] : p.style,
                });
            }, [p]);
            var theme = combinedProps.theme, rStyle = combinedProps.rStyle, style = combinedProps.style, props = combinedProps.props, computedStyle = combinedProps.computedStyle;
            var propsStyle = !_this.shouldDetectStyleProps ? {} : usePropsStyle(props);
            var combineStyle = useCombineStyle({ theme: theme, rStyle: rStyle, computedStyle: computedStyle, style: style, propsStyle: propsStyle });
            if (p.debugStyle && p.id) {
                var id = p.id;
                if (p.debugLog) {
                    console.log("=== debug style id = ".concat(id, " ===="));
                    console.log('combinedProps', combinedProps);
                    console.log('combineStyle', combineStyle);
                    console.log("=================================");
                }
                QuickComponent.styleDebug = __assign(__assign({}, QuickComponent.styleDebug), (_a = {}, _a[id] = {
                    combinedProps: combinedProps,
                    combineStyle: combineStyle,
                    lastChange: new Date().getTime(),
                }, _a));
            }
            return (React.createElement(Comp, __assign({ style: combineStyle }, props)));
        };
        return NewComp;
    };
    QuickComponent.styleDebug = {};
    QuickComponent.makeDebugComponentRN = function (View, Text, ScrollView) { return function (_a) {
        var id = _a.id, style = _a.style, scrollHeight = _a.scrollHeight;
        var timeRef = React.useRef(0);
        var _b = React.useState({
            combinedProps: {},
            combineStyle: {},
        }), data = _b[0], setData = _b[1];
        React.useEffect(function () {
            var interval = setInterval(function () {
                var debugData = QuickComponent.styleDebug[id];
                if (!debugData)
                    return;
                if (timeRef.current === debugData.lastChange)
                    return;
                timeRef.current = debugData.lastChange;
                setData({
                    combinedProps: debugData.combinedProps,
                    combineStyle: debugData.combineStyle,
                });
            }, 500);
            return function () {
                clearInterval(interval);
            };
        }, []);
        return (React.createElement(View, { style: style },
            React.createElement(Text, null,
                "Debug style props for component Id: ",
                id),
            React.createElement(ScrollView, { style: {
                    height: scrollHeight || '100%',
                }, contentContainerStyle: {
                    padding: 10,
                } },
                React.createElement(Text, null, JSON.stringify(data, undefined, 4)))));
    }; };
    return QuickComponent;
}());

React.createContext({
    width: Dimensions.get('window').width,
    useCustomViewport: false,
});
var useDynamicResponsiveValue = function (accepts) {
    if (accepts === void 0) { accepts = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']; }
    var order = accepts;
    var breakpoint = useWindowWidthBreakpoint(accepts);
    return function (dynamicObj) {
        var orderIndex = order.indexOf(breakpoint);
        for (var i = orderIndex; i >= 0; i--) {
            if (order[i] in dynamicObj) {
                return dynamicObj[order[i]];
            }
        }
        return undefined;
    };
};
var bpOrder = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
var findNearestLowerBreakpointValue = function (breakpoint, rules) {
    if (rules[breakpoint])
        return rules[breakpoint];
    var index = bpOrder.indexOf(breakpoint);
    var i = index;
    while (!rules[bpOrder[i]]) {
        if (i === 0)
            return undefined;
        i -= 1;
    }
    return rules[bpOrder[i]];
};
var useResponsiveStyle = function (onResponsiveStyle) {
    var breakpoint = useWindowWidthBreakpoint(Object.keys(onResponsiveStyle || {}));
    return findNearestLowerBreakpointValue(breakpoint, onResponsiveStyle);
};

exports.QuickComponent = QuickComponent;
exports.ThemeProvider = ThemeProvider;
exports.setDimensions = setDimensions;
exports.useCombineStyle = useCombineStyle;
exports.useDynamicResponsiveValue = useDynamicResponsiveValue;
exports.usePropsStyle = usePropsStyle;
exports.useResponsiveStyle = useResponsiveStyle;
exports.useThemeContext = useThemeContext;
exports.useWindowWidthBreakpoint = useWindowWidthBreakpoint;
