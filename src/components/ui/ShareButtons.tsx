import { Share2, Link, Twitter, Facebook, Mail } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: title,
          url: url,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.warn('Share cancelled or not supported');
        }
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy link:', error);
      }
    }
  };

  const shareLinks = [
    {
      icon: <Twitter className="w-4 h-4" />,
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      icon: <Facebook className="w-4 h-4" />,
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(title)}%0A%0A${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleShare}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Share"
      >
        <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
      {shareLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label={`Share on ${link.label}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
