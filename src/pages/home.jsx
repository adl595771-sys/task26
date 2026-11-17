
import Sidebar from "../components/Sidebar";
import LoginForm from "../components/LoginForm";

const Home = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#EFF5FF] p-4">

            <div className="flex w-full max-w-[950px] flex-col gap-8 rounded-2xl bg-white p-4 shadow-xl md:flex-row">

                {/* Left Side */}
                <Sidebar />

                {/* Right Side */}
                <LoginForm />

            </div>

        </main>
    );
};

export default Home;
