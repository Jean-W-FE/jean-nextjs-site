const contact = {
  "title": "Get in Touch",
  "subtitle": "Let's Create Amazing Web Experiences Together",
  "description": "Whether you're interested in collaboration, technical discussions, or job opportunities, I'd love to hear from you. Fill out the form below and I'll get back to you within 24 hours.",
  "form": {
    "name": {
      "label": "Your Name",
      "placeholder": "Enter your name"
    },
    "email": {
      "label": "Email",
      "placeholder": "Enter your email"
    },
    "subject": {
      "label": "Subject",
      "placeholder": "Select a subject",
      "options": {
        "collaboration": "Project Collaboration",
        "job": "Job Opportunity",
        "technical": "Technical Discussion",
        "other": "Other"
      }
    },
    "message": {
      "label": "Message",
      "placeholder": "Tell me about what you'd like to discuss..."
    },
    "submit": "Send Message"
  },
  "contact_info": {
    "title": "Other Ways to Connect",
    "email": "Email",
    "social": "Social Media",
    "location": "Location",
    "response_time": "Response Time: Within 24 hours"
  }
} as const;
  
export default contact 