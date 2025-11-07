import React from "react";
import { ArrowRight, LayoutGrid, ClipboardCheck, Wrench, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const services = [
  {
    icon: LayoutGrid,
    title: "Architectural Design",
    description:
      "We specialize in creating innovative and functional architectural blueprints for residential, commercial, and industrial projects. Our designs focus on sustainability and modern aesthetics.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "From project initiation to completion, our team provides comprehensive management services to ensure your project is delivered on time, within budget, and to the highest quality standards.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Wrench,
    title: "Structural Engineering",
    description:
      "Our engineers design safe, efficient, and robust structural systems. We provide solutions for new constructions, renovations, and structural assessments.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: PenTool,
    title: "Interior Design",
    description:
      "We craft beautiful and functional interior spaces that reflect your style and enhance your living or working environment. Our services cover everything from space planning to furniture selection.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver comprehensive construction
            solutions that exceed expectations and bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-amber-500" />
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full opacity-50 -z-10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to={createPageUrl("Services")}
            className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-900 transition-all duration-300 transform hover:scale-105 group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
