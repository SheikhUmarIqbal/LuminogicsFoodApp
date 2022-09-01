import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddToken} from '../../redux/actions/action';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import login from 'D:/nativeApp/src/components/Home';
import Login from '../../components/Login';
import Dashboard from '../../components/Dashboard';
import EveningTea from '../../components/eveningTea';
import MorningTea from '../../components/morningTea';
import Profile from '../../components/profile';
import Lunch from '../../components/Lunch';
import {colors} from '../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createNativeStackNavigator();

function SplashScreen({navigation}) {
  const dispatch = useDispatch();

  setTimeout(() => {
    navigation.replace('login');
  }, 3000);

  useEffect(() => {
    CheckToken();
  }, []);

  async function CheckToken() {
    const Data = await AsyncStorage.getItem('token');
    dispatch(AddToken(Data));
  }
  return (
    <View
      flex={1}
      style={{
        backgroundColor: colors.main,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 100, height: 100}}
        source={require('../../assets/images/hamburger.png')}
      />
      <Text style={styles.logoText}>LuMeal</Text>
    </View>
  );
}
export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen
          name="splash"
          component={SplashScreen}
          options={{
            title: 'Splash',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />

        <AuthStack.Screen
          name="login"
          component={Login}
          options={{
            title: 'Admin Login',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />

        <AuthStack.Screen
          name="dashBoard"
          component={Dashboard}
          options={{
            // headerStyle: {
            //   backgroundColor: '#45C5F0',
            // },

            title: 'Dashboard',
            headerTitleAlign: 'center',
            //   headerShown: true,
            // headerBackVisible: false,
            //   headerRight: () => (
            //     <TouchableOpacity onPress={() => storeData('null')}>
            //       <MaterialIcons name={'logout'} size={30} color={colors.main} />
            //     </TouchableOpacity>
            //   ),
          }}
        />
        <AuthStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: colors.main,
            },
            headerTitleStyle: {
              color: colors.lightGrey,
            },
            headerTintColor: colors.lightGrey,
            // headerStyle: {
            //     color: colors.lightGrey,
            //   },
            title: 'Profile',
            headerTitleAlign: 'center',
            headerShown: true,

            // headerBackVisible: false,
          }}
        />
        <AuthStack.Screen
          name="Evening-Tea"
          component={EveningTea}
          options={{
            headerStyle: {
              backgroundColor: colors.main,
            },

            headerTitleStyle: {
              color: colors.lightGrey,
            },
            headerTintColor: colors.lightGrey,
            title: 'Evening Tea',
            headerTitleAlign: 'center',
            headerShown: true,
            // headerBackVisible: false,
          }}
        />
        <AuthStack.Screen
          name="Morning-Tea"
          component={MorningTea}
          options={{
            headerStyle: {
              backgroundColor: colors.main,
            },
            headerTitleStyle: {
              color: colors.lightGrey,
            },
            headerTintColor: colors.lightGrey,
            title: 'Morning Tea',
            headerTitleAlign: 'center',
            headerShown: true,
            // headerBackVisible: false,
          }}
        />

        <AuthStack.Screen
          name="Lunch"
          component={Lunch}
          options={{
            headerStyle: {
              backgroundColor: colors.main,
            },
            headerTitleStyle: {
              color: colors.lightGrey,
            },
            headerTintColor: colors.lightGrey,
            title: 'Lunch',
            headerTitleAlign: 'center',
            headerShown: true,
            // headerBackVisible: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  logoText: {
    marginTop: 5,
    color: colors.lightGrey,
    fontSize: 50,
    fontWeight: '900',
    // fontFamily: 'Helvetica',
  },
});
