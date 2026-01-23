import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: 'arrow' | 'external' | 'arrow-right';
  variant?: 'default' | 'large';
}

export default function Button({ href, children, external = false, icon = 'arrow-right', variant = 'default' }: ButtonProps) {
  const baseClasses = "group relative inline-flex items-center gap-3 bg-[#cbb37c]/25 dark:bg-[#d4be8a]/30 border border-[#cbb37c]/40 dark:border-[#d4be8a]/50 rounded-lg hover:border-[#cbb37c] dark:hover:border-[#d4be8a] hover:shadow-[0_12px_40px_-12px_rgba(203,179,124,0.6)] dark:hover:shadow-[0_12px_40px_-12px_rgba(212,190,138,0.5)] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden";
  
  const sizeClasses = variant === 'large' 
    ? "px-5 py-2 text-[1.5rem] sm:text-[1.75rem]" 
    : "px-6 py-3 text-[0.9375rem]";
  
  const textClasses = "relative z-10 text-[#1a1918] dark:text-[#0f0f0f] group-hover:text-white dark:group-hover:text-[#0f0f0f] transition-colors duration-300 font-medium";
  
  const iconClasses = "relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-[#1a1918] dark:text-[#0f0f0f] group-hover:text-white dark:group-hover:text-[#0f0f0f]";

  const renderIcon = () => {
    if (icon === 'external') {
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" className={iconClasses + " group-hover:-translate-y-1"}>
          <path d="M3 2h9v9M12 2L2 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (icon === 'arrow') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" className={iconClasses}>
          <path d="M1 8h14M11 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" className={iconClasses}>
        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  };

  const className = `${baseClasses} ${sizeClasses}`;

  const content = (
    <>
      {/* Fill animation from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#cbb37c] to-[#b8a066] dark:from-[#d4be8a] dark:to-[#c0aa76] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
      <span className={textClasses}>{children}</span>
      {renderIcon()}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
