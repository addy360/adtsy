import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { categories } from "./testData";

export default function App() {
  const categoryData = categories(10);
  console.log(`categoryData`, categoryData);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>adtsy</Text>
          <View style={styles.headerImageContainer}>
            <Image
              style={styles.headerImage}
              source={{ uri: "https://picsum.photos/id/237/200/300" }}
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ScrollView: {
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  headerImageContainer: {
    padding: 10,
  },
  headerImage: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
});
