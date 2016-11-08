import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'flex-start',
    flexDirection:'row',
    height:75
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.charcoal,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.charcoal
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  statusBarContainer:{
    flexDirection: 'row',
    flex: 1,
    height: Metrics.navBarHeight,
    width: Metrics.screenWidth,
    backgroundColor: Colors.transparent,
    position: 'absolute',
    left: 0,
    top: 0,
    justifyContent: 'space-between',
  },
  statusBarTitleContainer:{
    justifyContent: 'center',
    alignItems:'center',
    height:Metrics.navBarHeight,
  }

})
