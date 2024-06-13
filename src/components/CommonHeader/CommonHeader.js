import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const CommonHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={styles.user}
          source={require('../../images/user-avatar.256x256.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBox}>
        <Image
          style={styles.searchIcon}
          source={require('../../images/search.256x256.png')}
        />
        <View style={styles.searchView}>
          <TextInput placeholder="Search" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={styles.MsgBox}
          source={require('../../images/message-circle-outline.256x255.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    width: width,
    backgroundColor: '#fff',
    height: 75,
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop:25,
    flexDirection: 'row',
    alignItems:"center",
  },
  user: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
    paddingLeft: 15,
    borderRadius: 10,
  },
  searchView: {
    width: '60%',
    height: 45,
    marginLeft: 10,
    borderRadius: 10,
  },
  searchIcon: {
    height: 25,
    width: 25,
  },
  MsgBox: {
    height: 39,
    width: 39,
  },
});
