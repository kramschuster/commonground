// Perspective.ts

export interface Perspective {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const perspectives: Perspective[] = [];

export function addPerspective(perspective: Perspective): void {
    perspectives.push(perspective);
}

export function getPerspectives(): Perspective[] {
    return perspectives;
}
