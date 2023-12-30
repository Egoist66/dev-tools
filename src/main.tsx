import ReactDOM from 'react-dom/client'
import {App} from './components/UI/App.tsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppStoreProvider} from "./store/provider/AppStoreProvider.tsx";
import {store} from "./store/store.ts";
import {spy} from "mobx";
import {injectStores} from "@mobx-devtools/tools";


spy((e) => {
    if(e.type === 'action'){
        console.log(e)
    }
})

injectStores({
    store
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppStoreProvider store={store}>
        <App />
    </AppStoreProvider>
)
