import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import Loader from "../components/Loader";
import { memesData } from "../../memeData";
import "./Category.css";

const Category = () => {
    const { category } = useParams();

    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // 🔥 Simulate API delay (optional)
        setTimeout(() => {
            if (!category || category === "all") {
                setMemes(memesData);
            } else {
                const filtered = memesData.filter(
                    (meme) =>
                        meme.category.toLowerCase() === category.toLowerCase()
                );
                setMemes(filtered);
            }

            setLoading(false);
        }, 500);
    }, [category]);

    return (
        <div className="category-page">
            <div className="container py-4">

                {/* 🔥 Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-white text-capitalize category-title m-0">
                        {category || "All"}
                    </h2>
                    <span className="text-secondary small">
                        {memes.length} results
                    </span>
                </div>

                {/* 🔥 Content */}
                {loading ? (
                    <Loader />
                ) : memes.length > 0 ? (
                    <div className="row g-4">
                        {memes.map((meme) => (
                            <div key={meme.id} className="col-12 col-sm-6 col-lg-4">
                                <div className="meme-card-wrapper">
                                    <MemeCard meme={meme} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-text text-white">
                        😢 No memes found for "{category}"
                    </div>
                )}

            </div>
        </div>
    );
};

export default Category;