import { SITE_DATA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-4 text-center">
        <p className="font-orbitron font-bold text-xl text-white mb-2">AS OP</p>
        <p className="text-sm text-gray-500 mb-4">{SITE_DATA.footer.tagline}</p>
        <div className="text-xs text-gray-600">
          {SITE_DATA.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
