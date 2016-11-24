import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import {connect} from 'react-redux'
import Styles from './Styles/PromotionScreenStyle'
import {Images, Metrics} from '../Themes'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
import ImageSlider from '../Components/ImageSlider'

// I18n
import I18n from 'react-native-i18n'

import Dimensions from 'Dimensions';

class PromotionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      height: Dimensions.get('window').height - 80,
      interval: null
    }
    // this.isAttempting = false
  }

  componentWillMount() {
    this.setState({interval: setInterval(() => {
        this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
    }, 5000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  handleSignup = (text) => {
    console.log("go signup");
  }


  render() {
    console.log(Dimensions.get('window').height)
    return (
      <View style={Styles.container} >

        <View style={Styles.slide}>
          <ImageSlider
            images={[
              'http://res.cloudinary.com/hgbjdmat9/image/upload/lvwaopbb8wul0w31lrbz.png',
              'http://placeimg.com/640/480/any',
              'http://res.cloudinary.com/hgbjdmat9/image/upload/c_fit/lp9waobcs5l4zdtm1lsi.png'
            ]}
            height={this.state.height}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}
          />
        </View>
        <View style={{flex:1,flexDirection:'column',justifyContent:'center'}} >
          <View style={Styles.menu} />
          <View style={Styles.menuOver} >
            <TouchableOpacity style={Styles.button} onPress={()=>{this.handleSignup()}}>
              <Text style={Styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button} onPress={()=>{this.handleSignup()}}>
              <Text style={Styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

PromotionScreen.propTypes = {

}

PromotionScreen.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(PromotionScreen)
