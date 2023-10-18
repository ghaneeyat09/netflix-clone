import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
// import { User } from 'firebase/auth';
const authorisedUser = localStorage.getItem("authorisedUser");
// const parsedUser = authorizedUser ? JSON.parse(authorizedUser) : null;
// const signedinUser = localStorage.getItem("signedinUser");

interface ProtectProps {
  children: ReactNode;
}

export const LoginProtect: React.FC<ProtectProps> = ({ children }) => {
  if (authorisedUser) {
    console.log("authorised user present")
    return <Navigate to="/movie-list" replace/>;
  }

  return <>{children}</>;
};

// export const MovieProtect: React.FC<ProtectProps> = ({ children }) => {
//   if (authorisedUser) {
//     console.log("authorised user present")
//     return <Navigate to="/login" replace/>;
//   }

//   return <>{children}</>;
// };
