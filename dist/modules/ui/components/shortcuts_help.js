'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortcutsHelp = exports.Content = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commandStyle = {
  backgroundColor: '#eee',
  padding: '2px 6px',
  borderRadius: 2,
  lineHeight: '36px',
  marginRight: '5px'
};

var h4Style = {
  marginTop: 0,
  textAlign: 'center'
};

var modalStyles = {
  content: {
    left: '50%',
    bottom: 'initial',
    right: 'initial',
    width: 350,
    marginLeft: -175,
    border: 'none',
    overflow: 'visible',
    fontFamily: 'sans-serif',
    fontSize: 14
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.74902)'
  }
};

var Content = exports.Content = function Content() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      { style: h4Style },
      'Keyboard Shortcuts'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 P'
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 P'
      ),
      'Toggle SearchBox'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 J'
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 J'
      ),
      'Toggle Action Logger position'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 F'
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 F'
      ),
      'Toggle Fullscreen Mode'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 L'
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 L'
      ),
      'Toggle Left Panel'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 D'
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 D'
      ),
      'Toggle Down Panel'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 \u2192 '
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 \u2192 '
      ),
      'Next Story'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2318 \u21E7 \u2190 '
      ),
      ' / \xA0',
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        '\u2303 \u21E7 \u2190 '
      ),
      'Previous Story'
    )
  );
};

var ShortcutsHelp = exports.ShortcutsHelp = function ShortcutsHelp(_ref) {
  var isOpen = _ref.isOpen;
  var onClose = _ref.onClose;
  return _react2.default.createElement(
    _reactModal2.default,
    {
      isOpen: isOpen,
      onRequestClose: onClose,
      style: modalStyles
    },
    _react2.default.createElement(Content, null)
  );
};

ShortcutsHelp.propTypes = {
  isOpen: _react2.default.PropTypes.bool,
  onClose: _react2.default.PropTypes.func
};

exports.default = ShortcutsHelp;