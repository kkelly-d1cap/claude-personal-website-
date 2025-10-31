import Link from 'next/link';
import { config } from '@/content/config';
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function FindMe() {
  const socialLinks = [
    {
      name: 'Twitter',
      url: config.contact.social.twitter,
      icon: FaTwitter,
      color: 'hover:text-[#1DA1F2]',
    },
    {
      name: 'LinkedIn',
      url: config.contact.social.linkedin,
      icon: FaLinkedin,
      color: 'hover:text-[#0A66C2]',
    },
    {
      name: 'YouTube',
      url: config.contact.social.youtube,
      icon: FaYoutube,
      color: 'hover:text-[#FF0000]',
    },
    {
      name: 'Instagram',
      url: config.contact.social.instagram,
      icon: FaInstagram,
      color: 'hover:text-[#E4405F]',
    },
    {
      name: 'Email',
      url: `mailto:${config.contact.email}`,
      icon: FaEnvelope,
      color: 'hover:text-lime',
    },
  ];

  return (
    <section id="contact" className="bg-charcoal text-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Handwritten Heading */}
        <h2 className="handwritten text-5xl md:text-6xl mb-8">
          Find Me
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          Let's connect! I'm always open to discussing new opportunities, collaborations,
          or just having a conversation about operations and growth strategies.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`text-white ${social.color} transition-colors duration-200`}
                aria-label={social.name}
              >
                <Icon size={48} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
