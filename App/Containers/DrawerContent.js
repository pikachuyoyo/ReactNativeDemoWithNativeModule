import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

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



  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Login Screen' onPress={this.handlePressLogin} />
        <DrawerButton text='Lobby Screen' onPress={this.handlePressLobby} />
        <DrawerButton text='Control Screen' onPress={this.handlePressControl} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
