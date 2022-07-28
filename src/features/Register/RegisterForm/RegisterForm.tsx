import React from 'react';

import FormGroup from '@mui/material/FormGroup/FormGroup';
import { Form, FormikProps } from 'formik';

import { EmailField } from 'common/components/Forms/EmailField/EmailField';
import { PasswordField } from 'common/components/Forms/PasswordField/PasswordField';
import { SubmitButton } from 'common/components/Forms/SubmitButton/SubmitButton';
import { RegisterFormType } from 'features/Register/RegisterTypes';
import { ReturnComponentType } from 'types/ReturnComponentType';

type PropsType = {
  formik: FormikProps<RegisterFormType>;
};
export const RegisterForm: React.FC<PropsType> = ({ formik }): ReturnComponentType => {
  const { isValid, dirty, isSubmitting } = { ...formik };

  return (
    <Form>
      <FormGroup>
        <EmailField name="email" label="Email" disabled={isSubmitting} />
        <PasswordField name="password" label="Password" disabled={isSubmitting} />
        <PasswordField
          name="confirmPassword"
          label="Confirm Password"
          disabled={isSubmitting}
        />
        <SubmitButton label="Sing Up" disabled={!isValid || !dirty || isSubmitting} />
      </FormGroup>
    </Form>
  );
};
