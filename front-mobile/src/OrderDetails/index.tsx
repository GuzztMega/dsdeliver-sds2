import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}

function OrderDetails({ route } : Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
    .then(() => {
      Alert.alert(`Pedido Nº${order.id} realizado com sucesso!`);
      navigation.navigate('Orders');
    })
    .catch(() => {
      Alert.alert(`Houve um erro ao confirmar seu pedido Nº${order.id}!`);
    })
  }

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
  }

  return (
    <>
      <Header/>
      <View style={styles.container}>

        <OrderCard order={order}/>

        <RectButton style={styles.button}>
          <Text style={styles.buttonText} onPress={handleStartNavigation}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>

        <RectButton style={styles.button}>
          <Text style={styles.buttonText} onPress={handleConfirmDelivery}>CONFIRMAR ENTREGA</Text>
        </RectButton>

        <RectButton style={styles.button}>
          <Text style={styles.buttonText} onPress={handleOnCancel}>VOLTAR</Text>
        </RectButton>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});

export default OrderDetails;
