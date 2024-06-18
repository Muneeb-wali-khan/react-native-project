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
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CommonHeader
        onclickLeft={() => {
          navigation.openDrawer()
        }}
      />

      <FlatList
        data={[1]}
        renderItem={({item, index}) => {
          return (
            <View style={{marginBottom:75}}>
              <View>
                <View style={styles.PostMAIN}>
                  {/* Top layer */}
                  <View style={styles.topLayerPost}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        blurRadius={7}
                        style={{height: responsiveWidth(12), width: responsiveWidth(12), borderRadius: 50}}
                        source={require('../../images/user-avatar.256x256.png')}
                      />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                      <Text style={{fontWeight: 900, fontSize: responsiveFontSize(2.3)}}>
                        Muneeb shah{' '}
                        <Text style={{fontSize: 13, fontWeight: '400'}}>
                          .1st
                        </Text>
                      </Text>
                      <Text style={{fontWeight: 600, fontSize: responsiveFontSize(1.7)}}>
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
                        paddingLeft: 5,
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
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/thumb-up.256x242.png')}
                        />
                        <Text style={styles.icontext}>Like</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/message.256x256.png')}
                        />
                        <Text style={styles.icontext}>Comment</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/repost.256x154.png')}
                        />
                        <Text style={styles.icontext}>Repost</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/send-alt-filled.256x256.png')}
                        />
                        <Text style={styles.icontext}>Send</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.PostMAIN}>
                  {/* Top layer */}
                  <View style={styles.topLayerPost}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        blurRadius={7}
                        style={{height: responsiveWidth(12), width: responsiveWidth(12), borderRadius: 50}}
                        source={require('../../images/user-avatar.256x256.png')}
                      />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                      <Text style={{fontWeight: 900, fontSize: responsiveFontSize(2.3)}}>
                        Ali Ahmad{' '}
                        <Text style={{fontSize: 13, fontWeight: '400'}}>
                          .1st
                        </Text>
                      </Text>
                      <Text style={{fontWeight: 600, fontSize: responsiveFontSize(1.7)}}>
                        Data Engineer | Devops Engineer Developer | Aws Solution
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
                        paddingLeft: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25, marginRight: 10}}
                        source={require('../../images/post/heart-decoration.256x256.png')}
                      />
                      <Text>Nadeem khan and 12 others</Text>
                    </View>
                    <View>
                      <Text>10 comments</Text>
                    </View>
                  </View>

                  {/* Bottom layer last post */}
                  <View style={styles.bottomLayerLastPost}>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/thumb-up.256x242.png')}
                        />
                        <Text style={styles.icontext}>Like</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/message.256x256.png')}
                        />
                        <Text style={styles.icontext}>Comment</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/repost.256x154.png')}
                        />
                        <Text style={styles.icontext}>Repost</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/send-alt-filled.256x256.png')}
                        />
                        <Text style={styles.icontext}>Send</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.PostMAIN}>
                  {/* Top layer */}
                  <View style={styles.topLayerPost}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        blurRadius={7}
                        style={{height: responsiveWidth(12), width: responsiveWidth(12), borderRadius: 50}}
                        source={require('../../images/user-avatar.256x256.png')}
                      />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                      <Text style={{fontWeight: 900, fontSize: responsiveFontSize(2.3)}}>
                        Wajid Khan{' '}
                        <Text style={{fontSize: 13, fontWeight: '400'}}>
                          .1st
                        </Text>
                      </Text>
                      <Text style={{fontWeight: 600, fontSize: responsiveFontSize(1.7)}}>
                        Microsoft Engineer | data base Developer | Aws Solution
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
                        paddingLeft: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25, marginRight: 10}}
                        source={require('../../images/post/heart-decoration.256x256.png')}
                      />
                      <Text>Waleed khan and 12 others</Text>
                    </View>
                    <View>
                      <Text>11 comments</Text>
                    </View>
                  </View>

                  {/* Bottom layer last post */}
                  <View style={styles.bottomLayerLastPost}>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/thumb-up.256x242.png')}
                        />
                        <Text style={styles.icontext}>Like</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/message.256x256.png')}
                        />
                        <Text style={styles.icontext}>Comment</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/repost.256x154.png')}
                        />
                        <Text style={styles.icontext}>Repost</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          style={styles.Icons}
                          source={require('../../images/post/send-alt-filled.256x256.png')}
                        />
                        <Text style={styles.icontext}>Send</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
    backgroundColor:"ghostwhite"
  },
  PostMAIN: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 0.2,
  },
  topLayerPost: {
    height: 120,
    width: "89%",
    flexDirection: 'row',
    padding: 10,
    paddingLeft:15,
    justifyContent: 'flexstart',
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
    flexDirection: 'row',
    borderWidth: 0.2,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 13,
    paddingBottom: 10,
  },
  Icons: {
    height: 25,
    width: 25,
  },
  icontext: {
    fontSize: 14,
  },
});
