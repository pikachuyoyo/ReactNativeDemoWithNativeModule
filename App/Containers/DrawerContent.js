import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, View, Text, ListView,TouchableOpacity,TouchableHighlight } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import {Images, Colors, Metrics} from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Panel from '../Components/Panel';


class DrawerContent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressLogin = () => {
    this.toggleDrawer()
    NavigationActions.login()
  }

  handlePressLobby = () => {
    this.toggleDrawer()
    NavigationActions.listviewExample()
  }

  handlePressControl = () => {
    this.toggleDrawer()
    NavigationActions.presentationScreen()
  }

  handlePromotionScreen = () => {
    this.toggleDrawer()
    NavigationActions.promotionScreen()
  }



  render () {
    return (
      // <ScrollView style={styles.container}>
      //   <Image source={Images.logo} style={styles.logo} />
      //   <DrawerButton text='Login Screen' onPress={this.handlePressLogin} />
      //   <DrawerButton text='Lobby Screen' onPress={this.handlePressLobby} />
      //   <DrawerButton text='Control Screen' onPress={this.handlePressControl} />
      //   <DrawerButton text='Promotion' onPress={this.handlePromotionScreen} />
      // </ScrollView>

      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{uri:'https://s3.amazonaws.com/fingi/assets/thumbnail_guest_avatar-2f5072fba40190f1114c2dd37f3bb907.png'}}
              style={styles.avatar}
            />
          </View>
          <View style={styles.headerRight}>
            <View style={styles.headerRightTextTop}>
              <Text style={styles.headerRightTextName}>Vivianne White</Text>
              <View style={{flex:1,height:30}}>
                {/* <Image
                  source={require('../Images/option.png')}
                  style={{width:30,height:30}}
                /> */}
                <Icon name='gear'
                      size={Metrics.icons.medium}
                      color={Colors.snow}
                      onPress={this.handlePromotionScreen}
                />
              </View>
            </View>
            <View style={styles.headerRightTextButtom}>
              <Text style={styles.headerRightTextRoom}>RM 100 | Okkami Test</Text>
            </View>

          </View>
        </View>

        <View style={styles.mainMenu}>

          <ScrollView style={{
              flex            : 1,
              backgroundColor : Colors.fire,
              paddingTop      : 0}}
          >
            <Panel title="MY ACCOUNT" child="true" >
              <TouchableHighlight  underlayColor="#ffffff" onPress={this.handlePromotionScreen} >
                <View style={styles.panelRow}>
                  <Text style={styles.panelText}>Detail account</Text>
                </View>
              </TouchableHighlight>
            </Panel>

            <Panel title="OKKAMI CONCIERGE" child="false" onPress={this.handlePromotionScreen}/>

            <Panel title="MY BOOKINGS" child="true" >
              <TouchableHighlight  underlayColor="#ffffff" onPress={this.handlePromotionScreen} >
                <View style={styles.panelRow}>
                  <Text style={styles.panelText}>FLIGHTS</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight  underlayColor="#ffffff" onPress={this.handlePromotionScreen} >
                <View style={styles.panelRow}>
                  <Text style={styles.panelText}>HOTELS</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight  underlayColor="#ffffff" onPress={this.handlePromotionScreen} >
                <View style={styles.panelRow}>
                  <Text style={styles.panelText}>ACTIVITES</Text>
                </View>
              </TouchableHighlight>
            </Panel>

            <Panel title="MY Test" child="true" >
            </Panel>

          </ScrollView>

        </View>
      </View>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
