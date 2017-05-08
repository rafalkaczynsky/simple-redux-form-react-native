import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

 // passing values into validation function
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

 // passing values into warning function
const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}


// Values that we can do something with 

const submit = values => {
  console.log('submitting form', values)
}

const renderInput = ({ input: { onChange, ...restInput }, firstProp, secondProp, meta: { touched, error, warning }}) => {
  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
        {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
    </View>

  )
}

const Form = props => {

const { handleSubmit, pristine, reset, submitting } = props
//  const { handleSubmit } = props

  return (
    <View style={styles.container}>

      <Text>User Name:</Text>
      <Field name="username" component={renderInput} />

      <Text>Email:</Text>
      <Field name="email" component={renderInput} />

      <Text>Age:</Text>
      <Field name="age" component={renderInput} />

      <TouchableOpacity disabled={submitting} onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={pristine || submitting} onPress={reset}>
        <Text style={styles.button}>Clear Values</Text>
      </TouchableOpacity>
    </View>
  )
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
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
    width: 250,
  }
})
