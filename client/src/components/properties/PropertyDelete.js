import React from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import Modal from '../Modal'
import {fetchProperty, deleteProperty} from '../../actions'
import history from '../../history'

class PropertyDelete extends React.Component{
 renderActions(){
   const {id}=this.props.match.params
    return (
      <React.Fragment>
        <button
          onClick={()=>this.props.deleteProperty(id)}
          className="ui negative button"
          >
          Delete
        </button>
        <Link to="/" className="ui button">
        Cancel
      </Link>
      </React.Fragment>
    )
  }

  componentDidMount(){
    this.props.fetchProperty(this.props.match.params.id)
}
  renderContent(){
    if(!this.props.properties){
      return 'Are you sure you want to delete this listing?'
    }
    return `Are you sure you want to delete ${this.props.properties.address}`
  }
  render(){
    return(
       <Modal
         address='Property Delete'
         content={this.renderContent()}
         actions={this.renderActions()}
         onDismiss={()=>history.push('/')}
       />
    )
  }


}
const mapStateToProps = (state, ownProps)=>{

  return {properties: state.properties[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchProperty, deleteProperty}) (PropertyDelete)
