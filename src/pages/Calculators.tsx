import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import CalculatorCard from '../components/ui/CalculatorCard';
import { calculators } from '../data/calculators';

export default function Calculators() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCalculators = calculators.filter(
    (calc) =>
      calc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Sleep Calculators
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Explore our collection of science-based sleep tools designed to help you understand and improve your sleep.
        </p>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search calculators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
            aria-label="Search calculators"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCalculators.map((calc) => (
            <CalculatorCard key={calc.id} {...calc} />
          ))}
        </div>

        {filteredCalculators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No calculators found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
