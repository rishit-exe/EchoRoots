import { Users, Target, BookOpen, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About EchoRoots
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between endangered languages and digital preservation 
            through innovative archival solutions and community engagement.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Mission</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              To create a comprehensive digital repository that preserves endangered languages 
              of South India, ensuring their cultural significance and linguistic richness 
              remain accessible for future generations, researchers, and communities.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Vision</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              To become the leading digital platform for endangered language preservation 
              in South Asia, fostering collaboration between academic institutions, 
              indigenous communities, and technology innovators.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Digital Archival</h3>
              <p className="text-white/80">
                Systematically collect, digitize, and archive audio, video, and textual 
                materials from endangered language communities.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Community Collaboration</h3>
              <p className="text-white/80">
                Partner with indigenous communities to ensure ethical collection 
                and culturally appropriate preservation methods.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Research Support</h3>
              <p className="text-white/80">
                Provide linguists and researchers with accessible tools and data 
                for academic study and documentation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Educational Resources</h3>
              <p className="text-white/80">
                Develop educational materials and interactive content to promote 
                awareness about linguistic diversity.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Technology Innovation</h3>
              <p className="text-white/80">
                Leverage cutting-edge digital technologies for efficient storage, 
                retrieval, and analysis of linguistic data.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Cultural Preservation</h3>
              <p className="text-white/80">
                Maintain the cultural context and traditional knowledge 
                associated with each documented language.
              </p>
            </div>
          </div>
        </div>

        {/* Team & Institution */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Research Team</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Principal Investigator</h3>
                <p className="text-white/80">Dr. Research Lead</p>
                <p className="text-white/70 text-sm">Department of Computer Science</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">Research Associates</h3>
                <p className="text-white/80">Graduate Students & Faculty</p>
                <p className="text-white/70 text-sm">Linguistics & Digital Humanities</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">Community Partners</h3>
                <p className="text-white/80">Indigenous Language Speakers</p>
                <p className="text-white/70 text-sm">South Indian Tribal Communities</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Institution</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  SRM Institute of Science and Technology
                </h3>
                <p className="text-white/80 mt-2">
                  Department of Computer Science and Engineering
                </p>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <h4 className="font-semibold text-white mb-2">Project Classification</h4>
                <p className="text-white/80">Undergraduate Research Opportunity Program (UROP)</p>
                <p className="text-white/70">Academic Year 2024-2025</p>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <h4 className="font-semibold text-white mb-2">Research Domain</h4>
                <p className="text-white/80">Disruptive Technology & Digital Humanities</p>
                <p className="text-white/70">Focus: Language Preservation Technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Get Involved</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join us in our mission to preserve linguistic heritage. Whether you're a researcher, 
              community member, or technology enthusiast, there are ways to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300">
                Contact Research Team
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white font-medium hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}