import React from "react";
import "./styles.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes } from "./routes";
import { connect } from "react-redux";
import { loadUsers } from "./actions/userActions";

const jsonUsers = require("../user_data.json");

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers(jsonUsers))
});

class App extends React.Component {
  componentDidMount = () => {
    this.props.loadUsers();
    // load users list into
  };

  render() {
    return (
      <>
        <Header />
        {Routes}
        <Footer />
      </>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
