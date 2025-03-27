import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Deepak Mishra</h1>
        <p className="text-gray-600">Senior Quantity Surveyor | Writer | Poet | Digital Marketer</p>
      </header>
      
      {/* About Section */}
      <section className="max-w-3xl mx-auto text-center p-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700 mt-2">
          I am a Senior Quantity Surveyor with over 11 years of experience, currently working at ITD Cementation. 
          Apart from my technical expertise, I am also a passionate writer, poet, and digital marketer, blending 
          creativity with analytical skills.
        </p>
      </section>
      
      {/* Experience Section */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center">Experience</h2>
        <Card className="mt-4">
          <CardContent>
            <h3 className="text-xl font-medium">Assistant Manager - QS</h3>
            <p className="text-gray-600">ITD Cementation | 2025 - Present</p>
            <p className="text-gray-700 mt-2">Managing cost control, contracts, and estimation for large-scale projects.</p>
          </CardContent>
        </Card>
      </section>
      
      {/* Projects Section */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        <Card className="mt-4">
          <CardContent>
            <h3 className="text-xl font-medium">Fiction Novel</h3>
            <p className="text-gray-700">Currently submitting my first fiction novel for publication.</p>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardContent>
            <h3 className="text-xl font-medium">Digital Marketing Agency</h3>
            <p className="text-gray-700">Building a digital marketing agency to help businesses grow online.</p>
          </CardContent>
        </Card>
      </section>
      
      {/* Contact Section */}
      <section className="max-w-3xl mx-auto text-center p-6">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="outline" asChild>
            <a href="mailto:welldeepakmishra@gmail.com"><Mail className="mr-2" /> Email</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/deepakmishra"><Linkedin className="mr-2" /> LinkedIn</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#"><Globe className="mr-2" /> Blog</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
