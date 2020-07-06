import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { cssValidOrInvalid, validateEmail } from "./utils";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputEmail">E-mail:</label>
          <input
            name="email"
            type="text"
            className={"form-control" + cssValidOrInvalid(errors, "email")}
            id="inputEmail"
            aria-describedby="emailHelp"
            ref={register({
              required: true,
              maxLength: 100,
              validate: { emailTest: (value) => validateEmail(value) },
            })}
          />
          <small id="passwordHelp" className="form-text text-danger">
            {errors.email?.type === "required" && "Write E-mail"}
            {errors.email?.type === "emailTest" && "Write E-mail Valid"}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Senha:</label>
          <input
            name="password"
            type="password"
            className={"form-control" + cssValidOrInvalid(errors, "password")}
            id="inputPassword"
            aria-describedby="passwordHelp"
            ref={register({ required: true, minLength: 5, maxLength: 30 })}
          />
          <small id="passwordHelp" className="form-text text-danger">
            {errors.password?.type === "required" && "Write Password"}
            {errors.password?.type === "minLength" &&
              "Write Password with 5 words"}
          </small>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Enter
        </button>
      </form>
    </div>
  );
}

export default App;
