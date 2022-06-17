import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  //Type Assertion
  //const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Toheeb",
      email: "toheeb@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </>
      ) : (
        <div>You are logged out</div>
      )}
    </div>
  );
};

export default User;
