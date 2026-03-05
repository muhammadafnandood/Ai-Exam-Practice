// Chapter 3: General Agents - 50 Questions
// 15 Basic + 20 Conceptual + 15 Advanced

module.exports = {
  chapter: 3,
  title: "General Agents",
  questions: [
    // BASIC QUESTIONS (1-15)
    {
      id: 1,
      type: "basic",
      question: "What is a General AI Agent?",
      options: [
        "An AI system that can perform a wide range of tasks",
        "An agent that works only on specific tasks",
        "A physical robot",
        "A database management system"
      ],
      correct: 0
    },
    {
      id: 2,
      type: "basic",
      question: "What does AGI stand for?",
      options: [
        "Artificial General Intelligence",
        "Automated General Interface",
        "Advanced Graphics Integration",
        "Applied Global Intelligence"
      ],
      correct: 0
    },
    {
      id: 3,
      type: "basic",
      question: "What is the main difference between narrow AI and general AI?",
      options: [
        "General AI can handle diverse tasks, narrow AI is task-specific",
        "There is no difference",
        "Narrow AI is more powerful",
        "General AI is only theoretical"
      ],
      correct: 0
    },
    {
      id: 4,
      type: "basic",
      question: "Which of these is an example of a general agent capability?",
      options: [
        "Learning new tasks without retraining",
        "Only playing chess",
        "Only recognizing faces",
        "Only translating text"
      ],
      correct: 0
    },
    {
      id: 5,
      type: "basic",
      question: "What is transfer learning in AI agents?",
      options: [
        "Applying knowledge from one task to another",
        "Moving agents between servers",
        "Copying agent code",
        "Transferring data between databases"
      ],
      correct: 0
    },
    {
      id: 6,
      type: "basic",
      question: "What is meta-learning?",
      options: [
        "Learning how to learn",
        "Learning about metadata",
        "Learning multiple languages",
        "Learning from mistakes only"
      ],
      correct: 0
    },
    {
      id: 7,
      type: "basic",
      question: "What is few-shot learning?",
      options: [
        "Learning from a small number of examples",
        "Learning with many examples",
        "Learning without any examples",
        "Learning with exactly 100 examples"
      ],
      correct: 0
    },
    {
      id: 8,
      type: "basic",
      question: "What is zero-shot learning?",
      options: [
        "Performing tasks without any training examples",
        "Learning with zero data",
        "Not learning at all",
        "Learning with infinite examples"
      ],
      correct: 0
    },
    {
      id: 9,
      type: "basic",
      question: "What is reasoning in AI agents?",
      options: [
        "The ability to draw conclusions from information",
        "Memorizing facts",
        "Following fixed rules only",
        "Random guessing"
      ],
      correct: 0
    },
    {
      id: 10,
      type: "basic",
      question: "What is planning in AI systems?",
      options: [
        "Creating a sequence of actions to achieve a goal",
        "Random action selection",
        "Following a fixed script",
        "Waiting for instructions"
      ],
      correct: 0
    },
    {
      id: 11,
      type: "basic",
      question: "What is abstraction in AI?",
      options: [
        "Representing complex information in simplified forms",
        "Making things more complicated",
        "Removing all details",
        "Abstraction is not used in AI"
      ],
      correct: 0
    },
    {
      id: 12,
      type: "basic",
      question: "What is generalization in machine learning?",
      options: [
        "Applying learned patterns to new, unseen data",
        "Memorizing training data",
        "Using only training data",
        "Ignoring new data"
      ],
      correct: 0
    },
    {
      id: 13,
      type: "basic",
      question: "What is the Turing Test?",
      options: [
        "A test to determine if a machine exhibits intelligent behavior",
        "A speed test for computers",
        "A memory test",
        "A graphics performance test"
      ],
      correct: 0
    },
    {
      id: 14,
      type: "basic",
      question: "What is emergent behavior in AI systems?",
      options: [
        "Complex behavior arising from simple rules",
        "Planned and designed behavior",
        "Random errors",
        "Behavior that never changes"
      ],
      correct: 0
    },
    {
      id: 15,
      type: "basic",
      question: "What is cognitive architecture?",
      options: [
        "A framework for building intelligent systems based on human cognition",
        "Building design software",
        "A type of database",
        "A programming language"
      ],
      correct: 0
    },
    // CONCEPTUAL QUESTIONS (16-35)
    {
      id: 16,
      type: "conceptual",
      question: "Why is transfer learning important for general agents?",
      options: [
        "It enables agents to apply knowledge across different domains efficiently",
        "It makes agents slower",
        "It limits agent capabilities",
        "Transfer learning is not important"
      ],
      correct: 0
    },
    {
      id: 17,
      type: "conceptual",
      question: "How does meta-learning improve agent adaptability?",
      options: [
        "By enabling agents to quickly learn new tasks with less data",
        "By making agents more rigid",
        "By requiring more training data",
        "Meta-learning has no impact"
      ],
      correct: 0
    },
    {
      id: 18,
      type: "conceptual",
      question: "What is the relationship between reasoning and planning?",
      options: [
        "Reasoning helps evaluate options, planning organizes actions",
        "They are the same thing",
        "Planning comes before reasoning",
        "There is no relationship"
      ],
      correct: 0
    },
    {
      id: 19,
      type: "conceptual",
      question: "Why is abstraction crucial for general intelligence?",
      options: [
        "It allows handling complex problems by focusing on essential features",
        "It makes problems harder",
        "Abstraction is not useful",
        "It adds unnecessary complexity"
      ],
      correct: 0
    },
    {
      id: 20,
      type: "conceptual",
      question: "How do general agents handle novel situations?",
      options: [
        "By applying general principles and adapting known strategies",
        "By failing completely",
        "By using only memorized responses",
        "By waiting for human intervention"
      ],
      correct: 0
    },
    {
      id: 21,
      type: "conceptual",
      question: "What is the role of memory in general agents?",
      options: [
        "Storing and retrieving information for reasoning and learning",
        "Memory is not needed",
        "Only short-term memory is used",
        "Memory slows down agents"
      ],
      correct: 0
    },
    {
      id: 22,
      type: "conceptual",
      question: "Why is common sense reasoning challenging for AI?",
      options: [
        "Common sense involves vast implicit knowledge humans acquire naturally",
        "Common sense is simple to implement",
        "AI already has perfect common sense",
        "Common sense is not important"
      ],
      correct: 0
    },
    {
      id: 23,
      type: "conceptual",
      question: "How does embodiment affect agent intelligence?",
      options: [
        "Physical interaction with the world provides grounding for concepts",
        "Embodiment has no effect",
        "Virtual agents are always better",
        "Physical bodies limit intelligence"
      ],
      correct: 0
    },
    {
      id: 24,
      type: "conceptual",
      question: "What is the importance of curiosity in learning agents?",
      options: [
        "It drives exploration and discovery of new knowledge",
        "Curiosity is not useful",
        "It distracts agents from tasks",
        "Curiosity slows learning"
      ],
      correct: 0
    },
    {
      id: 25,
      type: "conceptual",
      question: "How do general agents balance exploration and exploitation?",
      options: [
        "By trying new approaches while also using known effective strategies",
        "By only exploring",
        "By only exploiting",
        "There is no balance needed"
      ],
      correct: 0
    },
    {
      id: 26,
      type: "conceptual",
      question: "What is the role of attention mechanisms in general agents?",
      options: [
        "Focusing computational resources on relevant information",
        "Making agents pay attention to humans",
        "Attention is not important",
        "Focusing on everything equally"
      ],
      correct: 0
    },
    {
      id: 27,
      type: "conceptual",
      question: "Why is causal reasoning important for AI agents?",
      options: [
        "It enables understanding cause-effect relationships for better decisions",
        "Causal reasoning is not useful",
        "Correlation is sufficient",
        "Causality is too complex"
      ],
      correct: 0
    },
    {
      id: 28,
      type: "conceptual",
      question: "How does compositionality help general agents?",
      options: [
        "By combining simple concepts to understand complex ones",
        "By keeping concepts separate",
        "Compositionality is not useful",
        "By making everything complex"
      ],
      correct: 0
    },
    {
      id: 29,
      type: "conceptual",
      question: "What is the significance of theory of mind for agents?",
      options: [
        "Understanding others' mental states for better interaction",
        "Theory of mind is not important",
        "Agents don't need to understand humans",
        "Theory of mind is only for humans"
      ],
      correct: 0
    },
    {
      id: 30,
      type: "conceptual",
      question: "Why is continuous learning important for general agents?",
      options: [
        "To adapt to changing environments and accumulate knowledge",
        "Continuous learning is not needed",
        "One-time training is sufficient",
        "Learning slows down agents"
      ],
      correct: 0
    },
    {
      id: 31,
      type: "conceptual",
      question: "How do general agents handle uncertainty?",
      options: [
        "By using probabilistic reasoning and maintaining confidence levels",
        "By ignoring uncertainty",
        "By always being certain",
        "Uncertainty cannot be handled"
      ],
      correct: 0
    },
    {
      id: 32,
      type: "conceptual",
      question: "What is the role of goals in agent behavior?",
      options: [
        "Goals provide direction and purpose for agent actions",
        "Goals are not important",
        "Agents don't need goals",
        "Goals limit agent freedom"
      ],
      correct: 0
    },
    {
      id: 33,
      type: "conceptual",
      question: "Why is self-reflection valuable for learning agents?",
      options: [
        "It enables agents to evaluate and improve their own performance",
        "Self-reflection is not useful",
        "It wastes computational resources",
        "Agents cannot self-reflect"
      ],
      correct: 0
    },
    {
      id: 34,
      type: "conceptual",
      question: "How does analogical reasoning help general agents?",
      options: [
        "By finding similarities between situations to apply known solutions",
        "Analogies are not useful",
        "By treating all situations as identical",
        "By ignoring differences"
      ],
      correct: 0
    },
    {
      id: 35,
      type: "conceptual",
      question: "What is the importance of hierarchical reasoning?",
      options: [
        "It allows breaking complex problems into manageable sub-problems",
        "Hierarchy is not useful",
        "It makes problems harder",
        "All problems should be flat"
      ],
      correct: 0
    },
    // ADVANCED QUESTIONS (36-50)
    {
      id: 36,
      type: "advanced",
      question: "How would you design a general agent for scientific discovery?",
      options: [
        "Combine hypothesis generation, experimentation, analysis, and theory building capabilities",
        "Use only data analysis",
        "Focus only on literature review",
        "Let humans do all the work"
      ],
      correct: 0
    },
    {
      id: 37,
      type: "advanced",
      question: "What architecture would support lifelong learning in an agent?",
      options: [
        "Incremental learning with memory consolidation and catastrophic forgetting prevention",
        "Train once and deploy",
        "Delete all knowledge periodically",
        "Never update the agent"
      ],
      correct: 0
    },
    {
      id: 38,
      type: "advanced",
      question: "How would you implement common sense reasoning in an AI agent?",
      options: [
        "Combine knowledge graphs, experiential learning, and reasoning frameworks",
        "Hard-code all common sense facts",
        "Ignore common sense",
        "Common sense cannot be implemented"
      ],
      correct: 0
    },
    {
      id: 39,
      type: "advanced",
      question: "What approach would you take for multi-modal general intelligence?",
      options: [
        "Integrate vision, language, audio, and action systems with shared representations",
        "Handle each modality separately",
        "Use only text",
        "Ignore some modalities"
      ],
      correct: 0
    },
    {
      id: 40,
      type: "advanced",
      question: "How would you evaluate the generality of an AI agent?",
      options: [
        "Test performance across diverse domains, tasks, and novel situations",
        "Test on a single task",
        "Only test on training data",
        "Don't evaluate at all"
      ],
      correct: 0
    },
    {
      id: 41,
      type: "advanced",
      question: "What is the best approach for handling out-of-distribution inputs?",
      options: [
        "Detect novelty, quantify uncertainty, and adapt or request help",
        "Always provide confident answers",
        "Reject all unknown inputs",
        "Guess randomly"
      ],
      correct: 0
    },
    {
      id: 42,
      type: "advanced",
      question: "How would you implement efficient exploration in a large state space?",
      options: [
        "Use intrinsic motivation, curiosity-driven learning, and hierarchical exploration",
        "Explore randomly",
        "Don't explore at all",
        "Only exploit known states"
      ],
      correct: 0
    },
    {
      id: 43,
      type: "advanced",
      question: "What strategy would you use for transfer learning across very different domains?",
      options: [
        "Learn abstract representations that capture domain-invariant principles",
        "Transfer doesn't work across domains",
        "Train separately for each domain",
        "Ignore domain differences"
      ],
      correct: 0
    },
    {
      id: 44,
      type: "advanced",
      question: "How would you design an agent that learns from human feedback?",
      options: [
        "Implement reward modeling, preference learning, and interactive correction",
        "Ignore human feedback",
        "Only use predefined rewards",
        "Humans cannot teach agents"
      ],
      correct: 0
    },
    {
      id: 45,
      type: "advanced",
      question: "What approach would enable an agent to understand and use tools?",
      options: [
        "Learn tool affordances, effects, and compose tools for complex tasks",
        "Hard-code all tool uses",
        "Don't use tools",
        "Tools are too complex"
      ],
      correct: 0
    },
    {
      id: 46,
      type: "advanced",
      question: "How would you implement social intelligence in an AI agent?",
      options: [
        "Model social norms, emotions, intentions, and cultural contexts",
        "Social intelligence is not important",
        "Treat all interactions as transactions",
        "Ignore social aspects"
      ],
      correct: 0
    },
    {
      id: 47,
      type: "advanced",
      question: "What is the key challenge in achieving human-level general intelligence?",
      options: [
        "Integrating multiple cognitive capabilities seamlessly with common sense reasoning",
        "Computing power alone",
        "Data storage alone",
        "There are no challenges"
      ],
      correct: 0
    },
    {
      id: 48,
      type: "advanced",
      question: "How would you handle conflicting goals in a general agent?",
      options: [
        "Implement goal prioritization, trade-off analysis, and ethical constraints",
        "Ignore conflicts",
        "Always choose the first goal",
        "Let goals conflict randomly"
      ],
      correct: 0
    },
    {
      id: 49,
      type: "advanced",
      question: "What architecture supports both fast intuitive and slow deliberative thinking?",
      options: [
        "Dual-process architecture with System 1 (fast) and System 2 (slow) components",
        "Only fast thinking",
        "Only slow thinking",
        "Thinking speed doesn't matter"
      ],
      correct: 0
    },
    {
      id: 50,
      type: "advanced",
      question: "How would you ensure safe deployment of a general AI agent?",
      options: [
        "Implement value alignment, oversight mechanisms, and fail-safe protocols",
        "Deploy without safety measures",
        "Safety is not important",
        "Agents cannot be dangerous"
      ],
      correct: 0
    }
  ]
}
