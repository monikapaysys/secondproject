import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen from './Components/Screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  StatusBar,
  Pressable,
  Switch,
  ActivityIndicator,
  KeyboardAvoidingView,
  LogBox,
} from 'react-native';
import logo from './logo.png';

// import auth from '@react-native-firebase/auth';

import LottieView from 'lottie-react-native';
import SettingsScreen from './Components/Dashboard';
import Dashboard from './Components/Dashboard';
import BankTransfer from './Components/Bank Transfer';
import BillPayments from './Components/Bill Payments';
import PaymentsTransfers from './Components/Payments Transfers';
import Settings from './Components/Settings';
import SignOut from './Components/SignOut';
import {log} from 'react-native-reanimated';

const YourApp = ({navigation}) => {
  const [show, setshow] = useState(false);
  const [state, setstate] = useState(false);
  const [visible, setvisible] = useState(false);
  const [text, settext] = useState('');
  const [pass, setpass] = useState('');
  const [searchText,setSearchText] = useState("");
 // const [articles,setArticles] = useState([]);

  const validate = () => {
    if (text == '') {
      alert('Enter valid email');
    } else if (pass == '') {
      alert('Enter valid password');
    } else {
      navigation.navigate('Home');
    }

    //  alert('welcome to screen!');
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#000'} barStyle="light-content" />
        <Image source={logo} style={styles.logo} />

        <View
          style={{
            margin: 20,
          }}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#dcdcdc"
            placeholder={'Email or Phone'}
            onChangeText={settext}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#dcdcdc"
            placeholder={'Password'}
            secureTextEntry={visible}
            onChangeText={setpass}
          />

          <TouchableOpacity
            //  onPress={() => {
            // setvisible(!visible);
            //   setshow(!show);
            //console.log('checksetshow===============', setshow);
            //</View></View>}}
            onPress={() => {
              setvisible(!visible);
              setshow(!show);
              console.log('checklog================>>>>');
            }}>
            <FontAwesome
              Icon
              name={show ? 'eye-slash' : 'eye'}
              style={{
                width: 20,
                height: 20,
                //backgroundColor: 'white',
                borderRadius: 20,
                left: 300,
                bottom: 30,
                fontSize: 20,
              }}
            />
            {/* <AntDesign
              Icon
              name={'eyeo'}
              style={{
                width: 20,
                height: 20,
                //backgroundColor: 'white',
                borderRadius: 20,
                left: 300,
                bottom: 30,
                fontSize: 20,
              }}
            /> */}
            {/* <Image
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                left: 300,
                bottom: 30,
              }}
              source={require('./imgs/eye.png')}
            /> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              validate();
            }}
            style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: '500',
              }}>
              Log In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.pass, {marginTop: 50}]}
            onPress={({}) => {
              // alert('hi');

              setstate(true);
            }}>
            <Text style={styles.txt}>Sign up for Facebook</Text>
          </TouchableOpacity>

          <View style={styles.FP}>
            <TouchableOpacity
              style={styles.pass}
              onPress={({}) => {
                // alert('hi');

                setstate(true);
              }}>
              <Text style={styles.txt}>Forget Password</Text>
            </TouchableOpacity>

            <Image
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                position: 'absolute',
                right: 20,
                bottom: 0,
              }}
              source={{
                uri: 'https://pngimg.com/uploads/question_mark/small/question_mark_PNG78.png',
              }}
            />
          </View>

          {/* <LottieView
            source={require('./imgs/loader.json')}
            autoPlay
            style={{backgroundColor: 'transparent'}}
          /> */}

          {/* <Modal animationType="none" visible={state}>
          <Text
            onPress={() => {
              setstate(false);
            }}>
            Signup Form
          </Text>
        </Modal>

        {/* <Pressable
          onPress={() => {
            alert('se');
          }}>
          <Text>I'm pressable!</Text>
        </Pressable> */}

          {/* <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
           ios_backgroundColor="#3e3e3e"
           onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
          {/* <ActivityIndicator /> */}
          {/* <ActivityIndicator size="large" /> */}
          {/* <ActivityIndicator size="small" color="#0000ff" /> */}
          {/* <ActivityIndicator size="large" color="#00ff00" /> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margintop: 50,
    backgroundColor: '#4267B2',
    flex: 1,

    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 40,
  },

  input: {
    height: 40,
    marginTop: 50,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 20,
    color: 'white',
    // marginHorizontal:30,

    borderBottomWidth: 1,
    borderBottomColor: '#fdf5e6',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6E85B7',
    padding: 14,
    marginTop: 20,
  },
  pass: {
    marginTop: 30,
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
  },

  txt: {
    color: 'white',
  },
  FP: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeSTab() {
  return (
    <Tab.Navigator initialRouteName="Screen">
      <Tab.Screen
        name="Home"
        component={Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        // options={{headerShown: false}}
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CustomDrawer = (props, navigation) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#f6f6f6',
          marginBottom: 20,
        }}>
        <View>
          <Text>Monika</Text>
          <Text>mjessani6@gmail.com</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1659624420392-5ee2fdbad3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
          }}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
      </View>

      <DrawerItemList {...props} />

      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 10,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
        onPress={() => navigation.navigate('YourApp')}>
        <Text>Log Out</Text>
      </TouchableOpacity> */}
    </DrawerContentScrollView>
  );
};

function HomeDrawer(navigation) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeSTab}
        options={{
          drawerIcon: ({focused, size}) => (
            <FontAwesome
              Icon
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        // options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              Icon
              name="view-dashboard"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        // options={{headerShown: false}}
        name="BankTransfer"
        component={BankTransfer}
        options={{
          drawerIcon: ({focused, size}) => (
            <FontAwesome
              Icon
              name="bank"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />

      <Drawer.Screen
        // options={{headerShown: false}}
        name="Bill Payments"
        component={BillPayments}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              Icon
              name="billboard"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />

      <Drawer.Screen
        // options={{headerShown: false}}
        name="Payments Transfers"
        component={PaymentsTransfers}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              Icon
              name="bank-transfer-out"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />

      <Drawer.Screen
        // options={{headerShown: false}}
        name="Account"
        component={SignOut}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              Icon
              name="account"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />

      <Drawer.Screen
        options={{headerShown: false}}
        name="SignOut"
        component={SignOut}
        options={{
          drawerIcon: ({focused, size}) => (
            <Feather
              name="log-out"
              size={size}
              color={focused ? '#7cc' : 'red'}
              onPress={() => {
                console.log('ddddddddddddd');
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Screen"
          component={HomeDrawer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="YourApp"
          component={YourApp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
