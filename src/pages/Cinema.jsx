import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import Loader from "../components/Loader";
import { memesData } from "../../memeData";
import "./Cinema.css";
import SkeletonGrid from "../components/SkeletonGrid";

const Cinema = () => {
    const [cinemaMemes, setCinemaMemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // 🔥 simulate API delay
        setTimeout(() => {
            const filtered = memesData.filter(
                (meme) => meme.category.toLowerCase() === "cinema"
            );

            setCinemaMemes(filtered);
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="cinema-page">

            {/* 🔥 Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="cinema-title text-white m-0">
                    🎬 Cinema Memes
                </h2>
                <span className="text-secondary small">
                    {cinemaMemes.length} results
                </span>
            </div>

            {/* 🔥 Content */}
            {loading ? (
                <SkeletonGrid />
            ) : cinemaMemes.length > 0 ? (
                <div className="row g-4">
                    {cinemaMemes.map((meme) => (
                        <div key={meme.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <MemeCard meme={meme} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-white text-center mt-5">
                    😢 No Cinema memes found
                </div>
            )}

        </div>
    );
};

export default Cinema;