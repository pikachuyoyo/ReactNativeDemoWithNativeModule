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
  ListView,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import styles from './Styles/LandingScreenStyle'
import {Images, Metrics} from '../Themes'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view'
import LinearGradient from 'react-native-linear-gradient';
import ImageSlider from '../Components/ImageSlider'

// I18n
import I18n from 'react-native-i18n'

import Dimensions from 'Dimensions';

class LandingScreen extends React.Component {

  constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
      interval: null,
      position: 0,
			// listViewData: Array(20).fill('').map((_,i)=>`item #${i}`)
			listViewData: [
        ['CONNECT TO MY HOTEL',true,true,"text",""],
        ['TOURS & ACTIVITIES',true,false,"text","Detail Tours & activities"],
        ['TRAVEL RESOURCES',true,false,"text","Detail Travel resources"],
        ['ESSENTIAL TRAVEL APPS',true,false,"text","Detail essential travel"]
      ]
		};
	}

	// deleteRow(secId, rowId, rowMap) {
	// 	rowMap[`${secId}${rowId}`].closeRow();
	// 	const newData = [...this.state.listViewData];
	// 	newData.splice(rowId, 1);
	// 	this.setState({listViewData: newData});
	// }

  _renderDetail = (type, data) => {
    if(type == 'text'){
      return (
        <Text style={{color:'#000000'}}>{data}</Text>
      );
    }else if(type == 'img'){
      // Can not use error unknow module
      let url = "./Images/" + data
      let img = require(url)
      return (
        <Image source={img} />
      );
    }else{
      return null;
    }
  }

  componentWillMount() {
    this.setState({interval: setInterval(() => {
        this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
    }, 5000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }


  handlePressItem = () => {
    NavigationActions.signUpScreen()
  }


	render() {
    console.log(this.state.listViewData)
		return (

      <View style={styles.container}>
        <Image source={require('../Images/splash.png')} style={styles.backgroundImage} />
        <View style={styles.form}/>
        <View style={styles.formOver}>

          {/* Slide View */}
          <View style={styles.slideView} >
            <ImageSlider
              images={[
                require("../Images/okkami_slide_01.png"),
                require("../Images/splash.png"),
                require("../Images/okkami_slide_02.png")
              ]}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})}
            />
          </View>

          {/* Swipe listview */}
          <View style={styles.bodyView} >
          {
          <SwipeListView
  					dataSource={this.ds.cloneWithRows(this.state.listViewData)}
  					renderRow={ (data, secId, rowId, rowMap) => (

            <SwipeRow
              disableRightSwipe={data[1]}
              disableLeftSwipe={data[2]}
  						rightOpenValue={-(Metrics.screenWidth)}
    				>
    						<View style={styles.standaloneRowBack}>
    							{/* <Text style={{color:"#000000"}}>detail</Text> */}
                  { this._renderDetail(data[3],data[4]) }
    						</View>
                <LinearGradient colors={['#FAFAFA', '#EAE8E9']} style={styles.linearGradient}>
                  <TouchableOpacity onPress={this.handlePressItem}>
                    <Text style={styles.buttonText}>
                      {data[0]}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>

    				</SwipeRow>

          )}

          />
          }

          </View>

          <View style={styles.bottomView} >
            <View style={styles.bottomViewSub}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.buttonTextBottom}>
                    About
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomViewSub}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.buttonTextBottom}>
                    App website
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>

				// <View style={styles.standalone}>
				// 	<SwipeRow
				// 		leftOpenValue={75}
				// 		rightOpenValue={-75}
				// 	>
				// 		<View style={styles.standaloneRowBack}>
				// 			<Text style={styles.backTextWhite}>Left</Text>
				// 			<Text style={styles.backTextWhite}>Right</Text>
				// 		</View>
				// 		<View style={styles.standaloneRowFront}>
				// 			<Text>I'm a standalone SwipeRow</Text>
				// 		</View>
				// 	</SwipeRow>
				// </View>

				/*{ <SwipeListView
					dataSource={this.ds.cloneWithRows(this.state.listViewData)}
					renderRow={ (data, secId, rowId, rowMap) => (
						<SwipeRow
							disableLeftSwipe={parseInt(rowId) % 2 === 0}
							leftOpenValue={20 + Math.random() * 150}
							rightOpenValue={-150}
						>
							<View style={styles.rowBack}>
								<Text>Left</Text>
								<View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
									<Text style={styles.backTextWhite}>Right</Text>
								</View>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => this.deleteRow(secId, rowId, rowMap) }>
									<Text style={styles.backTextWhite}>Delete</Text>
								</TouchableOpacity>
							</View>
							<TouchableHighlight
								onPress={ _ => console.log('You touched me') }
								style={styles.rowFront}
								underlayColor={'#AAA'}
							>
								<View>
									<Text>I'm {data} in a SwipeListView</Text>
								</View>
							</TouchableHighlight>
						</SwipeRow>
					)}
				/> }*/
		);
	}

}

LandingScreen.propTypes = {

}

LandingScreen.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen)
