"use client";

import { useState, useEffect } from "react";
import { MapPin, Info, ExternalLink, Users, FileText } from "lucide-react";
import { languagesData } from "../utils/sampleData";

export default function MapComponent({ highlightedLanguageId, className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    // Simulate map initialization
    setMapInitialized(true);
    
    // If a specific language is highlighted, select it
    if (highlightedLanguageId) {
      const highlighted = languagesData.find(lang => lang.id === parseInt(highlightedLanguageId));
      if (highlighted) {
        setSelectedLanguage(highlighted);
      }
    }
  }, [highlightedLanguageId]);

  const handleMarkerClick = (language) => {
    setSelectedLanguage(selectedLanguage?.id === language.id ? null : language);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Critically Endangered":
        return "bg-red-500";
      case "Severely Endangered":
        return "bg-orange-500";
      case "Definitely Endangered":
        return "bg-yellow-500";
      case "Vulnerable":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Map Container */}
      <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl border border-white/20 relative overflow-hidden">
        {/* Map Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #4f46e5 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
                              radial-gradient(circle at 50% 50%, #10b981 0%, transparent 50%)`,
          }}
        />

        {/* Map Grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" 
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />

        {/* South India Region Outline (Simplified) */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <path
              d="M80 50 C120 40, 180 45, 220 60 C280 80, 320 120, 340 180 C350 220, 340 260, 300 280 C250 300, 200 290, 150 270 C100 250, 70 200, 60 150 C55 100, 65 75, 80 50 Z"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Language Markers */}
        <div className="absolute inset-0">
          {languagesData.map((language, index) => {
            // Convert coordinates to relative positions on the map
            const x = ((language.coordinates[1] - 74) / 8) * 100; // Longitude relative positioning
            const y = ((13 - language.coordinates[0]) / 3) * 100; // Latitude relative positioning (inverted)
            
            return (
              <div
                key={language.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ 
                  left: `${Math.max(10, Math.min(90, x))}%`, 
                  top: `${Math.max(10, Math.min(90, y))}%` 
                }}
                onClick={() => handleMarkerClick(language)}
              >
                <div className={`
                  w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-150
                  ${getStatusColor(language.status)}
                  ${selectedLanguage?.id === language.id ? 'scale-150 ring-4 ring-white/50' : ''}
                  ${highlightedLanguageId && language.id === parseInt(highlightedLanguageId) ? 'animate-pulse scale-150' : ''}
                `}>
                  <div className="w-full h-full rounded-full bg-white/30" />
                </div>

                {/* Language Label */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md border border-white/20">
                    {language.language}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Loading State */}
        {!mapInitialized && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white rounded-full mx-auto mb-4" />
              <p className="text-white/80">Loading map...</p>
            </div>
          </div>
        )}

        {/* Map Controls */}
        <div className="absolute top-4 left-4 space-y-2">
          <button className="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-2 text-white hover:bg-white/30 transition-all">
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Selected Language Info Panel */}
      {selectedLanguage && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{selectedLanguage.language}</h3>
            <button
              onClick={() => setSelectedLanguage(null)}
              className="text-white/60 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-white/80 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                {selectedLanguage.region}
              </p>
              <p className="text-white/80 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                {selectedLanguage.speakers.toLocaleString()} speakers
              </p>
              <p className="text-white/80">
                <FileText className="w-4 h-4 inline mr-2" />
                {selectedLanguage.mediaCount} media files
              </p>
            </div>
            
            <div>
              <p className="text-white/70 text-sm mb-3">
                {selectedLanguage.description.substring(0, 120)}...
              </p>
              <a
                href={`/archive/${selectedLanguage.id}`}
                className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/30 transition-all"
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30">
        <h4 className="text-white font-semibold mb-3 text-sm">Endangerment Status</h4>
        <div className="space-y-2">
          {[
            { status: "Critically Endangered", color: "bg-red-500" },
            { status: "Severely Endangered", color: "bg-orange-500" },
            { status: "Definitely Endangered", color: "bg-yellow-500" },
            { status: "Vulnerable", color: "bg-blue-500" }
          ].map(({ status, color }) => (
            <div key={status} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color} border border-white/50`} />
              <span className="text-white/80 text-xs">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}