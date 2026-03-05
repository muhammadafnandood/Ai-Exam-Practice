// Chapter 5: Spec-Driven Development - 50 Questions
// 15 Basic + 20 Conceptual + 15 Advanced

module.exports = {
  chapter: 5,
  title: "Spec-Driven Development",
  questions: [
    // BASIC QUESTIONS (1-15)
    {
      id: 1,
      type: "basic",
      question: "What does 'spec' stand for in software development?",
      options: [
        "Specification",
        "Special",
        "Spectrum",
        "Speculation"
      ],
      correct: 0
    },
    {
      id: 2,
      type: "basic",
      question: "What is spec-driven development?",
      options: [
        "Building software based on detailed specifications",
        "Coding without any planning",
        "Testing after development",
        "Random feature addition"
      ],
      correct: 0
    },
    {
      id: 3,
      type: "basic",
      question: "What is a functional specification?",
      options: [
        "A document describing what a system should do",
        "A list of bugs",
        "A marketing document",
        "A user manual"
      ],
      correct: 0
    },
    {
      id: 4,
      type: "basic",
      question: "What is a technical specification?",
      options: [
        "A document describing how a system should be built",
        "A user guide",
        "A sales pitch",
        "A bug report"
      ],
      correct: 0
    },
    {
      id: 5,
      type: "basic",
      question: "What is an API specification?",
      options: [
        "A document defining API endpoints, parameters, and responses",
        "A list of API users",
        "API pricing information",
        "API marketing materials"
      ],
      correct: 0
    },
    {
      id: 6,
      type: "basic",
      question: "What is OpenAPI/Swagger?",
      options: [
        "A specification format for REST APIs",
        "A programming language",
        "A database system",
        "A testing tool"
      ],
      correct: 0
    },
    {
      id: 7,
      type: "basic",
      question: "What is a user story?",
      options: [
        "A description of a feature from the user's perspective",
        "A fictional story about users",
        "A bug report",
        "A marketing testimonial"
      ],
      correct: 0
    },
    {
      id: 8,
      type: "basic",
      question: "What are acceptance criteria?",
      options: [
        "Conditions that must be met for a feature to be accepted",
        "User feedback scores",
        "Performance benchmarks",
        "Code quality metrics"
      ],
      correct: 0
    },
    {
      id: 9,
      type: "basic",
      question: "What is requirements gathering?",
      options: [
        "The process of collecting and documenting what a system should do",
        "Collecting user passwords",
        "Gathering system logs",
        "Collecting bug reports"
      ],
      correct: 0
    },
    {
      id: 10,
      type: "basic",
      question: "What is a use case?",
      options: [
        "A description of how a system will be used in a specific scenario",
        "A bug scenario",
        "A test case only",
        "A marketing case study"
      ],
      correct: 0
    },
    {
      id: 11,
      type: "basic",
      question: "What is specification validation?",
      options: [
        "Checking that a specification is complete and correct",
        "Ignoring the specification",
        "Deleting old specifications",
        "Creating new specifications"
      ],
      correct: 0
    },
    {
      id: 12,
      type: "basic",
      question: "What is a mockup in spec-driven development?",
      options: [
        "A visual representation of the intended design",
        "A fake product",
        "A test failure",
        "A bug demonstration"
      ],
      correct: 0
    },
    {
      id: 13,
      type: "basic",
      question: "What is a prototype?",
      options: [
        "An early version built to test concepts",
        "The final product",
        "A bug version",
        "A documentation draft"
      ],
      correct: 0
    },
    {
      id: 14,
      type: "basic",
      question: "What is traceability in spec-driven development?",
      options: [
        "The ability to track requirements through implementation",
        "Tracking user movements",
        "Logging system errors",
        "Monitoring server performance"
      ],
      correct: 0
    },
    {
      id: 15,
      type: "basic",
      question: "What is specification versioning?",
      options: [
        "Managing changes to specifications over time",
        "Creating multiple specs randomly",
        "Deleting old versions",
        "Ignoring version history"
      ],
      correct: 0
    },
    // CONCEPTUAL QUESTIONS (16-35)
    {
      id: 16,
      type: "conceptual",
      question: "Why is spec-driven development important?",
      options: [
        "It reduces misunderstandings and ensures everyone works toward the same goals",
        "It slows down development",
        "Specifications are not useful",
        "It increases costs"
      ],
      correct: 0
    },
    {
      id: 17,
      type: "conceptual",
      question: "How does spec-driven development improve quality?",
      options: [
        "By defining clear expectations and acceptance criteria upfront",
        "By adding more features",
        "By skipping testing",
        "Quality is not affected"
      ],
      correct: 0
    },
    {
      id: 18,
      type: "conceptual",
      question: "What is the relationship between specs and testing?",
      options: [
        "Specifications provide the basis for creating test cases",
        "Testing is independent of specifications",
        "Specifications replace testing",
        "Testing comes before specifications"
      ],
      correct: 0
    },
    {
      id: 19,
      type: "conceptual",
      question: "Why involve stakeholders in specification creation?",
      options: [
        "To ensure all requirements are captured and agreed upon",
        "To slow down the process",
        "Stakeholders should not be involved",
        "To increase document length"
      ],
      correct: 0
    },
    {
      id: 20,
      type: "conceptual",
      question: "How does spec-driven development affect project estimation?",
      options: [
        "Detailed specs enable more accurate time and cost estimates",
        "Specs make estimation impossible",
        "Estimation doesn't need specs",
        "Specs always reduce estimates"
      ],
      correct: 0
    },
    {
      id: 21,
      type: "conceptual",
      question: "What is the risk of over-specification?",
      options: [
        "It can limit creativity and add unnecessary documentation burden",
        "There is no risk",
        "More specification is always better",
        "Over-specification speeds up development"
      ],
      correct: 0
    },
    {
      id: 22,
      type: "conceptual",
      question: "What is the risk of under-specification?",
      options: [
        "It can lead to misunderstandings and rework",
        "There is no risk",
        "Less specification is always better",
        "Under-specification improves quality"
      ],
      correct: 0
    },
    {
      id: 23,
      type: "conceptual",
      question: "How should specifications handle changes?",
      options: [
        "Through a formal change management process with version control",
        "Changes should not be allowed",
        "Change specifications randomly",
        "Ignore changes"
      ],
      correct: 0
    },
    {
      id: 24,
      type: "conceptual",
      question: "What is the role of diagrams in specifications?",
      options: [
        "To visualize complex information and relationships",
        "To make documents look pretty",
        "Diagrams are not useful",
        "To replace text completely"
      ],
      correct: 0
    },
    {
      id: 25,
      type: "conceptual",
      question: "Why is specification review important?",
      options: [
        "To catch errors and gaps before implementation begins",
        "Reviews are a waste of time",
        "Specifications are always correct",
        "Reviews slow down development"
      ],
      correct: 0
    },
    {
      id: 26,
      type: "conceptual",
      question: "How does spec-driven development support parallel work?",
      options: [
        "Teams can work independently based on clear specifications",
        "Parallel work is not possible",
        "Specifications prevent parallel work",
        "Teams should always work together"
      ],
      correct: 0
    },
    {
      id: 27,
      type: "conceptual",
      question: "What is specification-driven testing?",
      options: [
        "Creating tests directly from specification requirements",
        "Testing without any basis",
        "Random testing",
        "Testing after specification is deleted"
      ],
      correct: 0
    },
    {
      id: 28,
      type: "conceptual",
      question: "Why maintain living specifications?",
      options: [
        "To keep specifications aligned with the actual system",
        "Specifications should never change",
        "Living specs are not useful",
        "To confuse developers"
      ],
      correct: 0
    },
    {
      id: 29,
      type: "conceptual",
      question: "What is the benefit of executable specifications?",
      options: [
        "They can be automatically validated and serve as tests",
        "Executable specs are not possible",
        "They slow down execution",
        "They add no value"
      ],
      correct: 0
    },
    {
      id: 30,
      type: "conceptual",
      question: "How does spec-driven development affect onboarding?",
      options: [
        "Good specifications help new team members understand the system",
        "Specifications confuse new members",
        "Onboarding doesn't need specifications",
        "New members should not read specs"
      ],
      correct: 0
    },
    {
      id: 31,
      type: "conceptual",
      question: "What is specification ambiguity?",
      options: [
        "Unclear or multiple interpretations of requirements",
        "Clear and precise requirements",
        "A type of specification",
        "Ambiguity is always good"
      ],
      correct: 0
    },
    {
      id: 32,
      type: "conceptual",
      question: "Why use standardized specification formats?",
      options: [
        "For consistency, tooling support, and easier understanding",
        "Standard formats are not useful",
        "Any format works equally well",
        "To make specifications harder"
      ],
      correct: 0
    },
    {
      id: 33,
      type: "conceptual",
      question: "What is the role of examples in specifications?",
      options: [
        "To clarify requirements and illustrate expected behavior",
        "Examples are not needed",
        "To make documents longer",
        "Examples confuse readers"
      ],
      correct: 0
    },
    {
      id: 34,
      type: "conceptual",
      question: "How does spec-driven development support compliance?",
      options: [
        "By documenting requirements and providing audit trails",
        "Compliance is not related to specs",
        "Specifications hinder compliance",
        "Compliance doesn't need documentation"
      ],
      correct: 0
    },
    {
      id: 35,
      type: "conceptual",
      question: "What is specification decomposition?",
      options: [
        "Breaking down complex requirements into manageable parts",
        "Destroying specifications",
        "Combining all specs together",
        "Ignoring complex requirements"
      ],
      correct: 0
    },
    // ADVANCED QUESTIONS (36-50)
    {
      id: 36,
      type: "advanced",
      question: "How would you implement spec-driven development in an agile environment?",
      options: [
        "Create just-enough specifications for each sprint with iterative refinement",
        "Avoid all documentation",
        "Create complete specs for the entire project upfront",
        "Agile doesn't use specifications"
      ],
      correct: 0
    },
    {
      id: 37,
      type: "advanced",
      question: "What approach would you take for API-first spec-driven development?",
      options: [
        "Define API specifications first, then implement to match the spec",
        "Implement first, document later",
        "Skip API documentation",
        "APIs don't need specifications"
      ],
      correct: 0
    },
    {
      id: 38,
      type: "advanced",
      question: "How would you handle conflicting requirements in specifications?",
      options: [
        "Facilitate stakeholder discussions to resolve conflicts before implementation",
        "Ignore conflicts",
        "Choose randomly",
        "Implement both and decide later"
      ],
      correct: 0
    },
    {
      id: 39,
      type: "advanced",
      question: "What strategy would you use for spec-driven microservices development?",
      options: [
        "Define service contracts and interfaces first, then implement independently",
        "Build services without coordination",
        "Create one monolithic specification",
        "Microservices don't need specs"
      ],
      correct: 0
    },
    {
      id: 40,
      type: "advanced",
      question: "How would you implement contract testing in spec-driven development?",
      options: [
        "Generate tests from API specifications to verify compliance",
        "Test only manually",
        "Skip contract testing",
        "Contracts are not testable"
      ],
      correct: 0
    },
    {
      id: 41,
      type: "advanced",
      question: "What approach enables spec-driven code generation?",
      options: [
        "Use tools that generate boilerplate code from specifications",
        "Code generation is not possible",
        "Write all code manually",
        "Specifications cannot generate code"
      ],
      correct: 0
    },
    {
      id: 42,
      type: "advanced",
      question: "How would you manage specifications across multiple teams?",
      options: [
        "Use a central repository with clear ownership and change processes",
        "Let each team create their own specs",
        "Don't share specifications",
        "Specifications should be secret"
      ],
      correct: 0
    },
    {
      id: 43,
      type: "advanced",
      question: "What is the best approach for spec-driven database design?",
      options: [
        "Define data models and relationships in specs before implementation",
        "Create database without planning",
        "Database design doesn't need specs",
        "Specs cannot describe databases"
      ],
      correct: 0
    },
    {
      id: 44,
      type: "advanced",
      question: "How would you handle specification drift during development?",
      options: [
        "Track changes formally and update all related documentation",
        "Ignore drift",
        "Let specifications become outdated",
        "Drift is not a problem"
      ],
      correct: 0
    },
    {
      id: 45,
      type: "advanced",
      question: "What strategy supports spec-driven UI development?",
      options: [
        "Create wireframes and interaction specs before implementation",
        "Build UI without planning",
        "UI doesn't need specifications",
        "Specs limit creativity"
      ],
      correct: 0
    },
    {
      id: 46,
      type: "advanced",
      question: "How would you implement spec-driven security requirements?",
      options: [
        "Define security specifications including threats, controls, and compliance",
        "Security doesn't need specifications",
        "Add security as an afterthought",
        "Security specs are not useful"
      ],
      correct: 0
    },
    {
      id: 47,
      type: "advanced",
      question: "What approach enables spec-driven performance requirements?",
      options: [
        "Define measurable performance criteria with testing methodologies",
        "Performance cannot be specified",
        "Test performance randomly",
        "Performance is not important"
      ],
      correct: 0
    },
    {
      id: 48,
      type: "advanced",
      question: "How would you use AI to assist in spec-driven development?",
      options: [
        "Generate specs from requirements, validate completeness, and create tests",
        "AI cannot help with specifications",
        "Replace all human specification work",
        "AI makes specifications worse"
      ],
      correct: 0
    },
    {
      id: 49,
      type: "advanced",
      question: "What is the key challenge in spec-driven legacy system modernization?",
      options: [
        "Creating accurate specifications of existing behavior before changes",
        "There are no challenges",
        "Legacy systems don't need specs",
        "Modernization doesn't need planning"
      ],
      correct: 0
    },
    {
      id: 50,
      type: "advanced",
      question: "How would you measure the effectiveness of spec-driven development?",
      options: [
        "Track requirements coverage, defect rates, and rework percentage",
        "Effectiveness cannot be measured",
        "Use only team satisfaction",
        "Measure only lines of code"
      ],
      correct: 0
    }
  ]
}
