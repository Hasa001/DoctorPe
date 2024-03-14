

export default function Popup({onClick,result}){


return <div className="fixed top-0 left-0 w-full p-10 h-full bg-black bg-opacity-50 flex items-center justify-center  transition duration-500 ease-in-out">
<div className="bg-white p-6 rounded shadow-lg">
  <p>{result}</p>
  <button onClick={onClick} className="bg-cyan-500 hover:bg-[#10f9f9] text-white font-bold py-2 px-4 rounded mt-4">Close</button>
</div>
</div>

}