import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import ListItemSepartor from "../../components/ListItemSepartor";
import colors from "../config/colors";
import Screen from "./../../components/Screen";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Ahsan Mumtaz'
          subTitle='ahsanmumtaz008976@gmail.com'
          image={require("../assets/1612893842131.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSepartor}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.color} />
              }
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out '
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
