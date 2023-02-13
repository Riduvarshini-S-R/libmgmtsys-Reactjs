import Homenavbar from "../components/Homenavbar";
import titlelogo from '../images/Title and logo.png'
import book from '../images/Books.png'
import encyclopedia from '../images/Encyclopedias.png'
import magazine from '../images/Magazines.png'
import newspaper from '../images/Newspaper.png'
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <Homenavbar/>
        <div className='w-10/12 float-right font-adamina pr-20'>
            <div className='w-full mt-10'>
                <Link to ="/home"><img className='flex justify-center p-5 w-42 h-24' src={ titlelogo } alt="titlelogo"></img></Link>   
                <h1 className='text-4xl mt-4 p-5'>Welcome!</h1>
            </div>
            <div>
                <div className="">
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center py-10">
                            <Link to="/books">
                                <div className="flex px-10 py-6 bg-[#A9CEC2] w-96 rounded-lg hover:scale-105">
                                    <img src={book} alt="books"></img>
                                    <h1 className="py-5 mx-5 text-[22px]">Books</h1>
                                </div> 
                            </Link>
                        </div>
                        <div className="flex justify-center py-10">
                            <Link to="/encyclo">
                                <div className="flex px-10 py-6 bg-[#A9CEC2] w-96 rounded-lg hover:scale-105">
                                    <img src={encyclopedia} alt="encyc"></img>
                                    <h1 className="py-5 mx-5 text-[22px]">Encyclopedias</h1>
                                </div> 
                            </Link>
                        </div>
                        <div className="flex justify-center py-10">
                            <Link to="/magaz">
                                <div className="flex px-10 py-6 bg-[#A9CEC2] w-96 rounded-lg hover:scale-105">
                                    <img src={magazine} alt="magaz"></img>
                                    <h1 className="py-5 mx-5 text-[22px]">Magazines</h1>
                                </div> 
                            </Link>
                        </div>
                        <div className="flex justify-center py-10">
                            <Link to="/news">
                                <div className="flex px-10 py-6 bg-[#A9CEC2] w-96 rounded-lg hover:scale-105">
                                    <img src={newspaper} alt="news"></img>
                                    <h1 className="py-5 mx-5 text-[22px]">Newspaper</h1>
                                </div> 
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>    
    );
}
 
export default Home;