import { useParams } from "react-router-dom";

const MemeDetail = () => {
    const { id } = useParams();

    return (
        <div className="max-w-2xl mx-auto p-4 text-white">
            <img className="rounded-xl border border-[#333]" src="..." />

            <h1 className="text-2xl font-bold mt-4">Title</h1>
            <p className="text-gray-400 mt-2">Description</p>

            <div className="mt-4 border-y border-[#333] py-3 flex gap-6">
                ❤️ Like | 💬 Comment | 🔗 Share
            </div>
        </div>
    );
};

export default MemeDetail;