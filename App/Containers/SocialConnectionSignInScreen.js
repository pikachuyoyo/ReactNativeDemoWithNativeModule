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
  ActivityIndicator
} from 'react-native'
import {connect} from 'react-redux'
import Styles from './Styles/SignInScreenStyle'
import {Images, Metrics} from '../Themes'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'


// I18n
import I18n from 'react-native-i18n'

import Dimensions from 'Dimensions';

type Timer = number;


class SocialConnectionSignInScreen extends React.Component {

  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      selectLanguage: '',
      checkedFacebook: props.social.checkedFacebook,
      checkedLine: props.social.checkedLine,
      checkedWechat: props.social.checkedWechat,
      animating: true,
      renderCheck: false
    }
  }

  handlePressSignup = () => {
    NavigationActions.signUpScreen({type: "replace"})
  }

   componentWillUnmount() {
     clearTimeout(this._timer);
     console.log('unmount')
   }

  componentDidMount() {
    // this.setToggleTimeout();
    this._timer = setTimeout(() => {
      this.setState({animating: false});
    }, 100);
    console.log('didmount')
  }

  clearToggleTimeout(){
    this._timer = setTimeout(() => {
      this.setState({animating: false, renderCheck: true});
      clearTimeout(this._timer);
      this._renderCheck
    }, 5000);
  }

  setToggleTimeout() {
  //  this.state.animating = !this.state.animating
   this._timer = setTimeout(() => {
     this.setState({animating: true});
   }, 100);

   this.clearToggleTimeout()

  }

  checkTimeout(){
    console.log(this._timer)
  }

  toggleRenderCheck(){
    this.setState({
      renderCheck: !this.state.renderCheck
    });
  }

  _renderCheck = () => {
    if(this.state.renderCheck){
      return (
        <View style={Styles.indicatorView}>
          <Icon name='check'
                  size={180}
                  color={"#5FBA7D"}
            />
        </View>
      );
    }else{
      return null;
    }
  }


  render() {
    console.log('checkfacebook:' + this.state.checkedFacebook)

    let image = require('../Images/avatar.png')
    if(this.state.checkedFacebook) {
      image = require('../Images/fb_icon.png')
    }else if(this.state.checkedLine){
      image = require('../Images/line_icon.png')
    }else if(this.state.checkedWechat){
      image = require('../Images/wechat_icon.png')
    }

    return (

      <View style={Styles.container}>
        <Image source={require('../Images/splash.png')} style={Styles.backgroundImage} />
        <View style={Styles.form}/>
        <View style={Styles.formOver}>
          <Image
            source={image}
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

          <TouchableOpacity style={Styles.buttonFire} onPress={this.setToggleTimeout.bind(this)}>
            <Text style={Styles.buttonText}>Connect</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={Styles.buttonFire} onPress={this.toggleRenderCheck.bind(this)}>
            <Text style={Styles.buttonText}>Test check</Text>
          </TouchableOpacity> */}

        </View>

        <View style={Styles.indicatorView}>
          <ActivityIndicator
            animating={this.state.animating}
            style={[{alignItems: 'center', justifyContent: 'center', padding: 8}, {height: 80}]}
            size={75}
             />
        </View>

        {this._renderCheck()}

      </View>
    )
  }

}

SocialConnectionSignInScreen.propTypes = {

}

SocialConnectionSignInScreen.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(SocialConnectionSignInScreen)
