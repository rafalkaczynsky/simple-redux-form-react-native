import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const submit = values => {
  console.log('submitting form', values)
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const Form = props => {

  const { handleSubmit } = props

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <Field name="email" component={renderInput} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default reduxForm({
  form: 'test'
})(Form)


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
  }
})

//---------
