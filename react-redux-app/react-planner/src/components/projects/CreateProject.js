import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    tasks: [
      { task: "task1", complete: false, id: 0 },
      { task: "task2", complete: false, id: 1 }
    ]
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    //console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Project Content</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
