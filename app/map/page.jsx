"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Archive, Info, Navigation, Layers } from "lucide-react";
import MapComponent from "../components/MapComponent";
import { languagesData, getTotalSpeakers } from "../utils/sampleData";

export default function MapPage() {
  const searchParams = useSearchParams();
  const highlightedId = searchParams?.get('highlight');

  const totalLanguages = languagesData.length;
  const totalSpeakers = getTotalSpeakers();
  const endangeredCount = languagesData.filter(lang => 
    lang.status === "Critically Endangered" || lang.status === "Severely Endangered"
  ).length;

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Map Container */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 mb-8">
          <div className="h-[600px] w-full">
            <MapComponent 
              highlightedLanguageId={highlightedId}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}