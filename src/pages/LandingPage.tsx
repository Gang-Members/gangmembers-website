import React, { useEffect, useState } from "react";
interface Motm {
    name: string;
    month: string;
}

interface Post {
    title: string;
    referance: string;
}

async function getRecentPosts() {
    const response = await fetch("https://localhost:5001/api/blog");
    const data = await response.json();
    return data;
}

async function getMotm() {
    const response = await fetch("https://localhost:5001/api/motm");
    const data = await response.json();
    return data;
}


export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [motm, setMotm] = useState<Motm[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([getRecentPosts(), getMotm()])
            .then(([posts, motm]) => {
                setPosts(posts);
                setMotm(motm);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <section>Loading...</section>; // Replace with your loading icon
    }

    if (error) {
        return <section>Error: failed to get items</section>;
    }

    return (
        <>
            <section className="posts">
                <h1>Recent posts</h1>
                <section className="post">
                    <section>
                        <img src="https://via.placeholder.com/150" alt="post" />
                    </section>
                    <section>
                        <h2>{posts[0]?.title}</h2>
                        <p>{posts[0]?.referance}</p>
                    </section>
                </section>
            </section>
            <section className="motms">
                <h1>Member of the month</h1>
                <section className="motm">
                    <section>
                        <img src="https://via.placeholder.com/150" alt="motm" />
                    </section>
                    <section>
                        <h2>{motm[0]?.name}</h2>
                        <p>{motm[0]?.month}</p>
                    </section>
                </section>
            </section>

        </>
    );
};