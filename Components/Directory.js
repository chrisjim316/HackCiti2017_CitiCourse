import React, {Component} from 'react'
import '../CSS/Directory.css'
class Directory extends Component{

    constructor(props){
        super();

        this.state = ({
                title: props.title
            }
        )
    }

    render(){
        return(
            <div>
                <h1 className="title">{this.state.title}</h1>
            </div>
        )
    }

}

export default Directory;
