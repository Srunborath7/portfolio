import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-white">About Me</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Hello! I'm <span className="font-semibold text-amber-300">Borath</span>. Now, I'm 22 years old and a student at the University of Puthisastra, Faculty of ICT (Information Communication and Technology), year 4.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            In college, I enjoy programming, especially <span className="font-semibold text-amber-300">web development</span>. I consider myself a responsible, orderly, and honest person.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold shadow-lg hover:translate-y-[-2px] transition-transform"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right - Image / Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div
              className="absolute -inset-0 rounded-2xl blur-3xl opacity-30"
              style={{ background: "linear-gradient(90deg,#ff7a7a, #7c5cff)" }}
            />
            <div className="relative z-10 p-6 rounded-2xl bg-white/5 ring-1 ring-white/6 backdrop-blur flex flex-col items-center">
              <div className="w-40 h-40 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://via.placeholder.com/400x400.png?text=Borath"
                  alt="Borath portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Borath</h3>
              <p className="text-sm text-white/80 mt-1">Web Developer & Student</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
