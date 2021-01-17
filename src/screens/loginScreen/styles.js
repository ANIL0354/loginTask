import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        padding: scale(50),
        flex: 1,
        backgroundColor: colors.white
    },
   inputContainerStyles: {
        height: verticalScale(50),
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
        top:verticalScale(-15)
    },
    loginButton: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(10),
        backgroundColor: colors.twitterBlue,
        marginTop: verticalScale(10)
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