import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchProperties } from '../../actions'

class PropertiesList extends React.Component{
  componentDidMount(){
    this.props.fetchProperties()
  }

  renderAdmin(property){
    if(property.userId===this.props.currentUserId){
      return (
        <div className="right floated content">
          <Link to={`/properties/edit/${property.id}`} className="ui button primary">
          Edit
        </Link>
          <Link to={`/properties/delete/${property.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
  }

  renderList(){
     return  this.props.properties.map(property=>{
       return (
        <div className="item" key={property.id}>
          {this.renderAdmin(property)}
          <i className="large middle aligned icon home"/>
          <div className="content">
            <Link to={`/streams/${property.id}`}>
              <div className="header">{property.address}</div>
              {property.asking_price}
            </Link>
              <div className="description">{property.description}</div>
          </div>

        </div>
      )
    })
  }

  renderCreate(){
    if(this.props.isSignedIn){
      return(
        <div style={{ textAlign: 'right' }}>
          <Link to="/properties/new" className="ui button primary">Add Property</Link>
        </div>

      )
    }
  }
  render(){
    return (
      <div>
        <h2>Properties</h2>
        <div className="ui celled list">{this.renderList()}</div>

          {this.renderCreate()}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
 return{
   properties: Object.values(state.properties),
   currentUserId: state.auth.userId,
   isSignedIn: state.auth.isSignedIn
 }
}
export default connect(mapStateToProps, {fetchProperties}) (PropertiesList)
