import React, {Component} from 'react'
import '../CSS/Screen.css'

class Screen extends Component {

    constructor(props) {
        super();
        this.state = {
            lesson: props.lesson,
            position: props.position,
            content: ""
        }
    }

    componentDidMount() {
        if (this.state.lesson === "components") {
            if (this.state.position === 0) {
                this.setState({
                    content: "C"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME NOTIONS ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME CHALLENGE ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }
        if (this.state.lesson === "states") {
            if (this.state.position === 0) {
                this.setState({
                    content: "S"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }
        if (this.state.lesson === "lifecycles") {
            if (this.state.position === 0) {
                this.setState({
                    content: "L"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }
        if (this.state.lesson === "forms") {
            if (this.state.position === 0) {
                this.setState({
                    content: "F"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }
        if (this.state.lesson === "events") {
            if (this.state.position === 0) {
                this.setState({
                    content: "E"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }
        if (this.state.lesson === "keys") {
            if (this.state.position === 0) {
                this.setState({
                    content: "K"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }
        if (this.state.lesson === "animations") {
            if (this.state.position === 0) {
                this.setState({
                    content: "A"
                })
            }
            if (this.state.position === 1) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
            if (this.state.position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE"
                })
            }
        }

    }

    render() {
        return (
            <div className={"screen"}>
                {this.state.content}
            </div>
        )
    }


}

export default Screen;
