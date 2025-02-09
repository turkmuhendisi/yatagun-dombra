import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const VideoThumbnail = ({ poster, onClick }) => {
    return (_jsxs("div", { className: "relative w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 cursor-pointer rounded-md border-2 border-gray-200", onClick: onClick, children: [_jsx("img", { src: poster, alt: "Video Thumbnail", className: "w-full h-full object-cover rounded-md brightness-75" }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx("div", { className: "bg-black bg-opacity-50 p-2 rounded-full", children: _jsx("svg", { className: "w-6 h-6 text-white", fill: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M8 5v14l11-7z" }) }) }) })] }));
};
export default VideoThumbnail;
