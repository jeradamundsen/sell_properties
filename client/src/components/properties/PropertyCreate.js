import React, { Component } from 'react';
import { connect } from 'react-redux'
import {propertyCreate} from '../../actions'
import PropertiesForm from './PropertiesForm'

class PropertyCreate extends Component{

  onSubmit= formValues=>{
    this.props.propertyCreate(formValues)
  }

  render(){
  return (
    <div>
      <h3>Add Your Property</h3>
      <PropertiesForm onSubmit={this.onSubmit}/>
    </div>

  )
}
}

export default connect(
  null, {propertyCreate})(PropertyCreate)
