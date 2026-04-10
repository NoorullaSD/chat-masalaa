import { useState } from "react";
import CategoryPills from "./CategoryPills";
import Navbar from "./NavBar";
import "./layOut.css";


const Layout = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div >
            <Navbar />
            <div style={{ backgroundColor: "#0D0D0D", padding: "10px 10px" }}>
                <CategoryPills
                    active={activeCategory}
                    onSelect={setActiveCategory}
                />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;