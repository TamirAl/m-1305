import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs: React.FC = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">We're here to help! Send us a message and we'll get back to you as soon as possible.</p>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Send us a message</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <Input placeholder="Enter subject" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea placeholder="Type your message here" className="min-h-[150px]" />
            </div>

            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm">support@example.com</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm">+1 (555) 123-4567</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-sm">Mon-Fri: 9AM - 5PM EST</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
