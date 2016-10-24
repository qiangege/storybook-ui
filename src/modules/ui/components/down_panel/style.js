import { baseFonts } from '../theme';

export default {
  empty: {
    flex: 1,
    display: 'flex',
    ...baseFonts,
    fontSize: 11,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: 4,
    // border: 'solid 1px rgb(236, 236, 236)',
    marginTop: 5,
  },

  tabbar: {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: 'solid 1px #eaeaea',
  },

  content: {
    flex: 1,
    display: 'flex',
    overflow: 'auto',
  },

  tablink: {
    // ...baseFonts,
    // fontSize: 11,
    letterSpacing: '1px',
    // padding: '10px 15px',
    padding: '10px 0px 10px 25px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'opacity 0.3s',
    opacity: 0.5,
    fontFamily:'PingFangSC-Semibold',
    fontSize:'16px',
    color:'#36434d',
    lineHeight:'30px',
    textAlign:'left'
  },

  activetab: {
    opacity: 1,
  },
};
