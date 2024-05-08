export default function Button (attr) {
    return (
        <button type={attr.type} onClick={attr?.onClick ? attr.onClick : null} className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black ${attr.variant}`}>
            {attr.label}
        </button>
    )
}