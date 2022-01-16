import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to second screen"
        onPress={() => navigation.navigate('Second')}></Button>
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

export default HomeScreen;
