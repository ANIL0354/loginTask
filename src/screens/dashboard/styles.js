import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale,colors } from '../../theme';
const styles = StyleSheet.create({
    separatorStyle:{
        width: "100%",
        backgroundColor: colors.primaryOrange,
        height: verticalScale(2)
    },
    container: {
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10),
        backgroundColor:colors.white
    }
});

export default styles;