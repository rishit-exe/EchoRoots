"use client";

import { useState } from "react";
import { Upload, File, User, MapPin, Calendar, Check, AlertCircle, Info } from "lucide-react";

export default function UploadPage() {
  const [formData, setFormData] = useState({
    language: "",
    region: "",
    speakerName: "",
    speakerAge: "",
    recordingDate: "",
    location: "",
    mediaType: "",
    title: "",
    description: "",
    culturalContext: "",
    consent: false,
    publicAccess: false,
    academicUse: false
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      type: file.type.includes("audio") ? "Audio" : file.type.includes("video") ? "Video" : "Document"
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contribute Content
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Help preserve endangered languages by contributing audio recordings, 
            videos, and cultural documentation to our digital archive
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 mb-8">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Important Guidelines</h3>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>• Ensure you have proper consent from all speakers and community members</li>
                <li>• Respect cultural protocols and community ownership of traditional knowledge</li>
                <li>• Provide accurate metadata to maintain the integrity of the archive</li>
                <li>• All submissions are reviewed before inclusion in the public archive</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* File Upload Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Media Files</h2>
            
            <div className="border-2 border-dashed border-white/30 rounded-2xl p-8 text-center mb-6 hover:border-white/50 transition-colors">
              <Upload className="w-12 h-12 text-white/60 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Upload Your Files</h3>
              <p className="text-white/70 mb-4">
                Drag and drop files here, or click to browse
              </p>
              <input
                type="file"
                multiple
                accept="audio/*,video/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                Choose Files
              </label>
              <p className="text-white/50 text-sm mt-2">
                Supported formats: Audio (MP3, WAV), Video (MP4, MOV), Documents (PDF, DOC)
              </p>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Uploaded Files</h4>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <File className="w-5 h-5 text-white/60" />
                      <div>
                        <div className="text-white font-medium">{file.name}</div>
                        <div className="text-white/60 text-sm">{file.type} • {file.size}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Language Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Language Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Language Name *
                </label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  placeholder="e.g., Toda, Kota, Kurumba"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Region *
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  placeholder="e.g., Nilgiris, Tamil Nadu"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Media Type *
                </label>
                <select
                  name="mediaType"
                  value={formData.mediaType}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                >
                  <option value="" className="bg-gray-800">Select type</option>
                  <option value="story" className="bg-gray-800">Traditional Story</option>
                  <option value="song" className="bg-gray-800">Folk Song</option>
                  <option value="conversation" className="bg-gray-800">Conversation</option>
                  <option value="ceremony" className="bg-gray-800">Ceremony/Ritual</option>
                  <option value="interview" className="bg-gray-800">Interview</option>
                  <option value="other" className="bg-gray-800">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Descriptive title for the content"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the content, context, and significance"
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
              />
            </div>
          </div>

          {/* Speaker Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Speaker Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Speaker Name *
                </label>
                <input
                  type="text"
                  name="speakerName"
                  value={formData.speakerName}
                  onChange={handleInputChange}
                  placeholder="Name of the speaker(s)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Speaker Age
                </label>
                <input
                  type="number"
                  name="speakerAge"
                  value={formData.speakerAge}
                  onChange={handleInputChange}
                  placeholder="Age (optional)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Recording Date *
                </label>
                <input
                  type="date"
                  name="recordingDate"
                  value={formData.recordingDate}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Village, District, State"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  required
                />
              </div>
            </div>
          </div>

          {/* Cultural Context */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Cultural Context</h2>
            
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Cultural Context and Notes
              </label>
              <textarea
                name="culturalContext"
                value={formData.culturalContext}
                onChange={handleInputChange}
                placeholder="Provide cultural background, traditional significance, usage context, or any other relevant information"
                rows={6}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
              />
            </div>
          </div>

          {/* Consent and Permissions */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Consent and Permissions</h2>
            
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-white bg-white/10 border-white/20 rounded focus:ring-white/30"
                  required
                />
                <span className="text-white/80 text-sm">
                  <strong className="text-white">Required:</strong> I confirm that I have obtained proper 
                  consent from all speakers and community members featured in this content, and I have 
                  the right to submit this material to the EchoRoots Archive. *
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="publicAccess"
                  checked={formData.publicAccess}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-white bg-white/10 border-white/20 rounded focus:ring-white/30"
                />
                <span className="text-white/80 text-sm">
                  I consent to making this content publicly accessible through the EchoRoots Archive 
                  for educational and research purposes.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="academicUse"
                  checked={formData.academicUse}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-white bg-white/10 border-white/20 rounded focus:ring-white/30"
                />
                <span className="text-white/80 text-sm">
                  I permit the use of this content for academic research and linguistic analysis, 
                  with proper attribution and respect for cultural protocols.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-12 py-4 text-white font-medium hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Submit Content
                </>
              )}
            </button>
            <p className="text-white/60 text-sm mt-4">
              Your submission will be reviewed by our research team before being added to the archive.
            </p>
          </div>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 z-50">
            <div className="flex items-center gap-4 text-center">
              <Check className="w-8 h-8 text-green-200" />
              <div>
                <h3 className="text-xl font-bold text-green-200 mb-2">Submission Successful!</h3>
                <p className="text-green-100">
                  Thank you for contributing to language preservation. 
                  Your content will be reviewed and added to our archive.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}