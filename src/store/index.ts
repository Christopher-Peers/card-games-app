import { createStore } from 'react-redux';

import rootReducer from './rootReducer';

export const store = createStore(rootReducer)