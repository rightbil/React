import React from "react";
const HelloJSX = () => {
    // return(
    //     <div id : 'hello' className : 'dummyClass'>
    //         <h3>
    //             JSX Hello World!
    //         </h3>
    //     </div>
    // )
    // the above is the html way , below is the JSX format 
    return React.createElement('div', {id: 'hello', className : 'dummyClass'},
           React.createElement('h3',null, 'JSX Hello World'))
}
export default HelloJSX 