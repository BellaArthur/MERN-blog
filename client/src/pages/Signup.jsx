import { Link } from 'react-router-dom'

export default function Signup () {
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
                    <form className='space-y-2'>
                        <div>
                            <label htmlFor='username' className='font-bold'>UserName</label>
                            <input type='username'
                                    id='username'
                                    placeholder='john Doe'
                                    className='border border-tranparent focus:border-orange-500 p-2 rounded-lg w-full bg-gray-200'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='font-bold'>Email</label>
                            <input type='email'
                                    id='email'
                                    placeholder='example@gamil.com'
                                    className='border border-tranparent  p-2 rounded-lg w-full bg-gray-200'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='font-bold'>Password</label>
                            <input type='password'
                                    id='password'
                                    placeholder='.................'
                                    className='border  p-2 rounded-lg w-full bg-gray-200'
                            />
                        </div>
                        <button type='submit' class="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-4 py-2 px-4 rounded-lg w-full">
                            Sign Up
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