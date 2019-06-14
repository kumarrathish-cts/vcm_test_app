import React, { Component } from 'react';
import { View , FlatList, Text} from 'react-native';
import {  GCommonFlatList } from '../../commonComponents';

const listData = [{id:1,type:'Tree1',names:'Plant A Tree'},
{id:2,type:'plant1',names:'Much needed'},
{id:1,type:'Tree2',names:'Plant A Tree'},
{id:2,type:'plant2',names:'Much needed'},
{id:1,type:'Tree3',names:'Plant A Tree'},
{id:2,type:'plant3',names:'Much needed'},
{id:1,type:'Tree4',names:'Plant A Tree'},
{id:2,type:'plant4',names:'Much needed'},
{id:1,type:'Tree5',names:'Plant A Tree'},
{id:2,type:'plant5',names:'Much needed'},
{id:1,type:'Tree6',names:'Plant A Tree'},
{id:2,type:'plant6',names:'Much needed'},
{id:1,type:'Tree7',names:'Plant A Tree'},
{id:2,type:'plant7',names:'Much needed'},
{id:1,type:'Tree8',names:'Plant A Tree'},
{id:2,type:'plant8',names:'Much needed'},
{id:1,type:'Tree9',names:'Plant A Tree'},
{id:2,type:'plant9',names:'Much needed'},
{id:1,type:'Tree10',names:'Plant A Tree'},
{id:2,type:'plant11',names:'Much needed'},
{id:1,type:'Tree11',names:'Plant A Tree'},
{id:2,type:'plant12',names:'Much needed'},
{id:1,type:'Tree12',names:'Plant A Tree'},
{id:2,type:'plant14',names:'Much needed'},
{id:1,type:'Tree13',names:'Plant A Tree'},
{id:2,type:'plant15',names:'Much needed'},
{id:1,type:'Tree14',names:'Plant A Tree'},
{id:2,type:'plant16',names:'Much needed'},
{id:1,type:'Tree15',names:'Plant A Tree'},
{id:2,type:'plant17',names:'Much needed'},
{id:1,type:'Tree16',names:'Plant A Tree'},
{id:2,type:'plant18',names:'Much needed'},
{id:1,type:'Tree17',names:'Plant A Tree'},
{id:2,type:'plant19',names:'Much needed'},
{id:1,type:'Tree18',names:'Plant A Tree'},
{id:2,type:'plant21',names:'Much needed'},
{id:1,type:'Tree19',names:'Plant A Tree'},
{id:2,type:'plant22',names:'Much needed'}]

class listComponent extends Component {
    constructor(props){
        super(props);
    }
   

    

    render(){
        return (
            <GCommonFlatList data={listData}>

            </GCommonFlatList>   
        )
        }
}


export default listComponent;
