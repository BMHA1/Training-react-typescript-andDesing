import { legacy_createStore as createStore } from 'redux';
import { dataReducer } from './DataReducer'


export const store = createStore(dataReducer)