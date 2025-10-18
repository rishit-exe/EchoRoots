import EndangeredCarousel from './components/EndangeredCarousel';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-24">
      <div className="w-full">
        <EndangeredCarousel />
      </div>
    </div>
  );
}
