import React from 'react'
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom'
import User from './userManagement/User'
import CreateUser from './userManagement/CreateUser'
import UpdateUser from './userManagement/UpdateUser'

const Apps = () => {
  return (
    <>
    <BrowserRouter>
        <div className="header-container">
            <nav>
                <div className="header-component">
                    <ul>
                        <div className="op-container">
                            <li>
                                <Link to="/">List the User</Link>
                            </li>
                        </div>
                        <div className="op-container">
                            <li>
                                <Link to="/create">Create User</Link>
                            </li>
                        </div>                        
                    </ul>
                </div>
            </nav>
        </div>
        <Routes>
            <Route path = '/' element={<User/>}/>
            <Route path='/create' element={<CreateUser/>}/>
            <Route path='/update/:id' element={<UpdateUser/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Apps