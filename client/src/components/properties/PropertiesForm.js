import React, {PureComponent} from 'react'
import { Field, reduxForm } from 'redux-form'
import Geosuggest from 'react-geosuggest'
// import streamForm from './StreamForm'

class PropertiesForm extends PureComponent{
  renderError({error,touched}){
    if(touched && error){
      return(
        <div className=" ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  //render input receives argument formProps. input and label are destructured off of formProps//
  //also onChange and value are also destructured form formProps//
  // <input value={formProps.input.value} onChange=formProps.input.onChange/>
  renderInput=({input,label, meta})=>{
    const className= `field ${meta.touched && meta.error ? 'error': ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>

    )
  }
  onSubmit= formValues=>{
    this.props.onSubmit(formValues)
  }

  render(){
//put ui form error as className so that erorr message display otherwise semantic UI hides them. //
  return (
    <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="address" component={this.renderInput} label="enter address"/>
        <Field name="latitude" component={this.renderInput} label="latitude, leave black if unknown"/>
          <Field name="longitude" component={this.renderInput} label="longitude, leave blank if unknown"/>
        <Field name="name" component={this.renderInput} label="enter name"/>
        <Field name="asking_price" component={this.renderInput} label="enter asking price"/>
        <Field name="description" component={this.renderInput} label="enter property description"/>
        <button className="ui button primary">Submit</button>
    </form>

  )
}
}
const validate =(formValues)=>{
  const errors={}
  if(!formValues.address){
    errors.address='you must input an address '
  }
  if(!formValues.name){
    errors.name='you must input property owners name '
  }
  if(!formValues.asking_price){
    errors.asking_price='you must input an asking price '
  }
  if(!formValues.description){
    errors.description='you must create a description'
  }
  return errors
}

export default reduxForm({
  form: 'propertiesForm',
  validate: validate
})(PropertiesForm)
