import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Check, 
  ArrowRight, 
  Globe, 
  Zap, 
  Shield, 
  MessageSquare,
  Search,
  RefreshCw,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Resources', hasDropdown: true },
    { name: 'Documentation' },
    { name: 'Customers' },
    { name: 'Blog' },
    { name: 'Pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#030712]/80 backdrop-blur-md border-slate-800/50 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">Mintlify</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href="#" 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Contact sales
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
            Start for free
          </button>
        </div>

        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#030712] border-b border-slate-800 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href="#" className="text-lg font-medium text-slate-400">{link.name}</a>
              ))}
              <hr className="border-slate-800 my-2" />
              <button className="text-left py-2 text-slate-400">Contact sales</button>
              <button className="bg-brand-primary text-black w-full py-3 rounded-xl font-bold">Start for free</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6 tracking-wide uppercase"
          >
            <Zap size={12} className="fill-brand-primary" />
            AI-Powered Documentation
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            The Intelligent <br />
            <span className="text-brand-primary relative">
              Knowledge Platform
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-primary/30 origin-left rounded-full" 
              />
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            The intelligent knowledge platform with documentation and video access solutions. Build better developer experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 max-w-md relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-3.5 text-white outline-none focus:border-brand-primary/50 transition-colors"
              />
            </div>
            <button className="bg-white text-black px-8 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
              Start now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Start now with free plan. Explore{" "}
            <a href="#" className="text-brand-primary hover:underline">documentation</a>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-primary/30 blur-[120px] rounded-full transform -translate-y-10 scale-110" />
          <div className="relative rounded-2xl border border-slate-800 bg-[#0A0D12] shadow-2xl overflow-hidden group">
            <div className="h-8 bg-slate-900 flex items-center px-4 gap-1.5 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            </div>
            <div className="aspect-[4/3] relative">
              {/* Mock Dashboard UI */}
              <div className="p-6 grid grid-cols-4 gap-4">
                <div className="col-span-1 space-y-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-3 w-full bg-slate-800/50 rounded-full" />
                  ))}
                </div>
                <div className="col-span-3 space-y-6">
                  <div className="h-4 w-1/3 bg-brand-primary/20 rounded-full" />
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-32 bg-slate-800/20 border border-slate-800 rounded-xl p-4 space-y-3">
                         <div className="w-10 h-10 rounded-lg bg-brand-primary/10 mb-2" />
                         <div className="h-2 w-full bg-slate-800/50 rounded-full" />
                         <div className="h-2 w-2/3 bg-slate-800/50 rounded-full" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-40 w-full bg-slate-800/10 border border-slate-800 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoCloud = () => {
  const logos = [
    "ANTHROP\\C", "coinbase", "Microsoft", "Elarhorc", "Slymanity", "Sismbook"
  ];

  return (
    <section className="py-20 border-b border-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-bold tracking-widest text-slate-400 hover:text-white cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Built for the intelligence age
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Built for both intelligence and humans alike. Performance so intense that documentation matches modern development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            className="relative p-8 rounded-3xl bg-[#0A0D12] border border-slate-800 overflow-hidden group transition-shadow"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[60px] group-hover:bg-brand-primary/10 transition-colors" />
            <div className="relative mb-8">
              <h3 className="text-2xl font-bold mb-4">Built for both people and AI</h3>
              <div className="aspect-video bg-slate-900/50 rounded-xl border border-slate-800 p-4 overflow-hidden relative">
                 <div className="h-full bg-slate-800/20 rounded-lg border border-slate-800/50 p-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-16 h-3 rounded-full bg-slate-700/50" />
                    </div>
                    <div className="space-y-2">
                       <div className="h-4 w-3/4 bg-slate-800/50 rounded-full" />
                       <div className="h-4 w-full bg-slate-800/50 rounded-full" />
                       <div className="h-4 w-1/2 bg-slate-800/50 rounded-full" />
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                       <div className="h-20 bg-brand-primary/5 border border-brand-primary/10 rounded-lg" />
                       <div className="h-20 bg-brand-primary/5 border border-brand-primary/10 rounded-lg" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            className="relative p-8 rounded-3xl bg-[#0A0D12] border border-slate-800 group transition-shadow"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[60px] group-hover:bg-blue-500/10 transition-colors" />
            <h3 className="text-2xl font-bold mb-4">Self-updating knowledge management</h3>
            <p className="text-slate-400 mb-8 max-w-sm">
              Self-updating knowledge management to consolidate news across remote documentation auto-sync and video.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Search size={18}/>, text: "Power search across all content" },
                { icon: <RefreshCw size={18}/>, text: "Remote and auto-sync systems" },
                { icon: <Globe size={18}/>, text: "Self-updating knowledge management" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-primary">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AssistantSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Intelligent assistance for <br /> your users
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-md">
            Embedded interface and AI chat users embedded AI and documentation. Is modern solution with auto-generated documentation and AI-powered support.
          </p>
          <button className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 group transition-all">
            Browse now
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full" />
          <div className="relative bg-[#0A0D12] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <div className="w-5 h-5 bg-brand-primary rounded-sm" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">AI Chat</div>
                      <div className="text-xs text-brand-primary flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                        Always online
                      </div>
                    </div>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-sm">
                      Hi there! How can I help you today?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-brand-primary rounded-2xl rounded-tr-none p-4 max-w-[80%] text-sm text-black font-medium">
                      How do I set up custom triggers?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-sm">
                      You can set up custom triggers by going to Settings → Events and adding a new event listener.
                    </div>
                  </div>
               </div>
               <div className="mt-8 pt-4 border-t border-slate-800">
                  <div className="bg-slate-900 p-3 rounded-xl flex items-center justify-between text-slate-500 text-sm">
                    Type a message...
                    <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-black">
                      <ArrowRight size={16} />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EnterpriseSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0A0D12] border border-slate-800 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] group-hover:bg-brand-primary/10 transition-colors" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">Bring intelligence to enterprise knowledge</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Better documentation to bring intelligence to enterprise knowledge. Scale with security and confidence.
              </p>
            </div>
            <div className="mt-12">
               <div className="flex items-center -space-x-3">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0D12] bg-slate-800" />
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-[#0A0D12] bg-brand-primary flex items-center justify-center text-black font-bold text-xs">
                   50+
                 </div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0A0D12] border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 font-bold">
                 P
              </div>
              <h3 className="text-xl font-bold mb-4">Build with partnership</h3>
              <p className="text-slate-400 leading-relaxed">
                Build with partnership and constants and environment solutions within the enterprise knowledge.
              </p>
            </div>
            
            <div className="bg-[#0A0D12] border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                 <Shield />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance and access control</h3>
              <p className="text-slate-400 leading-relaxed">
                Build allow constants requirements for compliance and access control. Enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-slate-900 border border-slate-800 p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-4">Case Study</div>
              <h2 className="text-5xl font-bold mb-8">Anthropic</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                Anthropic is a AI research company focusing on building reliable, interpretable and steerable AI systems.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">2M+</div>
                  <div className="text-slate-500 text-sm">Monthly active users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-slate-500 text-sm">Uptime reliability</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-video lg:aspect-auto h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2670&auto=format&fit=crop" 
                alt="Desert" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    {
      title: "Explore",
      links: ["About us", "Resources", "Documents", "Careers", "Footer"]
    },
    {
      title: "Resources",
      links: ["About us", "Documentation", "Communities", "Mintlify Teams", "Vident Projects"]
    },
    {
      title: "Documentation",
      links: ["Documentation", "AI Chat", "AI Assistants"]
    },
    {
      title: "Company",
      links: ["About us", "Customers", "Blog", "Pricing", "Terms of Service"]
    },
    {
      title: "Legal",
      links: ["Contact", "Terms of Use", "Terms", "Privacy Policy", "Terms and Conditions"]
    }
  ];

  return (
    <footer className="pt-24 pb-12 border-t border-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-6">
          <div className="flex items-center gap-6 text-slate-500">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">System Status</span>
            <span className="text-[10px] font-bold text-white uppercase ml-1">Live</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <AssistantSection />
        <EnterpriseSection />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
}
