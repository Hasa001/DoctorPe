import React, { useState } from 'react';

export const DoctorCard = ({ onClick, name, email, description, speciality }) => {

    return (
        <div className="flex items-center mt-20 justify-center transition duration-700 ease-in-out transform hover:scale-105">
            <div className="w-60 h-80 bg-white rounded-3xl  text-neutral-300 p-4 flex flex-col items-center justify-center gap-3 hover:shadow-2xl hover:shadow-sky-300 transition-shadow">
                <div className="w-32 h-32 bg-sky-300 rounded-full"><img src="https://i.pinimg.com/736x/b5/75/7a/b5757a2eed2300820433e4083ae635c2.jpg" alt="doctor image" /></div>
                <div className="text-black text-center">
                    <p className="font-bold">{name}</p>
                    <p className="font">{speciality}</p>
                    <p className="">{description}</p>
                    {/* <p className="">{email}</p> */}
                </div>
                <button onClick={onClick} className="bg-sky-500 font-extrabold p-2 px-6 rounded-xl hover:bg-gradient-to-r from-blue-500 to-cyan-500 transition-colors">Consult Now</button>
            </div>
        </div>
    );
};

export default DoctorCard;
