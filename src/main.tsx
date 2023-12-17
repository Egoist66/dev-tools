import ReactDOM from 'react-dom/client'
import {App} from './components/UI/App.tsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppStoreProvider} from "./store/provider/AppStoreProvider.tsx";
import {store} from "./store/store.ts";
import {spy} from "mobx";


spy((e) => {
    if(e.type === 'action'){
        console.log(e)
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppStoreProvider store={store}>
        <App />
    </AppStoreProvider>
)
