/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION - SINGLE SOURCE OF TRUTH
 * =========================================================================
 * Customize all text, roles, skills, experience, and contact details
 * in this file to personalize the portfolio in under 2 minutes!
 */

export const portfolioConfig = {
  // ─── Personal Info ───
  personal: {
    firstName: 'Alex',
    lastName: 'Morgan',
    title: 'Technical Lead & Senior Software Architect',
    location: 'Dublin, Ireland',
    email: 'alex.morgan.tech@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    yearsOfExperience: '10+',
    primaryStack: '.NET Core & Cloud Architecture',
    shortBio:
      'Engineering leader with over a decade of hands-on experience building enterprise-scale distributed systems, leading high-performing software teams, and delivering mission-critical cloud architectures.',
  },

  // ─── Hero Section ───
  hero: {
    badgeText: 'Technical Lead & Senior Architect',
    roles: [
      'Technical Lead',
      'Senior Software Engineer',
      'System Architecture',
      'SDLC & Agile',
      'Engineering Mentorship'
    ],
    summary:
      '10+ years of full-stack engineering excellence. Specialized in distributed microservices, cloud-native architecture, automated CI/CD release engineering, and AI-augmented developer workflows.',
    telemetry: [
      { label: '.NET Core / Cloud', status: 'Core Stack', tag: 'Microservices', color: 'text-purple-400' },
      { label: 'MSSQL / Database', status: 'Optimized', tag: 'High-Throughput', color: 'text-blue-400' },
      { label: 'Azure CI/CD & Git', status: 'DevOps', tag: 'Automated Gates', color: 'text-emerald-400' },
      { label: 'AI & Developer Tools', status: 'AI Productivity', tag: 'LLM Workflows', color: 'text-teal-400' },
    ],
    marqueeTechnologies: [
      '.NET Core', 'C#', 'Cloud Architecture', 'Microservices', 'REST APIs', 'SQL Server',
      'Azure DevOps', 'Git Version Control', 'Docker', 'Kubernetes', 'CI/CD Pipelines',
      'AI & Copilot Tools', 'Agile / Scrum', 'System Design', 'React.js', 'Clean Architecture'
    ],
  },

  // ─── Leadership & Architecture Pillars ───
  leadershipPillars: [
    {
      id: 'architecture',
      title: 'System Architecture & Scale',
      subtitle: 'High-Throughput Cloud & Microservices',
      badge: 'Enterprise Architecture',
      description:
        'Designing fault-tolerant, horizontally scalable backend distributed architectures. Implementing high-performance services with clean architecture principles and robust contract boundaries.',
      keyPoints: [
        { label: 'Architecture', value: 'Microservices' },
        { label: 'Database', value: 'MSSQL / NoSQL' },
        { label: 'Core Stack', value: '.NET & Cloud' },
      ],
      highlights: [
        'Modular microservices decomposition and clean separation of concerns',
        'Advanced database indexing, query optimization, and execution plan tuning',
        'Resilient API Gateway design with distributed caching and circuit breakers',
        'Asynchronous event-driven messaging and decoupled background workers',
      ],
      codeSnippet: `// High-Performance Enterprise Service Pipeline
public async Task<Result<OrderDto>> ProcessOrderAsync(
    OrderCommand cmd, CancellationToken ct) 
{
    var entity = await _db.Orders
        .AsNoTracking()
        .Include(o => o.LineItems)
        .FirstOrDefaultAsync(o => o.Id == cmd.Id, ct);
        
    return await _engine.ExecutePipelineAsync(entity, ct);
}`,
    },
    {
      id: 'git-devops',
      title: 'Git Version Control & CI/CD',
      subtitle: 'Release Governance & Pipeline Automation',
      badge: 'DevOps & Git Governance',
      description:
        'Establishing structured Git branching strategies (Trunk-Based / GitFlow), branch protection rules, multi-stage automated CI/CD pipelines, and zero-downtime deployment workflows.',
      keyPoints: [
        { label: 'Version Control', value: 'Git' },
        { label: 'CI/CD Platform', value: 'Azure / GitHub' },
        { label: 'Workflow', value: 'PR Review Gates' },
      ],
      highlights: [
        'Git branch governance, protected branch policies, and automated PR validation',
        'Multi-stage CI/CD pipelines for automated unit, integration, and security test runs',
        'Automated semantic versioning, artifact registries, and release deployment gates',
        'Infrastructure as Code (IaC) and zero-downtime deployment strategies',
      ],
      codeSnippet: `# Multi-Stage Enterprise CI/CD Pipeline
trigger:
  branches:
    include: [ main, release/* ]
stages:
  - stage: BuildAndValidate
    jobs:
      - job: Automated_Test_Suite
        steps:
          - task: DotNetCoreCLI@2
            inputs:
              command: 'test'
              arguments: '--configuration Release'`,
    },
    {
      id: 'ai-tooling',
      title: 'AI & Developer Tooling',
      subtitle: 'AI-Augmented Development & Productivity',
      badge: 'AI & Modern Tools',
      description:
        'Leveraging AI tooling and LLM workflows to accelerate engineering velocity, author comprehensive test suites, automate documentation, and streamline code reviews.',
      keyPoints: [
        { label: 'Tooling', value: 'Copilot & LLMs' },
        { label: 'Focus', value: 'Test & Code Gen' },
        { label: 'Impact', value: 'High Velocity' },
      ],
      highlights: [
        'AI-assisted unit test authoring, edge-case generation, and mock synthesis',
        'Automated pull request summaries and documentation generation',
        'Accelerated code refactoring and legacy modernization workflows',
        'Responsible AI governance and code hygiene auditing',
      ],
      codeSnippet: `// Modern AI-Enhanced Schema Handler Pattern
[Description("Processes document metadata with schema validation")]
public async Task<ExtractionResult> ParseDocumentAsync(
    Stream docStream, PromptContext ctx) 
{
    var structuredSchema = JsonSchema.FromType<DocumentMetadata>();
    return await _aiClient.GenerateStructuredAsync(docStream, structuredSchema);
}`,
    },
    {
      id: 'leadership-sdlc',
      title: 'Tech Leadership & SDLC',
      subtitle: 'Agile Mentorship & Process Improvement',
      badge: 'People & Process',
      description:
        'Guiding engineering teams through the complete software lifecycle. Mentoring engineers, conducting architectural reviews (ADRs), and optimizing Agile sprint delivery.',
      keyPoints: [
        { label: 'Role Focus', value: 'Technical Lead' },
        { label: 'Methodology', value: 'Agile / Scrum' },
        { label: 'Domain', value: 'Full SDLC' },
      ],
      highlights: [
        'Technical roadmap ownership aligned with business milestones and stakeholder KPIs',
        'Structured mentorship and career development frameworks for engineering talent',
        'Agile sprint ceremonies, retrospective action items, and cycle time optimization',
        'Cross-team architectural alignment and technical decision records (ADRs)',
      ],
      codeSnippet: `// Engineering Governance: Architectural Guidance
1. Context: Core Microservices Modernization
2. Decision: Decoupled Event-Driven Architecture with High Availability
3. Quality: Protected Branching Policies & Automated Test Gates
4. Execution: Agile Sprints with Continuous Process Improvement`,
    },
  ],

  // ─── Skills (Categorized) ───
  skills: [
    // Backend & Architecture
    { name: '.NET Core', category: 'backend' },
    { name: 'C#', category: 'backend' },
    { name: 'API Development', category: 'backend' },
    { name: 'Cloud Architecture', category: 'backend' },
    { name: 'Microservices', category: 'backend' },
    { name: 'ASP.NET MVC', category: 'backend' },
    { name: 'ASP.NET Web API', category: 'backend' },
    { name: 'Entity Framework', category: 'backend' },
    { name: 'LINQ', category: 'backend' },
    { name: 'Software Design Patterns', category: 'backend' },
    // Data & AI
    { name: 'SQL Server', category: 'data_ai' },
    { name: 'SSMS Query Writing', category: 'data_ai' },
    { name: 'Generative AI', category: 'data_ai' },
    { name: 'Microsoft Copilot', category: 'data_ai' },
    { name: 'Data Visualization', category: 'data_ai' },
    { name: 'Data Analytics', category: 'data_ai' },
    // DevOps & Cloud
    { name: 'Azure DevOps', category: 'devops' },
    { name: 'Git Version Control', category: 'devops' },
    { name: 'CI/CD Automation', category: 'devops' },
    { name: 'Docker / Containers', category: 'devops' },
    { name: 'Visual Studio', category: 'devops' },
    { name: 'Jira / Project Tools', category: 'devops' },
    // Frontend
    { name: 'React.js', category: 'frontend' },
    { name: 'TypeScript / JavaScript', category: 'frontend' },
    { name: 'HTML5 & CSS3', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    // Leadership & Agile
    { name: 'Technical Leadership', category: 'leadership' },
    { name: 'Agile / Scrum Methodologies', category: 'leadership' },
    { name: 'Kanban & Sprint Planning', category: 'leadership' },
    { name: 'Problem Solving & Architecture', category: 'leadership' },
    { name: 'Emotional Intelligence & Mentorship', category: 'leadership' },
  ],

  // ─── Certifications ───
  certifications: [
    { name: 'Microsoft Certified: Azure Solutions Architect', tag: 'Cloud Architecture' },
    { name: 'Generative AI & Copilot Developer Workflows', tag: 'AI Engineering' },
    { name: 'Engineering Leadership & Emotional Intelligence', tag: 'Leadership' },
    { name: 'Advanced .NET & C# Professional Assessment', tag: 'Core Stack' },
  ],

  // ─── Career Timeline ───
  timeline: [
    {
      year: '2024',
      subYear: 'Present',
      title: 'Senior Software Engineer / Technical Lead',
      company: 'Enterprise Cloud Technologies',
      location: 'Dublin, Ireland',
      period: 'Jan 2024 - Present',
      badge: 'Engineering Leadership & Architecture',
      current: true,
      accent: 'from-primary-light to-purple-400',
      bullets: [
        'Leading cross-functional engineering teams in architecting high-availability cloud solutions',
        'Driving technical strategy, Architecture Decision Records (ADRs), and code review gates',
        'Spearheading modern microservices migration and automated CI/CD deployment pipelines',
        'Partnering with product stakeholders to align architectural vision with business milestones',
      ],
    },
    {
      year: '2021',
      subYear: '2024',
      title: 'Senior Software Engineer',
      company: 'Global Financial Solutions',
      location: 'Dublin, Ireland',
      period: 'Mar 2021 - Dec 2023',
      badge: 'Cloud Microservices & High-Throughput APIs',
      accent: 'from-primary to-violet-500',
      bullets: [
        'Architected and deployed distributed .NET Core microservices handling high-volume transactions',
        'Automated CI/CD pipelines in Azure DevOps with automated test verification gates',
        'Optimized database indexing and query plans, improving response latency across core services',
        'Mentored mid-level and junior engineers on clean code practices and design patterns',
      ],
    },
    {
      year: '2018',
      subYear: '2021',
      title: 'Software Engineer',
      company: 'Enterprise Systems Ltd',
      location: 'Tech Hub',
      period: 'Jun 2018 - Feb 2021',
      badge: 'Full-Stack Development & System Design',
      accent: 'from-orange-500 to-rose-500',
      bullets: [
        'Developed full-stack web applications and robust REST APIs for enterprise clients',
        'Designed database schemas, stored procedures, and data access layers in SQL Server',
        'Collaborated in Agile sprints, feature planning, and client requirements discovery',
      ],
    },
  ],

  // ─── Education ───
  education: [
    {
      degree: 'Master of Science (MSc)',
      specialization: 'Computer Science, Data Analytics & AI',
      institution: 'University College Dublin / DCU',
      location: 'Dublin, Ireland',
      period: '2020 - 2021',
      description:
        'Advanced post-graduate specialization in Artificial Intelligence, machine learning algorithms, distributed computing, and large-scale data engineering.',
      tags: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Cloud Systems'],
    },
    {
      degree: 'Bachelor of Engineering (B.E.)',
      specialization: 'Computer Science & Engineering',
      institution: 'Institute of Technology',
      location: 'University Campus',
      period: '2014 - 2018',
      description:
        'Comprehensive foundation in computer science engineering, software architecture, algorithms, relational database systems, and object-oriented design.',
      tags: ['Computer Science', 'Algorithms', 'Data Structures', 'Software Engineering'],
    },
  ],

  // ─── Volunteering & Community ───
  volunteering: [
    {
      role: 'Tech Mentor & Community Volunteer',
      organization: 'Local Tech & Youth Empowerment Initiative',
      location: 'Dublin, Ireland',
      period: '2023 - Present',
      category: 'Community & Mentorship',
      badge: 'Youth Leadership & STEM',
      description:
        'Volunteering time to mentor aspiring developers, leading introductory coding workshops, and assisting community event operations.',
    },
    {
      role: 'Community Service Lead',
      organization: 'Civic Action & Public Service Network',
      location: 'National Organization',
      period: '2016 - Present',
      category: 'Social Services',
      badge: 'Public Action & Leadership',
      description:
        'Participating in community emergency preparedness, civic service drives, and public safety advisory initiatives.',
    },
  ],
}
