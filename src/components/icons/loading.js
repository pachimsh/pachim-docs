export default function Loading({ show = true , className = null , color = 'text-white' }) {
    return (
        show ? (
            <svg className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="25 25 50 50">
                <circle className={`stroke-current ${color} text-opacity-30`} cx="50" cy="50" r="20" fill="none" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300"/>
                <circle className={`stroke-current ${color}`} cx="50" cy="50" r="20" fill="none" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"/>
                </circle>
            </svg>
        ) : null
    )
}
