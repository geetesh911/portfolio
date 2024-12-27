import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import type { Project } from '../types/project.type';
import type { PropsWithChildren } from 'react';
import projects from '@/data/projects.json';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SourceLink = ({ link }: { link?: string }) => (
    <div className="mt-6 flex flex-row items-center space-x-2 px-0.5">
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 16 16"
            className={cn('stroke-1.5 h-3 w-3 text-zinc-400 group-hover:text-cyan-500', {
                invisible: !link,
            })}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
        </svg>
        <p
            className={cn('text-xs text-zinc-400 group-hover:text-cyan-500', {
                invisible: !link,
            })}
        >
            View
        </p>
    </div>
);

const CardImage = ({ title, img }: Pick<Project, 'title' | 'img'>) => (
    <div className="relative h-44 w-full bg-black/10 transition duration-500 group-hover:bg-transparent sm:h-60 md:h-44">
        <img
            alt={title}
            loading="lazy"
            data-image-component="true"
            decoding="async"
            data-nimg="fill"
            className="absolute inset-0 h-full w-full object-cover object-center text-transparent mix-blend-multiply"
            sizes="100vw"
            src={import.meta.env.SITE + img}
        />
    </div>
);

const CardTitle = ({ children }: PropsWithChildren) => (
    <h1 className="mt-4 font-bold tracking-wide text-zinc-100">{children}</h1>
);

const CardDescription = ({ children }: PropsWithChildren) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <p className="mt-8 line-clamp-3 text-sm leading-relaxed tracking-wide text-zinc-400">
                    {children}
                </p>
            </TooltipTrigger>
            <TooltipContent className="max-w-60 break-words bg-zinc-900 p-4 shadow-md">
                <p className="text-sm leading-relaxed tracking-wide text-zinc-400">{children}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

const Card = ({ img, title, description, link }: Project) => {
    return (
        <div
            className={
                'relative z-50 overflow-hidden rounded-2xl border border-transparent bg-zinc-800 group-hover:border-zinc-700'
            }
        >
            <div className="relative z-50">
                {img && <CardImage img={img} title={title} />}
                <div className="p-4">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <SourceLink link={link} />
                </div>
            </div>
        </div>
    );
};

export const ProjectCards = () => {
    const items = projects.map((item) => ({
        title: item.title,
        link: item.link,
        component: <Card {...item} />,
    }));
    return (
        <div className="mx-auto max-w-5xl px-8">
            <CardHoverEffect items={items} />
        </div>
    );
};
