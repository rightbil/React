import React,{ Component } from 'react'
class ClassComponent extends Component{
    render(){
        return <h3>Class Compnt { this.props.firstName } { this.props.lastName } </h3>
    }
}
export default ClassComponent
