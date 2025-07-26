export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Mario Alejandro Romero Benítez',
    subtitle: 'Data Analyst',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/Mario-Romero-Benitez'
        },
        {
            text: 'Linkedln',
            href: 'https://www.linkedin.com/in/mario-romero-benítez-313432342/'
        },
            
        
    ],
    hero: {
        title: 'Hola y bienvenido a mi rincón de la web!',
        text: "soy **Mario**, analista de datos enfocado en transformar datos en decisiones valiosas. Tengo experiencia aplicando herramientas como Excel, Power BI y SQL para obtener insights claros, apoyar la toma de decisiones estratégicas y optimizar procesos. Mi enfoque combina la curiosidad analítica con la claridad visual. Me apasiona contar historias con datos, entender patrones y generar impacto a partir de la información. Explora algunos de mis proyectos en Github o visita mi perfil de Linkedln. Si quieres contactarme, haz click abajo.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Cóntactame',
                href: '/contact'
            }
        ]
    },
  
    };

export default siteConfig;
