// 👉 MUI Components
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// 👉 React Hooks & Formik
import { useFormik } from 'formik';
import { useState } from 'react';

// 👉 Eye icon from react-icons for password toggle
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

// 👉 Yup validation schema
import { SignUpValidation } from './utils/validation';

const SignUp = () => {
  // 🔐 Password show/hide toggle state
  const [passwordShow, setPasswordShow] = useState('password');

  // ✅ Success message state
  const [success, setSuccess] = useState('');

  // 👁️ Handle password visibility toggle
  const handleShow = () => {
    setPasswordShow((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  // ✅ Initialize Formik with values, validation, and submit handler
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema: SignUpValidation, // Yup validation
    onSubmit: (values, { resetForm }) => {
      console.log('Submitted:', values); // ✅ Submit values to console
      setSuccess('✅ Registered successfully!'); // Show success message
      resetForm(); // Clear the form fields
      setTimeout(() => setSuccess(''), 3000); // Hide message after 3s
    },
  });

  return (
    <div className="mainBox">
      <Container fixed>
        <Grid container spacing={2} className="signupBox">
          {/* 📄 Left Form Section */}
          <Grid item xs={12} md={6}>
            <div className="signUp_Left">
              <h2>Sign Up</h2>

              {/* ✅ Success message */}
              {success && <p className="text-green-600 mb-2">{success}</p>}

              <form onSubmit={formik.handleSubmit}>
                {/* 🧑 Full Name Input Field */}
                <TextField
                  className="inputs"
                  label="Full Name"
                  name="fullname"
                  type="text"
                  variant="outlined"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                  helperText={formik.touched.fullname && formik.errors.fullname}
                />

                {/* 📧 Email Input Field */}
                <TextField
                  className="inputs"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                {/* 🔒 Password Input Field */}
                <div className="passwordBox relative">
                  <TextField
                    className="inputs w-full"
                    label="Password"
                    name="password"
                    type={passwordShow}
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />

                  {/* 👁️ Password visibility toggle icon */}
                  <div
                    className="passwordIcon absolute right-3 top-3 cursor-pointer"
                    onClick={handleShow}
                  >
                    {passwordShow === 'password' ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </div>
                </div>

                {/* ✅ Confirm Password Input Field */}
                <TextField
                  className="inputs"
                  label="Confirm Password"
                  type="password"
                  name="confirmpassword"
                  variant="outlined"
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                  helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                />

                {/* 🔘 Submit Button */}
                <Button className="btn" type="submit" variant="contained">
                  Sign Up
                </Button>
              </form>

              {/* 🔄 Redirect to Sign In */}
              <div className="account">
                <p>Already have an account? Sign In</p>
              </div>
            </div>
          </Grid>

          {/* 🖼️ Right Side Illustration/Image */}
          <Grid item xs={12} md={6}>
            <div>
              <picture>
                <img
                  className="signUp_image"
                  src="./images/login-animate.svg"
                  alt="Sign Up Illustration"
                />
              </picture>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
