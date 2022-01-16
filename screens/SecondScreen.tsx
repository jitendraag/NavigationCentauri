import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const SecondScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default SecondScreen;
