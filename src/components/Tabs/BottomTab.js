// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from 'react-native';
// import React, {useState} from 'react';
// import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';

// export const BottomTab = ({state, descriptors, navigation}) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         numColumns={4}
//         data={state?.routes}
//         renderItem={({item, index}) => {
//           const {options} = descriptors[item?.key];
//           const label =
//             options.tabBarLabel !== undefined
//               ? options.tabBarLabel
//               : options.title !== undefined
//               ? options.title
//               : item.name;

//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: item.key,
//               canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               // The `merge: true` option makes sure that the params inside the tab screen are preserved
//               navigation.navigate({name: item.name, merge: true});
//             }
//           };

//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: item.key,
//             });
//           };
//           return (
//             <View style={styles.tabContainer}>
//               <View
//                 style={[
//                   styles.borderStyle,
//                   {borderTopWidth: isFocused ? 4 : 0},
//                 ]}>
//                 <TouchableOpacity onPress={onPress} style={styles.aicenter}>
//                   <Image
//                     source={
//                       index == 0
//                         ? appIcons.home
//                         : index == 1
//                         ? appIcons.event
//                         : index == 2
//                         ? appIcons.board
//                         : index == 3
//                         ? appIcons.profile
//                         : null
//                     }
//                     style={[
//                       index == 0
//                         ? styles.homeImageStyle
//                         : index == 1
//                         ? styles.activityImageStyle
//                         : index == 2
//                         ? styles.eventImageStyle
//                         : index == 3
//                         ? styles.profileImageStyle
//                         : null,
//                       {
//                         tintColor: isFocused ? colors.p1 : colors.g1,
//                       },
//                     ]}
//                   />
//                   <Text
//                     style={[
//                       styles.textStyle,
//                       {
//                         color: isFocused ? colors.p1 : colors.g1,
//                       },
//                     ]}>
//                     {label}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     height: HP('10'),
//     backgroundColor: colors.white,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   homeImageStyle: {
//     height: 16,
//     width: 18,
//     resizeMode: 'contain',
//   },

//   activityImageStyle: {
//     height: 18,
//     width: 18,
//     resizeMode: 'contain',
//   },
//   eventImageStyle: {
//     height: 20,
//     width: 16,
//     resizeMode: 'contain',
//   },
//   profileImageStyle: {
//     height: 16,
//     width: 16,
//     resizeMode: 'contain',
//   },

//   textStyle: {
//     fontSize: size.tiny,
//     fontFamily: family.OpenSans_Regular,
//     marginTop: 10,
//   },
//   borderStyle: {
//     borderColor: colors.p1,
//     height: HP('10'),
//     width: WP('14'),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tabContainer: {
//     height: HP('10'),
//     width: WP('25'),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   aicenter: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: HP('10'),
//     width: WP('25'),
//   },
// });
