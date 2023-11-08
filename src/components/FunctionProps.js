import React from "react"
//function Greet(){
// return <h1> Hello Bililign Gebru</h1>
//}
const FunctionProps = props =>{
console.log(props)
//return (<h3>Hello , {props.firstName }    { props.lastName } </h3>)
return (
<div>
    <h3>Functional Compnt , {props.firstName }    { props.lastName } </h3>
{props.children}
</div>
)

}
export default FunctionProps