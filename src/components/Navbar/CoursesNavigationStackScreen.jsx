import React from 'react';
import navigatorOptions from "./NavigatorOptions";
import CoursesPage from "../Courses/CoursesPage";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()

const CoursesNavigationStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Courses"
        component={CoursesPage}/>
    </Stack.Navigator>
  );
};

export default CoursesNavigationStackScreen;
