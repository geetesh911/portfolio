import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import about from '@/data/about.json';

export const WorkExperienceTabs = () => {
    return (
        <Tabs
            defaultValue={about.workExperience[0].name}
            className="mx-auto mt-20 w-full max-w-2xl"
        >
            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Tabs container */}
                <div className="relative">
                    <div className="absolute -left-6 hidden h-full w-px overflow-hidden bg-zinc-800 md:block">
                        <span
                            className="absolute z-20 h-[0.1rem] w-[0.1rem] rotate-[180deg] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500"
                            style={{ visibility: 'hidden' }}
                        />
                    </div>

                    <TabsList className="flex h-auto flex-row justify-start space-y-0 overflow-x-auto bg-transparent md:flex-col md:items-start md:justify-center md:space-y-2 md:overflow-x-visible">
                        {about.workExperience.map((company) => (
                            <div key={company.name} className="relative my-2">
                                <TabsTrigger
                                    value={company.name}
                                    className="text-md group relative z-20 flex w-full min-w-28 flex-row items-center justify-center space-x-2 rounded-md px-4 py-2 text-left text-zinc-400 data-[state=active]:bg-zinc-800 md:justify-start"
                                >
                                    <span>{company.name}</span>
                                </TabsTrigger>
                            </div>
                        ))}
                    </TabsList>
                </div>

                {/* Content container */}
                <div className="mt-4 flex-1 md:mt-0">
                    {about.workExperience.map((company) => (
                        <TabsContent key={company.name} value={company.name}>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <h1 className="text-2xl font-bold text-zinc-100">
                                        {company.role}{' '}
                                        <span className="text-cyan-500">@ {company.name}</span>
                                    </h1>
                                    {company.period && (
                                        <div className="text-sm tracking-widest text-zinc-400">
                                            {company.period}
                                        </div>
                                    )}
                                    {company.location && (
                                        <p className="text-sm text-zinc-400">{company.location}</p>
                                    )}
                                    {company.achievements && (
                                        <div>
                                            {company.achievements.map((achievement) => (
                                                <div
                                                    key={achievement}
                                                    className="my-2 flex flex-row items-start space-x-2"
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 16 16"
                                                        className="mt-[3px] flex-shrink-0 text-cyan-500"
                                                        height="1em"
                                                        width="1em"
                                                    >
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                    <span className="text-sm text-zinc-400">
                                                        {achievement}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </div>
            </div>
        </Tabs>
    );
};
