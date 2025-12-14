import { SITE_DATA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        <h2 className="font-orbitron font-black text-2xl text-white tracking-widest mb-4">
          AS OP
        </h2>
        
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
        
        <p className="text-gray-400 text-sm mb-6 max-w-md">
          {SITE_DATA.footer.tagline}
        </p>
        
        <div className="text-xs text-gray-600 font-medium">
          {SITE_DATA.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
