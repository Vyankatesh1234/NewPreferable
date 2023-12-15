import MadeInHyderabad from "./Images/MadeInHyderabad.png";

function ThirdPart() {
    return (
        <div className="flex justify-center items-center bg-[#FC766A] h-auto">
            <div className="flex m-10">
            <div className="text-center mx-8">
                <p className="text-2xl">Founded</p>
                <p className="text-xl text-black font-thin">17th May, 2013</p>
                <p className="text-2xl">CEO</p>
                <p className="text-xl text-black font-thin">Anuradha Thota</p>
                <p className="text-2xl">Headquarters</p>
                <p className="text-xl text-black font-thin">Jubilee Hills, Hyderabad</p>
            </div>
            <div className="text-center mx-8">
                <p className="text-2xl">Number of colleges</p>
                <p className="text-xl text-black font-thin">500</p>
                <p className="text-2xl">Number of States</p>
                <p className="text-xl text-black font-thin">12</p> <br />
                <p>------</p>
            </div>
            <div className="text-center mx-8">
                <img src={MadeInHyderabad} alt="hyd" className="h-40" />
            </div>
            </div>
        </div>

    )
}

export default ThirdPart
