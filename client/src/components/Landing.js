import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProperties} from '../actions'

 class Landing extends Component {
 componentDidMount(){
  this.props.fetchProperties()
}
   renderCreate(){
     if(this.props.isSignedIn){
       return(
         <div style={{ textAlign: 'right' }}>
           <Link to="/properties/new" className="ui button primary">List Your Property</Link>
         </div>

       )
     }
   }
   renderContent(){
     if(this.props.isSignedIn){
       return(
         <div>
           <h2 className="ui right floated header">Floated Content</h2>
           A Big Map
           <div className="ui clearing divider"></div>
           {this.renderCreate()}
         </div>

       )
     }
       return(
         <div>
           <h2 className="ui right floated header">Floated Content</h2>
           <div className="ui clearing divider"></div>
           <p>Login to list your property</p>
         </div>
       )
     }

  render(){
    return (
      <div className="ui segment">
        {this.renderContent()}
      </div>
    );
  }

}
const mapStateToProps=(state)=>{
  return{
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId,
    properties: Object.values(state.properties)
  }
}

export default connect(mapStateToProps,{fetchProperties}) (Landing)
