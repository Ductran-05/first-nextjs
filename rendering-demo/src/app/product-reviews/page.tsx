import { Product } from "@/component/product";
import { Reviews } from "@/component/reviews";
import { Suspense } from "react";

export default function ProductReviewsPage() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Product />

            </Suspense>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Reviews />
            </Suspense>
        </div>
    );
}