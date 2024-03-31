import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from './Redux/store';
import store from './Redux/store';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<GoogleReCaptchaProvider reCaptchaKey="6Lf7i6gpAAAAACYEnXjxMVcz6Hqu2No6daGGVUpb">
    <Provider store={store}>
    <PersistGate persistor={persistor} >
    <App />
    </PersistGate>
    </Provider>
    </GoogleReCaptchaProvider>
    </>
);

reportWebVitals();
