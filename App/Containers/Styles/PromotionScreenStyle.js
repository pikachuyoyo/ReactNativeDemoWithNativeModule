import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: Colors.background,
    flex: 1
  },
  slide: {
    position: "absolute"
  },
  menu: {
    width:width,
    height:120,
    marginTop:100,
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222222",
    opacity:0.3
  },
  menuOver: {
    width:width,
    height:120,
    marginTop:100,
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      width: width/3,
      height: 45,
      borderRadius: 5,
      marginHorizontal: Metrics.section,
      marginVertical: Metrics.baseMargin,
      backgroundColor: Colors.fire,
      justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
