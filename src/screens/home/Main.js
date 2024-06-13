import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Home from '../bottom/Home';
import Peoples from '../bottom/Peoples';
import Add from '../bottom/Add';
import Notifications from '../bottom/Notifications';
import Jobs from '../bottom/Jobs';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectedTab = e => {
    const id = e;
    setSelectedTab(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Peoples />
      ) : selectedTab == 2 ? (
        <Add />
      ) : selectedTab == 3 ? (
        <Notifications />
      ) : (
        <Jobs />
      )}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleSelectedTab(1)}
          style={[
            styles.bottomTab,
            {borderTopWidth: selectedTab == 1 ? 2 : 0, borderTopColor: '#000'},
          ]}>
          <Image
            style={[
              styles.ImageStyles,
              {tintColor: selectedTab == 1 ? 'black' : 'gray'},
            ]}
            source={require('../../images/home.256x231.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleSelectedTab(2)}
          style={[
            styles.bottomTab,
            {borderTopWidth: selectedTab == 2 ? 2 : 0, borderTopColor: '#000'},
          ]}>
          <Image
            style={[
              styles.ImageStyles,
              {tintColor: selectedTab == 2 ? 'black' : 'gray'},
            ]}
            source={require('../../images/people.256x187.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleSelectedTab(3)}
          style={[
            styles.bottomTab,
            {borderTopWidth: selectedTab == 3 ? 2 : 0, borderTopColor: '#000'},
          ]}>
          <Image
            style={[
              styles.ImageStyles,
              {tintColor: selectedTab == 3 ? 'black' : 'gray'},
            ]}
            source={require('../../images/add-box.256x256.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleSelectedTab(4)}
          style={[
            styles.bottomTab,
            {borderTopWidth: selectedTab == 4 ? 2 : 0, borderTopColor: '#000'},
          ]}>
          <Image
            style={[
              styles.ImageStyles,
              {tintColor: selectedTab == 4 ? 'black' : 'gray'},
            ]}
            source={require('../../images/bell.230x256.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleSelectedTab(5)}
          style={[
            styles.bottomTab,
            {borderTopWidth: selectedTab == 5 ? 2 : 0, borderTopColor: '#000'},
          ]}>
          <Image
            style={[
              styles.ImageStyles,
              {tintColor: selectedTab == 5 ? 'black' : 'gray'},
            ]}
            source={require('../../images/briefcase-fill.256x208.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bottomNav: {
    height: 70,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    backgroundColor: '#ffff',
  },
  bottomTab: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyles: {
    height: 27,
    width: 27,
  },
});
