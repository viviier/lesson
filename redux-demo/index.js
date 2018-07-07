import {
	 createStore } from "redux";
	 
	 function reducer(state = 0, action) {

		   if (action.type === "inc") {

			       state += action.value;
				     }
		     return state;
	 }

const store = createStore(reducer);

store.subscribe(() => {

	  console.log(`store change: ${
		  store.getState()}`);
});

store.dispatch({
	type: "inc", value: 1 });

