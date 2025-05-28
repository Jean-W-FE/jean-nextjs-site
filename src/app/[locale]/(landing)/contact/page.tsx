import ContactForm from '@/components/contact/ContactForm';
import CommonQA from '@/components/contact/CommonQA';

export default function ContactPage() {
  return <div className='container mx-auto px-4 py-16'>
    <ContactForm />
    <CommonQA/>
  </div>;
}
