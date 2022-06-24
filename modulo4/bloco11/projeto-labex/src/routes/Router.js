import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const Router = () => {

  
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/admin' element={<AdminHomePage />} />
            <Route path='/admin/trips/create' element={<CreateTripPage />} />
            <Route path='/trips/application/:id' element={<ApplicationFormPage />} />
            <Route path='/trips/list' element={<ListTripsPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default Router