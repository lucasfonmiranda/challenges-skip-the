import React from 'react';
import {
  StyleSheet
} from 'react-native';

//Change Styles to use in all files need import!!!

export default StyleSheet.create({
  //Style of container using in form
  container:{
    flex: 1,
    backgroundColor: '#ff3333',
   
  },
  
  //Sytle of logoContainer
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  //Style of logo in loginform
  logo: {
    width: 100,
    height: 100,
  },

  title:{
    color: '#FFF',
    marginTop: 10,
    width: 140,
    textAlign: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },

  //Style in container of Form in loginform
  containerForm: {
    padding: 20,
    backgroundColor: 'transparent'
  },

  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 15
  },

  //Style of container button in MapStatus
  containerButton: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    backgroundColor: 'transparent',
  },


  singinText:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4
    
  },

  //Style of login button
  buttonSingin: {
   
    borderRadius: 15
  },

  //Style for button's 

  buttonNew: {
    paddingTop: 10,
  }


});