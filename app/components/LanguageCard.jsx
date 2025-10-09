import Link from "next/link";
import { MapPin, Users, FileText, ExternalLink } from "lucide-react";

export default function LanguageCard({ language }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Critically Endangered":
        return "bg-red-500/20 text-red-200 border-red-500/30";
      case "Severely Endangered":
        return "bg-orange-500/20 text-orange-200 border-orange-500/30";
      case "Definitely Endangered":
        return "bg-yellow-500/20 text-yellow-200 border-yellow-500/30";
      case "Vulnerable":
        return "bg-blue-500/20 text-blue-200 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-200 border-gray-500/30";
    }
  };

  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
          {language.language}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(language.status)}`}>
          {language.status}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-white/60" />
        <span className="text-white/80 text-sm">{language.region}</span>
      </div>

      {/* Language Family */}
      <div className="mb-4">
        <span className="text-white/60 text-sm">Family: </span>
        <span className="text-white/80 text-sm font-medium">{language.family}</span>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm mb-6 leading-relaxed line-clamp-3">
        {language.description}
      </p>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-xs">Speakers</span>
          </div>
          <div className="text-white font-semibold">
            {language.speakers.toLocaleString()}
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-xs">Media Files</span>
          </div>
          <div className="text-white font-semibold">
            {language.mediaCount}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Link
        href={`/archive/${language.id}`}
        className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white font-medium text-center hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 group/button"
      >
        View Details
        <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
      </Link>

      {/* Last Updated */}
      <div className="mt-3 text-center">
        <span className="text-white/50 text-xs">
          Last updated: {new Date(language.lastUpdated).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}