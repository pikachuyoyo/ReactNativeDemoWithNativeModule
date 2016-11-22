import React, {PropTypes} from 'react'
import {ScrollView, Text, Image, View, DeviceEventEmitter, Switch, TouchableOpacity} from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import {Actions as NavigationActions} from 'react-native-router-flux'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      light6: false,
      ac1: false,
      ac1Setpoint: '0',
      ac1Speed: 'LOW',

      tvPower: false,

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

          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            borderBottomWidth: 2,
            borderColor: 'white'
          }}>
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

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
            <Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>
              TV Innvue Power ( tv-2 )
            </Text>
            <Switch
              onValueChange={(value) => {
                this.props.commandToRoomRequest(value ? "POWER tv-2 ON" : "POWER tv-2 OFF");
                this.setState({tvPower: value})
              }}
              value={this.state.tvPower}
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
            <Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>
              Volume ( tv-2 )
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20,height:75}}>
              <TouchableOpacity onPress={()=> {
                this.props.commandToRoomRequest("VOLUME tv-2 UP");
              }}>
                <Icon name='volume-up'
                      size={Metrics.icons.medium}
                      color={Colors.snow}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {
                this.props.commandToRoomRequest("VOLUME tv-2 DOWN");
              }}>
                <Icon name='volume-down'
                      size={Metrics.icons.medium}
                      color={Colors.snow}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {
                this.props.commandToRoomRequest("MUTE tv-2 ON");
              }}>
                <Icon name='volume-off'
                      size={Metrics.icons.medium}
                      color={Colors.snow}
                />
              </TouchableOpacity>
            </View>
          </View>


          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15,height:75}}>
            <Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>
              CHANNEL ( tv-2 )
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20}}>
              <TouchableOpacity onPress={()=> {
                this.props.commandToRoomRequest("CHANNEL tv-2 UP");
              }}>
                <Icon name='angle-up'
                      size={Metrics.icons.large}
                      color={Colors.snow}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {
                this.props.commandToRoomRequest("CHANNEL tv-2 DOWN");
              }}>
                <Icon name='angle-down'
                      size={Metrics.icons.large}
                      color={Colors.snow}
                />
              </TouchableOpacity>

            </View>
          </View>


          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15, height: 180}}>
            <Text style={{fontSize: 18, color: Colors.snow, fontWeight: 'bold'}}>
              DIRECTIONAL ( tv-2 )
            </Text>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity onPress={()=> {
                  this.props.commandToRoomRequest("KEYPAD tv-2 UP");
                }}>
                  <Icon name='angle-up'
                        size={Metrics.icons.large}
                        color={Colors.snow}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                <TouchableOpacity  style={{padding:10,marginRight:20}} onPress={()=> {
                  this.props.commandToRoomRequest("KEYPAD tv-2 LEFT");
                }}>
                  <Icon name='angle-left'
                        size={Metrics.icons.large}
                        color={Colors.snow}
                  />
                </TouchableOpacity>
                <TouchableOpacity  style={{padding:10}} onPress={()=> {
                  this.props.commandToRoomRequest("KEYPAD tv-2 ENTER");
                }}>
                  <Icon name='check'
                        size={Metrics.icons.medium}
                        color={Colors.snow}
                  />
                </TouchableOpacity>
                <TouchableOpacity  style={{padding:10,marginLeft:20}} onPress={()=> {
                  this.props.commandToRoomRequest("KEYPAD tv-2 RIGHT");
                }}>
                  <Icon name='angle-right'
                        size={Metrics.icons.large}
                        color={Colors.snow}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity onPress={()=> {
                  this.props.commandToRoomRequest("KEYPAD tv-2 DOWN");
                }}>
                  <Icon name='angle-down'
                        size={Metrics.icons.large}
                        color={Colors.snow}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
