"use client";

import Image from "next/image";
import {
  FaUsers,
  FaBullhorn,
  FaGraduationCap,
  FaHandshake,
  FaKey
} from "react-icons/fa6";

export default function WhyJoinZinkq() {
  return (
    <section className="pb-20 mx-8 rounded-b-3xl py-8">
      <div className="px-20 mx-auto px-4 py-12 rounded-3xl bg-[#F0F2F4] grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Why Join Zinkq</h2>

          <p className="text-gray-700 mb-1">Because no one builds alone.</p>
          <p className="text-gray-700 mb-6">
            When you join Zinkq, you join a community that opens doors.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaUsers className="text-blue-600 w-5 h-5 mt-1" />
              <span>
                <strong>Network</strong> with other founders and investors
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaBullhorn className="text-blue-600 w-5 h-5 mt-1" />
              <span>
                <strong>Showcase</strong> your startup and get noticed
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaGraduationCap className="text-blue-600 w-5 h-5 mt-1" />
              <span>
                <strong>Learn</strong> from experienced entrepreneurs
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaHandshake className="text-blue-600 w-5 h-5 mt-1" />
              <span>
                <strong>Collaborate</strong> through real partnerships
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaKey className="text-blue-600 w-5 h-5 mt-1" />
              <span>
                <strong>Access</strong> exclusive resources and events
              </span>
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            Join the movement shaping Sri Lanka’s startup future.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium">
            Become a Member
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763115529/nkxhgeiy5ekueji2hjzy.jpg"
            alt="Team working together"
            width={900}
            height={600}
            className="rounded-3xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
