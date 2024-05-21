import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {LIGHT, THEME_COLOR} from '../../utils/Colors';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  {
    title: 'Browse Professional Content',
    description: 'Browse content from all over the world',
    img: require('../../images/slide1.png'),
  },
  {
    title: 'Connect with Professionals',
    description: 'Connect with professionals in your area',
    img: require('../../images/slide2.png'),
  },
  {
    title: 'Get Started And Work Together',
    description: 'Get started with your professional journey',
    img: require('../../images/slide3.png'),
  },
  {
    title: 'Chat All Over The Wolrd',
    description: 'Chat with all over the world connect',
    img: require('../../images/slide4.png'),
  },
  {
    title: 'Send Voice Chats and More',
    description: 'Send voice messages and chatting with freinds',
    img: require('../../images/slide5.png'),
  },
];

const Welcome = () => {
  const navigate = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const handlePREV = () => {
    if (currentIndex > 0) {
      // we use ref.current to access the flat list scrollToIndex Property
      ref.current.scrollToIndex({animated: true, index: currentIndex - 1});
    }
  };
  const handleNEXT = () => {
    // we use ref.current to access the flat list scrollToIndex Property
    if (currentIndex < data.length - 1) {
      ref.current.scrollToIndex({animated: true, index: currentIndex + 1});
    }
  };

  const continueToNext = async () => {
    const name = ['muneeb'];
    await AsyncStorage.setItem('name', JSON.stringify(name));
    console.log("saved");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {/* wrap faltlist in veiw so that it cannot take the whole screen height */}
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          horizontal
          ref={ref}
          pagingEnabled
          onScroll={e => {
            const x = (
              e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            ).toFixed(0);
            setCurrentIndex(parseInt(x));
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.INTRO_ITEMS}>
                <Image source={item.img} style={styles.INTRO_IMAGES} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
            );
          }}
        />
      </View>

      {/* indicators */}
      <View style={styles.INDICATOR_VEIW}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.INDICATORS,
                {
                  width: currentIndex === index ? 25 : 6,
                  height: 6,
                  backgroundColor:
                    currentIndex === index ? THEME_COLOR : 'black',
                  borderRadius: 2.5,
                },
              ]}></View>
          );
        })}
      </View>

      {/* bottom veiw */}
      <View style={styles.BOTTOM_VEIW}>
        <View style={styles.BTN_VEIW}>
          {currentIndex > 0 && (
            <TouchableOpacity onPress={handlePREV} style={styles.PREV_BTN}>
              <Text style={{color: THEME_COLOR, fontSize: 18}}>Previous</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.BTN_VEIW}>
          {currentIndex < data.length - 1 && (
            <TouchableOpacity onPress={handleNEXT} style={styles.NEXT_BTN}>
              <Text style={{color: LIGHT, fontSize: 18}}>Next</Text>
            </TouchableOpacity>
          )}
          {currentIndex == data.length - 1 && (
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('Login'), continueToNext();
              }}
              style={styles.NEXT_BTN}>
              <Text style={{color: LIGHT, fontSize: 18}}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

// ==> asyncStorage
// in asyncStorage we store the data in the form of key value pair
// key is the name of the data
// value is the data itself
// we can store multiple data in asyncStorage
// we can store data in the form of string or json

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT,
  },
  INTRO_ITEMS: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  INTRO_IMAGES: {
    width: '70%',
    height: '80%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 27,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    width: '90%',
  },
  desc: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    color: 'gray',
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
    marginTop: 10,
  },
  INDICATOR_VEIW: {
    flex: 1 / 2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  INDICATORS: {
    margin: 5,
  },
  BOTTOM_VEIW: {
    width: '100%',
    height: '15%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  PREV_BTN: {
    width: '70%',
    height: '42%',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NEXT_BTN: {
    width: '70%',
    height: '42%',
    backgroundColor: THEME_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  BTN_VEIW: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
