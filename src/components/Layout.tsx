import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navBg = scrolled || !isHome ? 'bg-[#FDFAF6] border-b border-[#1A130C]/8 shadow-sm' : 'bg-transparent';
  const logoFilter = scrolled || !isHome ? '' : 'brightness-0 invert';
  const linkColor = scrolled || !isHome ? 'text-[#1A130C] hover:text-[#5BBFBF]' : 'text-white hover:text-white/70';
  const activeColor = scrolled || !isHome ? 'text-[#5BBFBF]' : 'text-white/70';
  const burgerColor = scrolled || !isHome ? 'text-[#1A130C]' : 'text-white';

  const navLinks = [
    { label: 'La carte', to: '/carte' },
    { label: 'Événements', to: '/evenements' },
    { label: 'À propos', to: '/about' },
  ];

  return (
    <>
      <ScrollToTop />

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="Ô Gourmandiz d'Aurore"
              className={`h-12 w-auto object-contain rounded transition-all duration-300 ${logoFilter}`}
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? activeColor : linkColor}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/commander"
              className="bg-[#5BBFBF] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#4AAEAE] transition-colors"
            >
              Commander
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(v => !v)} className={`md:hidden ${burgerColor}`}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FDFAF6] border-t border-[#1A130C]/10 px-5 py-6 flex flex-col gap-5">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="text-[#1A130C] font-medium text-lg">
                {label}
              </Link>
            ))}
            <Link
              to="/commander"
              className="bg-[#5BBFBF] text-white font-semibold px-6 py-3 rounded-full text-center"
            >
              Commander
            </Link>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1A130C] text-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <img src="/logo.jpeg" alt="Ô Gourmandiz d'Aurore" className="h-14 w-auto object-contain rounded-xl mb-4" />
            <p className="text-white/50 text-sm leading-relaxed">
              Pâtisseries artisanales de saison sur commande.<br />
              Laboratoire privé à La Motte (22).
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: 'Instagram', url: siteConfig.social.instagram },
                { label: 'Facebook', url: siteConfig.social.facebook },
                { label: 'TikTok', url: siteConfig.social.tiktok },
              ].map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="text-xs border border-white/20 hover:border-[#5BBFBF] hover:text-[#5BBFBF] px-3 py-1.5 rounded-full text-white/50 transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#5BBFBF] mb-5">Contact</p>
            <div className="space-y-2 text-sm text-white/60">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g,'')}`} className="block hover:text-white transition-colors">
                {siteConfig.contact.phone}
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="block hover:text-white transition-colors">
                WhatsApp
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-white transition-colors text-xs">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#5BBFBF] mb-5">Laboratoire</p>
            <p className="text-sm text-white/60 leading-relaxed">
              {siteConfig.contact.address.street}<br />
              {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
              Côtes-d'Armor · Bretagne
            </p>
            <p className="text-xs text-white/30 mt-3">Retrait sur rendez-vous uniquement</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-white/25 max-w-6xl mx-auto px-5">
          © {new Date().getFullYear()} {siteConfig.businessName}
        </div>
      </footer>

      {/* Sticky mobile CTA — masqué sur /commander */}
      {pathname !== '/commander' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-[#1A130C]/10 bg-[#FDFAF6]">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g,'')}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-[#1A130C] font-semibold text-sm border-r border-[#1A130C]/10"
          >
            <Phone className="w-4 h-4" /> Appeler
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Bonjour%20Aurore%20!%20Je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#5BBFBF] text-white font-semibold text-sm"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
