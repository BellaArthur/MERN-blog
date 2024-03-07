import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Alert, Button, Spinner  } from "@material-tailwind/react";

export default function Signup () {
     
    const [formData, setFormData ] = useState({});
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password ) {
            return setErrorMessage ('Please fill out all form fields!')
        }
        try {
            setLoading(true);
            setErrorMessage(null);

            const res = await fetch('/api/auth/signup', {
                method: 'Post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false ) {
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if (res.ok) {
                navigate('/sign-in');
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen mt-10'>
            <div className='flex flex-col space-y-4 p-4 max-w-3xl mx-auto md:flex-row md:items-center md:space-x-4'>
                {/* Left */}
                <div className='flex-1'>
                    <Link to='/' className='text-black text-3xl font-bold  sm:tex-xl'>Mern
                        <span className='text-orange-500'>Blog</span>
                    </Link>
                    <p className='text-sm mt-5'>
                        This is a demo project. you con signup with your email and password
                        or with our google account
                    </p>
                </div>

                {/* Right */}
                <div className='flex-1'>
                    {
                        errorMessage && (
                            <Alert color="red">{errorMessage}</Alert> 
                        )
                    }
                    <form className='space-y-2'onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='username' className='font-bold'>UserName</label>
                            <input type='username'
                                    id='username'
                                    placeholder='john Doe'
                                    className='border border-tranparent focus:border-orange-500 p-2 
                                    rounded-lg w-full bg-gray-200' 
                                    onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='font-bold'>Email</label>
                            <input type='email'
                                    id='email'
                                    placeholder='example@gamil.com'
                                    className='border border-tranparent  p-2 rounded-lg w-full bg-gray-200'  
                                    onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='font-bold'>Password</label>
                            <input type='password'
                                    id='password'
                                    placeholder='.................'
                                    className='border  p-2 rounded-lg w-full bg-gray-200' 
                                    onChange={handleChange}
                            />
                        </div>
                        <button type='submit' disabled={loading} className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-4 
                                py-2 px-4 rounded-lg w-full">
                            {
                                loading ? (
                                    <div className='flex'>
                                        <Spinner className='flex-inline' />
                                        <span className='flex-inline'>Loading..</span>
                                    </div>
                                ) : "Sign Up"
                            }
                        </button>
                    </form>
                    <hr className="h-px my-2 bg-orange-700 border-2 text-orange-700 " />
                    <div>
                        <span>have an account?</span>
                        <span> </span>
                        <Link to='/signin' className='text-orange-500'>Sign In</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}