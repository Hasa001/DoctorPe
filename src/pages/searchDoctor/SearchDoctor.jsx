import { useEffect, useState } from "react"
import DoctorCard from "../../components/Card/DoctorCard"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {call} from '../../components/VideoCall/creatingCall.js'
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
        navigate("/consult")
    }

    return <div className="bg-slate-200 h-100">
        <div className="">
            
            {/* flex justify-around */}
            <div className="flex  justify-around w-100 item-center ">
                <div className=" bg-white rounded-2xl border   mt-7 hover:py-1 hover:shadow-lg">
                    <button className="py-4 px-10 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">ALL</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">CARDIOLOGY</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">ORTHOPEDICS</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">CONCOLOGY</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">DERMETOLOGY</button>
                    <button className="py-4 px-10 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">SURGORY</button>
                    <button className="py-4 px-8 text-xs hover:underline hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:rounded-2xl">GYNOCOLOGY</button>
                </div>
            </div>
            <div className="text-2xl font-medium p-10 pl-20">
                Doctor
            </div>
        </div>

        <div className="grid grid-cols-5">
        
            
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