"use client";

import { useEffect, useState } from 'react';

export default function EndangeredCarousel() {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/data/endangered_languages.json');
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setLanguages(data);
      } catch (e) {
        // ignore
      }
    }
    load();
    return () => { cancelled = true };
  }, []);

  if (!languages) {
    return (
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Endangered Languages of Tamil Nadu</h2>
        <p className="text-white/70">Loading...</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 overflow-x-hidden">
      {/* Dark gradient wrapper for better contrast against background image */}
      <div className="rounded-2xl p-6 bg-gradient-to-br from-black/70 via-slate-900/60 to-black/70 backdrop-blur-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Endangered Languages of Tamil Nadu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map(lang => (
            <article key={lang.id} className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md max-w-full">
              <h3 className="text-lg font-semibold text-white mb-2">{lang.name}</h3>
              <p className="text-sm text-white/70 mb-4">{lang.region}</p>
              <p className="text-white/80 text-sm mb-4 break-words">{lang.summary}</p>
              <a href={`/archive/${lang.id}`} className="inline-block items-center gap-2 text-sm font-medium text-white/90 bg-white/10 px-3 py-2 rounded-full">View Details</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getIdForLang(name) {
  // Very small mapping for demo; in production link to real IDs
  const map = {
    Irular: 4,
    Kattunayakan: 7,
    Kota: 2,
    Kurumbas: 3,
    Kurumans: 6,
    Toda: 1
  };
  return map[name] || 1;
}
