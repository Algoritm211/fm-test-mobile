
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import navigatorOptions from "./NavigatorOptions";
import MainPage from "../MainPage/MainPage";

const Stack = createStackNavigator()

export default function MainNavigationStack({navigator}) {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Home"
        component={MainPage}/>
    </Stack.Navigator>
  );
}
