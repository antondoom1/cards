import React, { useEffect } from 'react';

import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography/Typography';
import { Formik, FormikHelpers } from 'formik';
import { Navigate } from 'react-router-dom';

import { path } from 'common/enums/path';
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { changeRedirect } from 'features/Auth/Forgot/forgotReducer';
import { login } from 'features/Auth/User/Login/authReducer';
import style from 'features/Auth/User/Login/Login.module.css';
import { LoginForm } from 'features/Auth/User/Login/LoginForm/LoginForm';
import { LoginFormType } from 'features/Auth/User/Login/loginTypes';
import { validateLogin } from 'features/Auth/User/Login/validateLogin';

export const Login = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const submitLoginForm = async (
    values: LoginFormType,
    { setSubmitting }: FormikHelpers<LoginFormType>,
  ): Promise<void> => {
    await dispatch(login(values));
    setSubmitting(false);
  };

  useEffect(() => {
    dispatch(changeRedirect({ redirect: false }));
  }, [dispatch]);

  if (isLoggedIn) return <Navigate to={path.PROFILE} />;

  return (
    <Paper elevation={3} className={style.main}>
      <Typography variant="h4" className={style.title}>
        Sing In
      </Typography>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={validateLogin}
        onSubmit={submitLoginForm}
        validateOnMount={false}
      >
        {formik => <LoginForm formik={formik} />}
      </Formik>
    </Paper>
  );
};