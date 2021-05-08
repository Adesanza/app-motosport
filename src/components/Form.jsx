import { Formik } from 'formik';
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <span>{touched.name && errors.name ? errors.name : null}</span>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            <span>{touched.email && errors.email ? errors.email : null}</span>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
            />
            <span>{touched.phone && errors.phone ? errors.phone : null}</span>
            <input type="submit" value="Submit" />
          </form>
        </>
      )}
    </Formik>
  );
};

export default ReserveForm;
