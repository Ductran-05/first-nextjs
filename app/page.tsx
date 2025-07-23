// app/page.tsx
import Link from "next/link";
export default function HomePage() {
    return <>
        <h1>Home Page</h1>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
    </>
}
