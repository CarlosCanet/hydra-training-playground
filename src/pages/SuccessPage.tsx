import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-between">
      <Navbar subtitle="Ironhack Testing Environment" />
      <div className="flex flex-col gap-10 items-center justify-center mx-6">
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 max-w-xl text-center">
          <h1 className="text-2xl font-bold text-green-400 mb-4">Authentication Successful</h1>
          <p className="text-gray-300">Congratulations — you've authenticated in the training environment.</p>
        </div>
        <Link to="/"><button className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded text-white">Go back</button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default SuccessPage;
