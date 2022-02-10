import { Route,Routes } from "react-router-dom"

import Home from './Home'
import Login from "./Login"
import SignUp from "./SignUp"

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
        </Routes>
    )
}

export default Main