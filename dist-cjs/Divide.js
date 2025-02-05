"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divide = void 0;

var _Burger = require("./Burger");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Divide = props => /*#__PURE__*/_react.default.createElement(_Burger.Burger, _extends({}, props, {
  render: o => /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: e => e.key === 'Enter' && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(${o.move * 0.48}px, ${o.move * 0.73}px) rotate(45deg)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
      left: '50%',
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(-${o.move * 0.48}px, ${o.move * 0.73}px) rotate(-45deg)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      opacity: o.isToggled ? 0 : 1,
      transform: `${o.isToggled ? `translate(${-o.move * 1.25}px, 0)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      left: '50%',
      transition: `${o.time}s ${o.easing}`,
      opacity: o.isToggled ? 0 : 1,
      transform: `${o.isToggled ? `translate(${o.move * 1.25}px, 0)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(${o.move * 0.48}px, -${o.move * 0.73}px) rotate(-45deg)` : 'none'}`
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
      left: '50%',
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(-${o.move * 0.48}px, -${o.move * 0.73}px) rotate(45deg)` : 'none'}`
    }
  }))
}));

exports.Divide = Divide;