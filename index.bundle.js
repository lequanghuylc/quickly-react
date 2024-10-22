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

var initial$1 = 'default';
var ThemeContext = React.createContext([initial$1, function () { }]);
var ThemeProvider = function (props) {
    var _a = React.useState(props.initial || initial$1), theme = _a[0], setTheme = _a[1];
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
        var breakpointWidth = +(customBreakpoint.replace('px', '').replace('c', ''));
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
var useWindowWidthBreakpoint = function (accepts, forceInitial) {
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
        accepts.forEach(function (key) {
            if (!!allRule[key] || key.includes('px') || key.startsWith('c')) {
                obj[key] = key;
            }
        });
        return obj;
    })();
    var measureBreakpointFromWidth = function () {
        var currentWindowWidth = Dimensions.get('window').width;
        if (accepts.length === 0)
            return "c-".concat(currentWindowWidth);
        return getResponsiveRule(Dimensions.get('window').width, ruleObject);
    };
    var _a = useRefState(forceInitial || measureBreakpointFromWidth()), breakpoint = _a[0], getCurrentBreakpoint = _a[1], setBreakpoint = _a[2];
    var updateBreakpoint = throttle(function () {
        var newBreakpoint = measureBreakpointFromWidth();
        if (newBreakpoint !== getCurrentBreakpoint()) {
            setBreakpoint(newBreakpoint);
        }
    }, 300);
    React.useEffect(function () {
        if (!forceInitial)
            return;
        updateBreakpoint();
    }, [forceInitial]);
    React.useEffect(function () {
        if (accepts.length === 0)
            return;
        var unsubcription = Dimensions.addEventListener('change', updateBreakpoint);
        return function () {
            if (typeof Dimensions.removeEventListener === 'function') {
                Dimensions.removeEventListener('change', updateBreakpoint);
            }
            else if (!!unsubcription && !!unsubcription.remove) {
                unsubcription.remove();
            }
        };
    }, [accepts]);
    return breakpoint;
};

var findInitial = function (rStyle) {
    if (!rStyle)
        return {
            initialBreakpoint: undefined,
            cleanedResponsiveStyle: rStyle,
        };
    var initial;
    var responsiveStyle = Object.assign({}, rStyle);
    for (var key in rStyle) {
        if (responsiveStyle[key].initial && !initial) {
            initial = key;
        }
        delete responsiveStyle[key].initial;
    }
    return {
        initialBreakpoint: initial,
        cleanedResponsiveStyle: responsiveStyle,
    };
};
var useCombineStyle = function (_a) {
    var theme = _a.theme, rStyle = _a.rStyle, computedStyle = _a.computedStyle, style = _a.style, propsStyle = _a.propsStyle;
    var currentTheme = useThemeContext()[0];
    var _b = findInitial(rStyle), initialBreakpoint = _b.initialBreakpoint, cleanedResponsiveStyle = _b.cleanedResponsiveStyle;
    var breakpoint = useWindowWidthBreakpoint(Object.keys(rStyle || {}), initialBreakpoint);
    var responsiveStyle = cleanedResponsiveStyle && cleanedResponsiveStyle[breakpoint] ? cleanedResponsiveStyle[breakpoint] : {};
    var allStyle = Array.isArray(style) ? __spreadArray([
        (theme ? theme[currentTheme] : {}),
        responsiveStyle,
        computedStyle,
        propsStyle
    ], style, true) : __assign(__assign(__assign(__assign(__assign({}, (theme ? theme[currentTheme] : {})), computedStyle), propsStyle), responsiveStyle), style);
    return allStyle;
};

