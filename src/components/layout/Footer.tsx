import Link from 'next/link';
import { ReactNode } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

interface FooterLink {
  name: string;
  href: string;
  icon?: ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
        { name: 'Book Appointment', href: '/book-appointment' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { name: 'Physiotherapy', href: '/services/physiotherapy' },
        { name: 'Musculoskeletal Injury', href: '/services/musculoskeletal-injury' },
        { name: 'Pelvic Floor Physiotherapy', href: '/services/pelvic-floor-physiotherapy' },
        { name: 'Neurological Rehab', href: '/services/neuro-rehab' },
        { name: 'Pain Management', href: '/services/pain-management' },
      ],
    },
    {
      title: 'Contact Info',
      links: [
        // { 
        //   name: '123 Health St, San Francisco, CA 94110', 
        //   icon: <FaMapMarkerAlt className="inline mr-2 text-primary-600" />,
        //   href: 'https://maps.google.com?q=123+Health+St,+San+Francisco,+CA+94110'
        // },
        { 
          name: '(604) 771-7898', 
          icon: <FaPhoneAlt className="inline mr-2 text-primary-600" />,
          href: 'tel:+16047717898'
        },
        { 
          name: 'livmophysio@gmail.com', 
          icon: <FaEnvelope className="inline mr-2 text-primary-600" />,
          href: 'mailto:livmophysio@gmail.com'
        },
        { 
          name: 'Tues-Sat: 11:00 AM - 8:00 PM', 
          icon: <FaClock className="inline mr-2 text-primary-600" />,
          href: ''
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61561815472137' },
    // { icon: <FaTwitter size={20} />, href: 'https://twitter.com/elitephysiocare' },
    { icon: <FaInstagram size={20} />, href: 'https://instagram.com/livmotion.physio' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/cherie-k-7016b015/' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-500">Liv</span> Motion Physiotherapy
            </h3>
            <p className="text-gray-400 mb-4">
              Professional physiotherapy services to help you recover, rehabilitate, and return to your active lifestyle.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={`Follow us on ${social.href.split('/')[2]}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-primary-500 transition-colors flex items-start"
                      >
                        {link.icon && <span className="mt-1">{link.icon}</span>}
                        <span className={link.icon ? 'ml-2' : ''}>{link.name}</span>
                      </Link>
                    ) : (
                      <span className="text-gray-400 flex items-start">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Liv Motion Physiotherapy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
