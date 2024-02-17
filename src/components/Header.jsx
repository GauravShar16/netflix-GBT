import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            src="https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229"
            alt="userIcon"
          />
          <button
            onClick={() => handelSignOut()}
            className=" p-2 m-2 font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
