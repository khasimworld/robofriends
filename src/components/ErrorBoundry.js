import React from 'react';

//this cathces the error end renders the our desired output error.
//if there is no error, then it executes the componenets in between <ErrorBoundry>props.children </ErrorBoundry> 
class ErrorBoundry extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hasError: false
    }
  }
  
  render(){
    if(this.state.hasError){
      return <h1>Ooops! Something went wrong.</h1>
    }else{
      return this.props.children;
    }
  }

  //when the error occurs, we change the state using follwing lifecycle method
  componentDidCatch(error,info){
    this.setState({hasError:true});
  }

}

export default ErrorBoundry;