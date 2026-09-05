import { useState, useEffect } from 'react';
import { Star, StarOff } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface FavoritesProps {
  itemId: string;
  itemType: 'calculator' | 'guide';
  className?: string;
}

export default function Favorites({ itemId, itemType, className = '' }: FavoritesProps) {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(itemId));
  }, [favorites, itemId]);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`p-2 rounded-lg transition-colors ${className} ${
        isFavorite
          ? 'text-yellow-500 hover:text-yellow-600'
          : 'text-gray-400 hover:text-yellow-500'
      }`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? (
        <Star className="w-5 h-5 fill-current" />
      ) : (
        <StarOff className="w-5 h-5" />
      )}
    </button>
  );
}
