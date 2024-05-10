export default function Button (props) {
    return (
        <button type={props.type} onClick={props?.callBack ? props.callBack : null} className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black ${props.variant}`}>
            {props.label}
        </button>
    )
}