import {StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts, ApplicationStyles} from '../../Themes/'

const __singlePropertyPanelHeight = 150;
const __saleRentPanelHeight = 35;
const __imageWidthPercentage = 0.4;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.horizontalContainer,
    ...ApplicationStyles.bottomBorder,
    padding: 5,
  },
  /*--------------------------------------------------------------------------------*/
  propertyListImageContainer: {
    width: Metrics.screenWidth * __imageWidthPercentage
  },
  propertyListImage: {
    height: __singlePropertyPanelHeight - __saleRentPanelHeight,
  },
  saleRentPanel: {
    height: __saleRentPanelHeight,
    backgroundColor: Colors.accentColor2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saleRentText: {
    color: Colors.background,
    fontSize: Fonts.size.medium
  },
  /*-----------------------------------------------------------------------------------*/

  propertyListTextContainer: {
    ...ApplicationStyles.verticalContainer,
    width: Metrics.screenWidth * (1 - __imageWidthPercentage),
    paddingLeft: 5,
    paddingRight: 10,
    height: __singlePropertyPanelHeight,
    justifyContent: 'space-between',
  },
  propertyListTitleText: {
    color: Colors.accentColor2,
    fontSize: Fonts.size.regular,
    fontWeight:'bold'
  },
  propertyListPriceText: {
    color: Colors.accentColor3,
    fontSize: Fonts.size.medium,
  },

  propertyTypeText: {
    fontSize: Fonts.size.medium,
    paddingLeft: 4
  },
  addressText: {
    fontSize: Fonts.size.medium,
    paddingLeft: 4
  },
  numberText: {
    fontSize: Fonts.size.small,
    paddingLeft: 4
  }
})
