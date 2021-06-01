import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>
        Main page
      </Text>
      <Button
        title="Courses"
        type="clear"
        onPress={() => navigation.navigate('courses')}
      />
    </View>
  )
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
