import { useState } from 'react';
import type { Link } from '../types/link.type';
import { AnimatePresence, motion } from 'framer-motion';

export const NavbarLinks = ({ links }: { links: Array<Link> }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="ml-8 flex flex-row space-x-8">
            {links.map((link, idx) => (
                <a
                    key={link.url}
                    className="relative text-sm text-white"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    href={link.url}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 block h-full w-full rounded-lg bg-zinc-700"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <span className="relative z-10 inline-block px-2 py-2">{link.name}</span>
                </a>
            ))}
        </div>
    );
};
