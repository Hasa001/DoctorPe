import { useEffect, useState } from "react"
import DoctorCard from "../../components/Card/DoctorCard"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {call} from '../../components/VideoCall/creatingCall.js'
import Heading from '../../components/products/Heading.jsx';
import {send} from './mail.js'

export const SearchDoctor = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/searchDoctor")
            .then(response => {
                setUsers(response.data); 
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [])

    const handleOnClick = () => {
        call.join({ create: true });
        send();
        navigate("/consult")
    }

    return <div className="bg-gray-200  h-full w-full pt-10 mx-auto px-6 " >
        <div className="">
        <div className="text-2xl font-medium mt-8 font-serif p-10 pl-20">
                <Heading title="Doctors"/>
            </div>
            <div className="flex  justify-around w-100 mb-10 transition duration-200 ease-in hover:scale-105 item-center ">
                <div className=" bg-white rounded-2xl border   mt-7  hover:shadow-lg">
                    <button className="py-4 px-10 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">ALL</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">CARDIOLOGY</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">ORTHOPEDICS</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">CONCOLOGY</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">DERMETOLOGY</button>
                    <button className="py-4 px-10 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">SURGORY</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-2xl">GYNOCOLOGY</button>
                </div>
            </div>
            
        </div>

        <div className="grid  grid-cols-5 ">
        
            
        {users.map(user => (
            <DoctorCard key={user._id} onClick={handleOnClick} name={user.fullname} email={user.email} description={"Very good Doctor"} speciality={user.speciality}/>
        ))}

        <DoctorCard key={1} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={2} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={3} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={4} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={5} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={6} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={7} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>
        <DoctorCard key={8} onClick={handleOnClick} name={"Devansh Saanp"} email={"dokebaaz@gmail.com"} description={"Hoes before bros"} speciality={"Dokebaazi"}/>

        </div>
    </div>
}