import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale,colors } from '../../theme';
const styles = StyleSheet.create({
  inputContainerStyles: {
    height: 42,
    width: scale(310),
    borderColor: colors.approxGainsboro,
    borderRadius: 6,
    justifyContent: 'center',
    borderWidth: 1,
    paddingLeft: scale(5),
    fontSize: moderateScale(14),
    marginTop: verticalScale(10),
    color: colors.approxMatterhorn
    },
    inputContainer: {
        marginTop: verticalScale(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    passwordStyle: {
        position: "absolute",
        right: scale(3),
        top:verticalScale(-11)
    },
    loginButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.twitterBlue,
        marginTop: 10
    },
    errorStyle: {
        color:colors.red
    },
    loginText: {
        textAlign: 'center',
        color: colors.white,
        textTransform: "uppercase",
    }
});

export default styles;