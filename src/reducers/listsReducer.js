const initialState = [
  {
      title: "Last Episode",
      id: 0,
      cards: [
        {
            id:0,
            text: "we created a static list and static card"
        }
      ]
  }




]


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
      default: 
      return state;
    }
};

export default listsReducer; 