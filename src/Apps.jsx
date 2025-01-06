import React from 'react'
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom'
import User from './userManagement/User'
import CreateUser from './userManagement/CreateUser'
import UpdateUser from './userManagement/UpdateUser'
import DeleteUser from './userManagement/DeleteUser'
import SearchUser from './userManagement/SearchUser'

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
                                <Link to="/">User</Link>
                            </li>
                        </div>
                        <div className="op-container">
                            <li>
                                <Link to="/create">Create User</Link>
                            </li>
                        </div>
                        <div className="op-container">
                            <li>
                                <Link to="/update">Update User</Link>
                            </li>
                        </div>
                        <div className="op-container">
                            <li>
                                <Link to="/search">Search User</Link>
                            </li>
                        </div>
                        <div className="op-container">
                            <li>
                                <Link to="/delete">Delete User</Link>
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
            <Route path='/search' element={<SearchUser/>}/>
            <Route path='/delete' element={<DeleteUser/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Apps