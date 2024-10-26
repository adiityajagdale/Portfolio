import React from "react";

function Profile() {
    return (
        <>
            <div className="grid h-screen m-8 grid-cols-1 md:grid-cols-2 items-center">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src="src/Assets/IMG-120241007-WA0082.jpg"
                        alt="Profile"
                        className="w-[275px] h-[275px] rounded-full border-4 border-gray-300 md:w-[300px] md:h-[300px]"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center justify-center p-2">
                    <p className="text-2xl font-bold text-gray-600 text-center">Hello, I'm</p>
                    <h2 className="text-4xl font-bold text-center p-2">Aditya Jagdale</h2>
                    <p className="text-3xl font-bold text-gray-600 text-center">Full-Stack Developer</p>
                    <div className="mt-3 flex space-x-3">
                        <button className="flex items-center text-black font-bold border-2 border-black py-2 px-4 rounded-full hover:bg-gray-600">
                            Get Resume <span className="w-4 h-4 display ml-2"> <img src="src\Assets\downloads.png" ></img> </span>
                        </button>
                        <button className="flex items-center bg-gray-800 font-bold text-white py-2 px-4 rounded-full hover:bg-gray-600">
                            Contact Info<span className="w-5 h-5 display ml-2"> <img src="src\Assets\info (1).svg" ></img> </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
