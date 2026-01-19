import { Link } from "react-router";
import HydraImg from "/hydra-logo.svg"

interface NavbarProps {
  title?: string;
  subtitle?: string;
}

function Navbar({ title, subtitle }: NavbarProps) {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center space-x-4">
              <img src={HydraImg} alt="Hydra img" width={50}/>
              <div>
                <h1 className="text-xl font-bold text-gray-100">{title ?? "Davlos Authentication Systems"}</h1>
                {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-4 text-xs text-gray-400">Training Environment</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
