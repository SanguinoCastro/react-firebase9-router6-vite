import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navegate = useNavigate();
  const { required, patternEmail, minLength, validateTrim } = formValidate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await loginUser(email, password);
      navegate("/");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title text='Login' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='email'
          placeholder='test@test.com'
          label='Inserta tu email'
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type='password'
          placeholder='*******'
          label='Inserta tu contraseña'
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <Button text='Login' type='submit' loading={loading} />
      </form>
    </>
  );
};

export default Login;
