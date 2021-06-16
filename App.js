import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
  FlatList,
} from "react-native";
import {
  ThemeProvider,
  Button,
  ListItem,
  Avatar,
  Image,
} from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { categories, users } from "./testData";

const Item = ({ cat }) => (
  <View style={styles.carouselItem}>
    <Image
      source={{ uri: cat.categoryImg }}
      style={styles.carouselItemImage}
      resizeMode="cover"
      PlaceholderContent={<ActivityIndicator />}
    >
      <Text style={styles.carouselItemText}>
        {cat.categoryName} Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Praesentium nam maiores magni officia hic recusandae excepturi
        corrupti assumenda exercitationem similique blanditiis vero repellendus
        vel eos aliquid in ullam, unde modi.{" "}
      </Text>
      <Button style={{ width: 100 }} title="Read More" raised />
    </Image>
  </View>
);

export default function App() {
  const categoryData = categories(10);
  const list = users();
  return (
    <ThemeProvider>
      <SafeAreaProvider>
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
          <View style={styles.categories}>
            <ScrollView
              bounces
              fadingEdgeLength={30}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {categoryData.map((cat, i) => (
                <View style={styles.category} key={i}>
                  <Text> {cat.categoryName} </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.carousel}>
            <ScrollView
              style={styles.carouselContainer}
              bounces
              fadingEdgeLength={30}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {categoryData.map((cat, i) => (
                <Item key={i} cat={cat} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.carousel}>
            <ScrollView
              style={{
                ...styles.carouselContainer,
              }}
              snapToAlignment
              bounces
              fadingEdgeLength={30}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {categoryData.map((cat, i) => (
                <Item key={i} cat={cat} />
              ))}
            </ScrollView>
          </View>
          <View>
            <FlatList
              data={categoryData}
              renderItem={({ item }) => <Item cat={item} />}
              keyExtractor={({ categoryId }) => categoryId.toString()}
              horizontal
            />
          </View>
          <View>
            {categoryData.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <Image
                  source={{ uri: l.categoryImg }}
                  style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
                  resizeMode="cover"
                />
                <ListItem.Content>
                  <ListItem.Title>{l.categoryName}</ListItem.Title>
                  <ListItem.Subtitle>{l.categoryName}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ScrollView: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

  category: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
  },

  carousel: {
    paddingTop: 35,
    flex: 1,
  },
  carouselContainer: {},

  carouselItem: {
    height: 300,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
    width: 300,
    overflow: "hidden",
  },

  carouselItemImage: {
    height: "100%",
    width: "100%",
  },

  carouselItemText: {
    color: "#ccc",
    fontWeight: "bold",
    padding: 10,
  },
});
