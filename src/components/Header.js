import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //sign-out successful
        navigate("/");
      })
      .catch((error) => {
        // sign-out failed
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>

      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX19fUAAAD8/PwFBQXy8vIbGxvj4+OxsbH39/dERESOjo52dnbExMQYGBjU1NS5ublVVVV8fHzt7e2EhIQTExPc3Nw/Pz9GRkaSkpI1NTVhYWGIiIhZWVm1tbXPz8+qqqowMDAjIyOdnZ1ubm4RmHQrAAAE2UlEQVR4nO2d61bbOhBGZdmEyYX44NZJgRxC2vd/xyPJDrk5TmM8IzHn2/0DXV0ouzPIuoxkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAIgNuT8i7cg009m0FSGaIdn630cR3slGEaxfMyleFlY+jlQ/ZVku4pe7ZrbiUSRauZalDF07tXQQ7UJE7sCzFeq5Pw1/CKXong9hQ7JzYcOHQjqGc1E/byj8WIQhDGGYmOHzjIk8FcOaa1bxMxXDJVPblEwMlzyNU0qGPI3AkBUYjgIMWYHhKMCQFZ2G5Gm/1mdIBdli+V7vJfUZGmtmT66hl0ethlSsm8Vnv3Bp9BlSEGzZ+j0EZYZUVNP98mie7Xxb2gyro02KPAipMiQveLzPVFpdhmSK1ekKvjJD18lM215Up6ETXJ3vwZTuqX+yM/O9DS8FnaGeGLpOxqXoZQwNnewf1lz/veyGrpNZd2wT+hjSYv+7mWcfXGUEAoY+RbsNDR0GOY/f1bBJ0auG9a799pmtEoTZkEy1vpA7GBqahHqan1u+Uhduw+4U/YxhYWy1KN8LxkIXVkOXouvsSklQMCyCpqf4ljF0s4muXvQ4SwVgNayupagOw2YsqjiGrhed9tUDKTC8mE3oMgwT3t6KrrsNi6EfhcmwP0W9oS9M/lvs0TJyEobds4lTfi3u4n1izbCqOw7DyyWLMZhXdtCwgMXw6lBtOO7H7SaDxnbjG16dTXxZcZVGDF2K3upkBjuWQ4I4vmHfUO2LzBMw7JtNfJU828Q3PN6bYOCfBAwZUzQFQ84UTcLw1mxCgaF70Gs2bLfPWIkcQ+4UjW3YpCizYkTDUITAf4QppqEXVG1oN/wpGtWQhE5KxjO0P9QbbmROSkY0fFVv+FvCL2pPU2s3lApi1DGNSG8adVwaSmMUj0v92fpnXrvohqYQeOxHnh8S/x0QsVcxjH3jFYxvSF6RM4zRDUOichLfkHuWkYIhZxTzJAx5n4uvKRiyJupbGoa+R81H71PDjxtUCs6wj092lo3/1MiHVtmyVJvYXxzPxT/DPh1PxZCL4q1EfbqPh005sIyYqSYqDOBuVX39fU2U/4mD565MlXv+d7Hf8L6QECVW19YmquLaRHMzigoMqb9HVWDYRFFxFbSnL1F1GLaJ2nOi5PNfjtru6YdgPTPTM4BrY+gLgB3jNnv6GZhPBfko9mQpUbWd/3lbMF7VzH6yyyl2DuAaQ1s298VtKrZEZT9/eC1Rg6Et99+uCq47xQVOyXavwIUzpNX+xr88m3FdgCtxhrRzplH6WyO2R3/LdlKeP4bdM41wlvt4Tecbn+U2nY/+srn5I1di2NGjajqPH7iIojpDOldUZxi6m+MhqkLDs0SdGH2GzUwjtNduQWgz3Cselq/VGR7NNBYqbzMzvpxhOf/Yrd4mTTsKDX0Y/dWCbTMqDf2UUfHNkG2Tn19pNTwAw1GAISswHAUYsgLDUYAhK/83Q8vxvk43yk/mTTov0/V0fNbrVTIxlACGMIThGWc7M/zk2UMlG0OSj+HgW98GcrWMgYup9AuBaSmcpb/FX3ksnKYvlWxPanxnI/da7izb1RHePU60nQr5fczkIxgMiaqJCBThzeqN4h3l3l9F+IXOAAAAAAAAAAAAAAAAAAAAAAAAAABAMf8BEeBzXB3XqUUAAAAASUVORK5CYII="
            alt="logo"
          ></img>

          <button className="font-bold text-white" onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
