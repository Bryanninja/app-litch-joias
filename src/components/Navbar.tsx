'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#' },
    { name: 'Categorias', href: '#' },
    { name: 'Sobre', href: '#' },
  ];

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'bg-licht-light shadow-sm'
          : 'bg-transparent'
      )}
    >
      {/* Announcement Bar */}
      <div 
        className={clsx(
          "w-full bg-licht-dark text-white/90 text-center text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-500 overflow-hidden flex items-center justify-center",
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}
      >
        <span>Envio seguro para todo o Brasil • Garantia Vitalícia</span>
      </div>

      <nav 
        className={clsx(
          "container mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-500",
          isScrolled ? "py-4 text-licht-dark" : "py-6 text-white"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-widest uppercase flex items-center"
        >
          <Logo
            className={clsx(
              'w-24 md:w-32 transition-colors duration-300',
              isScrolled ? 'text-licht-gold' : 'text-licht-light',
            )}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden items-center space-x-10 text-sm tracking-widest uppercase md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-licht-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            href={getWhatsAppLink(WHATSAPP_MESSAGES.navbar)}
            className={clsx(
              isScrolled ? 'border-licht-dark' : 'border-white',
            )}
          >
            Fale no WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-licht-light text-licht-dark absolute top-full left-0 flex w-full flex-col space-y-4 border-t border-gray-200 px-6 py-6 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-licht-gold text-lg tracking-wide uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="outline" 
            href={getWhatsAppLink(WHATSAPP_MESSAGES.navbar)}
            className="mt-4 w-full border-licht-dark text-licht-dark"
          >
            Fale no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
}
