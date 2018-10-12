"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var connected_react_router_1 = require("connected-react-router");
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
exports.withRouterReducer = redux_1.compose(react_redux_1.connect(null, function (dispatch) { return ({ dispatch: dispatch }); }), function (Component) { return /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentDidMount = function () { return _this.props.dispatch(connected_react_router_1.push(window.location.pathname + window.location.search)); };
        _this.render = function () { return React.createElement(Component, __assign({}, _this.props)); };
        return _this;
    }
    return class_1;
}(React.Component)); });
