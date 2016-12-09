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
import Styles from './Styles/SignUpScreenStyle'
import {Images, Metrics} from '../Themes'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
import ModalPicker from '../Components/Picker'

// I18n
import I18n from 'react-native-i18n'

import Dimensions from 'Dimensions';

class SignUpScreen extends React.Component {

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
    let index = 0;
    const data = [
        { key: index++, section: true, label: 'Prefer Languages' },
        { key: index++, label: 'English' },
        { key: index++, label: 'Chinese' },
        { key: index++, label: 'Japanese' },
        { key: index++, label: 'Russian' },
    ];
    return (

      <View style={Styles.container}>
        <Image source={require('../Images/splash.png')} style={Styles.backgroundImage} />
        {/* <Image
          source={{uri:'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Home-icon.png'}}
          style={{width:100,height:100}}
        /> */}
        <View style={Styles.form}/>
        <View style={Styles.formOver}>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              ref='name'
              style={Styles.textInput}
              keyboardType='default'
              placeholder='First & LastName'
              underlineColorAndroid='transparent'
              />
            <TextInput
              ref='email'
              style={Styles.textInput}
              keyboardType='default'
              placeholder='Email'
              underlineColorAndroid='transparent'/>
            <TextInput
              ref='phone'
              style={Styles.textInput}
              keyboardType='default'
              placeholder='Phone#'/>
            <TextInput
              ref='hometown'
              style={Styles.textInput}
              keyboardType='default'
              placeholder='Hometown'/>
          </View>
          {/* <Picker
            style={Styles.selectInput}
            selectedValue={this.state.selectLanguage}
            onValueChange={(lang) => this.setState({selectLanguage: lang})}
            prompt='Prefer Languages'
            mode="dialog"
            placeholder="select"
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Chinese" value="ch" />
            <Picker.Item label="Japanese" value="jp" />
            <Picker.Item label="Russian" value="ru" />
          </Picker> */}
          <ModalPicker
              style={Styles.selectInput}
              data={data}
              initValue="Prefer Languages"
              onChange={(lang) => this.setState({selectLanguage: lang})}
          >
          </ModalPicker>
          <TouchableOpacity style={Styles.buttonSnow} onPress={NavigationActions.socialConnectionScreen}>
            <Text style={Styles.buttonTextSnow}>Social Connection</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonSnow} onPress={NavigationActions.uploadPictureScreen}>
            <Text style={Styles.buttonTextSnow}>Avatar/Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonCreate} >
            <Text style={Styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

}

SignUpScreen.propTypes = {

}

SignUpScreen.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
