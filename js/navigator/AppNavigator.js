import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";

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
    },
    DetailPage: {
        screen: DetailPage, 
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