import React from 'react'
import {View, Text, Image, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Metrics} from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'

// Styles
import styles from './Styles/SplashStyle'

// I18n
import I18n from 'react-native-i18n'

class Splash extends React.Component {

  componentDidMount(){
    setTimeout(function(){
      // NavigationActions.login();
      NavigationActions.promotionScreen({type: "reset"});
    },1000)
  }


  render() {
    return (
      <View style={{
        width: Metrics.screenWidth,
        height: Metrics.screenHeight
      }}>
        <Image source={require('../Images/splash.png')} style={{
          width: Metrics.screenWidth,
          height: Metrics.screenHeight
        }}>
        </Image>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
