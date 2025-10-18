import MapClientWrapper from "../components/MapClientWrapper";
import { languagesData } from "../utils/sampleData";

export default async function MapPage({ searchParams }) {
  const sp = await searchParams;
  const highlightedId = sp?.highlight || null;

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Map Container */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 mb-8">
          <div className="h-[600px] w-full">
            <MapClientWrapper
              highlightedLanguageId={highlightedId}
              className="w-full h-full"
              languagesData={languagesData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}