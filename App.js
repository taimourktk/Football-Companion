import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeTrackingScreen from "./Screens/WelcomeTrackingScreen";
import StepScreen from './Screens/StepScreen';
import MapScreen from "./Screens/MapScreen";
import DashBoard from "./Screens/DashBoard"
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    SigUp: RegisterScreen,
    Welcometracking: WelcomeTrackingScreen,
    Step: StepScreen,
    Map: MapScreen,
    Dash: DashBoard

  },
  {
    initialRouteName: "Dash",
    defaultNavigationOptions: {
      title: "FOOTBALL COMPANION"
    }
  }
); 

export default createAppContainer(navigator);
