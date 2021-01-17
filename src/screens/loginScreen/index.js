import React,{useState,useCallback,useEffect} from 'react';
import { View,Text,TouchableOpacity, SafeAreaView } from 'react-native';
import CustomInput from '../../components/atoms/customInput'
import { Ionicons } from '@expo/vector-icons';
import {EMAIL_REGX} from '../../constants'
import styles from './styles'


const loginScreen = ({ navigation}) => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [emailValid, setEmailValid] = useState('')
    const [passwordValid, setPasswordValid] = useState('')
    const [response,setResponse]=useState('')
    const onUserNameChange = useCallback((value) => {
        setUserName(value)
        setResponse("")
    }, [])
    const onPasswordChange = useCallback((value) => {
        setPassword(value)
        setResponse("")
    }, [])
    const emailValidor = () => {
        if (!userName) { 
            return false
        }
        if (!EMAIL_REGX.test(userName)) {
            setEmailValid("Email is not valid!")
            return false
        } else {
            setEmailValid("")
            return true
        }
    }
    const passwordValidator = () => {
        if (!password) { 
            return false
        }
         else {
            setPasswordValid("")
            return true
        }
    }
    useEffect(() => { 
        emailValidor()
    }, [userName])
    useEffect(() => { 
        passwordValidator()
    }, [password])
    
    const onPress = () => { 
        if (passwordValidator() && emailValidor()) {
            if (userName === "hruday@gmail.com" && password === 'hruday123')
                navigation.navigate("Home")
            else {
                if (userName !== "hruday@gmail.com") {
                    setResponse('Email is wrong!')
                }
                else if (password !== 'hruday123') {
                    setResponse('Password is wrong!')
                }
                else { 
                    setResponse('Email and Password is wrong!')
                }
            }
        }
        else { 
            if (!userName) {
                setEmailValid("Email is required!")
            }
            if (!password) { 
                setPasswordValid("Password is required!")
            }
        }
    }
  return( <SafeAreaView style={{padding: 50, flex: 1, backgroundColor: '#fff'}}>
      <Text>LoginScreen</Text>
      <CustomInput label={"Username"} onChangeText={onUserNameChange} value={userName}
      />
      {emailValid && <Text style={styles.errorStyle}>{emailValid}</Text>}
      <View style={styles.inputContainer}> 
          <CustomInput label={"Password"} onChangeText={onPasswordChange} value={password}
              secureTextEntry={!passwordVisible}       
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons name={passwordVisible ? "ios-eye" : "ios-eye-off"} size={32} style={styles.passwordStyle }/> 
        </TouchableOpacity>
      </View>
      {passwordValid && <Text style={styles.errorStyle}>{passwordValid}</Text>}
      <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={{ bottom: 5, top: 5, left: 5, right: 5, }}
          style={styles.loginButton}
          onPress={onPress}>
          <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      {response && <Text style={styles.errorStyle}>{response}</Text>}
  </SafeAreaView>);
}

export default loginScreen;