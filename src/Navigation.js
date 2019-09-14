import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Tabbar, SellerTabbar } from './components';
import {
  Login,
  Assistant,
  Home,
  Profile,
  ProductList,
  SignUp,
  PostList,
  DetailForm,
  PublicNews,
  YourNew,
  RequestScreen,
  SelectCategory,
  SelectProductType,
  RequestList,
} from './screens';

const TabNavigation = createBottomTabNavigator(
  {
    Home,
    Assistant,
    RequestList,
    Profile,
  },
  {
    tabBarComponent: Tabbar,
    initialRouteName: 'Home',
  }
);

const LoginNavigation = createStackNavigator(
  {
    Login,
    SignUp,
  },
  {
    headerMode: 'none',
  }
);

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    ProductList,
    PostList,
    DetailForm,
  },
  {
    headerMode: 'none',
  }
);

const SellerTabNavigation = createBottomTabNavigator(
  {
    PublicNews,
    YourNew,
    Profile,
  },
  {
    tabBarComponent: SellerTabbar,
  }
);

const MainSellerNavigation = createStackNavigator(
  {
    SellerTabNavigation,
    RequestScreen,
    SelectCategory,
    SelectProductType,
  },
  {
    headerMode: 'none',
  }
);

const AppNavigation = createSwitchNavigator(
  {
    LoginNavigation,
    MainNavigation,
    MainSellerNavigation,
  },
  {
    // initialRouteName: 'MainNavigation',
    initialRouteName: 'LoginNavigation',
    // initialRouteName: 'MainSellerNavigation',
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
