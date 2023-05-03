import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../auth/ui/components/checkingAuth";

import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRputer = () => {
  
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  } else {
    return (
      <Routes>
        {status === "authenticated" ? (
          <Route path="*" element={<JournalRoutes />} />
        ) : (
          <Route path="auth/*" element={<AuthRoutes />} />
        )}

        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    );
  }
};
