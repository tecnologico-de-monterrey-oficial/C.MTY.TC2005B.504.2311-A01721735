import { Navigate } from 'react-router-dom'

function Protected ({ isSignedIn, children }) {

    return isSignedIn ? children : <Navigate to='/Login' /> 
}

export default Protected;