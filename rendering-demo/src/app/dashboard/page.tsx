"use client"
import { useState } from "react";

export default function Dashboard() {
    console.log("Dashboard");
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Dashboard</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>{name}</p>
        </div>
    );
}