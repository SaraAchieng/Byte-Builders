import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Service } from "../api/api";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/index";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await Service.getAll();
      setServices(data);
    } catch (error) {
      console.error("Error loading services:", error);
    } finally {
      setLoading(false);
    }
  };

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
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive construction solutions tailored to bring your vision
            to life. From initial concept to final completion, we've got you
            covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                      {/* Dynamic icon rendering would need a mapping - for now using a placeholder */}
                      <div className="w-8 h-8 bg-white/20 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {service.title}
                      </h3>
                      {service.price_range && (
                        <p className="text-amber-600 font-medium">
                          {service.price_range}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      to={createPageUrl("Contact")}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined approach that ensures your project is completed on
              time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your vision, requirements, and budget to understand your needs.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed project planning with timelines, materials, and resource allocation.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Professional construction with regular updates and quality checkpoints.",
              },
              {
                step: "04",
                title: "Completion",
                description:
                  "Final inspection, handover, and ongoing support for your new space.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {phase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
