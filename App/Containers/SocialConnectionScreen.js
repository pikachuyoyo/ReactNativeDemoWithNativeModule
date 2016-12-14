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
import Styles from './Styles/SocialConnectionScreenStyle'
import {Images, Metrics} from '../Themes'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
// import CheckBox from 'react-native-checkbox'
import CheckBox from 'react-native-icon-checkbox'

// I18n
import I18n from 'react-native-i18n'

import Dimensions from 'Dimensions';

class SocialConnectionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectLanguage: 'TH',
      checkedFacebook: false,
      checkedLine: false,
      checkedWechat: false,
    }
  }

  handlePressCheckedBox(obj){

    //clear all checkbox
    this.state.checkedFacebook = false
    this.state.checkedLine = false
    this.state.checkedWechat = false

    this.setState(obj);
  }

  handlePressSignIn = () => {
    NavigationActions.socialConnectionSignInScreen({social: this.state})
  }

  render() {

    return (

      <View style={Styles.container}>
        <Image source={require('../Images/splash.png')} style={Styles.backgroundImage} />
        <View style={Styles.form}/>
        <View style={Styles.formOver}>
          <View style={{justifyContent: 'center',marginTop: 15,}}>
            <TextInput
              ref='name'
              style={Styles.textInput}
              keyboardType='default'
              placeholder='First & LastName'
              underlineColorAndroid='transparent'
              />
            <TextInput
              ref='name'
              style={Styles.textAreaInput}
              keyboardType='default'
              placeholder='Detail'
              underlineColorAndroid='transparent'
              multiline = {true}
              />
          </View>
            {/* <CheckBox
              label='facebook'
              checked={true}
              onChange={(checked) => console.log('wow checked',checked)}/> */}

          <View style={Styles.formCheckBox}>
            <Text style={Styles.textForm} >Facebook</Text>
            <CheckBox
              size={40}
              checked={this.state.checkedFacebook}
              onPress={(checked) => this.handlePressCheckedBox({checkedFacebook: checked}) }
              iconStyle={{color:'#ffffff'}}
            />
          </View>
          <View style={Styles.formCheckBox}>
            <Text style={Styles.textForm} >Line</Text>
            <CheckBox
              size={40}
              checked={this.state.checkedLine}
              onPress={(checked) => this.handlePressCheckedBox({checkedLine: checked}) }
              iconStyle={{color:'#ffffff'}}/>
          </View>
          <View style={Styles.formCheckBox}>
            <Text style={Styles.textForm} >Wechat</Text>
            <CheckBox
              size={40}
              checked={this.state.checkedWechat}
              onPress={(checked) => this.handlePressCheckedBox({checkedWechat: checked}) }
              iconStyle={{color:'#ffffff'}}/>
          </View>

          <TouchableOpacity style={Styles.buttonFire} onPress={this.handlePressSignIn} >
            <Text style={Styles.buttonText}>Save</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }

}

SocialConnectionScreen.propTypes = {

}

SocialConnectionScreen.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(SocialConnectionScreen)
