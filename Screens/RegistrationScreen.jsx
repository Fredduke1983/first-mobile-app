import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from "react-native";

export function RegistrationScreen({ setVisibleKeyboard, isVisibleKB }) {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded] = useFonts({});

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setVisibleKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setVisibleKeyboard(false);
    });
    console.log("effect");
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  function onClick() {
    console.log("email: ", email);
    console.log("password: ", password);
    setLogin("");
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
    setVisibleKeyboard(false);
  }

  function onLogin(loginValue) {
    setLogin(loginValue);
    setVisibleKeyboard(true);
  }

  function onEmail(emailValue) {
    setEmail(emailValue);
    setVisibleKeyboard(true);
  }

  function onPassword(passValue) {
    setPassword(passValue);
    setVisibleKeyboard(true);
  }

  function onFocusInput() {
    setVisibleKeyboard(true);
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Text style={styles.mainTitle}>Реєстрація</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="login"
            style={styles.input}
            onChangeText={onLogin}
            onFocus={onFocusInput}
            value={login}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="e-mail"
            style={styles.input}
            onChangeText={onEmail}
            onFocus={onFocusInput}
            value={email}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="password"
            style={styles.input}
            onChangeText={onPassword}
            onFocus={onFocusInput}
            value={password}
            secureTextEntry={true}
          />
        </View>
        {!isVisibleKB && (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={onClick}
            >
              <Text style={styles.btnTitle}>Реєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.footerTitle}>Вже маєте аккаунт? Увійти</Text>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  inputBox: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: "#F6F6F6",
    color: "#212121",
    height: 40,
    borderRadius: 8,
    paddingLeft: 16,
  },
  mainTitle: {
    marginBottom: 32,
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 10,
    marginHorizontal: 30,
    marginTop: 43,
  },

  btnTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },

  footerTitle: {
    textAlign: "center",
    marginBottom: 78,
    marginTop: 16,
  },
});
