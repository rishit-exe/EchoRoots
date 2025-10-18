"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  FileText, 
  Calendar, 
  Download,
  Play,
  Volume2,
  Image as ImageIcon,
  Video,
  ExternalLink
} from "lucide-react";

export default function LanguageDetail() {
  const params = useParams();
  const [language, setLanguage] = useState(null);
  const [activeMediaTab, setActiveMediaTab] = useState("all");
  const [loading, setLoading] = useState(true);
  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(`/api/languages/${params.id}`);
        if (!res.ok) {
          setLanguage(null);
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (!cancelled) setLanguage(data);
      } catch (e) {
        if (!cancelled) setLanguage(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true };
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-2 border-white/20 border-t-white rounded-full mx-auto mb-4" />
          <p className="text-white/80">Loading language...</p>
        </div>
      </div>
    );
  }

  if (!language) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Language Not Found</h1>
          <p className="text-white/80 mb-8">The requested language could not be found in our archive.</p>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Archive
          </Link>
        </div>
      </div>
    );
  }

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

  const getMediaIcon = (type) => {
    switch (type) {
      case "audio":
        return <Volume2 className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "image":
        return <ImageIcon className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const filteredMedia = activeMediaTab === "all" 
    ? language.mediaFiles 
    : language.mediaFiles.filter(media => media.type === activeMediaTab);

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Archive
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Language Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {language.language}
                </h1>
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(language.status)}`}>
                  {language.status}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/60" />
                  <span className="text-white/80 text-lg">{language.region}</span>
                </div>
                
                <div>
                  <span className="text-white/60">Language Family: </span>
                  <span className="text-white font-medium">{language.family}</span>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed">
                {language.description}
              </p>
            </div>

            {/* Statistics */}
            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-white/60" />
                  <span className="text-white/60">Speakers</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  {language.speakers.toLocaleString()}
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-6 h-6 text-white/60" />
                  <span className="text-white/60">Media Files</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  {language.mediaCount}
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-white/60" />
                  <span className="text-white/60">Last Updated</span>
                </div>
                <div className="text-lg font-medium text-white">
                  {new Date(language.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Notes */}
        {language.culturalNotes && (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Cultural Context</h2>
            <p className="text-white/80 leading-relaxed">
              {language.culturalNotes}
            </p>
          </div>
        )}

        {/* Media Gallery */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white">Media Gallery</h2>
            
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300">
              <Download className="w-5 h-5" />
              Export Data
            </button>
          </div>

          {/* Media Type Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["all", "audio", "video", "image"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveMediaTab(type)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeMediaTab === type
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/90"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Media Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((media, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-white/80">
                    {getMediaIcon(media.type)}
                    <span className="capitalize font-medium">{media.type}</span>
                  </div>
                  {media.duration && (
                    <span className="text-white/60 text-sm">{media.duration}</span>
                  )}
                </div>

                <h3 className="text-white font-semibold mb-2">{media.title}</h3>
                
                {media.speaker && (
                  <p className="text-white/70 text-sm mb-2">
                    <span className="text-white/60">Speaker: </span>
                    {media.speaker}
                  </p>
                )}
                
                {media.date && (
                  <p className="text-white/70 text-sm mb-4">
                    <span className="text-white/60">Recorded: </span>
                    {new Date(media.date).toLocaleDateString()}
                  </p>
                )}

                {media.description && (
                  <p className="text-white/70 text-sm mb-4">{media.description}</p>
                )}

                <button
                  onClick={() => setActiveMedia(media)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {media.type === "image" ? "View" : "Play"}
                </button>
              </div>
            ))}
          </div>

          {/* Media Modal - lazy loads media */}
          {activeMedia && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-black/70" onClick={() => setActiveMedia(null)} />
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-3xl w-full z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{activeMedia.title}</h3>
                  <button onClick={() => setActiveMedia(null)} className="text-white/80">✕</button>
                </div>
                <div>
                  {activeMedia.type === 'audio' && (
                    <audio controls preload="none" className="w-full">
                      <source src={activeMedia.file} />
                      Your browser does not support the audio element.
                    </audio>
                  )}

                  {activeMedia.type === 'video' && (
                    <video controls preload="none" className="w-full rounded-md">
                      <source src={activeMedia.file} />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {activeMedia.type === 'image' && (
                    // use next/image would be better, but keeping simple
                    <img src={activeMedia.file} alt={activeMedia.title} className="w-full rounded-md" />
                  )}
                </div>
              </div>
            </div>
          )}

          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-white/60 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Media Found</h3>
              <p className="text-white/70">
                No {activeMediaTab === "all" ? "" : activeMediaTab} files available for this language.
              </p>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Geographic Location</h2>
          
          {/* Placeholder for Map */}
          <div className="bg-white/5 rounded-2xl h-64 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-white/60 mx-auto mb-4" />
              <p className="text-white/70 mb-2">Interactive Map</p>
              <p className="text-white/50 text-sm">
                Coordinates: {language.coordinates[0]}, {language.coordinates[1]}
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link
              href={`/map?highlight=${language.id}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View on Full Map
            </Link>
          </div>
        </div>

        {/* Metadata Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Language Metadata</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="space-y-2">
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Language Name</td>
                  <td className="py-3 text-white">{language.language}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Region</td>
                  <td className="py-3 text-white">{language.region}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Language Family</td>
                  <td className="py-3 text-white">{language.family}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Endangerment Status</td>
                  <td className="py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(language.status)}`}>
                      {language.status}
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Estimated Speakers</td>
                  <td className="py-3 text-white">{language.speakers.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Media Files</td>
                  <td className="py-3 text-white">{language.mediaCount}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6 text-white/60 font-medium">Geographic Coordinates</td>
                  <td className="py-3 text-white">{language.coordinates[0]}, {language.coordinates[1]}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-white/60 font-medium">Last Updated</td>
                  <td className="py-3 text-white">{new Date(language.lastUpdated).toLocaleDateString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}