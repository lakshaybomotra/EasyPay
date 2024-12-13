// CardComponent.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';

const TransctionListItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
      }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      {/* Arrow Icon */}
      <TouchableOpacity style={styles.amtView}>
      <Text style={[styles.amt,{color: item.type === 'income' ? 'green' : 'red'}]}>
        {
          item.type === 'income' ? '$' + item.amt :  '-$' + item.amt
        }
        </Text>
        <Antdesign name="right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // marginHorizontal: 10,
    padding: 15,
    // elevation: 4, // for Android
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: '100%',
    // marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  amtView: {
    // alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  amt:{
    fontSize:15,
  }
});

export default TransctionListItem;
