import React from 'react';
import { Page, Document, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from '../../assets/react-pdf-icon.png';
import InvoiceTitle from './InvoiceTitle';
import InvoiceNo from './InvoiceNo';
import BillTo from './BillTo';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import InvoiceItemsTable from './InvoiceItemsTable';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 11,
    padding: 24,
    lineHeight: 1.5,
    disPlay: 'flex',
    // flexDirection: 'column',
  },
  // logo: {
  //   width: 84,
  //   height: 70,
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  // },
});

const ImageSrc =
  'https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png';

const PdfDocument = ({ invoicedata }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={true} debug={false}>
        {/* <Image style={styles.logo} src={ImageSrc} /> */}
        <InvoiceTitle title={'Invoice'} />
        <InvoiceNo invoice={invoicedata} />
        <BillTo invoice={invoicedata} />
        <InvoiceItemsTable invoice={invoicedata} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  );
};

export default PdfDocument;
