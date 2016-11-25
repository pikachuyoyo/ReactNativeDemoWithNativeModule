import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import Dimensions from 'Dimensions';

// Can use width and height
// width: Metrics.screenWidth,
// height: Metrics.screenHeight

const width = Dimensions.get('window').width;

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
    width: width/1.3,
    height: 40,
    borderRadius: 2,
    backgroundColor: Colors.snow,
    marginTop:10,
  },
  selectInput:{
    width: width/1.3,
    height: 40,
    borderRadius: 2,
    backgroundColor: Colors.snow,
    marginTop:10,
  },
  buttonSnow: {
      width: width/1.3,
      height: 40,
      borderRadius: 5,
      marginHorizontal: Metrics.section,
      // marginVertical: Metrics.baseMargin,
      marginTop:10,
      backgroundColor: Colors.snow,
      justifyContent: 'center'
  },
  buttonFire: {
      width: width/1.3,
      height: 40,
      borderRadius: 5,
      marginHorizontal: Metrics.section,
      // marginVertical: Metrics.baseMargin,
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
      width: width/1.3,
      height: 45,
      borderRadius: 5,
      marginHorizontal: Metrics.section,
      marginTop:30,
      backgroundColor: Colors.fire,
      justifyContent: 'center'
  },

})
