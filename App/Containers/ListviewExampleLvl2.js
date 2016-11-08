import React, {PropTypes} from 'react'
import {View, Text, ListView, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import FingiSdkActions from '../Redux/FingiSdkRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ListviewExampleStyle'

class ListviewExampleLvl2 extends React.Component {

  constructor(props) {
    super(props)
    /* ***********************************************************
     * STEP 1
     * This is an array of objects with the properties you desire
     * Usually this should come from Redux mapStateToProps
     *************************************************************/
    /* ***********************************************************
     * STEP 2
     * Teach datasource how to detect if rows are different
     * Make this function fast!  Perhaps something like:
     *   (r1, r2) => r1.id !== r2.id}
     *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    }
  }

  componentWillReceiveProps(newProps) {
    // //debugger;
    // console.log('------------ componentWillReceiveProps (guest services) ----------------');
    // if (newProps.guestServicesTree && newProps.guestServicesTree.children) {
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(newProps.guestServicesTree.children)
    //   })
    // }
  }


  /* ***********************************************************
   * STEP 3
   * `_renderRow` function -How each cell/row should be rendered
   * It's our best practice to place a single component here:
   *
   * e.g.
   return <MyCustomCell title={rowData.title} description={rowData.description} />
   *************************************************************/
  _renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.row} onPress={()=> {
        NavigationActions.listviewExampleLvl3({data: rowData.children})
      }}>

        <View style={{width: 90, marginRight: 15}}>
          <Image
            source={{uri: rowData.icon}}
            style={{height: 70,}} resizeMode='cover'/>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.boldLabel}>{rowData.title}</Text>
          <Text style={styles.label}>{rowData.body}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  /* ***********************************************************
   * STEP 4
   * If your datasource is driven by Redux, you'll need to
   * reset it when new data arrives.
   * DO NOT! place `cloneWithRows` inside of render, since render
   * is called very often, and should remain fast!  Just replace
   * state's datasource on newProps.
   *
   * e.g.
   componentWillReceiveProps (newProps) {
   if (newProps.someData) {
   this.setState({
   dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
   })
   }
   }
   *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  render() {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()}/>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          pageSize={25}
        />
      </View>
    )
  }
}

ListviewExampleLvl2.propTypes = {
  data: PropTypes.array,
}

ListviewExampleLvl2.defaultProps = {
  //guestServicesTree: {},
}

const mapStateToProps = state => {
  return {
    // guestServicesFetching: state.fingiSdk.guestServicesFetching,
    // guestServicesError: state.fingiSdk.guestServicesError,
    // guestServicesTree: state.fingiSdk.guestServicesTree,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //guestServicesRequest: () => dispatch(FingiSdkActions.guestServicesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListviewExampleLvl2)
