/* ============================================================
   Joás Souza — Landing Page · main.js
   ============================================================ */

/* ---------- Traduções PT / EN ---------- */
const i18n = {
  'pt-BR': {
    'logo': 'Joás<span class="logo-accent">Souza</span>',
    'nav.inicio': 'Início',
    'nav.sobre': 'Sobre',
    'nav.habilidades': 'Habilidades',
    'nav.experiencia': 'Experiência',
    'nav.publicacoes': 'Publicações',
    'nav.contato': 'Contato',
    'nav.cta': 'Vamos conversar',
    'hero.disponivel': 'Disponível para projetos e novas oportunidades',
    'hero.hello': 'Olá, eu sou',
    'hero.role': 'Engenheiro de Software · Analista de Dados Sênior',
    'hero.text': 'Mais de duas décadas unindo engenharia de software, banco de dados e análise de sistemas para transformar dados em decisões — em ambientes complexos e de alta criticidade.',
    'hero.ctaContato': 'Entre em contato',
    'hero.ctaSobre': 'Conheça meu trabalho',
    'hero.cardExpValue': '20+ anos',
    'hero.cardExp': 'de experiência em TI',
    'hero.cardRole': 'Analista de Dados Sênior',
    'hero.cardRoleAt': 'Qintess · Recife/PE',
    'sobre.tag': 'Quem sou',
    'sobre.title': 'Engenharia, dados e pessoas',
    'sobre.p1': 'Engenheiro de software com forte base acadêmica e carreira sólida em times de TI de ambientes complexos, onde colaboração, influência e confiança fazem a diferença. Atuei recentemente como Analista de Dados Sênior na Qintess.',
    'sobre.p2': 'Tive papel essencial na implementação de sistemas integrados como TEBAS (TRF5) e EquipMaint (CHESF) que consolidam dados de diversas áreas de negócio para tomadas de decisão nos mais diversos setores e níveis da organização — conectando engenharia de software, modelagem de dados e análise de sistemas.',
    'sobre.p3': 'Também fui professor universitário por quase uma década, formando turmas de Administração, Ciências Contábeis e Sistemas de Informação — e contribuí para que o curso de Sistemas de Informação de Olinda se tornasse o melhor entre instituições privadas de Pernambuco (ENADE/MEC 2015).',
    'sobre.h1': 'Implementação de sistemas integrados para nível diretivo',
    'sobre.h2': 'Publicações científicas em redes de computadores e IA',
    'sobre.h3': 'Inglês profissional (proficiência de trabalho)',
    'sobre.h4': 'Centenas de profissionais treinados em sistemas corporativos',
    'stat.anos': '20+',
    'stat.anosL': 'anos de experiência',
    'stat.mestrado': 'MSc',
    'stat.mestradoL': 'Eng. da Computação — UPE',
    'stat.pub': '2',
    'stat.pubL': 'publicações científicas',
    'stat.ensino': '200+',
    'stat.ensinoL': 'profissionais treinados',
    'hab.tag': 'Competências',
    'hab.title': 'Ferramentas e especialidades',
    'hab.db': 'Banco de Dados',
    'hab.dbD': 'Oracle, SQL Server, modelagem relacional, SQL/PL-SQL, performance, backup e recuperação.',
    'hab.dev': 'Engenharia de Software',
    'hab.devD': 'ASP.NET, C#, Visual Basic, Delphi, UML e requisitos — do desenho à entrega.',
    'hab.dados': 'Análise de Sistemas',
    'hab.dadosD': 'Levantamento de requisitos, integração de dados entre áreas e relatórios estratégicos.',
    'hab.gp': 'Gestão de Projetos',
    'hab.gpD': 'Planejamento estratégico, orçamento, negociação e gestão de equipes e clientes.',
    'hab.gov': 'Governança & LGPD',
    'hab.govD': 'Auditoria de sistemas e informação, conformidade e proteção de dados pessoais.',
    'hab.lang': 'Idiomas',
    'hab.langD': 'Português nativo e inglês em nível profissional (leitura, escrita e conversação).',
    'exp.tag': 'Trajetória',
    'exp.title': 'Experiência profissional',
    'exp.qintess.data': '2025 — 2026',
    'exp.qintess.role': 'Analista de Dados Sênior',
    'exp.qintess.co': 'Qintess · Recife/PE',
    'exp.qintess.desc': 'Administração, performance e confiabilidade de bancos de dados em ambiente corporativo de alta criticidade.',
    'exp.seedu.data': 'Governo de Pernambuco',
    'exp.seedu.role': 'Área de Tecnologia da Informação',
    'exp.seedu.co': 'Secretaria de Educação e Esportes de PE · Recife/PE',
    'exp.seedu.desc': 'Análise e desenvolvimento de sistemas e serviços web para o estado, incluindo o site da Biblioteca Pública de Pernambuco.',
    'exp.uninassau.data': '2019 — 2020',
    'exp.uninassau.role': 'Professor universitário',
    'exp.uninassau.co': 'UNINASSAU · Olinda/PE',
    'exp.uninassau.desc': 'Docência nos cursos de Sistemas de Informação e áreas correlatas.',
    'exp.uninabuco.data': '2009 — 2018',
    'exp.uninabuco.role': 'Professor universitário',
    'exp.uninabuco.co': 'UNINABUCO · Paulista/PE',
    'exp.uninabuco.desc': 'Docência em Administração, Ciências Contábeis e Sistemas de Informação. Membro do conselho pedagógico e contribuição para a melhor nota do curso de SI de Olinda entre privadas do estado (ENADE/MEC 2015).',
    'exp.dev.data': 'Anos anteriores',
    'exp.dev.role': 'Desenvolvedor de Software / Team Leader',
    'exp.dev.co': 'Empresas privadas e públicas',
    'exp.dev.desc': 'Desenvolvimento de software (.NET, ASP, VB, Delphi) para empresas privadas e governo, com treinamento de mais de 200 usuários e 100% de satisfação dos clientes.',
    'edu.title': 'Formação acadêmica',
    'edu.mestrado': 'Mestrado em Engenharia da Computação',
    'edu.mestradoU': 'Universidade de Pernambuco (UPE) · 2008 — 2010',
    'edu.pos': 'Pós-graduação em Auditoria de Sistemas e Informação',
    'edu.posU': 'Universidade Federal de Pernambuco (UFPE) · 2004 — 2005',
    'edu.bach': 'Bacharelado em Ciência da Computação',
    'edu.bachU': 'Universidade Católica de Pernambuco · 1996 — 2001',
    'pub.tag': 'Pesquisa',
    'pub.title': 'Publicações científicas',
    'pub.tipo1': 'Redes de Computadores',
    'pub.t1': 'Um Detector de Defeitos Cumulativo Baseado em uma Abordagem Difusa',
    'pub.v1': 'Simpósio Brasileiro de Redes de Computadores',
    'pub.tipo2': 'Inteligência Artificial',
    'pub.t2': 'Uma Abordagem Multi-objetiva Híbrida para Seleção e Atribuição de Pesos a Características para Classificadores k-NN',
    'pub.v2': 'XXIX Congresso da SBC — Encontro Nacional de Inteligência Artificial (ENIA), 2009',
    'pub.ver': 'Ver publicação',
    'cont.tag': 'Contato',
    'cont.title': 'Vamos construir algo juntos?',
    'cont.sub': 'Disponível para oportunidades, projetos e colaborações. Será um prazer conversar.',
    'cont.email': 'E-mail',
    'cont.whats': 'WhatsApp',
    'cont.cta': 'Enviar um e-mail',
    'footer.text': 'Engenheiro de Software · Analista de Dados Sênior',
    'footer.rights': 'Todos os direitos reservados'
  },
  'en': {
    'logo': 'Joás<span class="logo-accent">Souza</span>',
    'nav.inicio': 'Home',
    'nav.sobre': 'About',
    'nav.habilidades': 'Skills',
    'nav.experiencia': 'Experience',
    'nav.publicacoes': 'Publications',
    'nav.contato': 'Contact',
    'nav.cta': 'Let\'s talk',
    'hero.disponivel': 'Available for projects and new opportunities',
    'hero.hello': 'Hi, I\'m',
    'hero.role': 'Software Engineer · Senior Data Analist',
    'hero.text': 'Over two decades combining software engineering, databases and systems analysis to turn data into decisions — in complex, high-criticality environments.',
    'hero.ctaContato': 'Get in touch',
    'hero.ctaSobre': 'See my work',
    'hero.cardExpValue': '20+ years',
    'hero.cardExp': 'of IT experience',
    'hero.cardRole': 'Senior Data Analist',
    'hero.cardRoleAt': 'Qintess · Recife, Brazil',
    'sobre.tag': 'Who I am',
    'sobre.p1': 'Software engineer with a strong academic background and a proven record working in IT teams within complex environments, where collaboration, influencing others and trust make the difference. I recently worked as a Senior Data Analyst at Qintess.',
    'sobre.p2': 'I played a key role in implementing integrated systems such as TEBAS (TRF5) and EquipMaint (CHESF), which consolidate data from various business areas to support decision-making across different sectors and levels of the organization connecting software engineering, data modeling, and systems analysis. ',
    'sobre.p3': 'I was also a university professor for almost a decade, teaching Administration, Accounting Sciences and Information Systems — and helped the Information Systems program in Faculdade Joaquim Nabuco from Olinda become the best among private institutions in Pernambuco (ENADE/MEC 2015).',
    'sobre.h1': 'Integrated systems implementation for board-level reporting',
    'sobre.h2': 'Scientific publications in computer networks and AI',
    'sobre.h3': 'Professional English (working proficiency)',
    'sobre.h4': 'More than 200 professionals trained on corporate systems',
    'stat.anos': '20+',
    'stat.anosL': 'years of experience',
    'stat.mestrado': 'MSc',
    'stat.mestradoL': 'Computer Eng. — UPE',
    'stat.pub': '2',
    'stat.pubL': 'scientific publications',
    'stat.ensino': '200+',
    'stat.ensinoL': 'professionals trained',
    'hab.tag': 'Skills',
    'hab.title': 'Tools and specialties',
    'hab.db': 'Databases',
    'hab.dbD': 'Oracle, SQL Server, relational modeling, SQL/PL-SQL, performance, backup and recovery.',
    'hab.dev': 'Software Engineering',
    'hab.devD': 'ASP.NET, C#, Visual Basic, Delphi, UML and requirements — from design to delivery.',
    'hab.dados': 'Systems Analysis',
    'hab.dadosD': 'Requirements gathering, data integration across areas and strategic reporting.',
    'hab.gp': 'Project Management',
    'hab.gpD': 'Strategic planning, budgeting, negotiation and team/client management.',
    'hab.gov': 'Governance & LGPD',
    'hab.govD': 'Systems and information auditing, compliance and personal data protection.',
    'hab.lang': 'Languages',
    'hab.langD': 'Native Portuguese and professional-level English (reading, writing and speaking).',
    'exp.tag': 'Career',
    'exp.title': 'Professional experience',
    'exp.qintess.data': '2025 — 2026',
    'exp.qintess.role': 'Senior Database Administrator',
    'exp.qintess.co': 'Qintess · Recife, Brazil',
    'exp.qintess.desc': 'Administration, performance and reliability of databases in a high-criticality corporate environment.',
    'exp.seedu.data': 'Pernambuco State Government',
    'exp.seedu.role': 'Information Technology area',
    'exp.seedu.co': 'Secretariat of Education and Sports of PE · Recife, Brazil',
    'exp.seedu.desc': 'Analysis and development of systems and web services for the state, including the Pernambuco Public Library website.',
    'exp.uninassau.data': '2019 — 2020',
    'exp.uninassau.role': 'University professor',
    'exp.uninassau.co': 'UNINASSAU · Olinda, Brazil',
    'exp.uninassau.desc': 'Teaching in Information Systems and related programs.',
    'exp.uninabuco.data': '2009 — 2018',
    'exp.uninabuco.role': 'University professor',
    'exp.uninabuco.co': 'UNINABUCO · Paulista, Brazil',
    'exp.uninabuco.desc': 'Teaching in Administration, Accounting Sciences and Information Systems. Member of the pedagogical council, contributing to the best ENADE/MEC score of the Information Systems program in Olinda among private institutions in the state.',
    'exp.dev.data': 'Earlier years',
    'exp.dev.role': 'Software Developer / Team Leader',
    'exp.dev.co': 'Private and public companies',
    'exp.dev.desc': 'Software development (.NET, ASP, VB, Delphi) for private and government clients, training over 200 users with 100% client satisfaction.',
    'edu.title': 'Education',
    'edu.mestrado': 'Master\'s in Computer Engineering',
    'edu.mestradoU': 'Universidade de Pernambuco (UPE) · 2008 — 2010',
    'edu.pos': 'Postgraduate in Systems and Information Audit',
    'edu.posU': 'Universidade Federal de Pernambuco (UFPE) · 2004 — 2005',
    'edu.bach': 'Bachelor\'s in Computer Science',
    'edu.bachU': 'Universidade Católica de Pernambuco · 1996 — 2001',
    'pub.tag': 'Research',
    'pub.title': 'Scientific publications',
    'pub.tipo1': 'Computer Networks',
    'pub.t1': 'A Cumulative Fault Detector Based on a Fuzzy Approach',
    'pub.v1': 'Brazilian Symposium on Computer Networks',
    'pub.tipo2': 'Artificial Intelligence',
    'pub.t2': 'A Hybrid Multi-objective Approach for Feature Selection and Weight Assignment for k-NN Classifiers',
    'pub.v2': 'XXIX Congress of the SBC — National Meeting on Artificial Intelligence (ENIA), 2009',
    'pub.ver': 'View publication',
    'cont.tag': 'Contact',
    'cont.title': 'Let\'s build something together?',
    'cont.sub': 'Available for opportunities, projects and collaborations. It will be a pleasure to talk.',
    'cont.email': 'E-mail',
    'cont.whats': 'WhatsApp',
    'cont.cta': 'Send an e-mail',
    'footer.text': 'Software Engineer · Senior Data Analist',
    'footer.rights': 'All rights reserved'
  }
};

/* ---------- Aplicar idioma ---------- */
function applyLang(lang) {
  const dict = i18n[lang] || i18n['pt-BR'];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
  document.title = lang === 'en'
    ? 'Joás Souza — Software Engineer | Senior Data Analist'
    : 'Joás Souza — Engenheiro de Software | Analista de Dados Sênior';
  document.querySelector('#langToggle').textContent = lang === 'en' ? 'PT' : 'EN';
  localStorage.setItem('lang', lang);
}

function initLang() {
  const saved = localStorage.getItem('lang');
  const browser = (navigator.language || 'pt-BR').startsWith('en') ? 'en' : 'pt-BR';
  applyLang(saved || browser);
}

/* ---------- Menu mobile ---------- */
function initMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Navbar ao rolar ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const elements = document.querySelectorAll('.section-head, .hero-content, .hero-visual, .skill-card, .timeline-item, .edu-card, .pub-card, .contact-card, .sobre-grid > *');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ---------- Ano automático ---------- */
function initYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initMenu();
  initNavbar();
  initReveal();
  initYear();

  document.getElementById('langToggle').addEventListener('click', () => {
    const current = document.documentElement.lang;
    applyLang(current === 'en' ? 'pt-BR' : 'en');
  });
});
