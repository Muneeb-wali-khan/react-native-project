import React from 'react';
import {View, Text, FlatList, Image, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useGetProductsQuery} from '../../store/features/ProductSlice';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../../store/features/CartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const {data: products, isLoading, isError} = useGetProductsQuery();
  const {items} = useSelector(state => state.cart);
  const nav = useNavigation();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading products</Text>;
  }

  const handleAddtoCart = (item) => {
    dispatch(addItem(item));
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
        <Text
          onPress={() => nav.navigate('Cart')}
          style={{
            fontSize: 16,
            fontWeight: '600',
            margin: 10,
            textDecorationLine: 'underline',
          }}>
          Cart Items ( {items ? items.length : 0} ) {' >'}
        </Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
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
              <View style={{flexDirection: 'row',maxWidth:"60%"}}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 50, height: 50, borderRadius: 10}}
                />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    padding: 10,
                    marginRight:15
                  }}>
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + '...'
                    : item.title}
                </Text>
              </View>
              <View style={{padding: 5}}>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                  }}>
                  <Text
                    onPress={() => handleAddtoCart(item)}
                    style={{color: 'white', fontWeight: '500'}}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Products;
