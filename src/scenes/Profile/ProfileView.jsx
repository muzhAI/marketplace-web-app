import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Header } from '../../components';
import { Button, Avatar, FormInput } from '../../atoms';
import s from './Profile.module.scss';

export default function Profile({ viewer }) {
  return (
    <>
      <Header />
      <div className={s.userBox}>
        <h2 className={s.title}>Edit Profile</h2>
        <div className={s.avatarWrap}>
          <Avatar profile={viewer} />
        </div>
        <Formik
          initialValues={{
            avatar: '',
            fullName: '',
            phone: '',
          }}
          onSubmit={(body) => {}}
        >
          {() => (
            <Form className={s.form}>
              <Field
                primaryClass="authInput"
                label="full name"
                autoComplete="off"
                name="fullName"
                type="text"
                component={FormInput}
              />
              <Field
                primaryClass="authInput"
                label="phone number"
                name="phone"
                type="text"
                autoComplete="off"
                component={FormInput}
              />
              <div className={s.buttonWrap}>
                <Button primaryClass="primary-btn">Save</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
