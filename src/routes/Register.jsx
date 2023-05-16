import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  const { registerUser } = useContext(UserContext);
  const navegate = useNavigate();
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title text='Registro de Usuario' />
      <FormError error={errors.firebase} />
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
          label='Inserta la contraseña'
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type='password'
          placeholder='*******'
          label='Repite la contraseña'
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          error={errors.repassword}
        >
          <FormError error={errors.repassword} />
        </FormInput>
        <Button text='Registrate' type='submit' />
      </form>
    </>
  );
};

export default Register;
