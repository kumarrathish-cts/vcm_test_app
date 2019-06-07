import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { styles } from './styles';
import { strings } from '../../locales/Lang';
import  { GLoadingSpinnerHOC } from '../../GHOC';
import { GButtonComponent,GAnimatedModal } from '../../commonComponents';

const DetailComponentWithSpinner = GLoadingSpinnerHOC(View);


class DetailComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible:false
        }
    }

    render(){
        return (
            <DetailComponentWithSpinner style={styles.containerStyle}>
                <Text style={styles.homeText}>{strings("detail.welcomeText")}</Text>
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {strings("common.next")}
                onPress={()=>Actions.pop()}
                />
                {/* <Error></Error> */}
                {/* <Button title={strings("common.back")} onPress={()=>Actions.pop()} />  */}
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {strings("common.animatedModal")}
                onPress={()=>this.setState({isModalVisible:true})}
                />
                {/* The model should be at the bottom of the view. */}
                <GAnimatedModal
                    visible={this.state.isModalVisible}
                    >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>this.setState({isModalVisible:false})}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.itemStyle}>
                            <Text>Item1</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item2</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item3</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item4</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item5</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item6</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item7</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item8</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item9</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item10</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item11</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>Item12</Text>
                        </View>
                    </ScrollView>
                </GAnimatedModal>
            </DetailComponentWithSpinner>
        );
    }
}

export default DetailComponent;