var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'aspectRatio', 'backfaceVisibility', 'backgroundColor', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomWidth', 'borderColor', 'borderLeftColor', 'borderLeftWidth', 'borderRadius', 'borderRightColor', 'borderRightWidth', 'borderStyle', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopWidth', 'borderWidth', 'bottom', 'color', 'decomposedMatrix', 'direction', 'display', 'elevation', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'height', 'includeFontPadding', 'justifyContent', 'left', 'letterSpacing', 'lineHeight', 'margin', 'marginBottom', 'marginHorizontal', 'marginLeft', 'marginRight', 'marginTop', 'marginVertical', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'opacity', 'overflow', 'overlayColor', 'padding', 'paddingBottom', 'paddingHorizontal', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingVertical', 'position', 'right', 'rotation', 'scaleX', 'scaleY', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'textAlign', 'textAlignVertical', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textShadowColor', 'textShadowOffset', 'textShadowRadius', 'tintColor', 'top', 'transform', 'transformMatrix', 'translateX', 'translateY', 'width', 'writingDirection', 'zIndex', 'gap', 'rowGap', 'columnGap'];
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
            rStyle: Object.assign({}, p.rStyle, p.props.rStyle),
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
                    console.group("debug style id = ".concat(id));
                    console.log('combinedProps', combinedProps);
                    console.log('combineStyle', combineStyle);
                    console.groupEnd();
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
                    combinedProps: __assign(__assign({}, debugData.combinedProps), { props: __assign(__assign({}, debugData.combinedProps.props), { children: '...' }) }),
                    combineStyle: debugData.combineStyle,
                });
            }, 500);
            return function () {
                clearInterval(interval);
            };
        }, []);
        var stringify = function () {
            var getCircularReplacer = function () {
                var seen = new WeakSet();
                return function (key, value) {
                    if (typeof value === "object" && value !== null) {
                        if (seen.has(value)) {
                            return;
                        }
                        seen.add(value);
                    }
                    return value;
                };
            };
            var dataString = JSON.stringify(data, getCircularReplacer(), 2);
            return dataString;
        };
        return (React.createElement(View, { style: style },
            React.createElement(Text, null,
                "Debug style props for component Id: ",
                id),
            React.createElement(ScrollView, { style: {
                    height: scrollHeight || '100%',
                }, contentContainerStyle: {
                    padding: 10,
                } },
                React.createElement(Text, null, stringify()))));
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

var initial = { width: 0, height: 0 };
var ContainerContext = React.createContext([initial, function () { }]);
var SizeProvider = React.forwardRef(function (props, ref) {
    var _a = React.useState(props.initial || initial), size = _a[0], setSize = _a[1];
    React.useImperativeHandle(ref, function () {
        return {
            setSize: function (v) { return setSize(v); },
        };
    });
    return (React.createElement(ContainerContext.Provider, { value: [size, setSize] }, props.children));
});
var useContainerContext = function () {
    return React.useContext(ContainerContext);
};
var useContainer = function (Component, accepts) {
    if (accepts === void 0) { accepts = []; }
    var sizeRef = React.useRef({ width: 0, height: 0 });
    var _a = React.useState({ width: 0, height: 0 }), size = _a[0], setSize = _a[1];
    var breakpoint = useWindowWidthBreakpoint(accepts);
    var providerRef = React.useRef();
    React.useEffect(function () {
        setSize(sizeRef.current);
    }, [breakpoint]);
    React.useEffect(function () {
        if (providerRef.current && typeof providerRef.current.setSize === 'function') {
            providerRef.current.setSize(size);
        }
    }, [size]);
    var Container = React.useMemo(function () {
        return function (p) {
            return (React.createElement(SizeProvider, { ref: providerRef },
                React.createElement(Component, __assign({}, p, { onLayout: function (e) {
                        var _a = e.nativeEvent.layout, width = _a.width, height = _a.height;
                        var isFirstTime = sizeRef.current.width === 0 && sizeRef.current.height === 0;
                        sizeRef.current = { width: width, height: height };
                        if (isFirstTime) {
                            setSize(sizeRef.current);
                        }
                    } }))));
        };
    }, []);
    return [Container, size];
};

var createPressable = function (RN, addProps, addCommonStyle) {
    if (addProps === void 0) { addProps = []; }
    var quickComponent = new QuickComponent();
    var defaultProps = [];
    addProps.forEach(function (_a) {
        var propName = _a.propName, obj = _a.obj, isDefault = _a.isDefault;
        var newProp = quickComponent.addProps(propName, obj);
        if (isDefault)
            defaultProps.push(newProp);
    });
    quickComponent.setupDefaultProps(defaultProps, {
        shouldDetectStyleProps: true,
    });
    !!addCommonStyle && addCommonStyle(quickComponent);
    var View = RN.View, TouchableOpacity = RN.TouchableOpacity, Pressable = RN.Pressable;
    var PressabelComponent = function (props) {
        return !props.onPress ? React.createElement(View, __assign({ ref: props.onRef }, props)) : (Pressable ? (React.createElement(Pressable, __assign({ ref: props.onRef }, props, { style: function (_a) {
                var pressed = _a.pressed;
                return __spreadArray(__spreadArray([], (Array.isArray(props.style) ? props.style : [props.style]), true), (!pressed ? [] : __spreadArray([
                    { opacity: pressed ? 0.9 : 1 }
                ], (Array.isArray(props.pressedStyle) ? props.pressedStyle : [props.pressedStyle]), true)), true);
            } }))) : React.createElement(TouchableOpacity, __assign({ ref: props.onRef, activeOpacity: 0.9 }, props)));
    };
    var PressableView = quickComponent.make(PressabelComponent);
    var PressableContainer = function (_a) {
        _a.container; var props = __rest(_a, ["container"]);
        var Container = useContainer(PressableView)[0];
        return (React.createElement(Container, __assign({}, props)));
    };
    var PressableViewWithContainerQuery = function (_a) {
        var container = _a.container, props = __rest(_a, ["container"]);
        return !container ? (React.createElement(PressableView, __assign({}, props))) : (React.createElement(PressableContainer, __assign({}, props)));
    };
    return PressableViewWithContainerQuery;
};

