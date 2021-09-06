import { createStore } from 'redux';

import reducer from './reducers';

export default createStore(
	reducer,
	// this lets us hook into the chrome extension. It adds a mddleware to our store to let us use the chrome extension
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__redux_devtools_extension__()
);
