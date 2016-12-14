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
    paddingTop:10,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: "absolute",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textInput: {
    width: width,
    height: 40,
    borderRadius: 2,
    backgroundColor: Colors.snow,
    marginTop:10,
  },
  selectInput:{
    width: width,
    height: 40,
    borderRadius: 2,
    backgroundColor: Colors.snow,
    marginTop:10,
  },
  buttonSnow: {
      width: width,
      height: 40,
      borderRadius: 5,
      marginHorizontal: Metrics.section,
      // marginVertical: Metrics.baseMargin,
      marginTop:10,
      backgroundColor: Colors.snow,
      justifyContent: 'center'
  },
  buttonFireSplitTwo: {
      width: width/2.5,
      height: 40,
      borderRadius: 5,
      marginTop:10,
      backgroundColor: Colors.fire,
      justifyContent: 'center'
  },
  buttonFire: {
      width: width,
      height: 40,
      borderRadius: 5,
      marginTop:10,
      backgroundColor: Colors.fire,
      justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  },
  buttonTextSnow: {
    color: Colors.coal,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  },
  buttonCreate: {
      width: width,
      height: 45,
      borderRadius: 5,
      marginHorizontal: Metrics.section,
      marginTop:30,
      backgroundColor: Colors.fire,
      justifyContent: 'center'
  },
  avatar: {
    marginTop:50,
    marginBottom:50,
    alignSelf: 'center',
    width:width/1.2,
    height:width/1.2,
    borderRadius: width/2,
  },
  formButton: {
    width:width,
    // height:120,
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicatorView: {
    paddingTop:100,
    width: Metrics.screenWidth,
    height: 200,
    position: "absolute",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

})
