import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Exercise1 from './src/screens/Exercise1'
import FlatListData from "./src/screens/FlatList";
import Exercise2 from "./src/screens/Exercise2";
import Buttons from "./src/screens/Buttons";
import ImageItem from "./src/screens/ImageItem";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColoreScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    Exercise :Exercise1,
    FlatList: FlatListData,
    Exercise2 : Exercise2,
    Buttons :Buttons,
    ImageItem :ImageItem, 
    Counter : Counter,
    ColorScreen :ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
