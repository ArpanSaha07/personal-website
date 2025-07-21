import Link from 'next/link';

export default function Button({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <button className="relative overflow-hidden rounded-full transition-all duration-300 flex items-center group ${className}">
      <Link href={href}>
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-1/2 w-0 h-0 rounded-full 
                        transition-all duration-500 ease-out 
                        group-hover:w-[500px] group-hover:h-[500px] 
                        transform -translate-x-1/2 translate-y-1/2 origin-bottom"
        />
      </Link>
    </button>
  );
}

// bg border-3, border-white, tetx-black, hover:text-white, text-[20px]

// bg-black, group-hover:w-[600px] group-hover:h-[600px]


