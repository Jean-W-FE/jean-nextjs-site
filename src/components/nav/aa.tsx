'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl'
import { Icons } from "@/components/icons"
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'


export function Header2(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('common');
    const menuItems = [
        { href: '/', label: t('nav.home') },
        { href: '/about', label: t('nav.about') },
        { href: '/work', label: t('nav.work') },
        { href: '/blog', label: t('nav.blog') },
        { href: '/contact', label: t('nav.contact') },
    ]
    console.log('menuItems', menuItems)
    return (
        <header className="top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
            <div className='container flex items-center justify-between p-4'>
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
                >
                    <Icons.rocket className="h-6 w-6 md:hidden lg:block" />
                    <span className="hidden md:block">{siteConfig.name}</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    {
                        menuItems.map((item) => (
                            <Link href={item.href} key={item.href} className="text-gray-600 hover:text-black transition-colors">{item.label}</Link>
                        ))
                    }
                     <Link
                        href="/contact"
                        className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        >
                        {t('nav.contact')}
                    </Link>
                </nav>
                <button className="md:hidden p-2" onClick={(() => setIsMenuOpen(!isMenuOpen))} aria-label="Toggle menu">
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-full h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>
            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t"
                        >
                            <nav className='container mx-auto p-4'>
                                {
                                    menuItems.map((item) => 
                                        <Link 
                                            href={item.href} 
                                            className="block text-gray-600 hover:text-black transition-colors" 
                                            key={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                }
                                  <Link
                                    href="/contact"
                                    className="block mt-4 px-6 py-2 bg-black text-white text-center rounded-full hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t('nav.contact')}
                                </Link>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </header>
    )
}