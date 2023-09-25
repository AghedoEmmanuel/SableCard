import Navbar from "../../Component/navbar/Navbar"
import FDIC from '../../assets/div.svg'

const Header = () => {
    return (
        <div className="bg-[url('/src/assets/sable-frame.jpg.png')] text-white bg-no-repeat bg-cover md:px-14" >
            <div>
            <img className="relative"/>
            <Navbar />
            <div className="text-center space-y-10 py-8">

                <div className="md:text-5xl text-4xl leading-relaxed md:tracking-wide md:space-y-6">
                    <h1>The fastest, most</h1>
                    <h1>premium path to</h1>
                    <h1 className="font-bold">financial freedom</h1>
                </div>

                <div>
                    <a className="border-2 rounded-3xl py-4 px-8 bg-green-800 border-black text-black">EXPLORE</a>
                </div>

            </div>
            <div className="py-14">
                <img src={FDIC} alt="FDIC image" />
            </div>
            </div>
        </div>
    )
}

export default Header