import ReactDOM from 'react-dom/client'
import {App} from './components/UI/App.tsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
