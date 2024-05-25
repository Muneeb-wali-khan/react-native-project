import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const [products, setProducts] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 10,
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', margin: 10}}>
          Products
        </Text>
        {/* cart */}
        <Text onPress={()=> nav.navigate("Cart")}
          style={{
            fontSize: 16,
            fontWeight: '600',
            margin: 10,
            textDecorationLine: 'underline',
          }}>
          Cart Items ( 0 ) {' >'}
        </Text>
      </View>
      <FlatList
        data={products}
        renderItem={prod => {
          return (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: 'blue',
                  margin: 5,
                  marginBottom: 10,
                  padding: 10,
                  justifyContent: 'space-between',
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: prod.item.image}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 15,
                      padding: 10,
                    }}>
                    {prod.item.title.length > 20
                      ? prod.item.title.slice(0, 25) + '...'
                      : prod.item.title}
                  </Text>
                </View>
                <View style={{padding: 5}}>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      backgroundColor: 'blue',
                      borderRadius: 10,
                    }}>
                    <Text style={{color: 'white', fontWeight: '500'}}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Products;
