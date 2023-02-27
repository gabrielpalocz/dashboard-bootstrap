import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AiOutlineEye } from 'react-icons/ai';

const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

let emailClassName = 'form-control shadow-none rounded-4';
let emailLabelClassName = 'text-body';
let emailLabelTextClassName = 'Email address';
let passwordClassName = 'form-control shadow-none border border-0 rounded-4';
let passwordLabelClassName = 'text-body';
let passwordLabeltextClassName = 'Password';
let passwordCardClassName = 'card rounded-4';

export const LoginValidationSchema = () => (

    <div>
        <Formik
            initialValues={{
                email: '',
                password: '',
                loginCheck: false,
            }}
            validationSchema={LoginFormSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                alert(JSON.stringify(values, null, 2));
                actions.resetForm({});
                actions.setSubmitting(false);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="d-grid gap-3 p-2">
                        <div className="form-floating">
                            <Field
                                type="email"
                                name="email"
                                className={emailClassName}
                                placeholder="Email" />
                            {touched.email && errors.email ? (
                                (() => {
                                    emailClassName += ' is-invalid ';
                                    emailLabelClassName = 'text-danger';
                                    emailLabelTextClassName = `${errors.email}`
                                })()
                            ) : (() => {
                                emailClassName = 'form-control shadow-none rounded-4';
                                emailLabelClassName = 'text-body';
                                emailLabelTextClassName = 'Email address'
                            })()}
                            <label htmlFor="email" ><p className={emailLabelClassName}>{emailLabelTextClassName}</p></label>
                        </div>
                        <div class={ passwordCardClassName } >
                            <div class="card-body d-flex justify-content-center p-0">
                                <div class="input-group has-validation">
                                    <div className="form-floating p-0">
                                        <Field
                                            type="password"
                                            name="password"
                                            className={passwordClassName}
                                            placeholder="Password" />
                                        {touched.password && errors.password ? (
                                            (() => {
                                                passwordClassName += ' is-invalid';
                                                passwordLabelClassName = 'text-danger';
                                                passwordLabeltextClassName = `${errors.password}`;
                                                passwordCardClassName += ' border-danger'
                                            })()
                                        ) : (() => {
                                            passwordClassName = 'form-control shadow-none border border-0 rounded-4';
                                            passwordLabelClassName = 'text-body';
                                            passwordLabeltextClassName = 'Password';
                                            passwordCardClassName = 'card rounded-4';
                                        })()}
                                        <label htmlFor="password" ><p className={passwordLabelClassName}>{passwordLabeltextClassName}</p></label>
                                    </div>
                                    <span className="input-group-text rounded-4 border border-0" style={{ backgroundColor: 'white' }}> <span className="nav-link" role="button" onClick={() => window.location.reload()} ><AiOutlineEye /></span></span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between p-1'>
                            <div className='d-flex '>
                                <Field type="checkbox" name='loginCheck' />
                                <label className="form-check-label ms-2" htmlFor="loginCheck">
                                    Remember me
                                </label>
                            </div>
                            <span className="nav-link " role="button" onClick={() => window.location.reload()} >Forgot Password?</span>
                        </div>
                        <button className='btn rounded-3 p-2 fw-bold' type="submit" style={{ backgroundColor: '#6456ff', color: 'white', textDecoration: 'bold' }}>Log In</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);
