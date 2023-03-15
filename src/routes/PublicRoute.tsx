import React, { Suspense } from "react";
import { tokenService } from "../api";
import { Navigate } from "react-router-dom";
import { Loader } from "../components";
import { MainLayout } from '../layouts';

export const PublicRoute = () => {
  const hasUser = !!tokenService.get();
  return hasUser ? (
    <Navigate to="/" />
  ) : (
    <Suspense fallback={<Loader />}>
      <MainLayout />
    </Suspense>
  );
};
