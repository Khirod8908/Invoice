import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportTitle: {
    color: '#3778C2',
    fontSize: 22,
    fontWeight: 700,
    margin: 0,
  },
  logo: {
    width: 80,
  },
});

const InvoiceTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Image
      src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png"
      style={styles.logo}
    />
    <Text style={styles.reportTitle}>Tax Invoice</Text>
  </View>
);

export default InvoiceTitle;
