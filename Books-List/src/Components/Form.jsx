import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting }, watch } = useForm();
    const password = watch("pass");

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    };

    return (
        <div className="registration-container">
            <div className="header-container">
                {/* // Logo and link to home page */}
                <Link to="/" className="logo-link">
                    <h2 style={{ color: '#da1e37' }}>Kalvium Books</h2>
                </Link>
            </div>
            <div className="main-content">
                {isSubmitSuccessful ?
                    (
                        // Display success message after successful registration
                        <div className="registration-message">
                            <h2 className="registration-success">Registration Successful!</h2>
                            <p className="read-joy">Read with Fun 🤩</p>
                            <button id="home">
                                <Link to="/" id="link">
                                    Home
                                </Link>
                            </button>
                        </div>
                    ) : (
                        <div className='form-container'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        {...register("Name", {
                                            required: "❗Name required",
                                            minLength: {
                                                value: 3,
                                                message: " ❗Name must be more than 3 characters",
                                            },
                                            maxLength: {
                                                value: 30,
                                                message: " ❗Name cannot be more than 30 characters",
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z]+$/,
                                                message: "  ❗Invalid Name",
                                            },
                                        })}
                                    />
                                    {errors.Name && <p>{errors.Name.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        {...register("email", {
                                            required: "❗ Email required",
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: "  ❗Invalid email",
                                            },
                                        })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        {...register("pass", {
                                            required: "❗ Password required",
                                            minLength: {
                                                value: 10,
                                                message: " ❗Password must be min 10 characters",
                                            }
                                        })}
                                    />
                                    {errors.pass && <p>{errors.pass.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Repeat Your Password"
                                        {...register("confirmPass", {
                                            required: "❗ Confirm Password required",
                                        })}
                                    />
                                    {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
                                    {watch("pass") !== watch("confirmPass") && <p>❗ Passwords do not match</p>}
                                </div>
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        id="agreeTerms"
                                        {...register("agreeTerms", { required: "❗ Please agree to the terms" })}
                                    />
                                    <label htmlFor="agreeTerms" className="checkbox-label">I agree all statements in <u>Terms of service</u></label>
                                    {errors.agreeTerms && <p className="checkbox-error">{errors.agreeTerms.message}</p>}
                                </div>

                                <button
                                    className='regBtn'
                                    disabled={isSubmitting || (watch("pass") !== watch("confirmPass"))}
                                    type="submit">
                                    {isSubmitting ? "Loading" : "Sign Up"}
                                </button>
                            </form>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Form;

