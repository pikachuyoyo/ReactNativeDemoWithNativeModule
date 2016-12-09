import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
} from 'react-native'
import {connect} from 'react-redux'
import Styles from './Styles/SignInScreenStyle'
import {Images, Metrics} from '../Themes'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'

// I18n
import I18n from 'react-native-i18n'

import Dimensions from 'Dimensions';

class SignInScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectLanguage: ''
    }
  }

  handlePressLogin = () => {
    NavigationActions.login()
  }

  render() {

    return (

      <View style={Styles.container}>
        <Image source={require('../Images/splash.png')} style={Styles.backgroundImage} />
        <View style={Styles.form}/>
        <View style={Styles.formOver}>
          <Image
            source={{uri:'https://s3.amazonaws.com/fingi/assets/thumbnail_guest_avatar-2f5072fba40190f1114c2dd37f3bb907.png'}}
            style={Styles.avatar}
          />
          <TextInput
            ref='username'
            style={Styles.textInput}
            keyboardType='default'
            placeholder={I18n.t('username')}
            underlineColorAndroid='transparent'/>
          <TextInput
            ref='password'
            style={Styles.textInput}
            keyboardType='default'
            placeholder={I18n.t('password')}
            underlineColorAndroid='transparent'/>

          <View style={Styles.formButton}>
            <TouchableOpacity style={Styles.buttonFireSplitTwo} >
              <Text style={Styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonFireSplitTwo} >
              <Text style={Styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={Styles.buttonFire} >
            <Text style={Styles.buttonText}>Social Login</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }

}

SignInScreen.propTypes = {

}

SignInScreen.defaultProps = {

}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // attemptLogin: (username, password) => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
