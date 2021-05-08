import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
// import { Fragment } from 'react';
import { reserveFormSchema } from '../utils/yup-schema';
const ReserveForm = () => {
  return (
    <Formik
      validationSchema={reserveFormSchema}
      initialValues={{ name: '', email: '', phone: '' }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (
        <>
          <Form onSubmit={handleSubmit} className="everly">
            <label htmlFor="name" className="color-text">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <span className="error-text">
              {touched.name && errors.name ? errors.name : null}
            </span>
            <label htmlFor="email" className="color-text">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            <span className="error-text">
              {touched.email && errors.email ? errors.email : null}
            </span>
            <label htmlFor="phone" className="color-text">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
            />
            <span className="error-text">
              {touched.phone && errors.phone ? errors.phone : null}
            </span>
            <Button type="submit" disabled={isSubmitting}>
              submit
            </Button>
            {/* <input type="submit" value="Submit" /> */}
          </Form>
        </>
      )}
    </Formik>
  );
};

export default ReserveForm;