var createText = function (RN, addProps, addCommonStyle) {
    if (addProps === void 0) { addProps = []; }
    var quickComponent = new QuickComponent();
    var defaultProps = [];
    addProps.forEach(function (_a) {
        var propName = _a.propName, obj = _a.obj, isDefault = _a.isDefault;
        var newProp = quickComponent.addProps(propName, obj);
        if (isDefault)
            defaultProps.push(newProp);
    });
    quickComponent.setupDefaultProps(defaultProps, {
        shouldDetectStyleProps: true,
    });
    !!addCommonStyle && addCommonStyle(quickComponent);
    var RNText = RN.Text;
    var Text = quickComponent.make(RNText);
    return Text;
};

var matching = [
    { key: 'm', value: 'margin' },
    { key: 'mv', value: 'marginVertical' },
    { key: 'mh', value: 'marginHorizontal' },
    { key: 'ml', value: 'marginLeft' },
    { key: 'mt', value: 'marginTop' },
    { key: 'mb', value: 'marginBottom' },
    { key: 'mr', value: 'marginRight' },
    { key: 'p', value: 'padding' },
    { key: 'pv', value: 'paddingVertical' },
    { key: 'ph', value: 'paddingHorizontal' },
    { key: 'pl', value: 'paddingLeft' },
    { key: 'pt', value: 'paddingTop' },
    { key: 'pb', value: 'paddingBottom' },
    { key: 'pr', value: 'paddingRight' },
];
((function () {
    var arr = [];
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(function (number) {
        matching.forEach(function (val) {
            arr.push(val.key + number);
        });
    });
    return arr;
}))();
var addMarginPaddingStyles = function (commonStyles, unit) {
    if (unit === void 0) { unit = 10; }
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(function (number) {
        matching.forEach(function (_a) {
            var _b;
            var key = _a.key, value = _a.value;
            commonStyles[key + number] = (_b = {},
                _b[value] = unit * Number(number === '0' ? 0.5 : number),
                _b);
        });
    });
};

var commonStyles = function (tokens) {
    return {
        width100p: {
            width: '100%',
        },
        middle: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        colorWhite: {
            color: 'white',
        },
        bgWhite: {
            backgroundColor: 'white',
        },
        absoluteFill: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        absolute: {
            position: 'absolute',
        },
        borderThin: {
            borderWidth: 1,
            borderColor: (tokens === null || tokens === void 0 ? void 0 : tokens.borderColor) || '#D1D1D6',
        },
        stretch: {
            alignItems: 'stretch',
        },
        round1: {
            borderRadius: 8,
        },
        round0: {
            borderRadius: 4,
        },
        round1_5: {
            borderRadius: 12,
        },
        round2: {
            borderRadius: 16,
        },
        row: {
            flexDirection: 'row',
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.12,
            shadowRadius: 9.46,
            elevation: 9,
        },
        primary: {
            color: (tokens === null || tokens === void 0 ? void 0 : tokens.textColorPrimary) || 'black',
        },
        secondary: {
            color: (tokens === null || tokens === void 0 ? void 0 : tokens.textColorSecondary) || '#8E8E93',
        },
        tertiary: {
            color: (tokens === null || tokens === void 0 ? void 0 : tokens.textColorTertiary) || '#FFFFFF',
        },
        bgPrimary: {
            backgroundColor: (tokens === null || tokens === void 0 ? void 0 : tokens.bgColorPrimary) || '#F9F9F9',
        },
        bgSecondary: {
            backgroundColor: (tokens === null || tokens === void 0 ? void 0 : tokens.bgColorSecondary) || '#F2F2F7',
        },
        colorMain: {
            color: (tokens === null || tokens === void 0 ? void 0 : tokens.mainColor) || 'black',
        },
        bgMain: {
            backgroundColor: (tokens === null || tokens === void 0 ? void 0 : tokens.mainColor) || 'black',
        }
    };
};
var addCommonStyles = function (quickComponentInstact, cStyles, tokens) {
    if (!quickComponentInstact.addProps)
        return;
    var initialCommonStyles = Object.assign({}, commonStyles(tokens));
    addMarginPaddingStyles(initialCommonStyles, tokens.unit);
    var styleArray = __spreadArray([initialCommonStyles], cStyles, true);
    styleArray.forEach(function (style) {
        for (var key in style) {
            quickComponentInstact.addProps(key, {
                style: style[key],
            });
        }
    });
};

