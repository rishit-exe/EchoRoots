import { User, Mail, ExternalLink, MapPin, BookOpen, Users, Award, Calendar } from "lucide-react";

export default function Researchers() {
  const teamMembers = [
    {
      name: "Dr. Sarah Kumar",
      role: "Principal Investigator",
      department: "Computer Science & Engineering",
      affiliation: "SRM Institute of Science & Technology",
      expertise: ["Digital Humanities", "Language Technology", "Archive Systems"],
      bio: "Leading researcher in digital preservation technologies with 15+ years experience in computational linguistics and cultural heritage digitization.",
      email: "sarah.kumar@srmist.edu.in",
      location: "Chennai, Tamil Nadu",
      publications: 42,
      projects: 8,
      image: "/Images/researcher1.jpg"
    },
    {
      name: "Dr. Raj Patel",
      role: "Co-Principal Investigator",
      department: "Linguistics Department",
      affiliation: "University of Chennai",
      expertise: ["Dravidian Languages", "Field Linguistics", "Language Documentation"],
      bio: "Specialist in South Indian tribal languages with extensive fieldwork experience in the Western Ghats region.",
      email: "raj.patel@uoc.ac.in",
      location: "Chennai, Tamil Nadu",
      publications: 38,
      projects: 12,
      image: "/Images/researcher2.jpg"
    },
    {
      name: "Prof. Maya Krishnan",
      role: "Senior Research Associate",
      department: "Anthropology",
      affiliation: "Indian Institute of Technology Madras",
      expertise: ["Cultural Anthropology", "Indigenous Communities", "Ethical Research"],
      bio: "Expert in community-based research methodologies and indigenous rights in academic research.",
      email: "maya.krishnan@iitm.ac.in",
      location: "Chennai, Tamil Nadu",
      publications: 29,
      projects: 6,
      image: "/Images/researcher3.jpg"
    },
    {
      name: "Arjun Menon",
      role: "Research Fellow",
      department: "Computer Science & Engineering",
      affiliation: "SRM Institute of Science & Technology",
      expertise: ["Web Development", "Database Systems", "User Experience"],
      bio: "PhD candidate specializing in digital archive systems and user-centered design for cultural heritage platforms.",
      email: "arjun.menon@srmist.edu.in",
      location: "Chennai, Tamil Nadu",
      publications: 8,
      projects: 3,
      image: "/Images/researcher4.jpg"
    },
    {
      name: "Priya Nair",
      role: "Graduate Research Assistant",
      department: "Computer Science & Engineering",
      affiliation: "SRM Institute of Science & Technology",
      expertise: ["Data Science", "Natural Language Processing", "Machine Learning"],
      bio: "Masters student focusing on computational analysis of endangered language patterns and automated transcription systems.",
      email: "priya.nair@srmist.edu.in",
      location: "Chennai, Tamil Nadu",
      publications: 3,
      projects: 2,
      image: "/Images/researcher5.jpg"
    },
    {
      name: "Vikram Reddy",
      role: "Community Liaison Coordinator",
      department: "Social Sciences",
      affiliation: "Tribal Welfare Department, Tamil Nadu",
      expertise: ["Community Engagement", "Cultural Mediation", "Indigenous Languages"],
      bio: "Bridge between academic researchers and tribal communities, ensuring ethical and culturally appropriate research practices.",
      email: "vikram.reddy@tn.gov.in",
      location: "Nilgiris, Tamil Nadu",
      publications: 5,
      projects: 15,
      image: "/Images/researcher6.jpg"
    }
  ];

  const collaboratingInstitutions = [
    {
      name: "SRM Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      role: "Lead Institution",
      description: "Primary research institution hosting the EchoRoots Archive project."
    },
    {
      name: "University of Chennai",
      location: "Chennai, Tamil Nadu", 
      role: "Academic Partner",
      description: "Providing linguistic expertise and research collaboration."
    },
    {
      name: "Indian Institute of Technology Madras",
      location: "Chennai, Tamil Nadu",
      role: "Technology Partner",
      description: "Contributing advanced computational linguistics resources."
    },
    {
      name: "Tribal Research Institute",
      location: "Ooty, Tamil Nadu",
      role: "Community Partner",
      description: "Facilitating community engagement and cultural guidance."
    },
    {
      name: "Kerala Folklore Academy",
      location: "Thiruvananthapuram, Kerala",
      role: "Cultural Partner",
      description: "Sharing expertise in traditional cultural preservation methods."
    }
  ];

  const researchAreas = [
    {
      title: "Digital Archive Technology",
      description: "Development of scalable systems for storing and accessing linguistic data",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Language Documentation",
      description: "Systematic recording and transcription of endangered language varieties",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Community Collaboration",
      description: "Ethical research practices with indigenous language communities",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "Cultural Preservation",
      description: "Maintaining cultural context and traditional knowledge systems",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Research Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the interdisciplinary team of researchers, linguists, and community partners 
            working together to preserve endangered languages through innovative digital solutions
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Research Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white/60" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-white/80 font-medium mb-2">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.department}</p>
                  <p className="text-white/60 text-sm">{member.affiliation}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-white/60" />
                    <span className="text-white/70 text-sm">{member.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white/60" />
                    <a href={`mailto:${member.email}`} className="text-white/70 text-sm hover:text-white transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-xs border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{member.publications}</div>
                    <div className="text-white/60 text-xs">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{member.projects}</div>
                    <div className="text-white/60 text-xs">Projects</div>
                  </div>
                </div>

                <button className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research Focus Areas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-4 text-white">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborating Institutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Collaborating Institutions</h2>
          
          <div className="space-y-4">
            {collaboratingInstitutions.map((institution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{institution.name}</h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      {institution.location}
                    </div>
                  </div>
                  
                  <div className="md:text-center">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm border border-white/20">
                      {institution.role}
                    </span>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {institution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Research Collaboration</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Interested in collaborating with our research team? We welcome partnerships 
              with academic institutions, technology organizations, and community groups 
              committed to language preservation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Joint research projects
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Data sharing agreements
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Technical consultations
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Community engagement
              </div>
            </div>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300">
              Contact Research Team
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">Digital Heritage Conference 2024</h4>
                  <span className="text-white/60 text-sm">Dec 15</span>
                </div>
                <p className="text-white/70 text-sm">Presenting EchoRoots Archive methodology and findings</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">Community Workshop Series</h4>
                  <span className="text-white/60 text-sm">Jan 2025</span>
                </div>
                <p className="text-white/70 text-sm">Training sessions for community language documentation</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">Research Symposium</h4>
                  <span className="text-white/60 text-sm">Mar 2025</span>
                </div>
                <p className="text-white/70 text-sm">Annual symposium on endangered language preservation</p>
              </div>
            </div>
            
            <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}