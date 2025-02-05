"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sling = void 0;

var _Burger = require("./Burger");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Sling = props => /*#__PURE__*/_react.default.createElement(_Burger.Burger, _extends({}, props, {
  render: o => /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: e => e.key === 'Enter' && o.handler(),
    role: "button",
    style: { ...o.burgerStyles,
      transform: `${o.isToggled ? `rotateY(${180 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
    },
    tabIndex: 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `scale(0, 1) translate(${o.move * 20 * (o.isLeft ? -1 : 1)}px, 0)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
    }
  }))
}));

exports.Sling = Sling;