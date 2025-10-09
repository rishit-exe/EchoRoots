import { BookOpen, FileText, Video, Download, ExternalLink, Users, Database, Globe } from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Research Publications",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        {
          title: "Digital Preservation of Endangered Languages: A South Indian Perspective",
          type: "Research Paper",
          description: "Comprehensive study on methodologies for digital archival of tribal languages.",
          link: "#",
          year: "2024"
        },
        {
          title: "Community-Based Language Documentation in the Nilgiris",
          type: "Conference Paper",
          description: "Collaborative approaches to indigenous language preservation.",
          link: "#",
          year: "2023"
        },
        {
          title: "Technology-Mediated Language Revitalization",
          type: "Journal Article",
          description: "Role of digital platforms in supporting endangered language communities.",
          link: "#",
          year: "2023"
        }
      ]
    },
    {
      title: "Technical Documentation",
      icon: <FileText className="w-6 h-6" />,
      items: [
        {
          title: "EchoRoots Archive API Documentation",
          type: "Technical Guide",
          description: "Complete API reference for accessing archived language data.",
          link: "#",
          year: "2024"
        },
        {
          title: "Digital Archival Standards and Protocols",
          type: "Standards Document",
          description: "Technical specifications for language data collection and storage.",
          link: "#",
          year: "2024"
        },
        {
          title: "Metadata Schema for Linguistic Resources",
          type: "Schema Definition",
          description: "Structured format for cataloging language materials and cultural context.",
          link: "#",
          year: "2024"
        }
      ]
    },
    {
      title: "Educational Materials",
      icon: <Video className="w-6 h-6" />,
      items: [
        {
          title: "Introduction to South Indian Tribal Languages",
          type: "Video Series",
          description: "Educational content covering linguistic diversity and cultural significance.",
          link: "#",
          year: "2024"
        },
        {
          title: "Language Documentation Workshop Materials",
          type: "Training Resources",
          description: "Comprehensive toolkit for community-based language documentation.",
          link: "#",
          year: "2023"
        },
        {
          title: "Digital Literacy for Language Preservation",
          type: "Tutorial Series",
          description: "Step-by-step guides for using technology in language conservation.",
          link: "#",
          year: "2023"
        }
      ]
    },
    {
      title: "Data Resources",
      icon: <Database className="w-6 h-6" />,
      items: [
        {
          title: "Linguistic Dataset - Toda Language Corpus",
          type: "Dataset",
          description: "Comprehensive collection of Toda language recordings and transcriptions.",
          link: "#",
          year: "2024"
        },
        {
          title: "Geographical Language Distribution Map",
          type: "GIS Data",
          description: "Spatial data showing endangered language communities across South India.",
          link: "#",
          year: "2024"
        },
        {
          title: "Community Demographics and Language Vitality",
          type: "Statistical Data",
          description: "Quantitative analysis of speaker populations and language use patterns.",
          link: "#",
          year: "2023"
        }
      ]
    }
  ];

  const externalResources = [
    {
      title: "UNESCO Atlas of the World's Languages in Danger",
      description: "Global database of endangered languages with detailed status information.",
      url: "https://en.unesco.org/themes/endangered-languages",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Endangered Languages Project",
      description: "Collaborative effort to preserve and revitalize endangered languages worldwide.",
      url: "https://www.endangeredlanguages.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Archive of Indigenous Languages of Latin America",
      description: "Digital archive serving as a model for indigenous language preservation.",
      url: "https://ailla.utexas.org/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Language Documentation & Conservation",
      description: "Open-access journal dedicated to language documentation and revitalization.",
      url: "https://nflrc.hawaii.edu/ldc/",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case "research paper":
      case "conference paper":
      case "journal article":
        return <BookOpen className="w-4 h-4" />;
      case "technical guide":
      case "standards document":
      case "schema definition":
        return <FileText className="w-4 h-4" />;
      case "video series":
      case "training resources":
      case "tutorial series":
        return <Video className="w-4 h-4" />;
      case "dataset":
      case "gis data":
      case "statistical data":
        return <Database className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive collection of research materials, technical documentation, 
            and educational resources supporting endangered language preservation
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12 mb-16">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white/20 rounded-full p-3 text-white">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-white/80">
                        {getTypeIcon(item.type)}
                        <span className="text-sm font-medium">{item.type}</span>
                      </div>
                      <span className="text-white/60 text-sm">{item.year}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* External Resources */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/20 rounded-full p-3 text-white">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">External Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group block"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 text-white group-hover:bg-white/30 transition-colors">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Research Collaboration */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Research Collaboration</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              We welcome collaborations with researchers, institutions, and communities 
              interested in endangered language preservation. Our resources are available 
              for academic and non-commercial use.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Open access to research publications
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Collaborative data sharing agreements
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Joint research opportunities
              </div>
            </div>
            <button className="mt-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300">
              Contact Research Team
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Download className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Data Access</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Access our datasets and technical resources following ethical guidelines 
              for indigenous language data. All materials respect community consent 
              and cultural protocols.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Structured linguistic datasets
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                API access for developers
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                Documentation and metadata
              </div>
            </div>
            <button className="mt-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300">
              Request Data Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}