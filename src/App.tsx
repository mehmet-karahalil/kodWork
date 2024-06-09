import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Store from './store/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './pages/favorites';
import Jobs from './pages/jobs';
import JobDescription from './pages/jobDescription';

type RootStackParamList = {
  Jobs: undefined;
  JobDescription: { item: any };
};

const Stack = createStackNavigator<RootStackParamList>();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Jobs" 
        component={Jobs} 
        options={{
          headerShown: false,
          title: 'Jobs',
        }} 
      />
      <Stack.Screen 
        name="JobDescription" 
        component={JobDescription} 
        options={({ route }) => ({
          headerShown: true,
          title: route.params?.item?.name || 'Job Description',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back', 
          headerBackTitleVisible: true,
        })}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const getCurrentRoute = (state:any): any => {
  if (state.routes[state.index].state != undefined) {
    return getCurrentRoute(state.routes[state.index].state);
  } else {
    return state.routes[state.index];
  }
}

function App(): React.JSX.Element {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <Provider store={Store}>
      <NavigationContainer
        onStateChange={(state) => {
          const currentRoute = getCurrentRoute(state);
          setShowHeader(!['JobDescription'].includes(currentRoute.name));
        }}
      >
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: showHeader,
          }}
        >
          <Drawer.Screen
            name="Home"
            component={JobsStack}
            options={{
              drawerLabel: 'Jobs',
              title: 'Jobs',
              headerTitleAlign: 'center',
            }}
          />
          <Drawer.Screen
            name="Favorites"
            component={Favorites}
            options={{
              drawerLabel: 'Favorites',
              title: 'Favorites',
              headerShown: true,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
