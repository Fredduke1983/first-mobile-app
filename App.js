import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useState } from "react";

export default function App() {
  const [isVisibleKB, setIsVisibleKB] = useState(false);

  function hideKeyboard() {
    Keyboard.dismiss();
    setVisibleKeyboard(false);
  }

  function setVisibleKeyboard(isVisible) {
    return setIsVisibleKB(isVisible);
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/img/bg.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <RegistrationScreen
            setVisibleKeyboard={setVisibleKeyboard}
            isVisibleKB={isVisibleKB}
          />

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
