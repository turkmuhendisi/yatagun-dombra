export type Product = {
    id: number,
    name: string,
    price: string,
    description: string,
    url: string,
    features: string[],
    metarial?: string,
    images: string[],
    video?: string,
    videoThumbnail?: string,
    category: string,
    isFeatured?: boolean,
};