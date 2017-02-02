//now lets wire up the pieces that update the state
class Counter extends React.Component{
  incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button type="button" onClick={() => this.incrementCount()}>Increment</button>
      </div>
     )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
