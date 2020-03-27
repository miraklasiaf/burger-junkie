import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useAuthDispatch } from '../../context/AuthContext'

const validation = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
})

export const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true)
  const { authentication } = useAuthDispatch()

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validation}
        onSubmit={({ email, password }, { setSubmitting }) => {
          authentication(email, password, isSignup)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='bg-blue-200 max-w-sm w-full text-blue-900 p-5 rounded-lg mt-4'>
            <div className='flex-flex-col relative pb-5'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-blue-900 pb-2'>Email</label>
                <Field className='rounded-lg py-2 px-4 w-full' id='email' type='email' name='email' />
              </div>
              <div className='absolute text-red-600 text-sm bottom-0 italic'>
                <ErrorMessage name='email' component='div' />
              </div>
            </div>
            <div className='flex flex-col relative pb-5 mt-2'>
              <label htmlFor='password' className='text-blue-900 pb-2'>Password</label>
              <Field className='rounded-lg py-2 px-4 w-full' type='password' name='password' id='password' autoComplete='on' />
              <div className='absolute text-red-600 text-sm bottom-0 italic'>
                <ErrorMessage name='password' component='div' />
              </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
              <button
                className='bg-blue-700 rounded-lg px-3 py-2 text-blue-100 text-sm'
                type='submit'
                disabled={isSubmitting}
              >
                            Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <button
        className='text-blue-900 text-sm mt-4'
        onClick={() => setIsSignup(!isSignup)}
      >
          Switch to {isSignup ? 'Sign In' : 'Sign Up'}
      </button>
    </>
  )
}
