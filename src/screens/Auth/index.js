import React, { useState, useEffect } from 'react'
import { validation } from './validation'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAuthContext } from '../../context/AuthContext'
import { useBurgerContext } from '../../context/BurgerContext'
import { Redirect } from 'react-router-dom'

export default function Auth() {
  const [isSignup, setIsSignup] = useState(true)
  const { makingBurger } = useBurgerContext()
  const { loggedIn, redirectPath, authentication, redirectAuth, error } = useAuthContext()

  useEffect(() => {
    if (!makingBurger && redirectPath !== '/') {
      redirectAuth()
    }
  }, [makingBurger, redirectPath, redirectAuth])

  let errorMessage = null;
  if (error) {
    errorMessage = (
      <p className="text-center text-lg text-gray-600">{error.message}</p>
    )
  }

  let redirect = null
  if(loggedIn){
    redirect = <Redirect to={redirectPath} />
  }

  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center px-5 pt-5 pb-56 border-context">
      {redirect}
      <h1 className="text-center text-blue-900 text-lg">
        Authentication page
      </h1>
      {errorMessage}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validation}
        onSubmit={({email, password}, { setSubmitting }) => {
          authentication(email, password, isSignup)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='bg-blue-200 max-w-sm w-full text-blue-900 p-5 rounded-lg mt-4'>
              <div className='flex-flex-col relative pb-5'>
                  <div className='flex flex-col'>
                      <label htmlFor='email' className='text-blue-900 pb-2'>Email</label>
                      <Field
                          className='rounded-lg py-2 px-4 w-full'
                          id='email'
                          type='email'
                          name='email'
                      />
                  </div>
                  <div className='absolute text-red-600 text-sm bottom-0 italic'>
                    <ErrorMessage name='email' component='div' />
                  </div>
              </div>
              <div className='flex flex-col mt-2'>
                  <label htmlFor='password' className='text-blue-900 pb-2'>Password</label>
                  <Field className='rounded-lg py-2 px-4 w-full' type='password' name='password' id='password'/>
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
    </div>
  )
}
