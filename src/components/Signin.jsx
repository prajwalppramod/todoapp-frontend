import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom'
export default function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate()
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post(
                'http://192.168.11.77:8080/login',  // Replace with localhost if needed
                formData);// Ensure correct content type

            console.log('Response:', response.data);
            alert('Login Successful');
            console.log(response.data.Token)
            console.log(response.data.UserId)
            sessionStorage.setItem("Token", response.data.Token)
            sessionStorage.setItem("Token", response.data.UserId)
            navigate("/addtodo")
        } catch (err) {
            console.error('Login Error:', err);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-8 py-14 lg:px-10">
            <Card sx={{ maxWidth: 345 }} className="w-full sm:max-w-sm">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <CardContent>
                        <CardActionArea>
                            <div className="text-center">
                                <img
                                    alt="Todo"
                                    src="https://th.bing.com/th/id/OIP.GqN38sG-CqKw4MhbDPsl_AHaHa?rs=1&pid=ImgDetMain"
                                    className="mx-auto h-10 w-auto"
                                />
                                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="current-password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </CardActionArea>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}
