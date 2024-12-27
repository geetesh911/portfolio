import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import type { Contribution } from '../types/contribution.type';
import contributions from '@/data/contributions.json';

const Card = ({ title, description, forks, stars }: Contribution) => {
    return (
        <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-900 p-4 shadow-sm">
            <div className="relative flex h-full flex-col justify-between">
                <div className="z-50">
                    <h2 className="z-50 text-base font-bold text-zinc-100">{title}</h2>
                    <p className="z-50 mt-4 text-sm font-normal leading-loose tracking-wide text-zinc-400">
                        {description}
                    </p>
                </div>
                <div className="z-50 mt-4 flex flex-row items-center space-x-4 text-zinc-500 group-hover:text-cyan-500">
                    <div className="flex flex-row items-center space-x-1 text-sm font-normal">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="h-4 w-4 stroke-1"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                        </svg>
                        <span className="z-50 group-hover:text-cyan-500">{forks}</span>
                    </div>
                    <div className="flex flex-row items-center space-x-1 text-sm font-normal">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="h-4 w-4 stroke-1"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                        </svg>
                        <span className="">{stars}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const OpenSourceCards = () => {
    const items = contributions.map((item) => ({
        title: item.title,
        link: item.links.github,
        component: <Card {...item} />,
    }));
    return (
        <div className="mx-auto max-w-5xl px-8">
            <CardHoverEffect items={items} toCover />
        </div>
    );
};
