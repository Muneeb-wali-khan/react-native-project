import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {THEME_COLOR} from '../../utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

const Login = () => {
  const getDta = async () => {
    const getDt = await AsyncStorage.getItem('name');
    console.log(getDt);
  };
  useEffect(() => {
    getDta();
  }, []);

  return (
    <View style={styles.ParentContainer}>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <Image
          source={require('../../images/linkdin-logo.png')}
          style={{width: '28%', height: '38%'}}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.heading}>Login</Text>
          <View style={styles.inputContainer}>
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
            <TouchableOpacity style={styles.ButtonVeiw}>
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
    flex: 1,
    width: '100%',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    color: THEME_COLOR,
    fontWeight: '600',
  },
  formContainer: {
    height: '67%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    position: 'absolute',
    bottom: 0,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
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
    margin: 6,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  ButtonVeiw: {
    width: 371,
    borderRadius: 10,
    height: 55,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLOR,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
