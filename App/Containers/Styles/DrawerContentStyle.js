import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: Colors.fire
  },
  logo: {
    alignSelf: 'center'
  },
  header: {
    flex:1,
    flexDirection: 'row',
  },
  headerLeft: {
    flex:1,
    backgroundColor: Colors.clear,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerRight: {
    flex:2.8,
    backgroundColor: Colors.clear
  },
  mainMenu: {
    flex:4,
  },
  avatar: {
    alignSelf: 'center',
    width:50,
    height:50,
    borderRadius: 25,
  },
});
