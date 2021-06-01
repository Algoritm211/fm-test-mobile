import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import MainNavigationStack from "./MainNavigationStackScreen";
import CoursesNavigationStackScreen from "./CoursesNavigationStackScreen";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name={'main'}
          component={MainNavigationStack}
          options={{
            title: 'Main page'
          }}
        />
        <Drawer.Screen
          name={'courses'}
          component={CoursesNavigationStackScreen}
          options={{
            title: 'Courses'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

