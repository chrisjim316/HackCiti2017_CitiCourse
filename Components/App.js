import React, {Component} from 'react'
import Directory from '../Components/Directory'
import StackOverflow from '../Components/StackOverflow.js'
import logo from '../Images/Citibank-logo.png'
import '../CSS/App.css'

var lesson = "components";
var position = 0;
var points = 0;
class App extends Component {

    constructor() {
        super();

        this.state = ({
            content: "",
            buttonContent: "Notions",
            visibility: "hidden"
        });
        App.setLesson = App.setLesson.bind(this);
    }

    componentWillMount(){
        this.handleLesson()
    }

    static setLesson(l){
        lesson = l;
        position = 0;
        this.setState({
            visibility: "hidden"
        })
        this.handleLesson()
    }

    handleLesson(){
        if (lesson === "components") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"
                    })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME CHALLENGE ABOUT COMPONENTS IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
        if (lesson === "states") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"

                })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT STATES IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
        if (lesson === "lifecycles") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"
                })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT LIFECYCLES IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
        if (lesson === "forms") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"
                })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT FORMS IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
        if (lesson === "events") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"
                })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT EVENTS IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
        if (lesson === "keys") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"
                })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT KEYS IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
        if (lesson === "animations") {
            if (position === 0) {
                this.setState({
                    content: "Nathan is a university student who enjoys drawing art; he enjoys painting so much in his free-time that he decided to want to try to get his name out. \n He understands the importance of generating awarness, so people suggested to pay someone to construct a website that would show his artwork. \n" +
                    "Since he is just a University student, and he also would be intrested in learning programming, he decided to try to learn how to do this on his own. \n" +
                    "He needs to create a ReactJS app which would allow him to do this easily and efficiently. First thing he has to do is creating a folder for his project with all the different files that he is going to need. In 2016, Facebook released a really interesting npm (computer) command that is called \"create-react-app\" which allows Nathan to easily download all the libraries needed to implement his website. \n"
                })
            }
            if (position === 1) {
                this.setState({
                    content: "In this chapter, we will learn how to combine components to make the app easier to maintain. This approach allows to update and change your components without affecting the rest of the page.\n" +
                    "Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.\n"
                })
            }
            if (position === 2) {
                this.setState({
                    content: "SOME STORY ABOUT ANIMATIONS IS GOING TO BE DISPLAYED HERE",
                    visibility: "visible"
                })
            }
        }
    }

    buttonHandler(){
        if(position !== 2) {
            position++
            if(position === 1){
                this.setState({
                    buttonContent: "Challenge"
                })
            }
            else if(position === 2){
                points += 2
                this.setState({
                    buttonContent: "Submit"
                })
            }
        }
        this.handleLesson()
    }

    render() {
        return (
            <div className={"main"}>
                <div className={"directoryBar"}>
                    <img className={"citiLogo"} src={logo}/>
                    <div className={"form-group"}>
                      <h3>Stack Exchange Help</h3>
                      <StackOverflow className={"stackoverflow"}/>
                      <input className={"form-control chat-input"} value={this.state.input} method={"POST"}></input>
                      <a href={"https://stackoverflow.com/search"}><button controlId={"search"} onclick={"search()"}>Search</button></a>
                    </div>

                    <div onClick={() => App.setLesson("components")} style={{textDecoration: 'none'}}>
                    <Directory title={"Components"}/>
                    </div>
                    <div onClick={() => App.setLesson("states")}>
                        <Directory title={"States"}/>
                    </div>
                    <div onClick={() => App.setLesson("lifecycles")} style={{textDecoration: 'none'}}>
                        <Directory title={"Lifecycle Methods"}/>
                    </div>
                    <div onClick={() => App.setLesson("forms")}>
                        <Directory title={"Forms in React"}/>
                    </div>
                    <div onClick={() => App.setLesson("events")} style={{textDecoration: 'none'}}>
                        <Directory title={"Events"}/>
                    </div>
                    <div onClick={() => App.setLesson("keys")}>
                        <Directory title={"Keys"}/>
                    </div>
                    <div onClick={() => App.setLesson("animations")} style={{textDecoration: 'none'}}>
                        <Directory title={"Animation"}/>
                    </div>
                </div>

                <div className="screen">
                    <input className={"inputText"} style={{visibility: this.state.visibility}}/>
                    {this.state.content}
                </div>

                <button className={"lessonButton"} onClick={() => this.buttonHandler()}>
                    {this.state.buttonContent}
                </button>

                <div className={"profile"}>
                  <h2 controlId={"profile"}>Profile: Hi, <a href="https://codepen.io/liljimbos/full/pdeXbX/">Alex</a> welcome back!</h2>
                  <h3> You could be the next 'Citizen'</h3>
                  <br />
                  <div className="teamwork">
                    <h3>Bonus points for teamwork!</h3>
                    <a href="https://chrisjim316.github.io/Video/?username=alexcarter" target="_blank"><button><h1 controlId={"joinCall"}> Pair me up now</h1></button></a>
                  </div>
                  <div className="dashboard">
                    <h3> Points </h3>
                    <div className="points">{points}</div>
                  </div>
                </div>
            </div>
        )
    }

}

export default App;
