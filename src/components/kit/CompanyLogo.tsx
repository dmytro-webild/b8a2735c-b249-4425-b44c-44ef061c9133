export default function CompanyLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src="https://storage.googleapis.com/webild/users/user_3MflL9ZEIL32aPnF1RkSL5Jnlzr/uploaded-1795753921314-e0sx5l8d.jpg"
      alt="Blackops Media Group Logo"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className={`object-contain object-left shrink-0 logo-crisp ${className}`}
    />
  );
}


