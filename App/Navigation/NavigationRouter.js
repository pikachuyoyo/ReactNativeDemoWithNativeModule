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
import Webview from '../Containers/MyWebView'
// No maps by default for now
// import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import ListviewExampleLvl2 from '../Containers/ListviewExampleLvl2'
import ListviewExampleLvl3 from '../Containers/ListviewExampleLvl3'
import Splash from '../Containers/Splash'

import PromotionScreen from '../Containers/PromotionScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import SignInScreen from '../Containers/SignInScreen'
import UploadPictureScreen from '../Containers/UploadPictureScreen'
import SocialConnectionScreen from '../Containers/SocialConnectionScreen'
import openWebView from '../Containers/OpenWebView'

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


            <Scene initial key='splashScreen' component={Splash} title='Components'/>
            <Scene key="login" component={LoginScreen} title='Login'/>


            <Scene key='listviewExample' component={ListviewExample} title='MY OKKAMI'
                   renderLeftButton={NavItems.hamburgerButton}/>

            <Scene key='listviewExampleLvl3' component={ListviewExampleLvl3} title='MY OKKAMI LVL3'
            />
            <Scene key='listviewExampleLvl2' component={ListviewExampleLvl2} title='MY OKKAMI LVL2'
            />
            <Scene key='presentationScreen' component={PresentationScreen} title='Controls'
                   renderLeftButton={NavItems.hamburgerButton}/>
            <Scene key='webview' component={Webview} title='WebView'/>

            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid'/>
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections'/>
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing'/>
            <Scene key='theme' component={ThemeScreen} title='Theme'/>
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info'/>

            <Scene key="promotionScreen" component={PromotionScreen} title='Promotion'/>
            <Scene key="signUpScreen" component={SignUpScreen} title='Sign Up'/>
            <Scene key="signInScreen" component={SignInScreen} title='Sign In'/>
            <Scene key="uploadPictureScreen" component={UploadPictureScreen} title='Avatar/Picture'/>
            <Scene key="socialConnectionScreen" component={SocialConnectionScreen} title='Social Connection'/>
            <Scene key="openWebView" component={openWebView} title='Web'/>

          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
