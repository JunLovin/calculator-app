import App from './App'
import DefaultError from './Error/DefaultError'

const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <DefaultError/>
    }
]

export default routes