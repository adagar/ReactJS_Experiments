const initState = {
  posts: [
    {
      id: "1",
      title: "some pumpkins harvested",
      body:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, labore corrupti qui reprehenderit amet odio delectus, illum voluptatum sequi consequuntur doloremque exercitationem eaque ab. Aliquid dicta at aspernatur alias consequuntur?"
    },
    {
      id: "2",
      title: "milk the cows",
      body:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, labore corrupti qui reprehenderit amet odio delectus, illum voluptatum sequi consequuntur doloremque exercitationem eaque ab. Aliquid dicta at aspernatur alias consequuntur?"
    },
    {
      id: "3",
      title: "chop some trees down",
      body:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, labore corrupti qui reprehenderit amet odio delectus, illum voluptatum sequi consequuntur doloremque exercitationem eaque ab. Aliquid dicta at aspernatur alias consequuntur?"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
