import { Hardware } from "./hardware";

export interface Review {
    title: string;
    text: string;
    rating: number;
    hardware: Hardware;
}