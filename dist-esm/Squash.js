function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Burger } from './Burger';
import React from 'react';
export const Squash = props => /*#__PURE__*/React.createElement(Burger, _extends({}, props, {
  render: o => /*#__PURE__*/React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: e => e.key === 'Enter' && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(${o.barHeight + o.margin}px)` : 'none'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
      transform: `${o.isToggled ? `rotate(45deg)` : 'none'}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing}`,
      opacity: `${o.isToggled ? '0' : '1'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time / 2}s ${o.easing}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(-${o.barHeight + o.margin}px)` : 'none'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
      transform: `${o.isToggled ? `rotate(-45deg)` : 'none'}`
    }
  })))
}));