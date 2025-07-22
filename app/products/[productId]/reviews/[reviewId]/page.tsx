interface ReviewPageProps {
    params: {
        productId: string;
        reviewId: string;
    };
}
export default function ReviewPage({ params }: ReviewPageProps) {
    return <>
        <h1>Product ID: {params.productId}</h1>
        <h1>Review ID: {params.reviewId}</h1>
    </>

}