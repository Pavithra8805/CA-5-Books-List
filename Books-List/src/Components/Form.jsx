// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { NavLink, Link } from "react-router-dom";
// import "./Form.css";

// function RegistrationForm() {
//     // State to manage the form submission status
//     const [submitBool, setSubmitBool] = useState(false);

//     // React Hook Form setup
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         watch,
//     } = useForm();

//     // Function to handle form submission
//     const onFormSubmit = (data) => {
//         setSubmitBool(true);
//     };

//     // Function to render form fields with labels and error messages
//     function renderFormField(labelText, name, rules) {
//         return (
//             <div>
//                 <label htmlFor={name} className="input-label">
//                     {labelText}
//                 </label>
//                 <br />
//                 <input
//                     type={name.includes("password") ? "password" : "text"}
//                     placeholder={labelText}
//                     id={name}
//                     className="input-field"
//                     {...register(name, rules)}
//                 />
//                 {errors[name] && (
//                     <p className="error-message">
//                         {errors[name].type === "required" && `${labelText} is required`}
//                         {errors[name].type === "minLength" &&
//                             `${labelText} should have a minimum of 3 characters`}
//                         {errors[name].type === "maxLength" &&
//                             `${labelText} can only have a maximum of 30 characters`}
//                         {errors[name].type === "pattern" &&
//                             `Enter a valid ${labelText.toLowerCase()}`}
//                         {errors[name].type === "validate" && "Passwords must match"}
//                     </p>
//                 )}
//             </div>
//         );
//     }

//     return (
// <div className="registration-container">
//     <div className="header-container">
//         {/* Logo and link to home */}
//         <NavLink to="/" className="logo-link">
//             <h2>Kalvium Books</h2>
//         </NavLink>
//     </div>
//     <div className="main-content">
//         {submitBool ? (
//             // Display success message after successful registration
//             <div className="registration-message">
//                 <h2 className="registration-success">Registration Successful!</h2>
//                 <p className="read-joy">Read with Fun ❤️</p>
//                 <button id="home">
//                     <Link to="/" id="link">
//                         Home
//                     </Link>
//                 </button>
//             </div>
//         ) : (
//                     // Display the registration form
//                     <form
//                         onSubmit={handleSubmit(onFormSubmit)}
//                         className="form-container"
//                     >
//                         {renderFormField("Name", "firstName", {
//                             required: true,
//                             minLength: 3,
//                             maxLength: 30,
//                         })}
//                         {renderFormField("Email", "email", {
//                             required: true,
//                             pattern: /^\S+@\S+$/i,
//                         })}
//                         {renderFormField("Password", "password", {
//                             required: true,
//                             minLength: 10,
//                             pattern: /.*[\W]+.*/i,
//                         })}
//                         {renderFormField("Confirm password", "confirmPassword", {
//                             validate: (value) => value === watch("password"),
//                         })}
//                         <button type="submit" className="submit-button">
//                             Sign Up
//                         </button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default RegistrationForm;

import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router-dom";
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
                {/* Logo and link to home */}
                <NavLink to="/" className="logo-link">
                    <h2>Kalvium Books</h2>
                </NavLink>
            </div>
            <div className="main-content">
                {isSubmitSuccessful ? (
                    // Display success message after successful registration
                    <div className="registration-message">
                        <h2 className="registration-success">Registration Successful!</h2>
                        <p className="read-joy">Read with Fun ❤️</p>
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
                            {/* <div>
                                <input
                                    type="password"
                                    placeholder="Repeat Your Password"
                                    {...register("confirmPass", {
                                        required: "❗ Confirm Password required"
                                    })}
                                />
                                {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
                            </div> */}
                            <div>
                                <input
                                    type="password"
                                    placeholder="Repeat Your Password"
                                    {...register("confirmPass", {
                                        required: "❗ Confirm Password required",
                                        validate: (value) => value === watch("pass") || " ❗Passwords do not match"
                                    })}
                                />
                                {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
                                {watch("pass") !== watch("confirmPass") && <p>❗ Passwords do not match</p>}
                            </div>
                            {/* <button className='regBtn' disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Sign Up"}</button> */}
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

