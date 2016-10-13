import React from 'react';
import { baseFonts } from '../theme';

const wrapperStyle = {
  background: '#ffffff',
  marginBottom: 10,
};

const headingStyle = {
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
  fontFamily:'PingFangSC-Regular',
  fontSize:'12px',
  color:'#36434d',
  lineHeight:'20px',
  background:'#f5f8fa',
  boxShadow:'0px 1px 2px 0px rgba(0,0,0,0.30)',
  borderRadius:'2px',
  width:'146px',
  height:'20px',
  padding:'7px 0'
};

const shortcutIconStyle = {
  textTransform: 'uppercase',
  letterSpacing: '3.5px',
  fontSize: 12,
  fontWeight: 'bolder',
  color: 'rgb(130, 130, 130)',
  border: '1px solid rgb(193, 193, 193)',
  textAlign: 'center',
  borderRadius: 2,
  padding: 5,
  cursor: 'pointer',
  margin: 0,
  display: 'inlineBlock',
  paddingLeft: 8,
  float: 'right',
  marginLeft: 5,
  backgroundColor: 'inherit',
  outline: 0,
};

const linkStyle = {
  textDecoration: 'none',
};

const Header = ({ openShortcutsHelp, name, url }) => (
  <div style={wrapperStyle}>
    <button style={shortcutIconStyle} onClick={openShortcutsHelp}>⌘</button>
    <a style={linkStyle} href={url} target="_blank">
      <h3 style={headingStyle}>{name}</h3>
    </a>
  </div>
);

Header.propTypes = {
  openShortcutsHelp: React.PropTypes.func,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
};

export default Header;
