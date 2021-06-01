import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";

const CoursesPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>
        Courses
      </Text>
      <Button
        title="Main page"
        type="clear"
        onPress={() => navigation.navigate('main')}
      />
    </View>
  );
};

export default CoursesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
