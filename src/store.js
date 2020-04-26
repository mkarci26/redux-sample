import configureStore from './configure-store'
import createHistory from 'history/createBrowserHistory';

export const store = configureStore()

export const history = createHistory();