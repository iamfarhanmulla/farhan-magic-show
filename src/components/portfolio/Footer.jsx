import { Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/iamfarhanmulla", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/farhan-mulla", icon: Linkedin },
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ai.farhan@outlook.com",
    icon: Mail,
  },
];

const Footer = () => (
  <footer className="section-padding pt-0 text-center">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-4xl md:text-5xl font-mono text-foreground">Find Me On</h3>
      <p className="mt-4 text-lg font-mono text-muted-foreground">
        Feel free to <span className="text-primary">connect</span> with me
      </p>

      <div className="mt-8 flex items-center justify-center gap-4 md:gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform duration-200 hover:scale-105"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>

      <p className="mt-10 text-muted-foreground text-xs font-mono">Designed & Built by Farhan Mulla</p>
    </div>
  </footer>
);

export default Footer;
