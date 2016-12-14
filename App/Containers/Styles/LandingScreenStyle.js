import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import Dimensions from 'Dimensions';

// Can use width and height
// width: Metrics.screenWidth,
// height: Metrics.screenHeight

const width = (Dimensions.get('window').width)/1.3;

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: Colors.background,
    flex: 1
  },
  backgroundImage: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: "absolute"
  },
  form: {
    paddingTop:10,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: "absolute",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity:0.7
  },
  formOver: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight-75,
    position: "absolute",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slideView:{
    flex: 3,
    width: Metrics.screenWidth,
    // height:200,
    backgroundColor: '#B70C10',
    paddingBottom:25
  },
  bodyView:{
    flex: 8,
    width: Metrics.screenWidth,
    backgroundColor: '#FFFFFF',
  },
  bottomView:{
    flex: 1,
    width: Metrics.screenWidth,
    // backgroundColor: '#A4C0D3',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#CECECE',
    padding:5,
  },
  rowFront: {
    width: Metrics.screenWidth,
		alignItems: 'center',
		backgroundColor: '#CCC',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: 50,
	},
	rowBack: {
    width: Metrics.screenWidth,
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	standalone: {
		marginTop: 30,
		marginBottom: 30,
	},
	standaloneRowFront: {
    width: Metrics.screenWidth,
		alignItems: 'center',
		backgroundColor: '#CCC',
		justifyContent: 'center',
		height: 50,
	},
	standaloneRowBack: {
    width: Metrics.screenWidth,
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
	backTextWhite: {
		color: '#FFF'
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0
	},
	controls: {
		alignItems: 'center',
		marginBottom: 30
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	switch: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
		width: 100,
	},
  linearGradient: {
    width: Metrics.screenWidth,
    height:60,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopColor: '#ffffff',
    borderTopWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  buttonTextBottom: {
    fontSize: 16,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  bottomViewSub:{
    flex:1,
    // height:50,
    borderRightWidth: 1,
		borderRightColor: '#CECECE',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#B2CADA',
    alignItems: 'center'
  }

})
