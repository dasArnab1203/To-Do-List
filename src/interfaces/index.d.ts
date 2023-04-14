

export interface IToDo {
    id: number;
    title: string;
    description: string;
    status: "open" | "working" | "done" | "overdue";
    createdAt: string;
}