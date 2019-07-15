import React, { Component } from 'react';
import { PanResponder, View , Text, FlatList} from 'react-native';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps'

class mapComponent extends Component {
    constructor(props){
        super(props);


    this.panResponder = PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: () => {
         // The user has moved all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: () => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      }

    })

        this.state={
            isFromLocationScreen : false
        }

      }

    render() {
      return(
        <MapView 
        style={{height:'100%',width:'100%'}}
        scrollEnabled
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 39.7392,
          longitude : -104.9903,
          latitudeDelta : 0.0922,
          longitudeDelta : 0.0421
        }}
        />
      );
    };
}


export default mapComponent;