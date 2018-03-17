import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin/FormLogin';
import NewUser from './components/NewUser/NewUser';



export default props => (
    <Router>
        <Scene key='root'>
            
            <Scene 
                key='formlogin'
                component={ FormLogin }
                initial
                hideNavBar={true}
                panHandlers={null}
            />

            <Scene
                key="newuser"
                component={ NewUser }
                hideNavBar={true}
                panHandlers={null}

            />
        </Scene>
    </Router>
);