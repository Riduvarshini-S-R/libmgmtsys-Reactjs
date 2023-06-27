import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import titlelogo from '../images/Title and logo.png'

const Books = () => {
    return ( 
        <>
        <Navbar/>
        <div className='w-10/12 float-right font-adamina pr-20'>
            <div className='w-full mt-10'>
                <Link to="/home"><img className='flex justify-center p-5 w-42 h-24' src={ titlelogo } alt="titlelogo"></img></Link>   
                <h1 className='text-4xl mt-4 p-5'>Books</h1>
            </div>
        </div>
        </>
     );
}
 
export default Books;