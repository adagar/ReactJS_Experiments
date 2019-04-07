import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import {
  completeTask,
  uncompleteTask
} from "../../store/actions/projectActions";
import TodoList from "./TodoList";
import * as moment from "moment";

class ProjectDetails extends Component {
  handleComplete = id => {
    console.log(this.props.id, id);
    this.props.completeTask(this.props.id, id);
  };
  handleUncomplete = id => {
    console.log(this.props.id, id);
    this.props.uncompleteTask(this.props.id, id);
  };
  render() {
    const { auth, project } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action section">
              <TodoList
                tasks={project.tasks}
                completeTask={this.handleComplete}
                uncompleteTask={this.handleUncomplete}
              />
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return { project: project, auth: state.firebase.auth, id: id };
};

const mapDispatchToProps = dispatch => {
  return {
    completeTask: (project, task) => dispatch(completeTask(project, task)),
    uncompleteTask: (project, task) => dispatch(uncompleteTask(project, task))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
