
const steps = [
    { number: "1", title: "YOUR INFO" },
    { number: "2", title: "SELECT PLAN" },
    { number: "3", title: "ADD-ONS" },
    { number: "4", title: "SUMMARY" },
];

const Sidebar = () => {
    return (
        <aside className="relative min-h-[600px] w-full overflow-hidden rounded-xl bg-[#483EFF] p-8 md:w-[280px] md:shrink-0">


            <div className="relative z-10 flex flex-col gap-8">

                {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center gap-4">



                        <div
                            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 hover:scale-110 hover:border-[#BEE2FD] hover:bg-[#BEE2FD] hover:text-[#022959]
                                ${index === 0
                                    ? "border-[#BEE2FD] bg-[#BEE2FD] text-[#022959]"
                                    : "border-white text-white"
                                }`}
                        >
                            {step.number}
                        </div>



                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#BEE2FD]">
                                STEP {step.number}
                            </span>

                            <h3 className="text-sm font-bold tracking-wider text-white">
                                {step.title}
                            </h3>
                        </div>

                    </div>
                ))}

            </div>


            <svg
                className="absolute bottom-0 left-0 h-[45%] w-full"
                viewBox="0 0 280 280"
                preserveAspectRatio="xMidYMax slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Purple Wave */}
                <path
                    d="M0 30 C90 20 95 125 150 170 C190 210 230 230 280 280 H0 Z"
                    fill="#6259FF"
                />


                <circle
                    cx="-5"
                    cy="205"
                    r="70"
                    fill="#FFAF7E"
                />


                <path
                    d="M115 280 C135 230 175 220 200 190 C225 155 245 135 280 145 V280 Z"
                    fill="#F9818E"
                />


                <path
                    d="M165 185 L177 172 M185 180 L199 193 M174 211 L181 198"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>

        </aside>
    );
};

export default Sidebar;
