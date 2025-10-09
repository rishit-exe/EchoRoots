export default function Footer() {
  return (
    <footer className="bg-black/10 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">EchoRoots Archive</h3>
            <p className="text-white/80 text-sm">
              Preserving endangered languages for future generations
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-white/70 text-sm">
              A project by
            </p>
            <p className="text-white font-medium">
              SRM Institute of Science and Technology
            </p>
            <p className="text-white/80 text-sm">
              Department of Computer Science and Engineering
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-white/70 text-xs">
              Undergraduate Research Opportunities [UROP]
            </p>
            <p className="text-white/60 text-xs mt-1">
              Academic Research Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}