//lets create a simple counter.
//for now let's just focus on reflecting the state in our 
//app
class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render(){
    return (
      <h1>{this.state.count}</h1>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
