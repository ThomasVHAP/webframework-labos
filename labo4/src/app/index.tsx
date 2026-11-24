import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Alert, Button, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

interface Student {
  id: number;
  name: string;
  age: number;
}

export default function Index() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const addStudent = () => {
    const student : Student = {
      id: Math.max(...students.map(student => student.id), 0) +1,
      name: `Student ${students.length + 1}`,
      age: Math.floor(Math.random() * 10) + 18,
    }

    setStudents(students => [...students, student])
  }

  useEffect(() => {
    const loadData = async() => {
      try {
        setLoading(true);
        const handle: string | null = await AsyncStorage.getItem("students");
        if (handle !== null) {
          setStudents(JSON.parse(handle))
        }
      } catch (error) {
        Alert.alert("something went wong")
      } finally {
        setLoading(false)
      }
    }
    loadData();
  }, [])

  useEffect(() => {
    const storageData = async() => {
      try {
        await AsyncStorage.setItem("students", JSON.stringify(students));
      } catch (error) {
        Alert.alert("something went wong")
      } finally {
        setLoading(false)
      }
    }
    storageData();
  }, [students])

  return (
    <View style={styles.container}>
      <Button title="add student" onPress={addStudent}></Button>

      <FlatList
        data={students}
        renderItem={({item}) => <View><Text>{item.name}</Text></View>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
