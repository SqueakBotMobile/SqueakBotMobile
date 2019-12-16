import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Views/login';
import List from './Views/list';


const MainNavigator = createStackNavigator (
  {
    Login: {screen: Login},
    List: {screen: List}
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Home'
    }
  }
)

export default createAppContainer(MainNavigator);
