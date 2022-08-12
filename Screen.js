import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image
} from 'react-native';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([     
        {
          id: 0,
          name: 'Lata',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659626455502-5f5191dbe474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 1,
          name: 'Kainat',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659651224822-5b8d35eea58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          name: 'Pooja',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659679126275-533a7760df4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          name: 'Ameer Hamza',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659462248396-3cd5943be032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'faiza',
          address: 'Abcd@gmail.com',
          img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206145021-pot-roast-2.jpg',
        },
        {
          id: 4,
          name: 'dimple',
          address: 'Abcd@gmail.com',
          img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206145021-pot-roast-2.jpg',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
      ]
);
  const [masterDataSource, setMasterDataSource] = useState(
[     
        {
          id: 0,
          name: 'Lata',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659626455502-5f5191dbe474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 1,
          name: 'Kainat',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659651224822-5b8d35eea58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          name: 'Pooja',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659679126275-533a7760df4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          name: 'Ameer Hamza',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659462248396-3cd5943be032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Aisha',
          address: 'Abcd@gmail.com',
          img: 'https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'Annie',
          address: 'Abcd@gmail.com',
          img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206145021-pot-roast-2.jpg',
        },
        {
          id: 4,
          name: 'Annie',
          address: 'Abcd@gmail.com',
          img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206145021-pot-roast-2.jpg',
        },
      ]
  );
  
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
   <View style={styles.card}>
      <Image source={{uri:item.img}} style={styles.image} />
      <View style={{paddingLeft:10}}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
      </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },

  card:{
   flexDirection:"row",
    backgroundColor:"white",
    margin:5,
    padding:5,
    alignItems:"center"
 },
 image: {
   width:50,
   height:50,
   borderRadius:25
 },
});

export default App;
