import { createContext } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
 
  const authInfo = {
   
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
