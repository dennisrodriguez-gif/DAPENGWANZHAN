/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Gamepad2, 
  AppWindow, 
  Mail, 
  ExternalLink, 
  Github, 
  BookOpen, 
  ChevronRight,
  Sparkles,
  LayoutGrid,
  Zap
} from "lucide-react";

const PROJECTS = {
  games: [
    { name: "消消乐", url: "https://match.tina-ai.xyz/", description: "经典三消益智游戏" },
    { name: "卡牌游戏", url: "https://card.tina-ai.xyz/", description: "策略卡牌对战" },
    { name: "数块消除", url: "https://sum.tina-ai.xyz/", description: "数学逻辑消除挑战" },
    { name: "新星防御", url: "https://tafang.tina-ai.xyz/", description: "科幻风格塔防游戏" },
    { name: "色彩敏感度", url: "https://color.tina-ai.xyz/", description: "视觉敏锐度测试" },
    { name: "MBTI人格测试", url: "https://gitd2p7yoixz4.ok.kimi.link/", description: "AI驱动的性格分析" },
  ],
  apps: [
    { name: "在线抽奖", url: "https://www.doubao.com/share/code/201655d002efc315", description: "公平公正的随机抽奖工具" },
    { name: "一次函数可视化", url: "https://www.doubao.com/share/code/a0b1fb925ce2f00c", description: "数学函数动态演示" },
    { name: "方程3D可视化", url: "https://www.doubao.com/share/code/4f920f548a279f42", description: "三维空间方程渲染" },
    { name: "色彩敏感度测试", url: "https://www.doubao.com/share/code/cb6e6a8030739bad", description: "深度视觉测试工具" },
    { name: "单位换算工具", url: "https://www.doubao.com/share/code/172c2ec0a68789b7", description: "全能型单位转换助手" },
    { name: "单词听写助手", url: "https://www.doubao.com/share/code/1e2e90bb7283591e", description: "智能英语学习伴侣" },
  ]
};

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
  <div className="flex flex-col mb-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <h2 className="text-2xl font-display font-bold tracking-tight">{title}</h2>
    </div>
    <p className="text-zinc-400 text-sm">{subtitle}</p>
  </div>
);

interface ProjectProps {
  project: {
    name: string;
    url: string;
    description: string;
  };
  index: number;
  key?: string | number;
}

const ProjectCard = ({ project, index }: ProjectProps) => (
  <motion.a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className="glass-card p-6 flex flex-col group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink className="w-4 h-4 text-emerald-400" />
    </div>
    <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
      {project.name}
      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      {project.description}
    </p>
    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Project Link</span>
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 animate-pulse" />
    </div>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900">
                <img 
                  src="https://picsum.photos/seed/tina/400/400" 
                  alt="TinaRen Avatar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-black p-2 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter"
              >
                TinaRen的<span className="gradient-text">AI作品集</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-400 text-lg md:text-xl mb-8 font-light"
              >
                欢迎和我一起玩AI~~
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <a 
                  href="mailto:renhong6@gmail.com" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  renhong6@gmail.com
                </a>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  <BookOpen className="w-4 h-4 text-red-400" />
                  小红书：@Tina读书时间
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        {/* Games Section */}
        <section className="mb-20">
          <SectionHeader 
            icon={Gamepad2} 
            title="我的AI游戏" 
            subtitle="探索充满创意的AI驱动游戏世界"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.games.map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Apps Section */}
        <section>
          <SectionHeader 
            icon={AppWindow} 
            title="我的AI应用" 
            subtitle="高效实用的AI工具与可视化实验"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.apps.map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-display font-bold tracking-tight">TinaRen AI</span>
          </div>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Built with AI for the Future.
          </p>
          <div className="flex gap-4">
            <Github className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
