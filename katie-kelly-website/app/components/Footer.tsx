import Link from 'next/link';
import { config } from '@/content/config';
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', url: config.contact.social.twitter, icon: FaTwitter },
    { name: 'LinkedIn', url: config.contact.social.linkedin, icon: FaLinkedin },
    { name: 'YouTube', url: config.contact.social.youtube, icon: FaYoutube },
    { name: 'Instagram', url: config.contact.social.instagram, icon: FaInstagram },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <Link href="/" className="text-2xl font-bold inline-block mb-4">
              <span className="text-charcoal">katie</span>
              <span className="text-medium-gray">kelly</span>
            </Link>
            <p className="text-medium-gray">
              Scaling growth-stage FinTech platforms through operational excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-charcoal mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-medium-gray hover:text-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-medium-gray hover:text-orange transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-medium-gray hover:text-orange transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-medium-gray hover:text-orange transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-charcoal mb-4">Get in Touch</h3>
            <p className="text-medium-gray mb-4">
              <a
                href={`mailto:${config.contact.email}`}
                className="hover:text-orange transition-colors"
              >
                {config.contact.email}
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medium-gray hover:text-orange transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-medium-gray text-sm">
          <p>&copy; {currentYear} Katie Kelly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
