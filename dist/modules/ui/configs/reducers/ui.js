'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.types.SET_STORY_FILTER:
      {
        return (0, _extends3.default)({}, state, {
          storyFilter: action.filter
        });
      }

    case _actions.types.SELECT_BOTTOM_PANEL:
      {
        return (0, _extends3.default)({}, state, {
          selectedDownPanel: action.panelName
        });
      }

    case _actions.types.TOGGLE_SHORTCUTS_HELP:
      {
        return (0, _extends3.default)({}, state, {
          showShortcutsHelp: !state.showShortcutsHelp
        });
      }

    default:
      return state;
  }
};

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  showShortcutsHelp: false
};