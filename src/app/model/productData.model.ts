import { Product } from "./product.model";

export interface ProductData {
    data: Product[];
    pages: number;
    page: number;
    size: number;
}