//Now use the Welcome component to say hello to multiple persons.
class Welcome extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Hamid" />
      </div>
    );
  }
}

ReactDOM.render(
  <App name="Hamid"/>,
  document.getElementById('root')
);
