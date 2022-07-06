import {StyleSheet} from 'react-native';

const primaryColor = '#A358ED';
const secondaryColor = '#FFFFFF';
const textColor = '#444444';
const fontSize = 16;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  scrollView: {
    height: '50%',
  },
  wrapper: {
    padding: 32,
  },
  header: {
    flex: 1,
    height: 45,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: secondaryColor,
  },
  title: {
    color: textColor,
    textTransform: 'uppercase',
    fontSize,
    fontWeight: '500',
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
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  transactionsHeader: {
    backgroundColor: secondaryColor,
    flexDirection: 'row',
    borderColor: textColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  transactionsHeaderAmount: {
    width: '30%',
    fontWeight: '900',
  },
  transactionsHeaderDate: {
    width: '30%',
    fontWeight: '900',
  },
  transactionsRow: {
    flexDirection: 'row',
    borderColor: textColor,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  transactionsRowAmount: {
    width: '30%',
  },
  transactionsRowDate: {
    width: '30%',
  },
});

export default styles;
