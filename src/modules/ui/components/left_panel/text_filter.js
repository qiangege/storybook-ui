import React from 'react';
import { baseFonts } from '../theme';
import Search from '@beisen/Search'

const mainStyle = {
  ...baseFonts,
  border: '1px solid #ECECEC',
  borderRadius: 2,
  position: 'relative',
};

export default class TextFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
    this.fireOnClear = this.fireOnClear.bind(this);
  }

  onChange(event) {
    const text = event.target.value;
    this.setState({ query: text });
    const { onChange } = this.props;
    if (onChange) onChange(text);
  }

  fireOnClear() {
    this.setState({ query: '' });

    const { onClear } = this.props;
    if (onClear) onClear();
  }

  render() {
    const textWrapStyle = {
      background: '#F7F7F7',
    };

    const textStyle = {
      fontSize: 12,
      color: '#828282',
      padding: 5,
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none',
      border: 0,
      height: 26,
    };

    const clearButtonStyle = {
      position: 'absolute',
      color: '#868686',
      border: 'none',
      width: 25,
      height: 26,
      right: 1,
      top: 0,
      textAlign: 'center',
      cursor: 'pointer',
      lineHeight: '23px',
      fontSize: 20,
    };

    // 为了使用@beisen/Search组件，建date传入组件
    const searchData = {
      "placeholder":"Filter"        /**没有值的时候显示的内容(string)**/
      ,"iconName":"icon-sousuo"     /**IconName 文字前面的图标**/
      ,"value":this.props.text || ''  //搜索框中的默认值
      ,"active":true //input框激活
      ,"hidden":false             //隐藏搜索框
      ,"readonly":false           //搜索框只读
      ,"disabled":false           //搜索框禁用
      ,"onChange":this.onChange
    }


    return (
      <div style={mainStyle} >
        <div style={textWrapStyle} >
            <Search {...searchData} />
        </div>
        {
          this.state.query && this.state.query.length && <div
            style={clearButtonStyle}
            onClick={this.fireOnClear}
            className="clear"
          >
            ×
          </div>
        }
      </div>
    );
  }
}

TextFilter.propTypes = {
  text: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func,
};
