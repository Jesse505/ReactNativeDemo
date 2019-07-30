import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    }
})

export const AppStackNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
}, {
        navigationOptions: {
            header: null
        }
    })