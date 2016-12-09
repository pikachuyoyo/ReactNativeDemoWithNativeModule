import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import Dimensions from 'Dimensions';

// Can use width and height
// width: Metrics.screenWidth,
// height: Metrics.screenHeight

const width = (Dimensions.get('window').width)/1.3;
const widthAvatar = width/1.2;

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
  buttonFireSplitTwo: {
      width: width/2.5,
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
  avatar: {
    marginTop:50,
    marginBottom:50,
    alignSelf: 'center',
    width:widthAvatar,
    height:widthAvatar,
    borderRadius: widthAvatar/2,
  },
  formButton: {
    width:width,
    // height:120,
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

})
