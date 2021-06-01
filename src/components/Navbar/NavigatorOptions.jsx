import {StyleSheet, View} from "react-native";
import {Icon} from "react-native-elements";
import * as React from "react";

const navigatorOptions = ({navigation}) =>  {
  return {
    headerStyle: {
      backgroundColor: 'blue',

    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white'
    },
    headerLeft: () => (
      <View style={stylesIcon.iconView}>
        <Icon
          type="ionicon"
          name={"md-menu"}
          color={'white'}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    )
  }
}
export default navigatorOptions

const stylesIcon = StyleSheet.create({
  iconView: {
    marginLeft: 15,
  },
})
