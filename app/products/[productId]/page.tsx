
import { Metadata } from "next";

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => ({
    title: `Product ID: ${params.productId}`,
})
interface ProductPageProps {
    params: { productId: string }
}

export default function ProductPage({ params }: ProductPageProps) {
    return <h1>Product ID: {params.productId}</h1>;
}
