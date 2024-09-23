import React from "react";
class ClassProps2 extends React.Component{
    render()
    {
        return(
            <div>
                <h2>Your name is {this.props.name.name}</h2>
                <h3>Your age is {this.props.name.age}</h3>
            </div>
        )
    }
}

export default ClassProps2;