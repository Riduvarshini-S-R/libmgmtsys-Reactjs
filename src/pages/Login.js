import { Link } from 'react-router-dom';
import titlelogo from '../images/Title and logo.png'

const Login = () => {
    return ( 
        <>
            <div className='font-adamina'>
                <div className='flex justify-center align-center pb-10 pt-20 w-full' >
                    <img className='flex' src={ titlelogo } alt="titlelogo"></img>
                </div>
                <div className='flex justify-center w-full'>
                   <div className='bg-[#202020] w-96 mx-8 px-10 py-8'>
                        <h1 className='px-5 pb-5 text-3xl text-center text-seal-green'>Login</h1>
                        <form>
                            <div className='flex flex-col justify-center w-full mt-7'>
                                <input className="mb-4 py-2 px-3 rounded-lg w-full shadow-inner" type='email' placeholder='Enter email'></input><br/>
                                <input className="mb-4 py-2 px-3 rounded-lg w-full shadow-inner" type='password' placeholder='Enter password'></input><br/>
                                <div className="flex justify-center">
                                    <Link to="/home" ><button className="text-black bg-seal-green py-2 px-5 text-[19px] rounded-full" type='submit'>Login</button></Link>
                                </div><br/>
                            </div>
                        </form>
                        <p className='text-white text-center text-[13px]'>Don't have an account? <a className="underline underline-offset-4" href="/home">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;