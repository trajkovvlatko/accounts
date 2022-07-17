import {Dimensions, StyleSheet} from 'react-native';

const primaryColor = '#A358ED';
const secondaryColor = '#FFFFFF';
const textColor = '#444444';
const borderColor = '#C7C7C7';
const rowColor = '#F1F1F1';
const fontSize = 18;
const bold = '500';
const extraBold = '900';
const padding = 32;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: secondaryColor,
  },
  fullPage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width - padding * 2,
    backgroundColor: secondaryColor,
  },
  scrollView: {
    height: '65%',
  },
  wrapper: {
    padding,
  },
  selectAccountWrapper: {
    flexDirection: 'column',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  selectAccountButtonWrapper: {
    padding: padding,
    width: '100%',
  },
  header: {
    flex: 1,
    height: 45,
    backgroundColor: primaryColor,
    alignItems: 'center',
    paddingHorizontal: padding,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerIcon: {
    color: secondaryColor,
    fontSize,
    paddingRight: 16,
    fontWeight: bold,
  },
  headerLink: {
    flexDirection: 'row',
    fontWeight: bold,
  },
  headerText: {
    color: secondaryColor,
    fontSize,
    fontWeight: bold,
  },
  title: {
    color: textColor,
    textTransform: 'uppercase',
    fontSize,
    fontWeight: bold,
    marginBottom: 20,
  },
  balanceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingBottom: 12,
    alignItems: 'center',
  },
  text: {
    fontSize,
  },
  boldText: {
    fontSize,
    fontWeight: bold,
  },
  deleteText: {
    color: primaryColor,
    fontSize: 25,
    width: 60,
    height: 30,
    textAlign: 'center',
    marginTop: -8,
  },
  buttonsWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addSalaryButton: {
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 20,
    backgroundColor: secondaryColor,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: padding / 2,
  },
  addSalaryButtonText: {
    color: primaryColor,
    fontSize,
  },
  addExpenseButton: {
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 20,
    backgroundColor: primaryColor,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: padding / 2,
  },
  addExpenseButtonText: {
    color: secondaryColor,
    fontSize,
  },
  separator: {
    height: 100,
  },
  transactionsWrapper: {
    height: '35%',
    paddingHorizontal: padding,
  },
  transactionsHeader: {
    backgroundColor: secondaryColor,
    flexDirection: 'row',
    borderColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  transactionsHeaderAmount: {
    width: '30%',
    fontWeight: extraBold,
    paddingLeft: 8,
    fontSize,
  },
  transactionsHeaderDate: {
    width: '50%',
    fontWeight: extraBold,
    fontSize,
  },
  transactionsRow: {
    flexDirection: 'row',
    borderColor,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
  },
  transactionsEvenRow: {
    backgroundColor: rowColor,
  },
  transactionsRowAmount: {
    width: '30%',
    fontWeight: bold,
    paddingLeft: 12,
    fontSize: 17,
  },
  transactionsRowDate: {
    width: '50%',
    fontSize: 17,
  },
  updateContainer: {
    flexDirection: 'column',
    height: Dimensions.get('screen').height,
    backgroundColor: secondaryColor,
  },
  updateWrapper: {
    padding,
  },
  textInput: {
    borderWidth: 1,
    borderColor,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    fontSize,
    paddingHorizontal: 16,
  },
  saveButton: {
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 20,
    backgroundColor: primaryColor,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  accountPicker: {
    paddingBottom: padding,
    paddingTop: padding / 2,
    flexDirection: 'row',
  },
  accountPickerItem: {
    marginRight: padding / 2,
  },
  accountPickerItemSelected: {
    fontWeight: extraBold,
    color: primaryColor,
    textDecorationLine: 'underline',
  },
});

export default styles;
