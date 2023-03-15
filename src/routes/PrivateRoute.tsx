import React, { Suspense } from "react";
import { tokenService } from "../api";
import { Navigate } from "react-router-dom";
import { Loader } from "../components";
import { InnerLayout } from "../layouts/InnerLayout";

export const PrivateRoute = () => {
  const hasUser = !!tokenService.get();

  return hasUser ? (
    <Suspense fallback={<Loader />}>
      <InnerLayout />
    </Suspense>
  ) : (
    <Navigate to="/auth" />
  );
};
