import React, { useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        age: '',
        address: '',
        type: 'student'
    });
   
    const navigate = useNavigate()

    const [errors, setErrors] = useState({});
 
    const validate = () => {
        let newErrors = {};
        if (!formData.name.match(/^[A-Za-z ]+$/)) newErrors.name = 'Name must contain only letters';
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email format';
        if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!formData.phone.match(/^[6-9]\d{9}$/)) newErrors.phone = 'Phone number must be 10 digits and start with 6-9';
        if (formData.age < 18 || formData.age > 100) newErrors.age = 'Age must be between 18 and 100';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post('http://192.168.11.77:8080/signup', formData);
               
               navigate("/")
                console.log('Response:', response.data);
                
            } catch (error) {
                navigate("/error")
                console.error('Error submitting form:', error);
            }
        }
    };
 
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Sign Up
                </h2>
            </div>
 
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {['name', 'email', 'password', 'phone', 'age', 'address'].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-sm font-medium text-gray-900">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <div className="mt-2">
                                <input
                                    id={field}
                                    name={field}
                                    type={field === 'password' ? 'password' : field === 'age' ? 'number' : 'text'}
                                    required
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                        </div>
                    ))}
 
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-900">
                            Type
                        </label>
                        <div className="mt-2">
                            <select
                                id="type"
                                name="type"
                                required
                                value={formData.type}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            >
                                <option value="student">Student</option>
                                <option value="working_professional">Working Professional</option>
                            </select>
                        </div>
                    </div>
 
                    <div>
                        <button
                            // type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
 
export default Signup;