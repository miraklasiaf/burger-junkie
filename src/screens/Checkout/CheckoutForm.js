import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useOrderDispatch } from '../../context/OrderContext'
import { useBurgerState } from '../../context/BurgerContext'
import { useAuthState } from '../../context/AuthContext'

const validation = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  zipCode: Yup.string()
    .length(5, 'The value must 5 digit number')
    .required('Required'),
  address: Yup.string()
    .required('Required')
})

export default function CheckoutForm () {
  const { purchase } = useOrderDispatch()
  const { ingredients, price } = useBurgerState()
  const { token, userId } = useAuthState()

  return (
    <>
      <Formik
        initialValues={{ name: '', address: '', zipCode: '', deliveryMethod: 'Regular' }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          const order = {
            ingredients,
            price,
            userId,
            orderData: values
          }
          purchase(order, token)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='bg-blue-200 w-full text-blue-900 p-5 rounded-lg mt-4'>
            <div className='flex-flex-col relative pb-5'>
              <div className='flex flex-col'>
                <label htmlFor='name' className='text-blue-900 pb-2'>Name</label>
                <Field className='rounded-lg py-2 px-4 w-full' id='name' type='text' name='name' />
              </div>
              <div className='absolute text-red-600 text-sm bottom-0 italic'>
                <ErrorMessage name='name' component='div' />
              </div>
            </div>
            <div className='flex-flex-col relative pb-5'>
              <div className='flex flex-col'>
                <label htmlFor='address' className='text-blue-900 pb-2'>Address</label>
                <Field className='rounded-lg py-2 px-4 w-full' id='address' as='textarea' name='address' />
              </div>
              <div className='absolute text-red-600 text-sm bottom-0 italic'>
                <ErrorMessage name='address' component='div' />
              </div>
            </div>
            <div className='flex-flex-col relative pb-5'>
              <div className='flex flex-col'>
                <label htmlFor='zipCode' className='text-blue-900 pb-2'>ZIP Code</label>
                <Field className='rounded-lg py-2 px-4 w-full' id='zipCode' type='text' name='zipCode' />
              </div>
              <div className='absolute text-red-600 text-sm bottom-0 italic'>
                <ErrorMessage name='zipCode' component='div' />
              </div>
            </div>
            <div className='flex flex-col mt-2'>
              <label htmlFor='deliveryMethod' className='text-blue-900 pb-2'>Delivery Method</label>
              <Field as='select' id='deliveryMethod' className='rounded-lg py-2 px-4 w-full'>
                <option value='regular'>Regular</option>
                <option value='express'>Express</option>
              </Field>
            </div>
            <div className='flex flex-col items-center mt-4'>
              <button className='bg-blue-700 rounded-lg px-3 py-2 text-blue-100 text-sm' type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
