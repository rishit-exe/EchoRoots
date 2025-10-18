"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function MapClientWrapper({ highlightedLanguageId, className, languagesData }) {
  return (
    <MapComponent highlightedLanguageId={highlightedLanguageId} className={className} languagesData={languagesData} />
  );
}
