# Semantiek
Hooks en Components map moet buiten de /App. Anders komt /app in de route van de browser.

# keyboardshouldpersisttaps
submit zonder dat het toetsenbord verdwijnt.

# Horizontal
Voor een horizontale view (carrousel)

## Horizontal + pagingEnabled 
Carousel effect met paginas. Zoals een boek.

# scrollTo / scrollEnd
referentie naar een subtitle of pagina einde.

- const scrollViewRef = useRef<ScrollViewInstance>(null);
- const scrollViewRef = useRef<ScrollViewInstance>(null);
- <Button title="Back To Top" onPress={() => scrollViewRef.current?.scrollTo({y:0, animated: false})}></Button>

# FlatList
heeft ingebouwde functies:
    - refreshing={loading}
    - onRefresh={refetch}
    - data={data}
    - renderItem={(v) => <CommandView command={v}/>}
    - keyExtractor={(item, index) => item.rank.toString()}

# Routing in Expo (Expo Router)

Expo heeft **file-based routing** standaard ingebouwd. Bestanden en mappen binnen de `app/`-map bepalen automatisch de URL's van je applicatie.

### 1. Navigeren en Dynamische Routes
* **Navigeren:** Gebruik de `<Link>` component om rechtstreeks naar een route te gaan.
* **Dynamische routes:** Maak een bestand of map aan met rechte haken, bijvoorbeeld `app/users/[id].tsx`.
* **Parameters uitlezen:** Haal de dynamische parameter op met de `useLocalSearchParams` hook:

```tsx
import { useLocalSearchParams } from "expo-router";

const { id } = useLocalSearchParams<{ id: string }>();
```

### 2. Navigatie configureren (`app/_layout.tsx`)
In je root `_layout.tsx` definieer je de navigatiestructuur (zoals een `<Stack>`) en stel je standaardopties per scherm in:

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen "Home" name="index" options="{{" title: }}/>
      <Stack.Screen "Users List" name="users" options="{{" title: }}/>
    </Stack>
  );
}
```

### 3. Dynamische opties op detailpagina's
Wil je de titel van de header aanpassen op basis van opgehaalde data (zoals een gebruikersnaam)? Plaats dan `<Stack.Screen/>` **binnen de component** van de detailpagina zelf:

```tsx
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

export default function UserDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  // ... haal user op met id

  return (
    <View>
      {/* Overschrijft de header-opties specifiek voor dit scherm */}
      <Stack.Screen options="{{" title: user.name }}/>
      
      <Text>{user.name} ({id})</Text>
    </View>
  );
}
```

### 4. Tab-navigatie met `NativeTabs` (`app/(tabs)/_layout.tsx`)
Voor een native tab-balk onderaan het scherm gebruik je `NativeTabs` van `expo-router/native-tabs`. Dit combineert een tab-bar met native systeem-icoontjes (zoals Material Design op Android en SF Symbols op iOS).

* **Bestandsstructuur:** Plaats dit in een groep zoals `app/(tabs)/_layout.tsx`, waarbij de `name` van elke `Trigger` overeenkomt met het bestand in diezelfde map (bijv. `index.tsx` en `Tab2.tsx`).
* **Label & Icon:** Binnen `<NativeTabs.Trigger>` stel je het label en het icoon in (`md` voor Android Material Icons, `sf` voor iOS SF Symbols).

```tsx
import { NativeTabs } from "expo-router/native-tabs";

const TabLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Tab 1</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="looks_one"/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="Tab2">
        <NativeTabs.Trigger.Label>Tab 2</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="looks_two"/>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
```

### 5. Zijmenu-navigatie met `Drawer` (`app/_layout.tsx`)
Voor een uitschuifbaar zijmenu (hamburger-menu) gebruik je `Drawer` van `expo-router/drawer`. Hiermee kun je zowel losse pagina's als complete tab-groepen in één zijmenu combineren.

* **Routes koppelen:** De `name` prop van `<Drawer.Screen>` verwijst naar een bestand (bijv. `settings.tsx`) of een map (bijv. `tabs` met een eigen `_layout.tsx`).
* **Menu-opties:** Met de `options` prop pas je per item de zichtbare titel in het zijmenu en de header aan (zoals `drawerLabel` en `title`).

```tsx
import { Drawer } from "expo-router/drawer";

const Layout = () => {
  return (
    <Drawer>
      <Drawer.Screen "Home", "Overzicht" drawerLabel: name="tabs" options="{{" title: }}/>
      <Drawer.Screen "Instellingen" "Instellingen", drawerLabel: name="settings" options="{{" title: }}/>
    </Drawer>
  );
};

export default Layout;
```