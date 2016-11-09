import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
// No maps by default for now
// import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import ListviewExampleLvl2 from '../Containers/ListviewExampleLvl2'
import ListviewExampleLvl3 from '../Containers/ListviewExampleLvl3'
import Splash from '../Containers/Splash'
/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title}
                 leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>

            <Scene key='componentExamples' component={AllComponentsScreen} title='Components'/>
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example'
                   onRight={() => window.alert('Example Pressed')}/>


            <Scene initial key='splashScreen' component={Splash} title='Components' hideNavBar='true' />

            <Scene key='login'>
              <Scene key="_login" component={LoginScreen} title='Login'
                     hideNavBar/>
            </Scene>


            <Scene key='listviewExample'>
              <Scene key='_listviewExample' component={ListviewExample} title='MY OKKAMI'
                     renderLeftButton={NavItems.hamburgerButton} hideNavBar="false"/>
            </Scene>


            <Scene key='presentationScreen'>
              <Scene key='_presentationScreen' component={PresentationScreen} title='Controls'
                     renderLeftButton={NavItems.hamburgerButton} hideNavBar="false"/>
            </Scene>

            <Scene key='listviewExampleLvl2'>
              <Scene key='_listviewExampleLvl2' component={ListviewExampleLvl2} title='MY OKKAMI LVL2'
                     hideNavBar="false"/>
            </Scene>
            <Scene key='listviewExampleLvl3'>
              <Scene key='_listviewExampleLvl3' component={ListviewExampleLvl2} title='MY OKKAMI LVL3'
                     hideNavBar="false"/>
            </Scene>


            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid'/>
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections'/>
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing'/>
            <Scene key='theme' component={ThemeScreen} title='Theme'/>
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info'/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
