import React from 'react';
import { Provider } from 'react-redux';
import CourseList from './componets/CourseList';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}

export default App;
