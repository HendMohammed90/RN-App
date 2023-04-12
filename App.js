import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Exercise1 from './src/screens/Exercise1'
import FlatListData from "./src/screens/FlatList";
import Exercise2 from "./src/screens/Exercise2";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    Exercise :Exercise1,
    FlatList: FlatListData,
    Exercise2 : Exercise2
  },
  {
    initialRouteName: "Exercise2",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
