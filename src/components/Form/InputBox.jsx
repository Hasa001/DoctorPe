
export const InputBox = ({ label, placeholder, onChange}) => {
    return <div className="">
        <div className="text-sm font-medium text-left p-2 -ml-2">
            {label}
        </div>
        <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
}