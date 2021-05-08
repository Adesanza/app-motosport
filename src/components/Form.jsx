import { Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { reserveFormSchema } from '../utils/yup-schema';
import { reserveUser } from '../utils/user-api';
const ReserveForm = ({ setAlertModalShow }) => {
  return (
    <Formik
      validationSchema={reserveFormSchema}
      initialValues={{ username: '', email: '', phone: '' }}
      onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
        setSubmitting(true);
        try {
          await reserveUser(values);
          setAlertModalShow(true);
          resetForm();
        } catch (err) {
          setFieldError('email', err.message);
        }
        setSubmitting(false);
      }}
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
          <form onSubmit={handleSubmit} className="everly">
            <label htmlFor="username" className="color-text">
              Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
            />
            <span className="error-text">
              {touched.username && errors.username ? errors.username : null}
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
          </form>
        </>
      )}
    </Formik>
  );
};

export default ReserveForm;
