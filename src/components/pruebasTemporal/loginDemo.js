import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
        }),
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm({});
            actions.setSubmitting(false);
        },
    });
    return (
        <><form onSubmit={formik.handleSubmit}>
            <div className="form-floating">                
                <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    id="email" 
                    placeholder="Email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating">
                <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    id="password" 
                    placeholder="Password" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                <label htmlFor="password">Password</label>
            </div>
            <button className='btn btn-primary' type="submit">Submit</button>
        </form></>
    );
};