"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css'

const navLinks = [
    { title: "Login", href: "/login" },
    { title: "Register", href: "/register" },
    { title: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            <nav className="flex gap-4 mb-6">
                {navLinks.map((link) => {
                    const isActive = link.href === pathname;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                isActive
                                    ? "text-red-500 font-bold underline"
                                    : "text-gray-700 hover:text-red-500"
                            }
                        >
                            {link.title}
                        </Link>
                    )
                })}
            </nav>
            <main>{children}</main>
        </>
    );
}
