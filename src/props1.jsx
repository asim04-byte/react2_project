import React from "react"
import ReactDOM from 'react-dom';
import ClassProps2 from "./props2";
class ClassProps extends React.Component{
    render()
    {
        let name2 = {name :"asim md",age:21}
        return(
            <div>
                <h1>your name is{this.props.name}</h1>
              <ClassProps2 name = {name2} />
            </div>
        )
    }
}

export default ClassProps;