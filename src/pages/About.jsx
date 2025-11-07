import React from "react";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Every detail matters. We approach each project with meticulous attention to precision and quality.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "We see beyond the blueprint, understanding your dreams and transforming them into architectural reality.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Construction isn't just our job, it's our passion. We pour our heart into every beam, brick and finish.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize construction management",
    },
    {
      year: "2015",
      title: "First Major Project",
      description:
        "Completed our first commercial complex, setting new industry standards",
    },
    {
      year: "2023",
      title: "50 Projects Milestone",
      description: "Celebrated completing over 50 successful projects",
    },
    {
      year: "2024",
      title: "Sustainable Focus",
      description:
        "Pioneered eco-friendly construction practices and green building solutions",
    },
    {
      year: "2025",
      title: "Industry Leader",
      description:
        "Recognized as the premier construction management company in the region",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              {" "}
              Byte Builders
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            For over a decade, we've been the bridge between visionary
            clients and skilled contractors, creating architectural masterpieces
            that define skylines and communities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Byte Builders was born from a simple yet powerful vision: to
                  connect exceptional contractors with clients who dare to dream
                  big. Founded in 2010, we recognized a gap in the construction
                  industry—the need for a comprehensive management system that
                  brings together all stakeholders under one unified platform.
                </p>
                <p>
                  What started as a small team of passionate construction
                  professionals has grown into a full-service construction
                  management company that has transformed over 50 projects
                  across the region. Our success isn't measured just in square
                  footage or completed buildings, but in the relationships we've
                  built and the communities we've helped shape.
                </p>
                <p>
                  Today, Byte Builders stands at the forefront of construction
                  innovation, combining traditional craftsmanship with modern
                  technology to deliver projects that exceed expectations and
                  stand the test of time.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction meeting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 p-4 rounded-xl">
                <div className="text-white text-2xl font-bold">50+</div>
                <div className="text-amber-100 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we
              undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              Key milestones that shaped BuildMaster into the company we are
              today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-center space-x-8"
                >
                  <div className="relative z-10 w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-amber-600 font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-slate-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
