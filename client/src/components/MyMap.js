import React from 'react'
import ReactDOM from 'react-dom'

class MyMap extends React.Component{
  constructor(props){
    super()
    this.mapRef=React.createRef()
  }
  componentDidMount(){
    this.createPortal()
  }
  createPortal(){
    return ReactDOM.createPortal(
      <div>
        <div>Look at the cool map!!!</div>
      </div>,
      document.querySelector('#map')
    )
  }
  componentDidUpdate(){
    this.createGoogleMap()
  }

  createGoogleMap =()=>{
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 32.776665,
        lng: -96.796989
      },
      disableDefaultUI: true,
    })

}
render(){
  return(
    <div>
      <map ref={this.mapRef} style={{width:'100%', height:'400px'}}/>
    </div>
  )
}
}
export default MyMap
