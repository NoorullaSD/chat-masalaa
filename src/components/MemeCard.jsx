import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import "./memecard.css";

const MemeCard = ({ meme, onLike }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        onLike(meme.id, liked);
    };

    return (
        <div className="meme-card">

            {/* 🔥 IMAGE */}
            <div className="meme-img-wrapper">
                <img src={meme.imageUrl} alt="meme" className="meme-img" />

                {/* Category Tag */}
                <span className="meme-category">
                    {meme.category}
                </span>
            </div>

            {/* 🔥 CONTENT */}
            <div className="meme-content">

                <h5 className="meme-title">
                    {meme.title}
                </h5>

                <p className="meme-desc">
                    {meme.description}
                </p>

                {/* 🔥 ACTIONS */}
                <div className="meme-actions">

                    <div className="d-flex align-items-center justify-content-center" >
                        <Heart onClick={handleLike} className={`icon ${liked ? "liked" : ""}`} />
                        {/* 🔥 FOOTER */}
                        <div className="meme-footer">
                            {meme.likes} likes
                        </div>
                    </div>

                    <MessageCircle className="icon" />
                    <Share2 className="icon" />
                </div>


            </div>
        </div>
    );
};

export default MemeCard;