import "./loader.css";


const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="w-10 h-10 border-4 border-border border-t-accent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;