import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Views/login';
import List from './Views/list';
import Signup from './Views/signup';
import Question from './Views/question';
import Comments from './Views/comments';

const MainNavigator = createStackNavigator (
  {
    Login: {screen: Login},
    Signup: {screen: Signup},
    List: {screen: List},
    Question: {screen: Question},
    Comments: {screen: Comments}
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'SqueakBot'
    }
  }
)

export default createAppContainer(MainNavigator);
