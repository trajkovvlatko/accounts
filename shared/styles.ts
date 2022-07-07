import {Dimensions, StyleSheet} from 'react-native';

const primaryColor = '#A358ED';
const secondaryColor = '#FFFFFF';
const textColor = '#444444';
const borderColor = '#C7C7C7';
const fontSize = 16;
const bold = '500';
const extraBold = '900';
const padding = 32;

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: secondaryColor,
  },
  scrollView: {
    height: '50%',
  },
  wrapper: {
    padding,
  },
  header: {
    flex: 1,
    height: 45,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backHeader: {
    alignItems: 'flex-start',
    paddingLeft: padding,
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
  },
  text: {
    fontSize,
  },
  deleteText: {
    fontSize: 14,
    color: primaryColor,
  },
  buttonsWrapper: {
    flexDirection: 'row',
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
    width: '48%',
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
    width: '48%',
  },
  addExpenseButtonText: {
    color: secondaryColor,
    fontSize,
  },
  separator: {
    height: 100,
  },
  transactionsWrapper: {
    height: '50%',
    paddingBottom: padding,
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
  },
  transactionsHeaderDate: {
    width: '50%',
    fontWeight: extraBold,
  },
  transactionsRow: {
    flexDirection: 'row',
    borderColor,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  transactionsRowAmount: {
    width: '30%',
  },
  transactionsRowDate: {
    width: '50%',
  },
  updateContainer: {
    flexDirection: 'column',
    height: Dimensions.get('screen').height,
    backgroundColor: secondaryColor,
  },
  updateWrapper: {
    padding,
    paddingTop: 200,
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
});

export default styles;
