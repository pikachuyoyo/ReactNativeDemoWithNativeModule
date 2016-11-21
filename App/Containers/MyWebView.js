// @flow

import React, {PropTypes} from 'react'
import {ScrollView, Text, KeyboardAvoidingView, WebView, InteractionManager} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Metrics} from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'

// Styles
import styles from './Styles/WebViewStyle'

// I18n
import I18n from 'react-native-i18n'

class MyWebView extends React.Component {


  constructor(params) {
    super(params);

    this.state = {
      url: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("-------- got props ------------");
    var __myself = this;
    InteractionManager.runAfterInteractions(() => {
      console.log("-------- applying props ------------");
      console.log(nextProps);
      __myself.setState({url: nextProps.url});
      __myself.forceUpdate();

    });


    //this.forceUpdate();
  }

  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={{width: Metrics.screenWidth, height: Metrics.screenHeight,backgroundColor:'red'}}
      />
    )
  }

}

MyWebView.propTypes = {
  url: PropTypes.string,
}


const mapStateToProps = (state) => {
  console.log("------------- gotten state ---------------")
  return {
    url: state.fingiSdk.url,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWebView)
