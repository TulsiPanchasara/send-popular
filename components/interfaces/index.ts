export type productionsListType = {
    id: string;
    name: string;
    description: string;
image?: string;
}

export type mainProductionType = {
    records: productionsListType[];
}

export type productsListType = {
    cat_id: string;
    category_name: string;
    description: string;
    height: string;
    id: string;
    image: string;
    name: string;
    price: string;
    subcat_id: string;
    subcategory_name: string;
    weight: string;}

export type mainProductsType = {
    records: productsListType[];
}

export type formatPorudctListType = {
    category: productsListType;
    subCategory: productsListType[];
    products: productsListType[];
}