# Semantiek
Hooks en Components map moet buiten de /App.



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


