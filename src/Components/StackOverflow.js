import React, {Component} from 'react'
import '../CSS/StackOverflow.css'
class StackOverflow extends Component{

    render(){
        return(
            <div className={"stackoverflow"}>
            </div>
        )
    }

    constructor (props) {
      super()
      this.state= ({
        input: props.input
      })
    }

}

export default StackOverflow;
