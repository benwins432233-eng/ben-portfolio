import { useContactForm } from "@/hooks/useContactForm";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, Facebook, Moon, Sun, Menu, X, Code2, Database, Users, Zap,
  Github, ExternalLink, Mail, Linkedin, Twitter,
  ArrowRight, Send, Sparkles, Globe, Cpu
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import './App.css';

// Navigation Component
function Navigation({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À propos' },
    { href: '#competences', label: 'Compétences' },
    { href: '#projets', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="text-xl md:text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ben WINS
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full glass"
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full glass"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient rounded-full blur-[120px] opacity-30 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient rounded-full blur-[100px] opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-gradient" />
              <span className="text-sm font-medium">Disponible pour de nouveaux projets</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            >
              Bonjour, je suis{' '}
              <span className="text-gradient">Ben WINS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Développeur Web Full-Stack passionné, spécialisé dans le{' '}
              <span className="text-foreground font-medium">vibe coding</span> et la création
              d'expériences digitales captivantes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient text-white font-semibold shadow-lg glow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px -5px hsl(var(--gradient-start))' }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start mt-10"
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient rounded-full blur-[60px] opacity-40 animate-pulse-glow" />

              {/* Image Container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/images/profile.png"
                  alt="Ben WINS"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-sm font-semibold text-gradient">Full-Stack</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-sm font-semibold text-gradient">4+ Projets</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-foreground/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  const stats = [
    { value: '4+', label: 'Projets déployés' },
    { value: '2+', label: 'Années d\'expérience' },
    { value: '100%', label: 'Passion' },
    { value: '∞', label: 'Créativité' },
  ];

  return (
    <section id="apropos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            À propos de moi
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Qui suis-je <span className="text-gradient">?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis <span className="text-foreground font-medium">Ben WINS</span>, développeur web
              full-stack, spécialisé dans la conception et le développement d’applications web modernes,
              performantes et orientées utilisateur. J’interviens sur l’ensemble du cycle de développement,
              de l’analyse des besoins jusqu’au déploiement.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche est <span className="text-foreground font-medium">pragmatique et orientée résultats</span> :
              chaque décision technique est guidée par l’expérience utilisateur, la scalabilité et la fiabilité.
              J’utilise les outils d’intelligence artificielle comme leviers de productivité pour accélérer le développement,
              améliorer la qualité du code et optimiser le rendu final, sans jamais remplacer l’expertise humaine.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En parallèle, je développe mes compétences en science des données et en gestion de projet afin de mieux
              comprendre les enjeux business. Chaque projet est conçu comme une solution utile, robuste et durable,
              pensée pour évoluer dans le temps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skills = [
    {
      icon: Code2,
      title: 'Développement Full-Stack',
      description: 'Création d\'applications web complètes, du frontend au backend, avec les technologies modernes les plus performantes.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js'],
    },
    {
      icon: Zap,
      title: 'Vibe Coding',
      description: 'Approche intuitive et créative du développement, alliant rapidité, esthétique et expérience utilisateur optimale.',
      technologies: ['Tailwind CSS', 'Framer Motion', 'GSAP', 'shadcn/ui'],
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'En formation continue pour maîtriser l\'analyse de données, le machine learning et la visualisation de données.',
      technologies: ['Python', 'Pandas', 'TensorFlow', 'SQL'],
    },
    {
      icon: Users,
      title: 'Gestion de Projet',
      description: 'Coordination efficace des équipes et des ressources pour livrer des projets dans les délais et avec qualité.',
      technologies: ['Agile', 'Scrum', 'Jira', 'Notion'],
    },
  ];

  return (
    <section id="competences" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Mes Compétences
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ce que je <span className="text-gradient">maîtrise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences variées pour répondre à tous vos besoins digitaux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-4 rounded-xl bg-gradient shrink-0"
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/50 dark:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'E-Shop Premium',
      description: 'Plateforme e-commerce moderne avec panier dynamique, commandes flexibles et rapides, et tableau de bord administrateur.',
      image: '/images/vannys.png',
      tags: ['Next.js', 'Mobile Money', 'React', 'MySql'],
      demoUrl: 'https://vannys-frontend.vercel.app',
      githubUrl: 'https://github.com/benwins432233-eng/vannys-frontend',
      status: 'completed',
    },
    {
      title: 'ESAM',
      description: "Site Institutionnel - Ecole des Arts et de la Mode, avec prise de contact avec administration et suivi des réalisations professionnel de l'institut",
      image: '/images/esam.png',
      tags: ['React', 'Node.js', 'Resend', 'TailwindCSS'],
      demoUrl: 'https://esam.one',
      githubUrl: 'https://github.com/benwins432233-eng/esam-v1',
      status: 'completed',
    },
    {
      title: 'Jecosda',
      description: 'Site web professionnel de nettoyage avec résservation client simple et rapide, tableau de bord administrateur moderne',
      image: '/images/jecosda.png',
      tags: ['TypeScript', 'Mysql', 'Resend', 'TailwindCSS'],
      demoUrl: 'https://jecosda.vercel.app',
      githubUrl: 'https://github.com/benwins432233-eng/Jecosda-1.0.1',
      status: 'completed',
    },
    {
      title: 'Dynamikbox',
      description: 'Bibliothèque numérique avec lecteur intégré, paiments sécurisés et rapides, tableau de bord utilisateur et administrateur',
      image: '/images/dynamikbox.png',
      tags: ['React', 'MySql', 'FastAPI', 'TailwindCSS', 'Next.js', 'Service Worker'],
      demoUrl: 'https://dynamikbox.space',
      githubUrl: 'https://github.com/benwins432233-eng/Dynamikbox',
      status: 'completed',
    },
  ];

  const inProgressProjects = [
    {
      title: 'Synergia',
      description: "Plateformes de mise en contact clients et PME pour visibilité locale et réseau commerciale avancé",
      progress: 35,
    },
    {
      title: 'Notalys',
      description: 'Application de correction automatisé d\'épreuves pour deux pblics enseignant et apprenants.',
      progress: 60,
    },
  ];

  return (
    <section id="projets" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Mes Projets
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Réalisations <span className="text-gradient">concrètes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets que j'ai déployés et ceux sur lesquels je travaille actuellement
          </p>
        </motion.div>

        {/* Completed Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative h-56 overflow-hidden">
                    {/* Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Gradient décoratif */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />

                    {/* Gradient bas pour lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-white text-black"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-white text-black"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-black"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-black"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/50 dark:bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* In Progress Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-gradient" />
            <h3 className="text-2xl font-bold">Projets en cours</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {inProgressProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{project.title}</h4>
                  <span className="text-sm text-muted-foreground">{project.progress}%</span>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="h-2 rounded-full bg-white/20 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full bg-gradient"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const {
    formData,
    setFormData,
    isSubmitting,
    submit,
  } = useContactForm();
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
    setStatus('success');
  };


  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient rounded-full blur-[150px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Travaillons <span className="text-gradient">ensemble</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter, je serai ravi d'en discuter avec vous.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Informations de contact</h3>
              <p className="text-muted-foreground">
                Je suis disponible pour des collaborations, des projets freelance ou simplement pour échanger sur le développement web.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'benoitwinsavi@gmail.com', href: 'mailto:benoitwinsavi@gmail.com' },
                { icon: Globe, label: 'Site web', value: 'benwins.vercel.app', href: 'https://ben-portfolio-smoky.vercel.app' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/bénoît-winsavi-8132393a0', href: 'https://linkedin.com/in/bénoît-winsavi-8132393a0' },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="p-3 rounded-lg bg-gradient">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Suivez-moi sur les réseaux</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/benwins432233-eng', label: 'GitHub' },
                  { icon: Linkedin, href: 'linkedin.com/in/bénoît-winsavi-8132393a0', label: 'LinkedIn' },
                  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582823141359', label: 'Facebook' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-10 text-center space-y-4"
              >
                <div className="text-4xl">✅</div>
                <h3 className="text-xl font-semibold">
                  Message envoyé avec succès
                </h3>
                <p className="text-muted-foreground">
                  Merci pour votre message.
                  Je vous répondrai dans les plus brefs délais.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm underline text-muted-foreground hover:text-foreground"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { handleSubmit }}
                className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/50 dark:bg-white/5 border-white/30 dark:border-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Contact WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+229 00 00 00 00"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    className="bg-white/50 dark:bg-white/5 border-white/30 dark:border-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/50 dark:bg-white/5 border-white/30 dark:border-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-white/50 dark:bg-white/5 border-white/30 dark:border-white/10 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed glow"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gradient"
          >
            Ben WINS
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center"
          >
            © {new Date().getFullYear()} Ben WINS. Tous droits réservés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { icon: MessageCircle, href: 'https://wa.me/22997000000', label: 'WhatsApp' },
              { icon: Facebook, href: 'https://linkedin.com', label: 'Facebook' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
