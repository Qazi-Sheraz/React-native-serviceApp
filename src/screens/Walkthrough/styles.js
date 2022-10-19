import {Platform, StyleSheet} from 'react-native';
import {colors, family, size} from '../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: size.text_30,
    color: colors.b1,
    fontWeight: 'bold',
    fontFamily: family.Ubuntu_Bold,
  },
});

export default styles;
