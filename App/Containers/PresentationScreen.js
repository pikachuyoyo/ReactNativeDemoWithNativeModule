import React, {PropTypes} from 'react'
import {ScrollView, Text, Image, View, DeviceEventEmitter, Switch} from 'react-native'
import {Images, Colors} from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import {Actions as NavigationActions} from 'react-native-router-flux'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {connect} from 'react-redux'


// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      light6: false,
      ac1: false,
      ac1Setpoint: '0',
      ac1Speed: 'LOW'

    }
  }

  // static renderNavigationBar(props) {
  //   return (<NavBar navbarProps={props}/>);
  // }

  componentWillMount() {
    var _myself = this;
    DeviceEventEmitter.addListener('onHubCommand', function (e) {
      console.log(e);

      if (e.command.indexOf('light-6 ON') != -1) {
        _myself.setState({light6: true});
      } else if (e.command.indexOf('light-6 OFF') != -1) {
        _myself.setState({light6: false});
      } else if (e.command.indexOf('ac-1 ON') != -1) {
        _myself.setState({ac1: true});
      } else if (e.command.indexOf('ac-1 OFF') != -1) {
        _myself.setState({ac1: false});
      } else if (e.command.indexOf('THERMOSTAT ac-1') != -1) {
        var temp = e.command.lastIndexOf(' ') + 1;
        _myself.setState({ac1Setpoint: temp});
      } else if (e.command.indexOf('FAN ac-1') != -1) {
        var speed = e.command.lastIndexOf(' ') + 1;
        _myself.setState({ac1Speed: speed});
      }


    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
            <Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>
              Meeting room ( Light-6 )
            </Text>
            <Switch
              onValueChange={(value) => {
                this.props.commandToRoomRequest(value ? "POWER light-6 ON" : "POWER light-6 OFF");
                this.setState({light6: value});
              }}
              value={this.state.light6}/>
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
            <Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>
              AC Meeting Room ( ac-1 )
            </Text>
            <Switch
              onValueChange={(value) => {
                this.props.commandToRoomRequest(value ? "POWER ac-1 ON" : "POWER ac-1 OFF");
                this.setState({ac1: value});
              }}
              value={this.state.ac1}/>
          </View>

          {/*<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>*/}
          {/*<Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>*/}
          {/*AC Meeting Room Setpoint ( ac-1 )*/}
          {/*</Text>*/}
          {/*<Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>*/}
          {/*{this.state.ac1Setpoint}*/}
          {/*</Text>*/}
          {/*</View>*/}

          {/*<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>*/}
          {/*<Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>*/}
          {/*AC Meeting Room FAN Speed ( ac-1 )*/}
          {/*</Text>*/}
          {/*<Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>*/}
          {/*{this.state.speed}*/}
          {/*</Text>*/}
          {/*</View>*/}

          <RoundedButton onPress={()=> this.props.commandToRoomRequest("QUERY")}>
            QUERY
          </RoundedButton>


        </ScrollView>
      </View>
    )
  }
}

PresentationScreen.propTypes = {
  commandToRoomRequest: PropTypes.func
}

PresentationScreen.defaultProps = {
  sendingCommand: false,
}

const mapStateToProps = state => {
  return {
    sendingCommand: state.fingiSdk.sendingCommand,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    commandToRoomRequest: (command) => dispatch(FingiSdkActions.commandToRoomRequest(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
