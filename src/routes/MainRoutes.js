import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MyCourses from "../components/MyCourses/MyCourses";
import HomePage from "../components/HomePage/HomePage";
import Page from "../components/Page/Page";
import Auth from "../components/Auth/Auth";
import AddCourses from "../components/AddCourses/AddCourses";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../const";

const MainRoutes = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const PUBLIC = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/my-courses", element: <MyCourses />, id: 2 },
    { link: "/page", element: <Page />, id: 3 },
    { link: "/auth", element: <Auth />, id: 4 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/add-courses", element: <AddCourses />, id: 5 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
