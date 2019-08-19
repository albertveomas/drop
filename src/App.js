import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    click: false,
    option: [
      { id: 1, value: "Name" },
      { id: 2, value: "Role" },
      { id: 3, value: "Log out" }
    ]
  };

  showBox = () => {
    const { click, option } = this.state;
    this.setState({
      click: !click,
      option
    });
  };
  render() {
    const { click, option } = this.state;
    return (
      <Router>
        <div className="App">
          <div className="icon">
            <i class="fas fa-user fa-xl" onClick={this.showBox} />
          </div>
          {click ? (
            <div className="container">
              {option.map(item => (
                <Link to="#" className="link" key={item.id}>
                  {item.value}
                </Link>
              ))}
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
