import React from 'react';
import { Save, Sparkles, Shield, Zap, MessageSquare, ArrowRight, Bookmark, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-indigo-400/5 to-purple-400/5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight">
                Prompt<span className="text-gray-900">Saver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Save, organize, and reuse your most powerful AI prompts.<br className="hidden md:inline" />
                Seamlessly integrated with ChatGPT, Claude, and DeepSeek.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <a
                  href="#installation"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-medium transition-all duration-300 shadow-[0_1rem_2rem_-0.5rem_rgba(79,70,229,0.4)] hover:shadow-[0_1rem_2rem_-0.5rem_rgba(79,70,229,0.7)] hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-medium border border-gray-200 hover:border-gray-300 transition-all flex items-center gap-2 group hover:shadow-lg w-full sm:w-auto justify-center"
                >
                  Learn More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Streamline Your AI Workflow
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              PromptSaver helps you maintain a library of your most effective prompts,
              making your AI interactions more efficient and consistent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-amber-500" size={24} />}
              title="Instant Access"
              description="Access your entire prompt library with a single click while chatting"
            />
            <FeatureCard
              icon={<Brain className="text-blue-500" size={24} />}
              title="AI Platform Support"
              description="Works seamlessly with both ChatGPT, Claude, and DeepSeek interfaces"
            />
            <FeatureCard
              icon={<Save className="text-emerald-500" size={24} />}
              title="Local Storage"
              description="Your prompts are saved securely on your device for instant access"
            />
            <FeatureCard
              icon={<Shield className="text-purple-500" size={24} />}
              title="Privacy First"
              description="No cloud storage or external servers - your data stays with you"
            />
            <FeatureCard
              icon={<Sparkles className="text-pink-500" size={24} />}
              title="Clean Design"
              description="Minimal interface that enhances your AI chat experience"
            />
            <FeatureCard
              icon={<MessageSquare className="text-indigo-500" size={24} />}
              title="Quick Insert"
              description="Insert saved prompts into chat with a single click"
            />
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Installation Guide
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get started with PromptSaver in just a few simple steps
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-500/5 p-12 border border-gray-100">
              <ol className="space-y-12">
                <InstallStep
                  number="1"
                  title="Download PromptSaver"
                  description="Download the extension package from our secure Google Drive link"
                />
                <InstallStep
                  number="2"
                  title="Open Chrome Extensions"
                  description="Navigate to chrome://extensions/ in your Chrome browser and enable Developer mode"
                />
                <InstallStep
                  number="3"
                  title="Load the Extension"
                  description="Click 'Load unpacked' and select the downloaded extension directory"
                />
              </ol>
              <div className="mt-12 pt-12 border-t border-gray-100">
                <a
                  href="https://drive.google.com/file/d/1uH1m0bcw1GFtjMjSY0NFe0zygs3TtjTC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-medium transition-all duration-300 shadow-[0_1rem_2rem_-0.5rem_rgba(79,70,229,0.4)] hover:shadow-[0_1rem_2rem_-0.5rem_rgba(79,70,229,0.7)] hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Download Extension
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">PromptSaver</h3>
              <p className="text-gray-400">Your AI prompt management companion</p>
            </div>
            <div className="flex gap-12">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#installation" className="text-gray-400 hover:text-white transition-colors">Installation</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} PromptSaver. Released under the MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-gray-300 transition-colors"></div>
      <div className="relative">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform border border-gray-100">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function InstallStep({ number, title, description }) {
  return (
    <li className="flex gap-8">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/20">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </li>
  );
}

export default App;
