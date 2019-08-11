import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Login, Assistant } from './screens';

const AppNavigation = createSwitchNavigator({
  Login,
  Assistant,
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
