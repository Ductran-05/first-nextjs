
interface ProductPageProps {
    params: { productId: string }
}

export default function ProductPage({ params }: ProductPageProps) {
    return <h1>Product ID: {params.productId}</h1>;
}
