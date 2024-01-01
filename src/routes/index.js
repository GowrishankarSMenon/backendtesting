import React from "react";
import { Routes, Route, } from "react-router-dom";

// components
import Registration from "../pages/registration";
import Dashboard from "../pages/dashboard";
import ForgotPassword from "../components/forgotpassword";
import { CategoryPage } from "../pages/categoryPage";
import AccountPage from "../pages/accountPage";
import JobDescriptionPage from "../pages/jobDescriptionPage";
import ProfilePage from "../pages/profilePage";
import SearchJobsPage from "../pages/searchJobsPage";
import JobAppliedPage from "../pages/jobAppliedPage";
import ReferredJobsPage from "../pages/referredJobsPage";
import RepositoryPage from "../pages/repositoryPage";
import SaveJobsPage from "../pages/saveJobsPage";
import Protected from "../components/Protected";
import { HomePage } from "../pages/Home";
import AcademicPage from "../pages/academicPage";
import PageNotFound from "../pages/PageNotFound";

export default function AllRoutes() {
  //localStorage.removeItem("login");
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Dashboard />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/password" element={<ForgotPassword />} />
      {/* protected */}
      <Route
        path="/category"
        element={<Protected Component={CategoryPage} />}
      />
      <Route
        path="/my-profile"
        element={<Protected Component={ProfilePage} />}
      />
      <Route
        path="/search"
        element={<Protected Component={SearchJobsPage} />}
      />
      <Route
        path="/referred-jobs"
        element={<Protected Component={ReferredJobsPage} />}
      />
      <Route path="/savejob" element={<Protected Component={SaveJobsPage} />} />
      <Route
        path="/job-description"
        element={<Protected Component={JobDescriptionPage} />}
      />
      <Route
        path="/job-applied"
        element={<Protected Component={JobAppliedPage} />}
      />
      <Route
        path="/repository"
        element={<Protected Component={RepositoryPage} />}
      />
      <Route
        path={`/my-profile/:title`}
        element={<Protected Component={AcademicPage} />}
      />
      <Route path='*' element={<Protected Component={PageNotFound} />}/>
    </Routes>
  );
}
