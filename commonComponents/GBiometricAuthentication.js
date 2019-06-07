import React from 'react';
import PropTypes from "prop-types";
import TouchID from 'react-native-touch-id';

class GBiometricAuthentication extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            biometryAuth:false,
        };
    }

    static getDerivedStateFromProps(props, state){
        //initialize state variable and return. If no changes required for state
        //variable then return empty object. return {}

        return {}; //should return empty object by default

    }

componentDidMount(){

    console.log('Mount Biometric component');
    
    if(this.props.enableBiometric)
    TouchID.isSupported()
    .then(biometryType => {
        if (biometryType === 'TouchID') {
            TouchID.authenticate('Authenticate with fingerprint')
            .then(success => {
                this.setState({biometryAuth:success},()=>{
                    this.props.onAuthenticate(this.state.biometryAuth);
                });
                
            })
            .catch(error => {
                this.setState({biometryAuth:false},()=>{
                    this.props.onAuthenticate(this.state.biometryAuth);
                });
            });
            // Touch ID is supported on iOS
          } 
        else if (biometryType === 'FaceID') {
            TouchID.authenticate('Authenticate with faceprint')
            .then(success => {
                this.setState({biometryAuth:success},()=>{
                    this.props.onAuthenticate(this.state.biometryAuth);
                });
            })
            .catch(error => {
                this.setState({biometryAuth:false},()=>{
                    this.props.onAuthenticate(this.state.biometryAuth);
                });
            });
            // Face ID is supported on iOS
          } 
          else if (biometryType === true) {
            TouchID.authenticate('Authenticate with biometric')
            .then(success => {
                this.setState({biometryAuth:success},()=>{
                    this.props.onAuthenticate(this.state.biometryAuth);
                });
            })
            .catch(error => {
                this.setState({biometryAuth:false},()=>{
                    this.props.onAuthenticate(this.state.biometryAuth);
                });
            });
            // Touch ID is supported on Android
          }
    });
    
}
    render(){
            if(this.props.children!=null)
                return this.props.children; 
            else
                return null;       
        }
}

GBiometricAuthentication.propTypes ={
    onAuthenticate:PropTypes.func.isRequired,
    enableBiometric:PropTypes.bool
};
GBiometricAuthentication.defaultProps={
    enableBiometric:true
};
export default GBiometricAuthentication;