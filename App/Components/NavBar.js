import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/NavBarStyle'

export default class NavBar extends React.Component {

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleGoToPropertyPress.bind(this)} >
        <View style={styles.propertyListImageContainer}>
          <Image
            source={{uri: this.props.propertyData.list_page_thumb_path}}
            style={styles.propertyListImage} resizeMode='cover'/>
          <View style={[styles.saleRentPanel,{backgroundColor:this.props.propertyData.buy_rent=="SALE"?Colors.accentColor1:Colors.accentColor3}]}>
            <Text style={styles.saleRentText}>For {this.props.propertyData.buy_rent}</Text>
          </View>
        </View>

        <View style={styles.propertyListTextContainer}>
          <Text
            style={styles.propertyListTitleText}>
            {this.props.propertyData.title.length > 55 ? this.props.propertyData.title.substr(0, 50) + '...' : this.props.propertyData.title}
          </Text>
          <Text style={styles.propertyListPriceText}>{this.props.propertyData.current_listing_price_formatted}</Text>

          <View style={[styles.horizontalContainer, {paddingTop: 10}]}>
            <Icon name='home' size={Metrics.icons.small}/>
            <Text style={styles.propertyTypeText}>{this.props.propertyData.category_name}</Text>
          </View>

          <View style={[styles.horizontalContainer, {paddingBottom: 10, paddingLeft: 4}]}>
            <Icon name='map-marker' size={Metrics.icons.small}/>
            <Text style={styles.addressText}>{this.props.propertyData.address}</Text>
          </View>

          <View style={[styles.horizontalContainer, {justifyContent: 'space-between'}]}>
            <View style={styles.horizontalContainer}>
              <Text style={styles.numberText}>Bed {this.props.propertyData.number_of_bedrooms}</Text>
            </View>

            <View style={styles.horizontalContainer}>
              <Text style={styles.numberText}>Bath {this.props.propertyData.number_of_bathrooms}</Text>
            </View>

            <View style={styles.horizontalContainer}>
              <Text style={styles.numberText}>{this.props.propertyData.land_area} sqm</Text>
            </View>
          </View>

        </View>


      </TouchableOpacity >
    )
  }
}

// // Prop type warnings
// NavBar.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// NavBar.defaultProps = {
//   someSetting: false
// }
