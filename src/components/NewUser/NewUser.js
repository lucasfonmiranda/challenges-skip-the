import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    TextInput,
    Text,
    View
} from 'react-native';
import styles from '../../style/Styles';
import Button from 'apsl-react-native-button';
import { Actions } from 'react-native-router-flux';

class NewUser extends Component {


    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.singinText}>
                    <Text style={styles.title}> Complete this form</Text>
                </View>
                <View style={styles.containerForm}>
                    <TextInput
                        style={styles.input}
                        placeholder="Insert on Email"
                        autoCorrect={false}
                        
                    />
                
                    <TextInput
                        style={styles.input}
                        placeholder="Insert your Name"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Insert your Address"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Insert your Password"
                        autoCorrect={false}
                        secureTextEntry={true}
                    
                    />
                    <View style={styles.buttonNew}>
                    <Button
                        style = {styles.buttonSingin}
                        onPress={() => false}
                    >
                       Create
                    </Button>
                    <Button
                        style = {styles.buttonSingin}
                        onPress={() => Actions.formlogin()}
                    >
                        Click Here to Back
                    </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}



export default NewUser;