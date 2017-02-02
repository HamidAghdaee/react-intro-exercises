//let's play with props
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

ReactDOM.render(
  <HelloWorld name="Hamid"/>,
  document.getElementById('root')
);
