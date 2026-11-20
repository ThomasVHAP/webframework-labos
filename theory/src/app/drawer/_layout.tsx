import { Drawer } from "expo-router/drawer"

const Layout = () => {

    return (
        <Drawer>
            <Drawer.Screen name="tabs"/>
            <Drawer.Screen name="settings"/>
        </Drawer>
    )
}

export default Layout;