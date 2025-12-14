export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-transparent tracking-tighter opacity-50 select-none mb-[-40px] md:mb-[-60px]">
            DOMINATE
        </h1>
        <div className="relative z-10">
            <h2 className="font-orbitron text-white tracking-widest text-2xl font-bold mb-4">
                AS OP <span className="text-primary">COMMUNITY</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
            
            <div className="flex justify-center gap-8 mb-8 text-sm font-bold font-rajdhani text-gray-500 uppercase tracking-widest">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#" className="hover:text-primary transition-colors">About</a>
                <a href="#" className="hover:text-primary transition-colors">Join</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            
            <p className="text-gray-700 text-xs">© 2024 AS OP Gaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
