'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapperStyle = {
  background: '#ffffff',
  marginBottom: 10
};

var headingStyle = {
  // ...baseFonts,
  // textTransform: 'uppercase',
  // letterSpacing: '1.5px',
  // fontSize: '12px',
  // fontWeight: 'bolder',
  // color: '#828282',
  // border: '1px solid #C1C1C1',
  textAlign: 'center',
  // borderRadius: '2px',
  // padding: '5px',
  // cursor: 'pointer',
  margin: 0,
  // float: 'none',
  // overflow: 'hidden'
  fontFamily: 'PingFangSC-Regular',
  fontSize: '12px',
  color: '#36434d',
  lineHeight: '20px',
  background: '#f5f8fa',
  boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.30)',
  borderRadius: '2px',
  width: '146px',
  height: '20px',
  padding: '7px 0'
};

var shortcutIconStyle = {
  textTransform: 'uppercase',
  // letterSpacing: '3.5px',
  fontSize: 20,
  // fontWeight: 'bolder',
  // color: 'rgb(130, 130, 130)',
  // border: '1px solid rgb(193, 193, 193)',
  textAlign: 'center',
  borderRadius: 2,
  // padding: 5,
  cursor: 'pointer',
  margin: 0,
  display: 'inlineBlock',
  // paddingLeft: 8,
  float: 'right',
  // marginLeft: 5,
  backgroundColor: '#f5f8fa',
  outline: 0,
  fontFamily: 'PingFangSC-Regular',
  color: '#36434d',
  border: '0px',
  // 阴影
  boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.30)',
  width: '34px',
  height: '34px'
};

var linkStyle = {
  textDecoration: 'none'
};

var Header = function Header(_ref) {
  var openShortcutsHelp = _ref.openShortcutsHelp;
  var name = _ref.name;
  var url = _ref.url;
  return _react2.default.createElement(
    'div',
    { style: wrapperStyle },
    _react2.default.createElement(
      'button',
      { style: shortcutIconStyle, onClick: openShortcutsHelp },
      '\u2318'
    ),
    _react2.default.createElement(
      'a',
      { style: linkStyle, href: url, target: '_blank' },
      _react2.default.createElement(
        'h3',
        { style: headingStyle },
        name
      )
    )
  );
};

Header.propTypes = {
  openShortcutsHelp: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string
};

exports.default = Header;