import * as React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import {FC, useState} from 'react';
import * as Yup from 'yup';

export type FormProps = {};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const ValidatedForm: FC<FormProps> = (props: FormProps) => {
  const [form, setForm] = useState({});

  console.log(form);

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{firstName: '', lastName: '', email: ''}}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await sleep(600);
          setForm(values);
          console.log(values);
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <div>
              First Name:
              <Field name="firstName" placeholder="First Name"/>
              <ErrorMessage name="firstName"/>
            </div>
            <div>
              Last Name:
              <Field name="lastName" placeholder="Last Name"/>
              <ErrorMessage name="lastName"/>
            </div>
            <div>
              Email:
              <Field name="email" placeholder="user@here.com"/>
              <ErrorMessage name="email"/>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
