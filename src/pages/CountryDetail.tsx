import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Country } from '../types';

export function CountryDetail() {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountry(data);
        setLoading(false);
      });
  }, [id]);

  if (loading || !country) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">Official Name:</p>
              <p className="font-semibold">{country.name.official}</p>
            </div>
            <div>
              <p className="text-gray-600">Capital:</p>
              <p className="font-semibold">{country.capital?.[0]}</p>
            </div>
            <div>
              <p className="text-gray-600">Region:</p>
              <p className="font-semibold">{country.region}</p>
            </div>
            <div>
              <p className="text-gray-600">Population:</p>
              <p className="font-semibold">
                {country.population.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
              <Heart className="h-6 w-6" />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}