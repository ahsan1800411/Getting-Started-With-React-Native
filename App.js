// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import MessagesScreen from "./app/Screens/MessagesScreen";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";

// export default function App() {
//   return <WelcomeScreen />;
//   // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   {
//     /* <AppButton title='Login' onPress={() => console.log("Tapped")} /> */
//   }
//   // </View>
//   // <ViewImageScreen />
// }

// export default function App() {
//   return (
//     // <ViewImageScreen />
//     <ListingDetailsScreen />
//     // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
//     //   <Card
//     //     title='Red Jacket For Sale'
//     //     subTitle='$100'
//     //     image={require("./app/assets/jacket.jpg")}
//     //   />
//     // </View>
//   );
// }

// export default function App() {
//   return <MessagesScreen />;
// }

export default function App() {
  return (
    <Screen>
      {/* <Icon name='email' size={100} /> */}
      <ListItem
        title='My Title'
        // subTitle='My Subtitle'
        ImageComponent={<Icon name='email' />}
      />
    </Screen>
  );
}
