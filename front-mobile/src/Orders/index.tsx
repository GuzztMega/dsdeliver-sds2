import React from 'react';
import { StyleSheet, ScrollView ,Text, View, Image } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

function Orders() {

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/> 
        <OrderCard/>
        <OrderCard/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
  }
});

export default Orders;
