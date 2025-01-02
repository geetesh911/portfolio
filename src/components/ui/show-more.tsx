interface ShowMoreProps {
    link: string;
}

export const ShowMore = ({ link }: ShowMoreProps) => {
    return (
        <div>
            <div className="relative bottom-0 z-[60] mx-auto mt-[-250px] flex h-56 w-full max-w-5xl items-center justify-center bg-zinc-900 transition duration-500 [mask-image:linear-gradient(to_bottom,transparent,white_10rem,white)]"></div>

            <div className="relative z-[70] flex justify-center">
                <a
                    className="rounded-lg border border-zinc-600 bg-zinc-900 px-8 py-2 text-zinc-200 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800/[0.8]"
                    href={link}
                >
                    Show More
                </a>
            </div>
        </div>
    );
};
