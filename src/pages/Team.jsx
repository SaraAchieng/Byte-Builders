import React, { useState, useEffect } from "react";
import { Mail, Award, Calendar } from "lucide-react";
import { TeamMember } from "../api/api";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      const data = await TeamMember.getAll();
      setTeamMembers(data);
    } catch (error) {
      console.error("Error loading team members:", error);
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
            Meet Our
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              {" "}
              Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The passionate professionals behind every successful project. Our
            diverse team combines expertise, creativity, and dedication to
            deliver excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">
                Team information will be updated soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Member Photo */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={
                        member.image_url ||
                        `https://images.unsplash.com/photo-${
                          1507003211169 + index
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`
                      }
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.position}
                    </p>

                    {member.bio && (
                      <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {member.bio}
                      </p>
                    )}

                    {/* Member Details */}
                    <div className="space-y-3">
                      {member.specialization && (
                        <div className="flex items-center text-slate-500 text-sm">
                          <Award className="w-4 h-4 mr-2" />
                          {member.specialization}
                        </div>
                      )}

                      {member.experience_years && (
                        <div className="flex items-center text-slate-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {member.experience_years} years experience
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            What Makes Our Team Special
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
            Our success comes from our people—dedicated professionals who bring
            passion, expertise, and innovation to every project.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description:
                  "Decades of combined experience in construction, architecture, and project management.",
                stat: "50+ Years",
                statLabel: "Combined Experience",
              },
              {
                title: "Innovation",
                description:
                  "Constantly learning and adopting new technologies and sustainable building practices.",
                stat: "50+",
                statLabel: "Certifications",
              },
              {
                title: "Collaboration",
                description:
                  "Working together as one team to deliver exceptional results for our clients.",
                stat: "100%",
                statLabel: "Team Satisfaction",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-amber-500 mb-2">
                  {value.stat}
                </div>
                <div className="text-sm text-slate-500 mb-4">
                  {value.statLabel}
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
    </div>
  );
}
