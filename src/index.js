import React, {Component}  from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

//React component (counter)
class Count extends Component {
  render(){
    const {value,incrementAction} = this.props;
    return ( <div>
      <h1>Counter</h1>
      <button onClick={incrementAction}>Click here</button>
      <p>myvalue: {value}</p>
      </div>
    )
  }
}

//reducer
function increment_reducer(state={counter:0}, action) {
  const counter = state.counter
  switch(action.type){
    case 'increment': 
      return {
        counter : counter+1
      }
    default: 
      return state
  }
}

//action
const increment_action = {
    type: 'increment'
}

//store
const store = createStore(increment_reducer);

//Map state to prop
function mapStateToProps(state){
  return {
    value: state.counter
  }
}

//Map dispatch to prop
function mapDispatchToProps(dispatch){
  return {
    incrementAction: () => dispatch(increment_action) 
  }
}

//connect
const App = connect(mapStateToProps,mapDispatchToProps)(Count);

const Root = () => (
  <Provider store={store}>
    <App/> 
  </Provider>
);

ReactDOM.render(<Root />,document.getElementById("root"));

