/*
 * @Description: 路由跳转工具类
 * @Author: Jesse Zhao
 * @github: https://github.com/Jesse505
 * @Date: 2019-07-30 16:13:15
 * @LastEditors: Jesse Zhao
 * @LastEditTime: 2019-07-30 17:00:58
 */

export default class NavigationUtil {

    /**
     * @description: 跳转到指定页面
     * @param {params} 
     * @return: 
     */
    static goHome(params) {
        const {navigation} = params;
        if (!navigation) {
            console.log('navigation can not be null')
        }
        navigation.navigate('Main')
    }

    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation
        if (!navigation) {
            console.log('navigation can not be null')
        }
        navigation.navigate(page, {
            ...params
        })
    }


}