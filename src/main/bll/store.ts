import {combineReducers, createStore} from 'redux'
import {rootReducer} from './rootReducer'

const reducers = combineReducers({
  rootReducer
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
