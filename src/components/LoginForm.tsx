import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

interface LoginFormProps {
  level: number;
}

function LoginForm({ level }: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const backendBase: string = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000";
      await axios.post(`${backendBase}/login/${level}`, { username, password, isHuman: true });
      setErrorMessage(null);
      navigate("/success");
      return;
    } catch (err) {
      console.error("Login request failed", err);
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 flex flex-col gap-5">
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-300 mb-1">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-300 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
        />
      </div>

      {errorMessage && <div className="mt-3 text-sm text-red-400">{errorMessage}</div>}

      <div className="flex items-center justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white">Sign in</button>
        <div className="text-sm text-gray-400">Level {level}</div>
      </div>
    </form>
  );
}

export default LoginForm;
