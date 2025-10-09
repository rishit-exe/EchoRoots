"use client";

import { useState, useMemo } from "react";
import { Search, Filter, SortAsc, Map, Grid, List } from "lucide-react";
import LanguageCard from "../components/LanguageCard";
import { languagesData } from "../utils/sampleData";

export default function Archive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  // Get unique regions and statuses for filters
  const regions = [...new Set(languagesData.map(lang => lang.region))];
  const statuses = [...new Set(languagesData.map(lang => lang.status))];

  // Filter and sort languages
  const filteredLanguages = useMemo(() => {
    let filtered = languagesData.filter(language => {
      const matchesSearch = language.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          language.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          language.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = selectedRegion === "" || language.region === selectedRegion;
      const matchesStatus = selectedStatus === "" || language.status === selectedStatus;

      return matchesSearch && matchesRegion && matchesStatus;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.language.localeCompare(b.language);
        case "speakers":
          return b.speakers - a.speakers;
        case "media":
          return b.mediaCount - a.mediaCount;
        case "updated":
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedRegion, selectedStatus, sortBy]);

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Language Archive
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our comprehensive collection of endangered languages from South India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 mb-8">
          <div className="grid lg:grid-cols-12 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-4">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Search Languages
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, region, or description..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                />
              </div>
            </div>

            {/* Region Filter */}
            <div className="lg:col-span-2">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
              >
                <option value="" className="bg-gray-800">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region} className="bg-gray-800">
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="lg:col-span-2">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
              >
                <option value="" className="bg-gray-800">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status} className="bg-gray-800">
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="lg:col-span-2">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
              >
                <option value="name" className="bg-gray-800">Name</option>
                <option value="speakers" className="bg-gray-800">Speakers</option>
                <option value="media" className="bg-gray-800">Media Count</option>
                <option value="updated" className="bg-gray-800">Last Updated</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="lg:col-span-2">
              <label className="block text-white/80 text-sm font-medium mb-2">
                View
              </label>
              <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-all ${
                    viewMode === "grid" 
                      ? "bg-white/20 text-white" 
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-all ${
                    viewMode === "list" 
                      ? "bg-white/20 text-white" 
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  <List className="w-4 h-4" />
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white/70">
              Showing {filteredLanguages.length} of {languagesData.length} languages
            </p>
          </div>
        </div>

        {/* Results */}
        {filteredLanguages.length > 0 ? (
          <div className={
            viewMode === "grid" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
          }>
            {filteredLanguages.map(language => (
              <LanguageCard key={language.id} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <Filter className="w-16 h-16 text-white/60 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No Results Found</h3>
              <p className="text-white/70 max-w-md mx-auto">
                Try adjusting your search terms or filters to find the languages you're looking for.
              </p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More</h3>
            <p className="text-white/80 mb-6">
              Discover additional ways to engage with our language archive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/map"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300"
              >
                <Map className="w-5 h-5" />
                View on Map
              </a>
              <a
                href="/upload"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                Contribute Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}