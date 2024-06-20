// src/Pages/AboutUsPage.js

import { motion } from 'framer-motion';

// Dummy data for services and team members
const services = [
  {
    id: 1,
    title: "Service 1",
    description: "Description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/path/to/service1.jpg",
    link: "/service1"
  },
  {
    id: 2,
    title: "Service 2",
    description: "Description of Service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "",
    link: "/service2"
  },
  {
    id: 3,
    title: "Service 3",
    description: "Description of Service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/path/to/service3.jpg",
    link: "/service3"
  }
];

const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    role: "Role of Team Member 1",
    imageUrl: "/path/to/team-member1.jpg",
    link: "/team-member1"
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Role of Team Member 2",
    imageUrl: "/path/to/team-member2.jpg",
    link: "/team-member2"
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Role of Team Member 3",
    imageUrl: "/path/to/team-member3.jpg",
    link: "/team-member3"
  }
];

const AboutUsPage = () => {
  return (
    <div className="about-us-page p-6">
      <motion.section 
        className="intro text-center py-10 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to [Your Company Name], your trusted partner in aluminum and glass fabrication. Our dedication to excellence and innovation drives us to deliver bespoke solutions that combine functionality with aesthetic appeal.
        </p>
        <motion.img 
          src="nbmlog1.jpeg" 
          alt="Company Overview" 
          className="w-full h-64 object-cover my-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>

      <section className="discover-our-potential py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Discover Our Potential</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <motion.div 
              key={service.id} 
              className="potential-card p-4 bg-white rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-48 object-cover mb-4 rounded-md" 
              />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-primary font-semibold">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="meet-our-team py-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <motion.div 
              key={member.id} 
              className="team-card p-4 bg-white rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-32 h-32 object-cover mb-4 rounded-full mx-auto" 
              />
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <a href={member.link} className="text-primary font-semibold">View Profile</a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
