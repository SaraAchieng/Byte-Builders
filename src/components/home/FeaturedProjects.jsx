 import React, { useState, useEffect } from "react";
 import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";
 import { Link } from "react-router-dom";
 import { createPageUrl } from "../../utils";
 import { Project } from "../../api/api";

 export default function FeaturedProjects() {
   const [projects, setProjects] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     loadFeaturedProjects();
   }, []);

 const loadFeaturedProjects = async () => {
   try {
     // OLD: const data = await Project.filter({ featured: true }, "-completion_date", 3);
     // NEW: Use the dedicated getFeatured method
     const data = await Project.getFeatured(3);
     setProjects(data);
   } catch (error) {
     console.error("Error loading featured projects:", error);
   } finally {
     setLoading(false);
   }
 };

   if (loading) {
     return (
       <section className="py-20 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[...Array(3)].map((_, index) => (
               <div
                 key={index}
                 className="bg-slate-800 rounded-2xl h-96 animate-pulse"
               />
             ))}
           </div>
         </div>
       </section>
     );
   }

   return (
     <section className="py-20 bg-slate-900">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Section Header */}
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
             Featured Projects
           </h2>
           <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
             Discover our latest architectural achievements that showcase
             innovation, quality craftsmanship, and attention to detail.
           </p>
         </div>

         {/* Projects Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
           {projects.map((project, index) => (
             <div
               key={project.id}
               className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
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
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                 {/* Category Badge */}
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                     {project.category}
                   </span>
                 </div>

                 {/* External Link Icon */}
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <ExternalLink className="w-5 h-5 text-white" />
                 </div>
               </div>

               {/* Project Info */}
               <div className="p-6">
                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                   {project.title}
                 </h3>
                 <p className="text-slate-300 text-sm leading-relaxed mb-4">
                   {project.description}
                 </p>

                 {/* Project Details */}
                 <div className="space-y-2 mb-6">
                   {project.location && (
                     <div className="flex items-center text-slate-400 text-sm">
                       <MapPin className="w-4 h-4 mr-2" />
                       {project.location}
                     </div>
                   )}
                   {project.completion_date && (
                     <div className="flex items-center text-slate-400 text-sm">
                       <Calendar className="w-4 h-4 mr-2" />
                       Completed{" "}
                       {new Date(project.completion_date).getFullYear()}
                     </div>
                   )}
                 </div>

                 {/* Client */}
                 {project.client && (
                   <div className="text-xs text-slate-500 uppercase tracking-wider">
                     Client: {project.client}
                   </div>
                 )}
               </div>
             </div>
           ))}
         </div>

         {/* CTA */}
         <div className="text-center">
           <Link
             to={createPageUrl("Projects")}
             className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 group"
           >
             View All Projects
             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
           </Link>
         </div>
       </div>
     </section>
   );
 }