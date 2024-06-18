import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {THEME_COLOR} from '../../utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const emails = ['xyz@gmail.com', 'munaa@gmail.com'];
    const passwords = ['123', '456'];
    const user = {
      email: email,
      password: password,
    };
    if (emails.includes(email.toLowerCase()) && passwords.includes(password)) {
      AsyncStorage.setItem('USER', JSON.stringify(user));
      navigate.navigate('Home');
    } else {
      alert('Invalid Credentials');
    }
  };

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
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
            <View style={{width:"100%",justifyContent:"center"}}>
              <TouchableOpacity onPress={handleLogin} style={styles.ButtonVeiw}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>
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
    margin: 8,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  ButtonVeiw: {
    width: '85%',
    borderRadius: 10,
    height: 55,
    margin: 12,
    alignSelf:"center",
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
