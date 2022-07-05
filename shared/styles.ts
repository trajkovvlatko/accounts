import {StyleSheet} from 'react-native';

const primaryColor = '#A358ED';
const secondaryColor = '#FFFFFF';
const textColor = '#444444';
const fontSize = 16;

const styles = StyleSheet.create({
  container: {},
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
});

export default styles;
