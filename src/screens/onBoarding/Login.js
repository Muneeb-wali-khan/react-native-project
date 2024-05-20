import {View, Text, StyleSheet, TextInput} from 'react-native';
import {THEME_COLOR} from '../../utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = () => {
  return (
    <View style={styles.ParentContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            maxLength={6}
            autoFocus
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            keyboardType="number-pad"
          />
          <View style={styles.ButtonVeiw}>
            <TouchableOpacity>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

export const styles = StyleSheet.create({
  ParentContainer: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  mainContainer: {
    flex: 1 / 1.2,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    color: 'white',
    fontWeight:"600"
  },
  inputContainer: {
    width: '100%',
    marginTop: 25,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    borderRadius: 10,
    fontSize: 15,
    height: 55,
    margin: 12,
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  ButtonVeiw: {
    width: '85%',
    borderRadius: 10,
    height: 55,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  btnText: {
    color: THEME_COLOR,
    fontSize: 20,
    fontWeight: '600',
  },
});
