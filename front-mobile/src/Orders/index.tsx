import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView ,Text, View, Image, Alert } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { fetchOrders } from '../api';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'));
  }, []);

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        {orders.map(order => (
          <TouchableWithoutFeedback key={order.id}>
            <OrderCard order={order}/>
          </TouchableWithoutFeedback>
        ))}
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
