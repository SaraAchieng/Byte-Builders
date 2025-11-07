 import React from "react";
 import { CheckCircle, Award, Users, Clock } from "lucide-react";

 export default function CompanyOverview() {
   const features = [
     "Licensed & Insured Contractors",
     "Quality Materials & Workmanship",
     "On-Time Project Delivery",
     "24/7 Customer Support",
     "Sustainable Building Practices",
     "Competitive Pricing",
   ];

   const achievements = [
     { icon: Award, number: "50+", label: "Industry Awards" },
     { icon: Users, number: "500+", label: "Happy Clients" },
     { icon: Clock, number: "98%", label: "On-Time Completion" },
   ];

   return (
     <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Content */}
           <div className="space-y-8">
             <div className="space-y-4">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                 Excellence in Every
                 <span className="block text-amber-500">
                   Construction Project
                 </span>
               </h2>
               <p className="text-xl text-slate-600 leading-relaxed">
                 Byte Builders has been transforming visions into reality for
                 over a decade. We connect skilled contractors with ambitious
                 clients, delivering exceptional construction services that
                 stand the test of time.
               </p>
             </div>

             {/* Features List */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {features.map((feature, index) => (
                 <div key={index} className="flex items-center space-x-3">
                   <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                   <span className="text-slate-700 font-medium">{feature}</span>
                 </div>
               ))}
             </div>

             {/* Achievements */}
             <div className="grid grid-cols-3 gap-6 pt-8">
               {achievements.map((achievement, index) => (
                 <div key={index} className="text-center">
                   <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                     <achievement.icon className="w-6 h-6 text-amber-600" />
                   </div>
                   <div className="text-2xl font-bold text-slate-800">
                     {achievement.number}
                   </div>
                   <div className="text-sm text-slate-600">
                     {achievement.label}
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Image */}
           <div className="relative">
             <div className="relative rounded-3xl overflow-hidden">
               <img
                 src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Construction team at work"
                 className="w-full h-96 object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
             </div>

             {/* Floating Stats Card */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
               <div className="text-3xl font-bold text-slate-800 mb-1">10+</div>
               <div className="text-slate-600 text-sm">
                 Years Building Excellence
               </div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20" />
             <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-200 rounded-full opacity-30" />
           </div>
         </div>
       </div>
     </section>
   );
 }