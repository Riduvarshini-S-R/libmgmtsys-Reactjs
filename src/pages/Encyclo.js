import Navbar from "../components/Navbar";
import titlelogo from '../images/Title and logo.png'

const Encyclo = () => {
    return ( 
        <>
        <Navbar/>
        <div className='w-10/12 float-right font-adamina pr-20'>
            <div className='w-full mt-10'>
                <img className='flex justify-center p-5 w-42 h-24' src={ titlelogo } alt="titlelogo"></img>   
                <h1 className='text-4xl mt-4 p-5'>Encyclopedias</h1>
            </div>
        </div>
        </>
     );
}
 
export default Encyclo;