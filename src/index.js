import React from 'react'
import ReactDOM from 'react-dom'

// Import css vendor
import 'react-confirm-alert/src/react-confirm-alert.css'

//import locale file
import App from './App'
import './Style/Main.scss'
import LocaleContextProvider from 'Context/LocaleContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<LocaleContextProvider>
			<App />
		</LocaleContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
