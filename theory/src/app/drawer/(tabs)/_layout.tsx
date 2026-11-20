import { Stack } from "expo-router";
import { NativeTabs } from "expo-router/native-tabs";

const TabLayout = () => {

    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Tab 1</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon md="looks_one"></NativeTabs.Trigger.Icon>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="Tab2">
                <NativeTabs.Trigger.Label>Tab 2</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon md="looks_two"></NativeTabs.Trigger.Icon>
            </NativeTabs.Trigger>
        </NativeTabs>
    )
}

export default TabLayout;
