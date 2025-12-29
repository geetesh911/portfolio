import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
    links: Array<{ name: string; url: string }>;
}

export function MobileMenu({ links }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-zinc-100 focus:outline-none"
                aria-label="Toggle mobile menu"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-zinc-100"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
                </svg>
            </button>

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={cn(
                    'fixed inset-0 bg-zinc-900/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out',
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                    'z-[200]',
                )}
            />

            {/* Menu */}
            <div
                className={cn(
                    'fixed right-0 top-0 h-full w-72 transform bg-zinc-900/95',
                    'shadow-xl backdrop-blur-sm transition-transform duration-300 ease-in-out',
                    isOpen ? 'translate-x-0' : 'translate-x-full',
                    'z-[200]',
                )}
            >
                <div className="flex h-full flex-col px-6 py-8">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 p-2 text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                        aria-label="Close menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <nav className="mt-8">
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 text-base font-medium text-zinc-100 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 border-t border-zinc-700/50 pt-8">
                            <a
                                href="/Geetesh_Resume_Senior_Engineer.pdf"
                                target="_blank"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-700"
                            >
                                Download CV
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
