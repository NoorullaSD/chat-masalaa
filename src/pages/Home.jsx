import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import SkeletonGrid from "../components/SkeletonGrid";
import { memesData } from "../../memeData";
import "./home.css";
import CategoryPills from "../components/CategoryPills";

const Home = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setMemes(memesData);
            setLoading(false);
        }, 1000);
    }, []);

    const handleLike = (id, liked) => {
        const updated = memes.map((m) =>
            m.id === id
                ? { ...m, likes: liked ? m.likes - 1 : m.likes + 1 }
                : m
        );
        setMemes(updated);
    };

    return (
        <div className="home-container container-fluid">

            {/* 🔥 HEADER SECTION */}
            <div className="home-header d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="home-title">🔥 Trending Memes</h2>
                    <p className="home-subtitle">Stay updated with viral meme news</p>
                </div>
            </div>



            {/* 🔥 CONTENT */}
            {loading ? (
                <SkeletonGrid />
            ) : (
                <div className="row g-4">
                    {memes.map((meme) => (
                        <div
                            key={meme.id}
                            className="col-12 col-sm-6 col-lg-4 col-xl-3"
                        >
                            <MemeCard meme={meme} onLike={handleLike} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;