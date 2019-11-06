/**
 * Vídeo #8:Statusbar - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/statusbar
 */

import React, {Component} from 'react';
import {View, StyleSheet, Button, StatusBar} from 'react-native';

export default class StatusBarExemplo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          statusbarStyle:'dark-content',
          bgColor:'#FFFFFF'
        };
        this.alternar = this.alternar.bind(this);
    }

  alternar(){
    let s = this.state;
    if(s.statusbarStyle == 'dark-content'){
      s.statusbarStyle = 'Light-content';
      s.bgColor = "#000000";
    }else{
      s.statusbarStyle = 'dark-content';
      s.bgColor = "#FFFFFF";
    }
    this.setState(s);
  }

    render() {
        return (
            <View style={[styles.body, {backgroundColor:this.state.bgColor}]}>
              <StatusBar barStyle={this.state.statusbarStyle} />
              <Button title="Alternar" onPress={this.alternar}/>
            </View>
        );
    }

}//fim classe

const styles = StyleSheet.create({
    body: {
        paddingTop:20,
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
        //backgroundColor:'#222222'
    },
});
