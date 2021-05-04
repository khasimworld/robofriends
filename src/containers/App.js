import React from 'react';
import CardList from '../components/CardList.js';
//import {robots} from './robots.js'; //since robots.js doesnt do default export we use{}
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


//to perform search, we need to use state to communicate to b/w cardlist and search box.
//prop: is property. its just an input of the function and doesnt change. when we use it in building component, we call it pure componenet.
//STATE: is an object that describes the application. It changes
//parent componenet sets the state of the child component. That particular state becomes prep of the child component which can not change. 
//we should use state to change property that we give to componenet.
//ex:<cardlist robots={robots}/> the robots input should change according to the search. 
//<Scroll>//allows to Scroll
//<ErrorBoundry> allows to catch error

//For using state in the component, we need to create component as a class not as a function.
//the Class componenet always has Render() which returns something.
class App extends React.Component{
  constructor(){
    super();
    this.state={
        robots: [],
        searchfield: ''
    }
  }
  //js method
  onSearchChange=(event)=>{
    //event.target.value gives the value of search keyword
    this.setState({searchfield:`${event.target.value}`});
  }

  render(){
    //filter the robots by using string method include()
    //filter iterates over all the robots array.
    const filteredRobots=this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    
    if(this.state.robots.length===0){//if the api is slow display loading
      return <h1 className='tc'>Loading</h1>;
    }else{
      return (
        <div className='tc'>
          <h1 className='f1'>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }


  }

  //load robots info from the API instead of robots.js
  //this is called life cylce hook
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') //get the data from API
      .then((response) => { //convert the input response to json fille and return.
        return response.json();
      })
      .then((users) =>{//the json file has the users list which is input to the setstate method.
        this.setState({robots:users});
      })
    ;

  }

}

export default App;