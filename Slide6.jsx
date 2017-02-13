//lets create a simple counter.
//Excercise: wire up the component so that when the user clicks on increment, the counter increments

class Counter extends React.Component{
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
        <button type="button">Increment</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
