import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Panel */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        <div className="max-w-sm w-full mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Join Us</h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Today is a new day. It&apos;s your day. You shape it.<br />
            Sign up to start your journey.
          </p>

          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-2 tracking-widest uppercase">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-2 tracking-widest uppercase">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8]"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder="eg. kweku@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8]"
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 tracking-widest uppercase">
                Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-2 tracking-widest uppercase">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a7fa8]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a7fa8] text-white py-3 text-sm font-semibold tracking-widest uppercase rounded cursor-pointer hover:bg-[#166a8f] transition-colors whitespace-nowrap"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1a7fa8] hover:underline cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/505a8a74d4f4569d3dc6bbea7399ac2c.png"
          alt="Joseph Wilson"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-1">
            <img
              src="https://static.readdy.ai/image/bd3e65a9c2956e637f2d341da068edd0/e146ec11c65cd03aa6e7804f75980bc0.png"
              alt="Logo"
              className="w-14 h-14 object-contain"
            />
            <span className="text-4xl font-bold">
              <span className="text-white">Joseph</span>
              <span className="text-[#1ab8e8]">Wilson</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
