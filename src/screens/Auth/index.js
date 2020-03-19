import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validation } from './validation'

export default function Auth() {

  return (
    <div className="bg-blue-100 h-full flex flex-col items-center justify-center px-5 pt-1 pb-6 border-context">
      <h1 className="text-center text-blue-900 text-lg">
        Authentication page
      </h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
                  <ErrorMessage name='password' component='div' />
              </div>
              <div className='flex justify-center mt-4'>
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
    </div>
  )
}
