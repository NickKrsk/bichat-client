// import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Widget } from 'react-chat-widget';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
// import { NativeRouter, Route, Link } from "react-router-native";

import Chat from './components/Chat';
// import Chats from './components/Chats';

/* function Chats({ match }) {
  return (
    <View>
      <Text style={styles.header}>Chats</Text>
      <View>
        <Link
          to={`${match.url}/rendering`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Rendering with React</Text>
        </Link>
        <Link
          to={`${match.url}/components`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Components</Text>
        </Link>
        <Link
          to={`${match.url}/props-v-state`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <Text style={styles.topic}>Please select a topic.</Text>}
      />
    </View>
  );
} */

export default function App() {
  return (<Chat />);
  /* return(  
    <NativeRouter>   
      <Route exact path="/" component={Chats} /> 
    </NativeRouter> 
  ); */
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
