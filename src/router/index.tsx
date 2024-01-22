import {Route, Routes, Navigate } from 'react-router-dom'
// import SignIn from '../pages/auth/signin'
// import ResetPassword from '../pages/auth/reset-password'
// import NewPassword from '../pages/auth/new-password'
// import OverView from '../pages/overview'
// import AllCourses from '../pages/all-courses/all-courses'
// import Admin from '../pages/admin'
import Dashboard from '../pages/dashboard'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/dashboard'} />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/overview" element={<OverView />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path='/admin/*' element={<Admin />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default Router