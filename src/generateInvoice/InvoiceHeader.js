import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const InvoiceHeader = ({ invoice }) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png"
          style={styles.logo}
        />
      </View>
      
    </>
  );
};
