export type Contribution = {
    title: string;
    description: string;
    links: { github: string } & Record<string, string>;
    forks: string;
    stars: string;
};
