import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// import './UserAgent';
//
// import io from 'socket.io-client/socket.io';

//var net = require('net');


import { Socket } from './Phoenix'


// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {

  constructor(props) {
    super(props);


    const TIMEOUT = 10000
    const URL = 'https://hub.fingi.com:20020';
    const LOBBY = 'rooms:lobby'

    const socket = new Socket(URL)

    // configure the event handlers
    socket.onOpen(event => console.log('Connected.'))
    socket.onError(event => {console.log('Cannot connect->');console.log(event)})
    socket.onClose(event => console.log('Goodbye.'))

    // open a connection to the server
    socket.connect()

/*
    var ws = new WebSocket('wss://hub.fingi-staging.com:20020',{
      rejectUnauthorized: false
    });

    ws.onopen = () => {
      // connection opened

      ws.send('something'); // send a message
    };

    ws.onmessage = (e) => {
      // a message was received

      console.log('message : ' + e.data);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log('error:'+e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log('close:'+e.code, e.reason);
    };

*/

//     var socket = new SocketIO('hub.fingi-staging.com', {secure: true, port:20020});
//     socket.connect();
//
// // An event to be fired on connection to socket
//     socket.on('connect', () => {
//       console.log('Wahey -> connected!');
//     });
    // this.state = { status: 'Not connected' };
    //  var socket = io.connect('hub.fingi-staging.com:20020',{secure: true, port:20020,jsonp: false});
    //
    // socket.on('connect', () => {
    //   console.log('--------->>> connected!');
    // });
    // socket.on('connection', () => {
    //   console.log('--------->>> connected!');
    // });
    // socket.on('message', function (msg) {
    //   console.log('--------->>> msg :' + msg);
    // });

    {/*var client = net.createConnection({port: 20020, host: "hub.fingi-staging.com"});*/}

    // client.on('error', function(error) {
    //   console.log(error)
    // });
    //
    // client.on('data', function(data) {
    //   console.log('message was received', data)
    // });
    //
    // client.on('connect',function(){
    //   console.log('Connected..pinging');
    //   client.write('PING');
    // });


  }



  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Default screens for development, debugging, and alpha testing
              are available below.
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.componentExamples}>
            Component Examples Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.usageExamples}>
            Usage Examples Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.apiTesting}>
            API Testing Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.theme}>
            Theme Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.deviceInfo}>
            Device Info Screen
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Infinite Red</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
