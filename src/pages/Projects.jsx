import React, { useState, useEffect } from "react";
import { MapPin, Calendar, Filter, ExternalLink } from "lucide-react";
import { Project } from "../api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await Project.getAll("-completion_date");
      setProjects(data);
    } catch (error) {
      console.error("Error loading projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects =
    filterCategory === "all"
      ? projects
      : projects.filter((project) => project.category === filterCategory);

  const categories = [
    "all",
    "residential",
    "commercial",
    "industrial",
    "renovation",
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional construction projects that
            showcase our commitment to quality, innovation, and architectural
            excellence.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-slate-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filterCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">
                No projects found for the selected category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={
                        project.image_url ||
                        `https://images.unsplash.com/photo-${
                          1541888946425 + index
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* External Link */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-3">
                      {project.location && (
                        <div className="flex items-center text-slate-500 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                      )}

                      {project.completion_date && (
                        <div className="flex items-center text-slate-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Completed{" "}
                          {new Date(project.completion_date).getFullYear()}
                        </div>
                      )}

                      {/* Client & Budget */}
                      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        {project.client && (
                          <div className="text-xs text-slate-400 uppercase tracking-wide">
                            {project.client}
                          </div>
                        )}
                        {project.budget && (
                          <div className="text-sm font-medium text-amber-600">
                            ${project.budget.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
