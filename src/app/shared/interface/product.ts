export interface Product {
    id?: number | string,
    name: string,
    tags: string,
    brand_id: string,
    description: string,
    details:string,
    quantity: number,
    product_category_id: string,
    price: number,
    is_featured: boolean,
    featured_image?: string,
   

}
