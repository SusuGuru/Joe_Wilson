import { Link } from "react-router-dom";

const statsData = [
  { value: "550K+", label: "Students" },
  { value: "35+", label: "Courses" },
  { value: "97%", label: "Satisfaction" },
  { value: "800+", label: "Reviews" },
];

export default function MasterclassSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[420px]">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden relative">
        <img
          src="https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/1614aab3-6dcf-433b-b806-668074c0500e_11b3fe5207ade0060c1316085d6bf10c69786933.jpg?v=179b211b38e482cb932121991d204091"
          alt="Bass Masterclass"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-10 md:px-16 py-14">
        <p className="text-[#1ab8e8] text-xs font-bold tracking-widest uppercase mb-2">Online Courses</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight mb-5">
          Bass<br />Masterclass
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          Take your bass playing to the next level with Joseph Wilson&apos;s in-depth online masterclass. Learn grooves, technique, music theory, and performance skills directly from one of the world&apos;s most sought-after bassists — at your own pace, from anywhere.
        </p>

        {/* Thumbnail previews with count */}
        <div className="flex items-center gap-3 mb-7">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white flex-shrink-0">
              <img
                src="https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/8447aaa2-fecc-4ba1-98cb-8309f0e24d69_f67186e974523c7b2e3db068af38f94bc6f61196-1.jpg?v=e5784dd5201defe7779ce338aad73cd5"
                alt="Student 1"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white flex-shrink-0">
              <img
                src="https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/7e64753b-d349-405c-a83f-76ae3424bbf6_659a2a7a0aefb98634bd9a64d9c618a671c0312c.jpg?v=5f46c3089466cd3231361d61e7aaf84c"
                alt="Student 2"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white flex-shrink-0">
              <img
                src="https://storage.readdy-site.link/project_files/c0c1db3d-22db-46b5-85e9-428db5f1168e/8c7589c5-be4f-41bf-8228-67bd61c5dccb_76cb80f2238d91883f215bcec012271f88f0b264.jpg?v=b67a46aecf7687a7abde3c3823b8a390"
                alt="Student 3"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-black">550K+ Students</p>
            <div className="flex items-center gap-1 mt-0.5">
              {[1,2,3,4,5].map(s => (
                <i key={s} className="ri-star-fill text-yellow-400 text-xs" />
              ))}
              <span className="text-gray-400 text-xs ml-1">800+ Reviews</span>
            </div>
          </div>
        </div>

        <Link
          to="/masterclass"
          className="inline-block bg-[#1a7fa8] text-white text-xs font-bold px-7 py-3 uppercase tracking-wider hover:bg-[#166a8f] transition-colors whitespace-nowrap cursor-pointer w-fit"
        >
          Join Masterclass
        </Link>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <div className="bg-gray-100 grid grid-cols-2 md:grid-cols-4 border-t border-gray-200">
      {statsData.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center py-8 border-r border-gray-200 last:border-r-0"
        >
          <span className="text-2xl font-black text-gray-900">{stat.value}</span>
          <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
