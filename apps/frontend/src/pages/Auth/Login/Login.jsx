import { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();

    const newErrors = {};

    const identifier = emailOrMobile.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    if (!identifier) {
      newErrors.identifier = "Please enter your email or mobile number.";
    } else if (
      !emailPattern.test(identifier) &&
      !mobilePattern.test(identifier)
    ) {
      newErrors.identifier =
        "Enter a valid email address or 10-digit mobile number.";
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Login form is valid");
  };

  return (
    <main className="login-page">
      {/* Left promotional section */}
      <section className="login-visual">
        <div className="login-promo">
          <h2>Endless Aisles, Delivered Fast.</h2>

          <p>Experience seamless shopping with Shop Sphere.</p>
        </div>
      </section>

      {/* Right login section */}
      <section className="login-form">
        <div className="login-content">
          {/* Brand */}
          <div className="login-logo">Shop Sphere</div>

          {/* Heading */}
          <h1>Welcome Back</h1>

          <p className="login-subtitle">
            Securely login to access your account and continue shopping.
          </p>

          <form className="login-form-fields" onSubmit={handleLogin}>
            {/* Email / Mobile */}
            <div className="form-group">
              <label htmlFor="login-identifier">Email or Mobile Number</label>

              <div className="input-with-icon">
                <FiMail className="input-icon" />

                <input
                  id="login-identifier"
                  name="identifier"
                  type="text"
                  placeholder="Enter your email or 10-digit mobile"
                  autoComplete="username"
                  value={emailOrMobile}
                  onChange={(event) => {
                    setEmailOrMobile(event.target.value);

                    if (errors.identifier) {
                      setErrors((current) => ({
                        ...current,
                        identifier: "",
                      }));
                    }
                  }}
                  className={errors.identifier ? "input-error" : ""}
                />
              </div>

              {errors.identifier && (
                <p className="form-error">{errors.identifier}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="password-label">
                <label htmlFor="login-password">Password</label>

                <button type="button" className="forgot-password">
                  Forgot Password?
                </button>
              </div>

              <div className="password-input-wrapper">
                <FiLock className="input-icon" />

                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);

                    if (errors.password) {
                      setErrors((current) => ({
                        ...current,
                        password: "",
                      }));
                    }
                  }}
                  className={errors.password ? "input-error" : ""}
                />

                <button
                  type="button"
                  className="password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {errors.password && (
                <p className="form-error">{errors.password}</p>
              )}
            </div>

            {/* Login */}
            <button type="submit" className="login-submit">
              Login Securely →
            </button>

            {/* OTP */}
            <button type="button" className="login-otp">
              Login via OTP
            </button>

            {/* Divider */}
            <div className="login-divider">
              <span></span>

              <p>OR CONTINUE WITH</p>

              <span></span>
            </div>

            {/* Google */}
            <button type="button" className="google-login">
              <span className="google-icon">G</span>

              <span>Continue with Google</span>
            </button>
          </form>

          {/* Signup */}
          <p className="signup-link">
            New to Shop Sphere? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
