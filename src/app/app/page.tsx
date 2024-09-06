import { Input } from "@/components/ui/input"

export default function AppPage() {
    return (
        <div className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <SearchIcon className="h-5 w-5 text-muted-foreground" />
            <Input type="text" placeholder="Search..." className="w-full bg-transparent outline-none" />
        </div>
    );
};

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}