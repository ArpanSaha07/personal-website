import { PillProps } from "@/app/types";

export default function Pill({ children, className = "" }: PillProps) {
    return (
        <span
            className={`inline-block border rounded-sm px-3 py-1 text-sm font-semibold ${className}`}
        >
            {children}
        </span>
    )
}
