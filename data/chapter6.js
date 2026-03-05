// Chapter 6: Seven Principles - 50 Questions
// 15 Basic + 20 Conceptual + 15 Advanced

module.exports = {
  chapter: 6,
  title: "Seven Principles",
  questions: [
    // BASIC QUESTIONS (1-15)
    {
      id: 1,
      type: "basic",
      question: "What is the First Principle of effective AI systems?",
      options: [
        "Clarity of Purpose - Define clear objectives",
        "Complexity First - Make everything complex",
        "Speed Over Quality - Always be fast",
        "Random Actions - Try everything"
      ],
      correct: 0
    },
    {
      id: 2,
      type: "basic",
      question: "What is the Second Principle of good design?",
      options: [
        "Simplicity - Keep it simple and intuitive",
        "Complexity - Add as many features as possible",
        "Confusion - Make users think hard",
        "Randomness - No consistent patterns"
      ],
      correct: 0
    },
    {
      id: 3,
      type: "basic",
      question: "What is the Third Principle of system architecture?",
      options: [
        "Modularity - Build independent, reusable components",
        "Monolith - Everything in one piece",
        "Spaghetti Code - No structure",
        "Random Connections - Link everything"
      ],
      correct: 0
    },
    {
      id: 4,
      type: "basic",
      question: "What is the Fourth Principle of quality software?",
      options: [
        "Testability - Design for easy testing",
        "No Testing - Ship and pray",
        "Manual Only - Never automate tests",
        "Testing Last - Test after users find bugs"
      ],
      correct: 0
    },
    {
      id: 5,
      type: "basic",
      question: "What is the Fifth Principle of maintainable code?",
      options: [
        "Readability - Write code humans can understand",
        "Obfuscation - Make code hard to read",
        "Minimal Comments - No explanations needed",
        "Complex Names - Use cryptic identifiers"
      ],
      correct: 0
    },
    {
      id: 6,
      type: "basic",
      question: "What is the Sixth Principle of scalable systems?",
      options: [
        "Extensibility - Design for future growth",
        "Fixed Size - Never change",
        "Hardcoded Limits - Set rigid boundaries",
        "No Planning - Handle growth when it happens"
      ],
      correct: 0
    },
    {
      id: 7,
      type: "basic",
      question: "What is the Seventh Principle of reliable systems?",
      options: [
        "Fault Tolerance - Handle failures gracefully",
        "No Errors - Errors don't exist",
        "Crash on Error - Fail completely",
        "Ignore Errors - Hope they go away"
      ],
      correct: 0
    },
    {
      id: 8,
      type: "basic",
      question: "What does DRY stand for?",
      options: [
        "Don't Repeat Yourself",
        "Do Repeat Yourself",
        "Data Repeat Yield",
        "Direct Repeat Yield"
      ],
      correct: 0
    },
    {
      id: 9,
      type: "basic",
      question: "What does KISS stand for?",
      options: [
        "Keep It Simple, Stupid",
        "Keep It Secret, Secure",
        "Know It, Share It, Sell",
        "Keep It Short, Sweet"
      ],
      correct: 0
    },
    {
      id: 10,
      type: "basic",
      question: "What is the Principle of Least Astonishment?",
      options: [
        "Systems should behave in expected ways",
        "Always surprise users",
        "Astonish users with complexity",
        "Never meet expectations"
      ],
      correct: 0
    },
    {
      id: 11,
      type: "basic",
      question: "What is Separation of Concerns?",
      options: [
        "Dividing a program into distinct sections",
        "Mixing all code together",
        "Ignoring different concerns",
        "Combining all features"
      ],
      correct: 0
    },
    {
      id: 12,
      type: "basic",
      question: "What is the Single Responsibility Principle?",
      options: [
        "A class should have one reason to change",
        "A class should do everything",
        "Classes are not needed",
        "Responsibility is not important"
      ],
      correct: 0
    },
    {
      id: 13,
      type: "basic",
      question: "What is YAGNI?",
      options: [
        "You Ain't Gonna Need It",
        "You Always Get New Ideas",
        "Yes And Go Next Item",
        "Yearly Assessment Goal"
      ],
      correct: 0
    },
    {
      id: 14,
      type: "basic",
      question: "What is the Pareto Principle in software?",
      options: [
        "80% of effects come from 20% of causes",
        "50% of work takes 50% of time",
        "All features are equally important",
        "Everything takes equal effort"
      ],
      correct: 0
    },
    {
      id: 15,
      type: "basic",
      question: "What is Conway's Law?",
      options: [
        "Organizations design systems that mirror their communication structure",
        "Systems are designed randomly",
        "Communication doesn't affect design",
        "Organizations don't design systems"
      ],
      correct: 0
    },
    // CONCEPTUAL QUESTIONS (16-35)
    {
      id: 16,
      type: "conceptual",
      question: "Why is Clarity of Purpose the first principle?",
      options: [
        "Without clear objectives, all other efforts may be misdirected",
        "It's the easiest principle",
        "Purpose doesn't matter",
        "It's just tradition"
      ],
      correct: 0
    },
    {
      id: 17,
      type: "conceptual",
      question: "How does simplicity improve system design?",
      options: [
        "Simple systems are easier to understand, maintain, and debug",
        "Simplicity makes systems weaker",
        "Complex is always better",
        "Simplicity has no impact"
      ],
      correct: 0
    },
    {
      id: 18,
      type: "conceptual",
      question: "Why is modularity important for large systems?",
      options: [
        "It enables independent development, testing, and replacement of components",
        "Modularity complicates systems",
        "Everything should be connected",
        "Modules are not useful"
      ],
      correct: 0
    },
    {
      id: 19,
      type: "conceptual",
      question: "How does testability affect code quality?",
      options: [
        "Testable code tends to be better designed and more reliable",
        "Testing is separate from quality",
        "Quality doesn't need testing",
        "Testability makes code worse"
      ],
      correct: 0
    },
    {
      id: 20,
      type: "conceptual",
      question: "Why is readability crucial for maintainability?",
      options: [
        "Code is read more often than written, affecting all future work",
        "Only the computer reads code",
        "Readability slows down development",
        "Comments are not needed"
      ],
      correct: 0
    },
    {
      id: 21,
      type: "conceptual",
      question: "How does extensibility support business growth?",
      options: [
        "Systems can adapt to new requirements without complete rewrites",
        "Extensibility is not related to business",
        "Rewrites are always better",
        "Growth doesn't need planning"
      ],
      correct: 0
    },
    {
      id: 22,
      type: "conceptual",
      question: "Why is fault tolerance essential for production systems?",
      options: [
        "Failures will happen, and systems must handle them gracefully",
        "Failures never happen",
        "Crashing is acceptable",
        "Users don't notice failures"
      ],
      correct: 0
    },
    {
      id: 23,
      type: "conceptual",
      question: "How does DRY improve code quality?",
      options: [
        "Reducing duplication makes maintenance easier and reduces bugs",
        "Duplication is beneficial",
        "DRY makes code longer",
        "Repetition is always good"
      ],
      correct: 0
    },
    {
      id: 24,
      type: "conceptual",
      question: "Why is KISS often violated in practice?",
      options: [
        "Developers over-engineer solutions or add unnecessary features",
        "Simplicity is always achieved",
        "Complexity is never tempting",
        "KISS is not a real principle"
      ],
      correct: 0
    },
    {
      id: 25,
      type: "conceptual",
      question: "How does the Principle of Least Astonishment improve UX?",
      options: [
        "Users can predict system behavior based on their expectations",
        "Surprises delight users",
        "Users enjoy confusion",
        "Expectations don't matter"
      ],
      correct: 0
    },
    {
      id: 26,
      type: "conceptual",
      question: "Why is Separation of Concerns fundamental to good architecture?",
      options: [
        "It reduces coupling and increases cohesion in systems",
        "Mixing concerns is more efficient",
        "Separation complicates things",
        "Concerns should be combined"
      ],
      correct: 0
    },
    {
      id: 27,
      type: "conceptual",
      question: "How does Single Responsibility Principle aid refactoring?",
      options: [
        "Small, focused classes are easier to understand and modify",
        "Large classes are easier to refactor",
        "Refactoring doesn't need principles",
        "Responsibility is not related to refactoring"
      ],
      correct: 0
    },
    {
      id: 28,
      type: "conceptual",
      question: "Why is YAGNI important in agile development?",
      options: [
        "It prevents wasting effort on features that may never be needed",
        "All features should be built upfront",
        "Future-proofing is always worth it",
        "YAGNI limits creativity"
      ],
      correct: 0
    },
    {
      id: 29,
      type: "conceptual",
      question: "How can the Pareto Principle guide prioritization?",
      options: [
        "Focus on the 20% of features that provide 80% of value",
        "All features are equally valuable",
        "Priority doesn't matter",
        "The 80/20 rule doesn't apply"
      ],
      correct: 0
    },
    {
      id: 30,
      type: "conceptual",
      question: "Why should teams be aware of Conway's Law?",
      options: [
        "To align team structure with desired system architecture",
        "Team structure doesn't affect systems",
        "Conway's Law is not real",
        "Architecture is independent of teams"
      ],
      correct: 0
    },
    {
      id: 31,
      type: "conceptual",
      question: "How do these principles work together?",
      options: [
        "They reinforce each other to create better systems",
        "Principles conflict with each other",
        "Only one principle matters",
        "Principles are independent"
      ],
      correct: 0
    },
    {
      id: 32,
      type: "conceptual",
      question: "Why is balance important when applying principles?",
      options: [
        "Over-applying any principle can lead to negative outcomes",
        "More is always better",
        "Balance is not important",
        "Principles should be applied maximally"
      ],
      correct: 0
    },
    {
      id: 33,
      type: "conceptual",
      question: "How do principles guide decision-making?",
      options: [
        "They provide frameworks for evaluating options",
        "Decisions should be random",
        "Principles limit options",
        "Decision-making doesn't need guidance"
      ],
      correct: 0
    },
    {
      id: 34,
      type: "conceptual",
      question: "Why should principles be context-aware?",
      options: [
        "Different situations may require different emphasis on principles",
        "Context doesn't matter",
        "Principles are absolute",
        "All contexts are the same"
      ],
      correct: 0
    },
    {
      id: 35,
      type: "conceptual",
      question: "How do principles evolve over time?",
      options: [
        "Principles are refined based on experience and new insights",
        "Principles never change",
        "Principles become obsolete quickly",
        "New principles replace old ones completely"
      ],
      correct: 0
    },
    // ADVANCED QUESTIONS (36-50)
    {
      id: 36,
      type: "advanced",
      question: "How would you apply the Seven Principles to AI system design?",
      options: [
        "Define clear AI objectives, keep models interpretable, modularize components, ensure testability",
        "Ignore principles for AI",
        "AI doesn't need design principles",
        "Apply principles randomly"
      ],
      correct: 0
    },
    {
      id: 37,
      type: "advanced",
      question: "What strategy balances simplicity with necessary complexity?",
      options: [
        "Make it as simple as possible but no simpler - embrace essential complexity",
        "Always choose simplicity",
        "Always embrace complexity",
        "Don't think about balance"
      ],
      correct: 0
    },
    {
      id: 38,
      type: "advanced",
      question: "How would you handle principle conflicts in architecture decisions?",
      options: [
        "Evaluate trade-offs based on context and prioritize based on goals",
        "Ignore conflicts",
        "Always choose the first principle",
        "Flip a coin"
      ],
      correct: 0
    },
    {
      id: 39,
      type: "advanced",
      question: "What approach applies principles to legacy system modernization?",
      options: [
        "Incrementally refactor toward principles while maintaining functionality",
        "Rewrite everything from scratch",
        "Leave legacy systems unchanged",
        "Principles don't apply to legacy"
      ],
      correct: 0
    },
    {
      id: 40,
      type: "advanced",
      question: "How would you teach these principles to junior developers?",
      options: [
        "Through examples, code reviews, and guided practice on real projects",
        "Just give them the list",
        "Let them learn through mistakes only",
        "Principles cannot be taught"
      ],
      correct: 0
    },
    {
      id: 41,
      type: "advanced",
      question: "What metrics indicate good principle application?",
      options: [
        "Low bug rates, easy onboarding, fast feature addition, high test coverage",
        "Lines of code count",
        "Number of features",
        "Developer count"
      ],
      correct: 0
    },
    {
      id: 42,
      type: "advanced",
      question: "How do principles apply to microservices architecture?",
      options: [
        "Each service should follow principles, plus system-wide coordination",
        "Microservices don't need principles",
        "Principles only apply to monoliths",
        "Services should ignore principles"
      ],
      correct: 0
    },
    {
      id: 43,
      type: "advanced",
      question: "What is the role of principles in technical debt management?",
      options: [
        "Principles guide when to incur debt and when to pay it down",
        "Technical debt is not related to principles",
        "Always avoid all debt",
        "Debt doesn't matter"
      ],
      correct: 0
    },
    {
      id: 44,
      type: "advanced",
      question: "How would you apply principles to API design?",
      options: [
        "Clear purpose, simple interfaces, modular endpoints, testable, documented",
        "APIs don't need principles",
        "Make APIs as complex as possible",
        "Hide API details"
      ],
      correct: 0
    },
    {
      id: 45,
      type: "advanced",
      question: "What approach ensures principles are followed in large teams?",
      options: [
        "Code reviews, automated checks, documentation, and team training",
        "Trust everyone implicitly",
        "Principles are optional",
        "Only managers need to know"
      ],
      correct: 0
    },
    {
      id: 46,
      type: "advanced",
      question: "How do principles guide technology selection?",
      options: [
        "Choose technologies that enable simplicity, modularity, and extensibility",
        "Choose the newest technology",
        "Choose randomly",
        "Technology doesn't matter"
      ],
      correct: 0
    },
    {
      id: 47,
      type: "advanced",
      question: "What is the relationship between principles and design patterns?",
      options: [
        "Patterns are concrete applications of abstract principles",
        "Patterns contradict principles",
        "Principles replace patterns",
        "They are unrelated"
      ],
      correct: 0
    },
    {
      id: 48,
      type: "advanced",
      question: "How would you handle principle violations in code reviews?",
      options: [
        "Discuss the violation, explain the impact, and suggest improvements",
        "Ignore violations",
        "Reject all code immediately",
        "Violations are not important"
      ],
      correct: 0
    },
    {
      id: 49,
      type: "advanced",
      question: "What strategy embeds principles into development culture?",
      options: [
        "Lead by example, recognize good practices, and make principles part of onboarding",
        "Send occasional reminders",
        "Post principles on the wall",
        "Culture doesn't matter"
      ],
      correct: 0
    },
    {
      id: 50,
      type: "advanced",
      question: "How do you measure the ROI of following design principles?",
      options: [
        "Track reduced bug rates, faster development, lower turnover, and easier maintenance",
        "ROI cannot be measured",
        "Principles don't provide ROI",
        "Only count immediate costs"
      ],
      correct: 0
    }
  ]
}
