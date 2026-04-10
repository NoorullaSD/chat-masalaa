import { Flame, Smile, Clapperboard, Trophy, Search, User } from "lucide-react";
import "./navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const NavItem = ({ icon: Icon, label, active, onClick }) => {
    return (
        <div className={`nav-item-custom ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <Icon size={16} />
            <span>{label}</span>
        </div>
    );
};


const navItems = [
    { label: "Trending", icon: Flame, path: '/' },
    { label: "Memes", icon: Smile },
    { label: "Cinema", icon: Clapperboard, path: "/cinema" },
    { label: "Sports", icon: Trophy },
];

const Navbar = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("Trending");

    return (
        <nav className="navbar-custom">
            <div className="d-flex py-3 justify-content-between align-items-center">
                {/* 🔹 LEFT */}
                <div className="nav-left">
                    <h4 className="logo-text m-0">
                        <span className="text-white">Chat</span>
                        <span className="text-danger"> Masalaa</span>
                    </h4>
                </div>

                {/* 🔹 CENTER */}
                <div className="nav-center-wrapper">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            active={activeTab === item.label}
                            onClick={() => {
                                setActiveTab(item.label)
                                navigate(item.path);
                            }}
                        />
                    ))}
                </div>

                {/* 🔹 RIGHT */}
                <div className="nav-right" >
                    <Search className="nav-icon" />
                    <User className="nav-icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;