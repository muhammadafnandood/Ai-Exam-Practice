// Chapter 4: Context Engineering - 50 Questions
// 15 Basic + 20 Conceptual + 15 Advanced

module.exports = {
  chapter: 4,
  title: "Context Engineering",
  questions: [
    // BASIC QUESTIONS (1-15)
    {
      id: 1,
      type: "basic",
      question: "What is context in AI systems?",
      options: [
        "The information surrounding and relevant to a task",
        "The physical environment only",
        "The code structure",
        "The user interface"
      ],
      correct: 0
    },
    {
      id: 2,
      type: "basic",
      question: "What is context engineering?",
      options: [
        "Designing and managing context for optimal AI performance",
        "Building physical contexts",
        "Deleting old context",
        "Context cannot be engineered"
      ],
      correct: 0
    },
    {
      id: 3,
      type: "basic",
      question: "What is a context window?",
      options: [
        "The amount of text an AI model can process at once",
        "A visual window on screen",
        "A browser tab",
        "A database table"
      ],
      correct: 0
    },
    {
      id: 4,
      type: "basic",
      question: "What is prompt context?",
      options: [
        "Background information provided to guide AI responses",
        "The font used in prompts",
        "The color of the prompt text",
        "The length of the prompt"
      ],
      correct: 0
    },
    {
      id: 5,
      type: "basic",
      question: "What is conversation history in AI?",
      options: [
        "The record of previous exchanges in a conversation",
        "A log of system errors",
        "The user's browser history",
        "A list of commands"
      ],
      correct: 0
    },
    {
      id: 6,
      type: "basic",
      question: "What is system context?",
      options: [
        "Instructions that define the AI's role and behavior",
        "The computer's operating system",
        "The hardware configuration",
        "The network settings"
      ],
      correct: 0
    },
    {
      id: 7,
      type: "basic",
      question: "What is user context?",
      options: [
        "Information about the user's preferences, history, and goals",
        "The user's physical location only",
        "The user's age only",
        "User context is not important"
      ],
      correct: 0
    },
    {
      id: 8,
      type: "basic",
      question: "What is task context?",
      options: [
        "Information specific to the current task being performed",
        "The task's deadline",
        "The task's priority level",
        "Task context is not useful"
      ],
      correct: 0
    },
    {
      id: 9,
      type: "basic",
      question: "What is contextual awareness in AI?",
      options: [
        "The AI's ability to understand and use relevant context",
        "The AI's physical awareness",
        "The AI's self-awareness",
        "Contextual awareness is not possible"
      ],
      correct: 0
    },
    {
      id: 10,
      type: "basic",
      question: "What is context truncation?",
      options: [
        "Cutting off context when it exceeds limits",
        "Adding more context",
        "Encrypting context",
        "Backing up context"
      ],
      correct: 0
    },
    {
      id: 11,
      type: "basic",
      question: "What is context retrieval?",
      options: [
        "Fetching relevant context from storage",
        "Deleting old context",
        "Creating new context",
        "Context cannot be retrieved"
      ],
      correct: 0
    },
    {
      id: 12,
      type: "basic",
      question: "What is semantic context?",
      options: [
        "Context related to meaning and interpretation",
        "Context related to spelling",
        "Context related to grammar only",
        "Semantic context is not real"
      ],
      correct: 0
    },
    {
      id: 13,
      type: "basic",
      question: "What is pragmatic context?",
      options: [
        "Context about how language is used in practice",
        "Context about programming",
        "Context about mathematics",
        "Pragmatic context is not useful"
      ],
      correct: 0
    },
    {
      id: 14,
      type: "basic",
      question: "What is context persistence?",
      options: [
        "Maintaining context across multiple interactions",
        "Deleting context after each use",
        "Hiding context from users",
        "Context cannot persist"
      ],
      correct: 0
    },
    {
      id: 15,
      type: "basic",
      question: "What is context switching?",
      options: [
        "Changing between different contexts or tasks",
        "Turning context on and off",
        "Copying context",
        "Context switching is not possible"
      ],
      correct: 0
    },
    // CONCEPTUAL QUESTIONS (16-35)
    {
      id: 16,
      type: "conceptual",
      question: "Why is context engineering important for AI systems?",
      options: [
        "It significantly improves response quality and relevance",
        "It makes AI slower",
        "Context doesn't affect AI performance",
        "It's only useful for debugging"
      ],
      correct: 0
    },
    {
      id: 17,
      type: "conceptual",
      question: "How does context window size affect AI capabilities?",
      options: [
        "Larger windows allow processing more information but require more resources",
        "Window size has no effect",
        "Smaller windows are always better",
        "Window size only affects speed"
      ],
      correct: 0
    },
    {
      id: 18,
      type: "conceptual",
      question: "What is the relationship between context and coherence?",
      options: [
        "Good context enables more coherent and consistent responses",
        "Context has no effect on coherence",
        "More context reduces coherence",
        "Coherence is independent of context"
      ],
      correct: 0
    },
    {
      id: 19,
      type: "conceptual",
      question: "Why is context prioritization important?",
      options: [
        "To ensure the most relevant information is within the model's attention",
        "To make context longer",
        "To confuse the AI",
        "Prioritization is not needed"
      ],
      correct: 0
    },
    {
      id: 20,
      type: "conceptual",
      question: "How does context affect AI hallucination?",
      options: [
        "Better context reduces hallucination by grounding responses",
        "Context increases hallucination",
        "Context has no effect on hallucination",
        "Hallucination is random"
      ],
      correct: 0
    },
    {
      id: 21,
      type: "conceptual",
      question: "What is the role of context in few-shot learning?",
      options: [
        "Context provides examples that guide the model's behavior",
        "Context is not used in few-shot learning",
        "Context confuses few-shot learning",
        "Few-shot learning doesn't need examples"
      ],
      correct: 0
    },
    {
      id: 22,
      type: "conceptual",
      question: "Why is context compression useful?",
      options: [
        "It allows more information to fit within context limits",
        "It makes context unreadable",
        "Compression is not useful",
        "It deletes important information"
      ],
      correct: 0
    },
    {
      id: 23,
      type: "conceptual",
      question: "How does context structure affect AI understanding?",
      options: [
        "Well-structured context is easier for AI to parse and use",
        "Structure doesn't matter",
        "Unstructured context is better",
        "AI cannot understand structure"
      ],
      correct: 0
    },
    {
      id: 24,
      type: "conceptual",
      question: "What is the importance of context timing?",
      options: [
        "Recent context often has more influence on responses",
        "Timing doesn't matter",
        "Old context is always more important",
        "All context has equal weight"
      ],
      correct: 0
    },
    {
      id: 25,
      type: "conceptual",
      question: "Why is context validation important?",
      options: [
        "To ensure context is accurate and relevant before use",
        "Validation is not needed",
        "All context is always valid",
        "Validation slows down processing"
      ],
      correct: 0
    },
    {
      id: 26,
      type: "conceptual",
      question: "How does context granularity affect performance?",
      options: [
        "Appropriate granularity balances detail with clarity",
        "More detail is always better",
        "Less detail is always better",
        "Granularity doesn't matter"
      ],
      correct: 0
    },
    {
      id: 27,
      type: "conceptual",
      question: "What is the role of context in multi-turn conversations?",
      options: [
        "Context maintains continuity and coherence across turns",
        "Context is not needed for conversations",
        "Each turn is independent",
        "Conversations don't need context"
      ],
      correct: 0
    },
    {
      id: 28,
      type: "conceptual",
      question: "Why is context versioning useful?",
      options: [
        "To track changes and enable rollback if needed",
        "Versioning is not useful",
        "Context never changes",
        "Versioning complicates things"
      ],
      correct: 0
    },
    {
      id: 29,
      type: "conceptual",
      question: "How does context caching improve performance?",
      options: [
        "By storing and reusing frequently accessed context",
        "Caching doesn't improve performance",
        "Caching makes things slower",
        "Context cannot be cached"
      ],
      correct: 0
    },
    {
      id: 30,
      type: "conceptual",
      question: "What is the importance of context boundaries?",
      options: [
        "Defining what context is relevant for a specific task",
        "Boundaries are not important",
        "All context should always be included",
        "Boundaries limit AI capabilities"
      ],
      correct: 0
    },
    {
      id: 31,
      type: "conceptual",
      question: "How does context formatting affect AI processing?",
      options: [
        "Clear formatting helps AI parse and understand context better",
        "Formatting doesn't matter",
        "Plain text is always worst",
        "AI cannot read formatted text"
      ],
      correct: 0
    },
    {
      id: 32,
      type: "conceptual",
      question: "What is the role of context in prompt engineering?",
      options: [
        "Context is a fundamental component of effective prompts",
        "Context is not part of prompts",
        "Prompts work without context",
        "Context confuses prompts"
      ],
      correct: 0
    },
    {
      id: 33,
      type: "conceptual",
      question: "Why is context auditing important?",
      options: [
        "To understand what context is being used and its impact",
        "Auditing is not needed",
        "Context usage is always optimal",
        "Auditing slows down systems"
      ],
      correct: 0
    },
    {
      id: 34,
      type: "conceptual",
      question: "How does context relevance affect response quality?",
      options: [
        "More relevant context leads to more accurate responses",
        "Relevance doesn't matter",
        "Any context works equally well",
        "Irrelevant context is better"
      ],
      correct: 0
    },
    {
      id: 35,
      type: "conceptual",
      question: "What is the relationship between context and token limits?",
      options: [
        "Context must be managed to stay within token constraints",
        "Token limits don't affect context",
        "Context can exceed token limits",
        "Tokens are not related to context"
      ],
      correct: 0
    },
    // ADVANCED QUESTIONS (36-50)
    {
      id: 36,
      type: "advanced",
      question: "How would you design a context management system for a complex AI application?",
      options: [
        "Implement hierarchical context with prioritization, caching, and dynamic loading",
        "Use a single flat context for everything",
        "Don't manage context at all",
        "Load all context every time"
      ],
      correct: 0
    },
    {
      id: 37,
      type: "advanced",
      question: "What strategy would you use for context in long-running conversations?",
      options: [
        "Implement summarization, key point extraction, and rolling window management",
        "Keep everything in memory",
        "Delete old messages randomly",
        "End conversations early"
      ],
      correct: 0
    },
    {
      id: 38,
      type: "advanced",
      question: "How would you handle context for multi-user collaborative AI sessions?",
      options: [
        "Maintain shared context with user-specific overlays and permissions",
        "Give each user completely separate sessions",
        "Mix all user contexts together",
        "Don't support multiple users"
      ],
      correct: 0
    },
    {
      id: 39,
      type: "advanced",
      question: "What approach would you take for context-aware AI personalization?",
      options: [
        "Build user profiles with preferences, history, and behavioral patterns",
        "Treat all users identically",
        "Personalization is not possible",
        "Use random personalization"
      ],
      correct: 0
    },
    {
      id: 40,
      type: "advanced",
      question: "How would you implement context retrieval from a large knowledge base?",
      options: [
        "Use semantic search, relevance scoring, and ranked retrieval",
        "Return random documents",
        "Return all documents",
        "Don't use knowledge bases"
      ],
      correct: 0
    },
    {
      id: 41,
      type: "advanced",
      question: "What is the best approach for handling context in multi-modal AI systems?",
      options: [
        "Create unified context representations across text, images, and other modalities",
        "Handle each modality separately",
        "Ignore some modalities",
        "Convert everything to text only"
      ],
      correct: 0
    },
    {
      id: 42,
      type: "advanced",
      question: "How would you optimize context for cost and performance?",
      options: [
        "Implement context minimization, compression, and selective loading",
        "Always use maximum context",
        "Cost optimization is not important",
        "Use context randomly"
      ],
      correct: 0
    },
    {
      id: 43,
      type: "advanced",
      question: "What strategy would you use for context in real-time AI applications?",
      options: [
        "Implement streaming context updates with low-latency retrieval",
        "Batch all context updates",
        "Ignore real-time requirements",
        "Use only pre-loaded context"
      ],
      correct: 0
    },
    {
      id: 44,
      type: "advanced",
      question: "How would you handle context drift in long-running AI sessions?",
      options: [
        "Monitor context relevance and periodically refresh or re-anchor",
        "Ignore drift",
        "Reset sessions frequently",
        "Drift is not a problem"
      ],
      correct: 0
    },
    {
      id: 45,
      type: "advanced",
      question: "What approach would enable context-aware AI error recovery?",
      options: [
        "Use context to understand error causes and suggest appropriate fixes",
        "Ignore errors",
        "Always suggest the same fix",
        "Error recovery is not possible"
      ],
      correct: 0
    },
    {
      id: 46,
      type: "advanced",
      question: "How would you design context for AI agents that use external tools?",
      options: [
        "Include tool capabilities, usage history, and result context",
        "Don't provide tool context",
        "List all possible tools",
        "Tools don't need context"
      ],
      correct: 0
    },
    {
      id: 47,
      type: "advanced",
      question: "What is the key challenge in context engineering for multi-agent systems?",
      options: [
        "Maintaining consistent shared context while allowing agent-specific views",
        "There are no challenges",
        "Each agent needs no context",
        "All agents share everything"
      ],
      correct: 0
    },
    {
      id: 48,
      type: "advanced",
      question: "How would you implement context-based AI access control?",
      options: [
        "Filter context based on user permissions and sensitivity levels",
        "Give all users full access",
        "Deny all access",
        "Access control is not needed"
      ],
      correct: 0
    },
    {
      id: 49,
      type: "advanced",
      question: "What approach would support context-aware AI learning?",
      options: [
        "Track which context leads to successful outcomes and optimize accordingly",
        "Learning doesn't need context",
        "All context is equally useful",
        "Don't track outcomes"
      ],
      correct: 0
    },
    {
      id: 50,
      type: "advanced",
      question: "How would you handle context in privacy-sensitive AI applications?",
      options: [
        "Implement context minimization, anonymization, and strict access controls",
        "Ignore privacy concerns",
        "Collect all available context",
        "Privacy is not important"
      ],
      correct: 0
    }
  ]
}
