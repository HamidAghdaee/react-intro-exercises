//Modify Menu so that when the user clicks on a menu item
//it stays selected. Add the class 'focused' to a selected menu item

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Menu items={ ['Home', 'Services', 'About', 'Contact us'] }/>
      </div>
    );
  }
}
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

class Menu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      focused: 0
    }
  }

  clicked(index){
    // The click handler will update the state with
    // the index of the focused menu entry
    this.setState({focused: index});
  }

  render() {
    const self = this;
    return (
      <div>
        <ul>
          {
            this.props.items.map(function(m, index){
              let style = '';

              if(self.state.focused == index){
                  style= 'focused';
              }
              // Notice the use of the bind() method. It makes the
              // index available to the clicked function:

              return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
            })
          }
        </ul>
      </div>
    );
  }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
