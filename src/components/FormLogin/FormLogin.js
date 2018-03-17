import React, { Component } from 'react';
import {
    View,
    TextInput,
    KeyboardAvoidingView,
    StatusBar,
    ActivityIndicator,
    Text,
    TouchableHighlight
} from 'react-native';
import styles from '../../style/Styles';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';
import { Actions } from 'react-native-router-flux';

//Import actions
import { modifyPassword, modifyEmail, authenticationUser } from '../../actions/AuthenticationActions';




class FormLogin extends Component {
    
    _authenticUser() { //Function to use in button to send props
        const { email, password } = this.props;
  
        this.props.authenticationUser({ email, password })
      }

      renderBtnAccess(){
        if(this.props.loading_login){
          return(
             <ActivityIndicator size="large"/>
          )
        }
        return(
          <Button
         
            style = {styles.buttonSingin}
            onPress={ () => this._authenticUser()}
          >
            Login
          </Button>
        )
      }

    render(){
        return(
            
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.logoContainer}>
                            <Text style={styles.title}>Skip The Dishes </Text>
                    </View>

                    <View style={styles.containerForm}>
                        <StatusBar
                        barStyle='light-content'
                        />
                        <TextInput
                            value={this.props.email}
                            placeholder="Username or Email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            style={styles.input}
                            onChangeText={text => this.props.modifyEmail(text)}
                        />

                        <TextInput
                            value={this.props.password}
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={ text => this.props.modifyPassword(text)}

                        />
                        <TouchableHighlight 
                            onPress={() => Actions.newuser() }
                        >  
                            <Text style={{alignSelf: 'center'}}>Don't have one account, click here!</Text>
                      </TouchableHighlight>
                        {this.renderBtnAccess()}
                    </View>

                </KeyboardAvoidingView>

        )
    }

}

const mapStateToProps = state => (
    {
        email: state.Authentication.email,
        password: state.Authentication.password
    }
)

export default connect(mapStateToProps, { modifyEmail, modifyPassword, authenticationUser})(FormLogin);