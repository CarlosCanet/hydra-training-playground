import { Link, useParams } from "react-router";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoginPage() {
  const params = useParams();
  if (!params.level) return null;
  const level = parseInt(params.level);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-10">
        <main>
          {level >= 1 && level <= 5 ? (
            <>
              <div className="text-center mx-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-100 mb-2">Login Portal — Level {params.level}</h2>
              </div>
              <LoginForm level={level} />
            </>
          ) : (
            <>
              <div className="flex flex-col my-8 gap-5 items-center">
                <h2 className="text-3xl font-bold text-gray-100 mb-2">Wrong Login Level</h2>
              </div>
            </>
          )}
        </main>
        <Link to="/"><button className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded text-white">Go back</button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
