// shared/types/index.ts

// Domain types

export type User = {
    id: string;
    name: string;
    email: string;
};

export type Product = {
    id: string;
    name: string;
    price: number;
};

export type Order = {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
};

// Add more domain types as needed
