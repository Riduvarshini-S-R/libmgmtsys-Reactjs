import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Navbar = () => {
    return ( 
        <>
        <div className="w-2/12 z-40 fixed font-adamina">
            <div className='bg-[#3B3D42] w-2/3 min-h-screen'>
                <Link to ="/home"><img className='flex p-8' src={ logo } alt="logo"></img></Link>
                <nav className='navbar pt-4'>
                    <div className='border-y-2  text-center p-4'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/books'>Books</a>
                    </div>
                    <div className='border-b-2  text-center p-4'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/magaz'>Magazines</a>
                    </div>
                    <div className='border-b-2  text-center py-4 px-3'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/encyclo'>Encyclopedias</a>
                    </div>
                    <div className='border-b-2  text-center p-4'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/news'>Newspaper</a>
                    </div>
                    <div className='border-b-2  text-center p-4'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/lend'>Lend</a>
                    </div>
                    <div className='border-b-2  text-center p-4'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/return'>Returned</a>
                    </div>
                    <div className='border-b-2  text-center p-4'>
                        <a className="text-white text-lg text-[#C8FCEA] hover:bg-[#52535D] hover:opacity-75 hover:rounded hover:p-3" href='/notreturned'>Not returned</a>
                    </div>
                </nav>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;