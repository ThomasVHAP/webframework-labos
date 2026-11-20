export interface User {
    id: number;
    name: string;
    description: string;
}

export const users: User[] = [
    {
        id: 1,
        name: "Elena Rostova",
        description: "Senior frontend engineer specializing in accessible design systems and React performance."
    },
    {
        id: 2,
        name: "Marcus Vance",
        description: "Product manager focused on developer tooling, API ergonomics, and platform growth."
    },
    {
        id: 3,
        name: "Sora Takahashi",
        description: "UX researcher who conducts usability testing and translates user insights into wireframes."
    },
    {
        id: 4,
        name: "Liam O'Connor",
        description: "DevOps architect managing Kubernetes clusters, CI/CD pipelines, and cloud observability."
    },
    {
        id: 5,
        name: "Amara Okafor",
        description: "Data scientist building predictive churn models and real-time analytics dashboards."
    }
];