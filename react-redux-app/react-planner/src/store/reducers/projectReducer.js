const initState = {
  projects: [
    { id: "1", title: "find the heart key", content: "blah blah blah" },
    {
      id: "2",
      title: "get the second electric component",
      content: "blah blah blah"
    },
    { id: "3", title: "install the large gear", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      break;
    case "CREATE_PROJECT_ERROR":
      console.log("Project creation error!", action.err);
      break;
    default:
      break;
  }
  return state;
};

export default projectReducer;