var createGrid = function (Col, Row) {
    var Grid = function (_a) {
        var children = _a.children, initial = _a.initial, props = __rest(_a, ["children", "initial"]);
        var uniqueId = React.useState('responsive_id_' + Math.random())[0];
        var breakpointAccepts = (function () {
            var accepts = [];
            var allBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
            for (var key in props) {
                if (allBreakpoints.includes(key)) {
                    accepts.push(key);
                }
                if (key.startsWith('c')) {
                    var withoutC = key.slice(1);
                    var isNumber = !isNaN(Number(withoutC));
                    if (isNumber) {
                        accepts.push(key);
                    }
                }
            }
            return accepts.length === 0 ? allBreakpoints : accepts;
        })();
        var breakpoint = useWindowWidthBreakpoint(breakpointAccepts, initial);
        var responsiveRule = props[breakpoint];
        var renderChildren = function () {
            var _a;
            if (!responsiveRule)
                return children;
            var childrenArray = React.Children.toArray(props.hasWrapper ? (_a = children === null || children === void 0 ? void 0 : children.props) === null || _a === void 0 ? void 0 : _a.children : children);
            switch (true) {
                case typeof responsiveRule !== 'string':
                    return children;
                case responsiveRule.includes('%'):
                    var percent = Number(responsiveRule.replace('%', ''));
                    if (isNaN(percent))
                        return children;
                    return childrenArray.map(function (child, childIndex) { return (React.createElement(Col, { width: responsiveRule, key: 'responsive-r1-' + childIndex + uniqueId }, child)); });
                case responsiveRule === '1:.':
                    return childrenArray.map(function (child, childIndex) { return (React.createElement(Col, { flex1: true, key: 'responsive-r2-' + childIndex + uniqueId }, child)); });
                case responsiveRule.includes(':'):
                    var flexs = responsiveRule.split(':').map(function (val) { return val; });
                    if (flexs.filter(function (val) { return isNaN(Number(val)) && val !== 'any' && !val.includes('px'); }).length > 0) {
                        throw new Error('invalid responsive rule');
                    }
                    return flexs.map(function (val, i) { return (React.createElement(Col, { flex: val === 'any' || val.includes('px') ? undefined : val, width: val.includes('px') ? Number(val.replace('px', '')) : undefined, key: 'responsive-r3-' + i + uniqueId }, childrenArray[i])); });
                default:
                    return children;
            }
        };
        return (React.createElement(Row, __assign({ flexWrap: 'wrap' }, props), renderChildren()));
    };
    Grid.Item = Col;
    return Grid;
};

var createBase = function (_a) {
    var RN = _a.RN, _b = _a.addTextProps, addTextProps = _b === void 0 ? [] : _b, _c = _a.addViewProps, addViewProps = _c === void 0 ? [] : _c, commonStyles = _a.commonStyles, tokens = _a.tokens;
    var addCommonStylesCombined = function (quickComponentInstance) {
        addCommonStyles(quickComponentInstance, [commonStyles], tokens);
    };
    var Col = createPressable(RN, addViewProps, addCommonStylesCombined);
    var Row = createPressable(RN, [
        {
            propName: 'defaultRow',
            obj: {
                style: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
            },
            isDefault: true
        },
    ], addCommonStylesCombined);
    var RatioCol = function (_a) {
        var ratio = _a.ratio, children = _a.children, width = _a.width, props = __rest(_a, ["ratio", "children", "width"]);
        return (React.createElement(Col, __assign({ width: width }, props),
            React.createElement(Col, { paddingBottom: 100 / ratio + '%' },
                React.createElement(Col, { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, children))));
    };
    var Text = createText(RN, addTextProps, addCommonStylesCombined);
    var Grid = createGrid(Col, Row);
    return {
        Col: Col,
        Row: Row,
        RatioCol: RatioCol,
        Text: Text,
        Grid: Grid,
    };
};

exports.QuickComponent = QuickComponent;
exports.ThemeProvider = ThemeProvider;
exports.createBase = createBase;
exports.setDimensions = setDimensions;
exports.useCombineStyle = useCombineStyle;
exports.useContainer = useContainer;
exports.useContainerContext = useContainerContext;
exports.useDynamicResponsiveValue = useDynamicResponsiveValue;
exports.usePropsStyle = usePropsStyle;
exports.useResponsiveStyle = useResponsiveStyle;
exports.useThemeContext = useThemeContext;
exports.useWindowWidthBreakpoint = useWindowWidthBreakpoint;
