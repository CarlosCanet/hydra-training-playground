import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import { TbInfoOctagonFilled, TbMailExclamation, TbPencil } from "react-icons/tb";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-between">
      <Navbar subtitle="Ironhack Training Environment" />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center">
        <div className="my-6 md:mb-12 flex flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-bold text-gray-100 mb-4">Vulnerable Login Playground</h2>
          <div className="text-lg text-gray-400 flex flex-col justify-center mx-6">
            <p className="flex gap-3 justify-center items-center"><span className="text-blue-400"><TbInfoOctagonFilled /></span>Controlled testing environment for understanding vulnerable login.</p>
            <p className="flex gap-3 justify-center items-center"><span className="text-orange-400"><TbPencil /></span>All authentication attempts are logged with your information.</p>
            <p className="flex gap-3 justify-center items-center"><span className="text-red-500"><TbMailExclamation /></span>Report any unexpected behavior.</p>
          </div>
        </div>

        {/* Login Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-6">
          <LoginCard
            id={1}
            title="Basic Access Portal"
            difficulty="Easy"
            description="Simple corporate login with minimal protections. Good for learning basic dictionary attacks."
          />
          <LoginCard
            id={2}
            title="Basic Access Portal"
            difficulty="Medium"
            description="Simple corporate login with minimal protections. Good for learning basic dictionary attacks."
          />
          <LoginCard
            id={3}
            title="Rate-Limited Portal"
            difficulty="Hard"
            description="Login portal with rate-limiting with slow-down. Teaches throttling and timing strategies."
          />
          <LoginCard
            id={4}
            title="Rate-Limited Portal"
            difficulty="Expert"
            description="Login portal with rate-limiting with block. Teaches throttling and timing strategies."
          />
          <LoginCard
            id={5}
            title="Hybrid Challenge"
            difficulty="Extreme"
            description="Login portal with rate-limiting and non admin user. Advanced attack strategies here."
          />
        </div>

        {/* <SecurityCard /> */}
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
