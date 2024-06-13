// import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {decrement, increment} from '../../store/features/CartSlice';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const {items} = useSelector(state => state.cart);

//   const handleDecrease = item => {
//     dispatch(increment(item));
//   };
//   const handleIncrease = item => {
//     dispatch(decrement(item));
//   };
//   return (
//     <View style={{flex: 1, marginTop: 10}}>
//       <FlatList
//         data={items}
//         renderItem={prod => {
//           return (
//             <View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   borderWidth: 1,
//                   borderColor: 'blue',
//                   margin: 5,
//                   marginBottom: 10,
//                   padding: 10,
//                   justifyContent: 'space-between',
//                   borderRadius: 10,
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Image
//                     source={{uri: prod.item.image}}
//                     style={{width: 60, height: 60, borderRadius: 10}}
//                   />
//                   <Text
//                     style={{
//                       fontWeight: '600',
//                       fontSize: 15,
//                       padding: 10,
//                     }}>
//                     {prod.item.title.length > 20
//                       ? prod.item.title.slice(0, 25) + '...'
//                       : prod.item.title}
//                   </Text>
//                 </View>
//                 <View style={{padding: 5, flexDirection: 'row'}}>
//                   <TouchableOpacity
//                     onPress={() => handleIncrease(prod.item)}
//                     style={{
//                       padding: 5,
//                       backgroundColor: 'blue',
//                       borderRadius: 10,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       height: 33,
//                       width: 33,
//                     }}>
//                     <Text
//                       style={{color: 'white', fontWeight: '500', fontSize: 16}}>
//                       -
//                     </Text>
//                   </TouchableOpacity>
//                   <Text
//                     style={{
//                       padding: 5,
//                       marginLeft: 5,
//                       marginRight: 5,
//                       fontWeight: '900',
//                     }}>
//                     {prod.item.qty}
//                   </Text>
//                   <TouchableOpacity
//                     onPress={() => handleDecrease(prod.item)}
//                     style={{
//                       padding: 5,
//                       backgroundColor: 'blue',
//                       borderRadius: 10,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       height: 33,
//                       width: 33,
//                     }}>
//                     <Text
//                       style={{color: 'white', fontWeight: '500', fontSize: 16}}>
//                       +
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default Cart;
