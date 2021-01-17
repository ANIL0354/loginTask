import React,{useMemo} from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
React.memo(function CountButton({onClick, count}) {
    return <button onClick={onClick}>{count}</button>
  })

const InputText=React.memo((props) => {
  return (
    <TextInput style={styles.inputContainerStyles}
          {...props}
      textAlignVertical='top'
    />
  );
});

export default InputText