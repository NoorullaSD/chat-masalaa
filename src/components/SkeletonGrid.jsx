import SkeletonCard from "./Skeleton";
import "./skeletonGrid.css";

const SkeletonGrid = ({ count = 6 }) => {
    return (
        <div className="skeleton-grid-wrapper">

            <div className="skeleton-grid">
                {[...Array(count)].map((_, index) => (
                    <div
                        key={index}
                        className="skeleton-item"
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        <SkeletonCard />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SkeletonGrid;