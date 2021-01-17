import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale,colors } from '../../../theme';
const styles = StyleSheet.create({
  inputContainerStyles: {
    height: 42,
    width: '100%',
    borderColor: colors.approxGainsboro,
    borderRadius: 6,
    justifyContent: 'center',
    borderWidth: 1,
    paddingLeft: scale(5),
    fontSize: moderateScale(14),
    marginTop: verticalScale(10),
    color: colors.approxMatterhorn
  }
});

export default styles;