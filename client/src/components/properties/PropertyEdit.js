import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProperty, editProperty} from '../../actions'
import PropertiesForm from './PropertiesForm'

class PropertyEdit extends Component {
  componentDidMount(){
    this.props.fetchProperty(this.props.match.params.id)
  }
  onSubmit=(formValues)=>{
   this.props.editProperty(this.props.match.params.id, formValues)
  }
  render(){

      if(!this.props.properties){
        return <div>Loading...</div>
      }
    return(
      <div>
        <h3>Edit your property listing</h3>
        <PropertiesForm initialValues={_.pick(this.props.properties, 'address','latitude','longitude','name','asking_price','description')} onSubmit={this.onSubmit}/>
      </div>
    )
  }

}
const mapStateToProps = (state, ownProps)=>{

  return {properties: state.properties[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchProperty, editProperty}) (PropertyEdit)
