import React from "react";
class ClassCompo extends React.Component{
    render() {
        const {name,color}= this.props
        return <div>
          <p>  {name}</p>
            <p>  {color}</p>
        </div>
    }
}
export default ClassCompo;
