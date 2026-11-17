import { useState } from "react";
const LoginForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        isEmployee: false

    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    };
    return (
        <form className="flex flex-col items-start gap-20" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
                <h2 className="text[rgba(2, 41, 89, 1)] text-4xl font-bold">
                    Personal info
                </h2>
                <p className="text-[#9699AA] text-lg">
                    Please provide your name, email address, and phone number.
                </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1 ">
                    <label className="text[rgba(2, 41, 89, 1)] font-bold">Name </label>
                    <input
                        value={data.name}
                        onChange={(e) => {

                            setData((prevData) => ({ ...prevData, name: e.target.value }));
                        }}
                        className="outline-0 border border-gray-400 p-2 rounded-lg placeholder:font-bold" type="text" placeholder="e.g. Stephen King" />
                </div>
                <div className="flex flex-col gap-1 ">
                    <label className="text[rgba(2, 41, 89, 1)] font-bold">Email </label>
                    <input
                        value={data.email}
                        onChange={(e) => {
                            // const newdata = { ...data };
                            // newdata.email = e.target.value;
                            setData((prevData) => ({ ...prevData, email: e.target.value }));
                        }}
                        className="outline-0 border border-gray-400 p-2 rounded-lg placeholder:font-bold" type="email" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className="flex flex-col gap-1 ">
                    <label className="text[rgba(2, 41, 89, 1)] font-bold">Phone </label>
                    <input
                        value={data.phone}
                        onChange={(e) => {
                            // const newdata = { ...data };
                            // newdata.phone = e.target.value;
                            setData((prevData) => ({ ...prevData, phone: e.target.value }));
                        }}
                        className="outline-0 border border-gray-400 p-2 rounded-lg placeholder:font-bold" type="tel" placeholder="e.g. +1 234 567 890" />
                </div>
                <div >
                    <input type="checkbox" checked={data.isEmployee}
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData, isEmployee:
                                    !data.isEmployee
                            }))} />
                    <label className="text[rgba(2, 41, 89, 1)] font-bold  cursor-pointer">Employee </label>
                </div>
            </div>
            <button className="bg-[#022959] text-white p-2 rounded-lg w-1/4 mt-4 self-end cursor-pointer ">
                submit
            </button>
        </form>
    )
}

export default LoginForm
