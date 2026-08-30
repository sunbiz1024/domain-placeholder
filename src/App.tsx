import { motion } from 'framer-motion';
import { Sparkles, Music, Crown } from 'lucide-react';

export default function App() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black font-sans text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-rainbow blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-rainbow blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center gap-8 text-center p-6">
        
        {/* Bouncing Basketball / Icon */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          🏀
          <motion.div 
            className="absolute -right-4 -top-4 text-4xl text-yellow-400"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🐔
          </motion.div>
        </motion.div>

        {/* Domain Name */}
        <div className="flex flex-col items-center gap-2">
          <motion.h1 
            className="font-display text-5xl md:text-7xl font-bold tracking-tight rainbow-text uppercase drop-shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            ikun.是.gay
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-xl font-bold md:text-2xl"
          >
            <Music className="h-6 w-6 text-pink-500 animate-pulse" />
            <span>你干嘛~ 哎哟~</span>
            <Music className="h-6 w-6 text-pink-500 animate-pulse" />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div 
          className="mt-8 max-w-lg rounded-2xl border-2 border-white/20 bg-black/50 p-6 backdrop-blur-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-center mb-4">
            <Crown className="text-yellow-400 h-8 w-8" />
          </div>
          <p className="font-mono text-lg leading-relaxed text-gray-300">
            这个域名太美了，就像只因一样。
            <br />
            <br />
            <span className="text-white font-bold">🚧 占位页面 / 建设中 🚧</span>
            <br />
            练习时长两年半的开发者正在为其注入灵魂。
          </p>
        </motion.div>
        
        {/* Interactive Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 flex items-center gap-2 rounded-full bg-rainbow px-8 py-4 font-display text-xl font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          onClick={() => alert("唱！跳！rap！篮球！")}
        >
          <Sparkles className="h-5 w-5" />
          尽情期待
          <Sparkles className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t-2 border-white/10 bg-black/80 py-2 font-mono text-sm tracking-widest text-white/50">
        <div className="ticker flex gap-8">
          <span>🎵 鸡你太美</span>
          <span>🏀 练习时长两年半</span>
          <span>✨ 个人练习生</span>
          <span>🎤 唱跳RAP篮球</span>
          <span>🎵 鸡你太美</span>
          <span>🏀 练习时长两年半</span>
          <span>✨ 个人练习生</span>
          <span>🎤 唱跳RAP篮球</span>
          <span>🎵 鸡你太美</span>
          <span>🏀 练习时长两年半</span>
          <span>✨ 个人练习生</span>
          <span>🎤 唱跳RAP篮球</span>
        </div>
      </div>
    </div>
  );
}
