import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, type PropsWithChildren } from 'react';

const Wrapper = ({
    children,
    ...props
}: PropsWithChildren &
    (React.AnchorHTMLAttributes<HTMLAnchorElement> | React.HTMLAttributes<HTMLDivElement>)) => {
    if ((props as React.AnchorHTMLAttributes<HTMLAnchorElement>).href) {
        return <a {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
    }

    return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
};

export const CardHoverEffect = ({
    items,
    toCover,
    className,
}: {
    items: {
        title: string;
        link?: string;
        component: React.ReactNode;
    }[];
    toCover?: boolean;
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
                { 'gap-3': toCover },
                className,
            )}
        >
            {items.map((item, idx) => (
                <Wrapper
                    href={item?.link}
                    key={item?.title}
                    target="_blank"
                    rel="noreferrer"
                    className={cn('group relative block h-full w-full', {
                        'p-2': !toCover,
                    })}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className={cn(
                                    'absolute inset-0 block h-full w-full rounded-3xl bg-zinc-700/40',
                                    { 'z-40': toCover },
                                )}
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
                    {item.component}
                </Wrapper>
            ))}
        </div>
    );
};
