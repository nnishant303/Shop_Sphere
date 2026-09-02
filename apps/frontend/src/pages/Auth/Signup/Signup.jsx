import { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSignup = (event) => {
    event.preventDefault();

    const newErrors = {};

    const trimmedName = fullName.trim();
    const trimmedMobile = mobile.trim();
    const trimmedEmail = email.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    // Full Name
    if (!trimmedName) {
      newErrors.fullName = "Please enter your full name.";
    } else if (trimmedName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    // Mobile
    if (!trimmedMobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!mobilePattern.test(trimmedMobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    // Email
    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Password
    if (!password.trim()) {
      newErrors.password = "Please enter a password.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Confirm Password
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Terms
    if (!acceptedTerms) {
      newErrors.terms = "Please accept the Terms & Conditions to continue.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Signup form is valid");
  };

  return (
    <main className="signup-page">
      {/* Left promotional section */}
      <section className="signup-visual">
        <div className="signup-promo">
          <h2>Shop Smarter. Live Better.</h2>

          <p>
            Create your Shop Sphere account and discover a seamless shopping
            experience.
          </p>
        </div>
      </section>

      {/* Right signup section */}
      <section className="signup-form">
        <div className="signup-content">
          <div className="signup-logo">Shop Sphere</div>

          <h1>Create Your Account</h1>

          <p className="signup-subtitle">
            Fill in the details below to get started.
          </p>

          <form className="signup-form-fields" onSubmit={handleSignup}>
            {/* Full Name */}
            <div className="signup-form-group">
              <label htmlFor="signup-full-name">Full Name</label>

              <div className="signup-input-wrapper">
                <FiUser className="signup-input-icon" />

                <input
                  id="signup-full-name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => {
                    setFullName(event.target.value);

                    if (errors.fullName) {
                      setErrors((current) => ({
                        ...current,
                        fullName: "",
                      }));
                    }
                  }}
                  className={errors.fullName ? "signup-input-error" : ""}
                />
              </div>

              {errors.fullName && (
                <p className="signup-form-error">{errors.fullName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div className="signup-form-group">
              <label htmlFor="signup-mobile">Mobile Number</label>

              <div className="signup-input-wrapper">
                <FiPhone className="signup-input-icon" />

                <input
                  id="signup-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={mobile}
                  onChange={(event) => {
                    setMobile(event.target.value);

                    if (errors.mobile) {
                      setErrors((current) => ({
                        ...current,
                        mobile: "",
                      }));
                    }
                  }}
                  className={errors.mobile ? "signup-input-error" : ""}
                />
              </div>

              {errors.mobile && (
                <p className="signup-form-error">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div className="signup-form-group">
              <label htmlFor="signup-email">Email</label>

              <div className="signup-input-wrapper">
                <FiMail className="signup-input-icon" />

                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (errors.email) {
                      setErrors((current) => ({
                        ...current,
                        email: "",
                      }));
                    }
                  }}
                  className={errors.email ? "signup-input-error" : ""}
                />
              </div>

              {errors.email && (
                <p className="signup-form-error">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="signup-form-group">
              <label htmlFor="signup-password">Password</label>

              <div className="signup-input-wrapper">
                <FiLock className="signup-input-icon" />

                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  autoComplete="new-password"
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
                  className={errors.password ? "signup-input-error" : ""}
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {errors.password && (
                <p className="signup-form-error">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="signup-form-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>

              <div className="signup-input-wrapper">
                <FiLock className="signup-input-icon" />

                <input
                  id="signup-confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);

                    if (errors.confirmPassword) {
                      setErrors((current) => ({
                        ...current,
                        confirmPassword: "",
                      }));
                    }
                  }}
                  className={errors.confirmPassword ? "signup-input-error" : ""}
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  onClick={() => setShowConfirmPassword((current) => !current)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="signup-form-error">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="signup-terms-group">
              <label className="signup-terms">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => {
                    setAcceptedTerms(event.target.checked);

                    if (errors.terms) {
                      setErrors((current) => ({
                        ...current,
                        terms: "",
                      }));
                    }
                  }}
                />

                <span className="signup-custom-checkbox">
                  {acceptedTerms && <FiCheck />}
                </span>

                <span className="signup-terms-text">
                  I agree to the <Link to="/terms">Terms & Conditions</Link>
                </span>
              </label>

              {errors.terms && (
                <p className="signup-form-error">{errors.terms}</p>
              )}
            </div>

            {/* Create Account */}
            <button type="submit" className="signup-submit">
              Create Account
            </button>
          </form>

          {/* Login navigation */}
          <p className="signup-login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
