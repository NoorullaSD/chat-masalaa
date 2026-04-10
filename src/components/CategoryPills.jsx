import { useState } from "react";
import "./categoryPills.css";

const categories = ["All", "Cinema", "Sports", "Politics", "Viral"];

const CategoryPills = ({ onSelect }) => {
    const [active, setActive] = useState("All");

    const handleClick = (cat) => {
        setActive(cat);
        onSelect && onSelect(cat);
    };

    return (
        <div className="py-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleClick(cat)}
                    className={`px-4 py-2 rounded-pill mx-2 transition-all duration-200 ml-2
                    ${active === cat
                            ? "bg-accent text-white"
                            : "bg-[#2D2D2D] text-white hover:bg-accent"
                        }`}>
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryPills;