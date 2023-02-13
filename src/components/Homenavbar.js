import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Navbar = () => {
    return ( 
        <>
        <div className="w-2/12 z-40 fixed font-adamina">
            <div className='bg-[#3B3D42] w-2/3 min-h-screen'>
                <Link to ="/home"><img className='flex p-8' src={ logo } alt="logo"></img></Link>
                <nav className='navbar pt-4'>
                    <div className='border-y-2  text-center p-2'>
                        <div className='hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:scale-105 py-2'><a className="text-white text-lg text-[#C8FCEA] " href='/lend'>Lend</a></div>
                    </div>
                    <div className='border-b-2  text-center p-2'>
                        <div className='hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:scale-105 py-2'><a className="text-white text-lg text-[#C8FCEA] " href='/return'>Returned</a></div>
                    </div>
                    <div className='border-b-2  text-center p-2'>
                        <div className='hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:scale-105 py-2'><a className="text-white text-lg text-[#C8FCEA] " href='/notreturned'>Not returned</a></div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;