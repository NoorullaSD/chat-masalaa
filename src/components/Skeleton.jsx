import "./skeleton.css";


const SkeletonCard = () => {
    return (
        <div className="skeleton-card">

            {/* 🔥 IMAGE */}
            <div className="skeleton shimmer image"></div>

            {/* 🔥 TITLE */}
            <div className="skeleton shimmer title"></div>

            {/* 🔥 DESCRIPTION */}
            <div className="skeleton shimmer text"></div>
            <div className="skeleton shimmer text short"></div>

            {/* 🔥 ICONS */}
            <div className="skeleton-icons">
                <div className="skeleton shimmer icon"></div>
                <div className="skeleton shimmer icon"></div>
                <div className="skeleton shimmer icon"></div>
            </div>

        </div>
    );
};

export default SkeletonCard;