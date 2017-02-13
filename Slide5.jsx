//Modify Menu so that when the user clicks on a menu item
//it stays selected. Add the class 'focused' to a selected menu item

//create a Component named SelectedIndex which simply outputs:
//<div>***the index of the selected menu item***</div>
class App extends React.Component {
  render() {
    return (
      <div>
        <Menu items={ ['Home', 'Services', 'About', 'Contact us'] }/>
      </div>
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
    return (
      <div>
        <ul>
          {
            this.props.items.map((m, index) => {
              let style = '';

              if(this.state.focused == index){
                  style= 'focused';
              }
              // Notice the use of the bind() method. It makes the
              // index available to the clicked function:

              return <li className={style} onClick={this.clicked.bind(this, index)}>{m}</li>;
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
