import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CommonHeader
        onclickLeft={() => {
          navigation.openDrawer();
        }}
      />

      <FlatList
        data={[0, 1]}
        renderItem={({item, index}) => {
          return (
            <View>
              {index == 0 && (
                <View style={styles.PostMAIN}>
                  {/* Top layer */}
                  <View style={styles.topLayerPost}>
                    <TouchableOpacity
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                      blurRadius={7}
                        style={{height: 50, width: 50,borderRadius:40}}
                        source={require('../../images/user-avatar.256x256.png')}
                      />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                      <Text style={{fontWeight: 900, fontSize: 20}}>
                        Muneeb shah{' '}
                        <Text style={{fontSize: 13, fontWeight: '400'}}>
                          .1st
                        </Text>
                      </Text>
                      <Text style={{fontWeight: 600, fontSize: 13}}>
                        Software Engineer | Mobile App Developer | React Native
                      </Text>
                      <Text style={{fontSize: 14, fontWeight: '600'}}>
                        23h.🌎
                      </Text>
                    </View>
                  </View>
                  {/* Middle layer */}
                  <View style={styles.middleLayerPost}>
                    <Image
                      style={{height: 290, width: '90%'}}
                      source={require('../../images/slide2.png')}
                    />
                  </View>
                  {/* Bottom layer */}
                  <View style={styles.bottomLayerPost}>
                    {/* Reactions icons */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 14,
                      }}>
                      <Image
                        style={{height: 25, width: 25, marginRight: 10}}
                        source={require('../../images/post/heart-decoration.256x256.png')}
                      />
                      <Text>Muneeb shah and 12 others</Text>
                    </View>
                    <View>
                      <Text>41 comments</Text>
                    </View>
                  </View>

                  {/* Bottom layer last post */}
                  <View style={styles.bottomLayerLastPost}>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems:"center"}}>
                        <Image
                         style={styles.Icons}
                          source={require('../../images/post/thumb-up.256x242.png')}
                        />
                        <Text style={styles.icontext}>Like</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems:"center"}}>
                        <Image
                         style={styles.Icons}
                          source={require('../../images/post/message.256x256.png')}
                        />
                        <Text style={styles.icontext}>Comment</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems:"center"}}>
                        <Image
                         style={styles.Icons}
                          source={require('../../images/post/repost.256x154.png')}
                        />
                        <Text style={styles.icontext}>Repost</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems:"center"}}>
                        <Image
                         style={styles.Icons}
                          source={require('../../images/post/send-alt-filled.256x256.png')}
                        />
                        <Text style={styles.icontext}>Send</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PostMAIN: {
    flexDirection: 'column',
    marginTop: 10,
    height: 470,
    backgroundColor: 'white',
    borderWidth: 0.2,
  },
  topLayerPost: {
    height: 100,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  middleLayerPost: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  bottomLayerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 10,
    padding: 10,
    width: Dimensions.get('window').width,
  },
  bottomLayerLastPost: {
    height: 60,
    flexDirection:"row",
    borderWidth: 0.2,
    width: Dimensions.get('window').width,
    justifyContent: 'space-evenly',
    alignItems:"center"
  },
  Icons:{
    height:25,
    width:25
  },
  icontext:{
    fontSize:16
  }
});
