import { CgPassword } from "react-icons/cg";
import { FaUnlockAlt } from "react-icons/fa";
import { MdLockClock, MdPassword } from "react-icons/md";
import { TbShieldLockFilled } from "react-icons/tb";
import { Link } from "react-router";

interface LoginCardProps {
  id: number;
  title: string;
  difficulty: string;
  description: string;
}

export default function LoginCard({ id, title, difficulty, description }: LoginCardProps) {
  const difficultyColor = (difficulty: string, type: "text" | "bg") => {
    switch (difficulty) {
      case "Easy":
        return `${type}-green-400`;
      case "Medium":
        return `${type}-yellow-400`;
      case "Hard":
        return `${type}-orange-400`;
      case "Expert":
        return `${type}-red-400`;
      case "Extreme":
        return `${type}-purple-400`;
      default:
        return `${type}-gray-400`;
    }
  };

  const difficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <span className={`${difficultyColor(difficulty, "text")} mr-2`}><MdPassword /></span>;
      case "Medium":
        return <span className={`${difficultyColor(difficulty, "text")} mr-2`}><CgPassword /></span>;
      case "Hard":
        return <span className={`${difficultyColor(difficulty, "text")} mr-2`}><MdLockClock /></span>;
      case "Expert":
        return <span className={`${difficultyColor(difficulty, "text")} mr-2`}><FaUnlockAlt /></span>;
      case "Extreme":
        return <span className={`${difficultyColor(difficulty, "text")} mr-2`}><TbShieldLockFilled /></span>;
      default:
        return <span className={`${difficultyColor(difficulty, "text")} mr-2`}><TbShieldLockFilled /></span>;
    }
  }

  return (
    <Link to={`/login/${id}`} className="block">
      <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-6 transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer h-full">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-2 flex items-center justify-between">
              {difficultyIcon(difficulty)}
              {title}
              <div className={`rounded-xl ${difficultyColor(difficulty, "bg")} py-0.5 px-2.5 ml-2 border border-transparent text-xs text-slate-600 transition-all shadow-sm`}>{difficulty}</div>
            </h3>
            <p className="text-sm text-gray-400 mb-4">{description}</p>
            <div className="text-xs text-gray-500 flex justify-end">Level {id}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
