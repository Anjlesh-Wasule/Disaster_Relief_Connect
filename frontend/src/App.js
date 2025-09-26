import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthTypes } from "./redux/action_types";
import { getAccountInfo } from "./redux/Actions/profileAction";

// Importing Pages
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";
import Disasters from "./pages/Disasters";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Login from "./pages/Auth/Login";
import ChangePassword from "./pages/Auth/ChangePassword";
import SignUp from "./pages/Auth/SignUp";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UpdateProfile from "./pages/UpdateProfile";
import AgencyProfile from "./pages/AgencyProfile";
import UpdateDisaster from "./pages/UpdateDisaster";
import UpdateResource from "./pages/UpdateResource";
import ResourceDetails from "./components/ResourceDetails";
import Alert from "./pages/Alert";
import CreateAlert from "./components/CreateAlert";
import AddDisaster from "./components/AddDisaster";
import DisasterDetails from "./components/DisasterDetails";
import AddResources from "./components/AddResource";
import AboutUs from "./pages/AboutUs"; 
// Private Route Wrapper
function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedin);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const dispatch = useDispatch();

  // Check session storage for token and log in if exists
  useEffect(() => {
    const token = sessionStorage.getItem("_token");
    if (token) {
      dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: token });
      dispatch(getAccountInfo());
    }
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Private Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/agencies"
          element={
            <PrivateRoute>
              <Agencies />
            </PrivateRoute>
          }
        />
        <Route
          path="/agency-profile/:id"
          element={
            <PrivateRoute>
              <AgencyProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/disasters"
          element={
            <PrivateRoute>
              <Disasters />
            </PrivateRoute>
          }
        />
        <Route
          path="/disaster/:disasterId"
          element={
            <PrivateRoute>
              <DisasterDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/disaster/:disasterId/update"
          element={
            <PrivateRoute>
              <UpdateDisaster />
            </PrivateRoute>
          }
        />
        <Route
          path="/addDisaster"
          element={
            <PrivateRoute>
              <AddDisaster />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          }
        />
        <Route
          path="/resource/:resourceId"
          element={
            <PrivateRoute>
              <ResourceDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/updateResource/:resourceId"
          element={
            <PrivateRoute>
              <UpdateResource />
            </PrivateRoute>
          }
        />
        <Route
          path="/addResource"
          element={
            <PrivateRoute>
              <AddResources />
            </PrivateRoute>
          }
        />
        <Route
          path="/alert"
          element={
            <PrivateRoute>
              <Alert />
            </PrivateRoute>
          }
        />
        <Route
          path="/createAlert"
          element={
            <PrivateRoute>
              <CreateAlert />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
