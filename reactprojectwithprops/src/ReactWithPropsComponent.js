import React, {Component} from 'react'

class ReactWithPropsComponent extends Component
{
    render()
    {
        return(
            <div>
            <h1> Wecome to new {this.props.name}</h1>
            {this.props.children}
            </div>
        )
    }
}
export default ReactWithPropsComponent