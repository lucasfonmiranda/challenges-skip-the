import React from 'react';
import { AppRegistry } from 'react-native';
import Application from './src/Application';

const App = props => (
    <Application />
)


AppRegistry.registerComponent('skip', () => App);
