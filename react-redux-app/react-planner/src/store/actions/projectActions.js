export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};

export const completeTask = (projectId, task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const project = firestore.collection("projects").doc(`${projectId}`);
    project
      .get()
      .then(doc => {
        if (doc.exists) {
          const tasks = doc.data().tasks;
          tasks[task]["complete"] = true;
          project
            .update({
              tasks: tasks
            })
            .then(() => {
              console.log("Task update!");
            });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
};

export const uncompleteTask = (projectId, task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const project = firestore.collection("projects").doc(`${projectId}`);
    project
      .get()
      .then(doc => {
        if (doc.exists) {
          const tasks = doc.data().tasks;
          tasks[task]["complete"] = false;
          project
            .update({
              tasks: tasks
            })
            .then(() => {
              console.log("Task update!");
            });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
};
