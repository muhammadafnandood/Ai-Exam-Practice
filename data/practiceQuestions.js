// Practice Questions for all chapters (30 questions per chapter)
// Mixed difficulty for practice mode

module.exports = {
  practiceQuestions: {
    1: [ // Chapter 1 Practice
      {
        id: 'p1-1',
        type: 'practice',
        question: "What is the main benefit of using an Agent Factory?",
        options: [
          "Standardized agent creation and management",
          "Reduced code quality",
          "Slower development",
          "Increased complexity"
        ],
        correct: 0
      },
      {
        id: 'p1-2',
        type: 'practice',
        question: "Which pattern is commonly used in Agent Factory implementations?",
        options: [
          "Factory Pattern",
          "Singleton Pattern only",
          "Observer Pattern only",
          "Strategy Pattern only"
        ],
        correct: 0
      },
      {
        id: 'p1-3',
        type: 'practice',
        question: "What is agent lifecycle management?",
        options: [
          "Managing agent creation, execution, and termination",
          "Tracking agent age",
          "Counting agent instances",
          "Naming agents"
        ],
        correct: 0
      },
      {
        id: 'p1-4',
        type: 'practice',
        question: "How do agents typically communicate results?",
        options: [
          "Through defined output interfaces and callbacks",
          "By printing to console only",
          "Through global variables",
          "Agents don't communicate results"
        ],
        correct: 0
      },
      {
        id: 'p1-5',
        type: 'practice',
        question: "What is agent configuration injection?",
        options: [
          "Providing settings to agents at creation time",
          "Physically modifying agents",
          "Deleting agent settings",
          "Copying agent code"
        ],
        correct: 0
      },
      {
        id: 'p1-6',
        type: 'practice',
        question: "What is a router agent?",
        options: [
          "An agent that directs tasks to appropriate worker agents",
          "An agent that routes network traffic",
          "An agent that deletes tasks",
          "An agent that stores data"
        ],
        correct: 0
      },
      {
        id: 'p1-7',
        type: 'practice',
        question: "How do you handle agent timeouts?",
        options: [
          "Implement timeout logic with fallback mechanisms",
          "Let agents run forever",
          "Kill all agents on timeout",
          "Ignore timeouts"
        ],
        correct: 0
      },
      {
        id: 'p1-8',
        type: 'practice',
        question: "What is agent pooling?",
        options: [
          "Reusing agent instances to improve performance",
          "Swimming with agents",
          "Deleting agent pools",
          "Creating one agent per task"
        ],
        correct: 0
      },
      {
        id: 'p1-9',
        type: 'practice',
        question: "What is the purpose of agent logging?",
        options: [
          "Tracking agent behavior for debugging and monitoring",
          "Making agents slower",
          "Storing agent code",
          "Logging is not useful"
        ],
        correct: 0
      },
      {
        id: 'p1-10',
        type: 'practice',
        question: "How do you validate agent outputs?",
        options: [
          "Implement output validation schemas and checks",
          "Trust all outputs",
          "Never validate outputs",
          "Validate only sometimes"
        ],
        correct: 0
      },
      {
        id: 'p1-11',
        type: 'practice',
        question: "What is agent delegation?",
        options: [
          "An agent assigning tasks to other agents",
          "An agent leaving the system",
          "An agent copying itself",
          "Agent delegation is not possible"
        ],
        correct: 0
      },
      {
        id: 'p1-12',
        type: 'practice',
        question: "What is a pipeline agent architecture?",
        options: [
          "Agents arranged in a sequence where output flows to next agent",
          "Agents working in isolation",
          "Agents competing with each other",
          "Agents sharing memory"
        ],
        correct: 0
      },
      {
        id: 'p1-13',
        type: 'practice',
        question: "How do you handle agent errors gracefully?",
        options: [
          "Implement error handlers with retry and fallback options",
          "Crash the system",
          "Ignore all errors",
          "Delete the agent"
        ],
        correct: 0
      },
      {
        id: 'p1-14',
        type: 'practice',
        question: "What is agent context propagation?",
        options: [
          "Passing context information between related agents",
          "Copying agent code",
          "Deleting agent context",
          "Context cannot be propagated"
        ],
        correct: 0
      },
      {
        id: 'p1-15',
        type: 'practice',
        question: "What is the benefit of agent abstraction layers?",
        options: [
          "They hide complexity and provide consistent interfaces",
          "They add unnecessary complexity",
          "They slow down execution",
          "Abstraction is not useful"
        ],
        correct: 0
      },
      {
        id: 'p1-16',
        type: 'practice',
        question: "How do you implement agent health checks?",
        options: [
          "Periodic status checks with timeout and recovery logic",
          "Check once at startup",
          "Never check health",
          "Health checks are not possible"
        ],
        correct: 0
      },
      {
        id: 'p1-17',
        type: 'practice',
        question: "What is agent task queuing?",
        options: [
          "Managing pending tasks for agents to process",
          "Deleting agent tasks",
          "Copying tasks randomly",
          "Tasks don't need queuing"
        ],
        correct: 0
      },
      {
        id: 'p1-18',
        type: 'practice',
        question: "What is the role of metadata in agent systems?",
        options: [
          "Providing additional information about agents and tasks",
          "Slowing down the system",
          "Metadata is not useful",
          "Only storing agent names"
        ],
        correct: 0
      },
      {
        id: 'p1-19',
        type: 'practice',
        question: "How do you scale agent systems horizontally?",
        options: [
          "Add more agent instances across multiple servers",
          "Make agents physically larger",
          "Use only one server",
          "Horizontal scaling is not possible"
        ],
        correct: 0
      },
      {
        id: 'p1-20',
        type: 'practice',
        question: "What is agent synchronization?",
        options: [
          "Coordinating agent actions and data consistency",
          "Making agents identical",
          "Deleting agent differences",
          "Synchronization is not needed"
        ],
        correct: 0
      },
      {
        id: 'p1-21',
        type: 'practice',
        question: "What is the purpose of agent registries?",
        options: [
          "Tracking available agents and their capabilities",
          "Registering agent trademarks",
          "Deleting agent records",
          "Registries are not useful"
        ],
        correct: 0
      },
      {
        id: 'p1-22',
        type: 'practice',
        question: "How do you handle agent version compatibility?",
        options: [
          "Implement version checking and compatibility layers",
          "Ignore version issues",
          "Force all agents to same version",
          "Compatibility is not important"
        ],
        correct: 0
      },
      {
        id: 'p1-23',
        type: 'practice',
        question: "What is agent event handling?",
        options: [
          "Responding to events and triggers in the system",
          "Handling agent physical events",
          "Deleting events",
          "Events are not handled"
        ],
        correct: 0
      },
      {
        id: 'p1-24',
        type: 'practice',
        question: "What is the benefit of agent composition over inheritance?",
        options: [
          "More flexible and maintainable code structure",
          "Composition is harder to understand",
          "Inheritance is always better",
          "There is no difference"
        ],
        correct: 0
      },
      {
        id: 'p1-25',
        type: 'practice',
        question: "How do you implement agent rate limiting?",
        options: [
          "Control the number of requests an agent processes per time unit",
          "Let agents process unlimited requests",
          "Rate limiting is not needed",
          "Limit all agents to same rate"
        ],
        correct: 0
      },
      {
        id: 'p1-26',
        type: 'practice',
        question: "What is agent state persistence?",
        options: [
          "Saving agent state for recovery and continuity",
          "Deleting agent state",
          "State cannot be persisted",
          "Persistence is not useful"
        ],
        correct: 0
      },
      {
        id: 'p1-27',
        type: 'practice',
        question: "What is the purpose of agent metrics?",
        options: [
          "Measuring agent performance and behavior",
          "Making agents slower",
          "Metrics are not useful",
          "Only counting agent calls"
        ],
        correct: 0
      },
      {
        id: 'p1-28',
        type: 'practice',
        question: "How do you implement agent cancellation?",
        options: [
          "Provide mechanisms to stop ongoing agent operations",
          "Let agents always complete",
          "Cancellation is not possible",
          "Kill the entire system"
        ],
        correct: 0
      },
      {
        id: 'p1-29',
        type: 'practice',
        question: "What is agent dependency injection?",
        options: [
          "Providing required dependencies to agents externally",
          "Injecting code into agents",
          "Deleting dependencies",
          "Dependencies are not needed"
        ],
        correct: 0
      },
      {
        id: 'p1-30',
        type: 'practice',
        question: "What is the role of agent middleware?",
        options: [
          "Processing requests and responses between agents",
          "Making agents middle-aged",
          "Middleware is not useful",
          "Only logging"
        ],
        correct: 0
      }
    ],
    2: [ // Chapter 2 Practice
      {
        id: 'p2-1',
        type: 'practice',
        question: "What is the purpose of Markdown frontmatter?",
        options: [
          "To add metadata like title, date, and layout",
          "To add decorative headers",
          "To hide content",
          "Frontmatter is not useful"
        ],
        correct: 0
      },
      {
        id: 'p2-2',
        type: 'practice',
        question: "How do you create a task list in Markdown?",
        options: [
          "- [ ] Task item",
          "- Task item",
          "* Task item",
          "1. Task item"
        ],
        correct: 0
      },
      {
        id: 'p2-3',
        type: 'practice',
        question: "What is GFM?",
        options: [
          "GitHub Flavored Markdown",
          "General File Markdown",
          "Global Format Markdown",
          "Graphics For Markdown"
        ],
        correct: 0
      },
      {
        id: 'p2-4',
        type: 'practice',
        question: "How do you create a footnote in Markdown?",
        options: [
          "Text with footnote[^1] and [^1]: Definition",
          "Text with (footnote)",
          "Text with #footnote",
          "Footnotes are not supported"
        ],
        correct: 0
      },
      {
        id: 'p2-5',
        type: 'practice',
        question: "What is the syntax for highlighting text in some Markdown flavors?",
        options: [
          "==highlighted==",
          "**highlighted**",
          "##highlighted##",
          "__highlighted__"
        ],
        correct: 0
      },
      {
        id: 'p2-6',
        type: 'practice',
        question: "How do you create a definition list in Markdown?",
        options: [
          "Term\n: Definition",
          "Term - Definition",
          "Term: Definition",
          "Definition lists not supported"
        ],
        correct: 0
      },
      {
        id: 'p2-7',
        type: 'practice',
        question: "What is the purpose of Markdown linters?",
        options: [
          "To enforce consistent style and catch errors",
          "To make documents longer",
          "To add features",
          "Linters are not useful"
        ],
        correct: 0
      },
      {
        id: 'p2-8',
        type: 'practice',
        question: "How do you embed HTML in Markdown?",
        options: [
          "Write HTML directly where needed",
          "You cannot embed HTML",
          "Use special tags only",
          "HTML breaks Markdown"
        ],
        correct: 0
      },
      {
        id: 'p2-9',
        type: 'practice',
        question: "What is a Markdown processor?",
        options: [
          "Software that converts Markdown to other formats",
          "A text editor",
          "A file converter",
          "A database"
        ],
        correct: 0
      },
      {
        id: 'p2-10',
        type: 'practice',
        question: "How do you create line breaks in Markdown?",
        options: [
          "End line with two spaces or use <br>",
          "Press Enter twice",
          "Use \\n",
          "Line breaks are automatic"
        ],
        correct: 0
      },
      {
        id: 'p2-11',
        type: 'practice',
        question: "What is the syntax for keyboard keys in Markdown?",
        options: [
          "<kbd>Ctrl</kbd>",
          "[Ctrl]",
          "{Ctrl}",
          "*Ctrl*"
        ],
        correct: 0
      },
      {
        id: 'p2-12',
        type: 'practice',
        question: "How do you create a collapsible section in Markdown?",
        options: [
          "Use HTML details and summary tags",
          "Use special Markdown syntax",
          "Collapsible sections not possible",
          "Use code blocks"
        ],
        correct: 0
      },
      {
        id: 'p2-13',
        type: 'practice',
        question: "What is the purpose of Markdown comments?",
        options: [
          "Add notes that don't appear in output",
          "Add visible comments",
          "Comments are not supported",
          "To format text"
        ],
        correct: 0
      },
      {
        id: 'p2-14',
        type: 'practice',
        question: "How do you create a table with alignment in Markdown?",
        options: [
          "Use colons in the separator row (|:---|:---:|---:|)",
          "Use CSS classes",
          "Alignment is not possible",
          "Use HTML only"
        ],
        correct: 0
      },
      {
        id: 'p2-15',
        type: 'practice',
        question: "What is Pandoc?",
        options: [
          "A universal document converter",
          "A Markdown editor",
          "A Markdown flavor",
          "A testing tool"
        ],
        correct: 0
      },
      {
        id: 'p2-16',
        type: 'practice',
        question: "How do you create emoji in Markdown?",
        options: [
          "Use :emoji_name: syntax (on supported platforms)",
          "Copy and paste only",
          "Emoji not supported",
          "Use image tags"
        ],
        correct: 0
      },
      {
        id: 'p2-17',
        type: 'practice',
        question: "What is the CommonMark specification?",
        options: [
          "A standardized Markdown specification",
          "A Markdown editor",
          "A Markdown extension",
          "A deprecated format"
        ],
        correct: 0
      },
      {
        id: 'p2-18',
        type: 'practice',
        question: "How do you create a link that opens in a new tab?",
        options: [
          "Use HTML anchor tag with target='_blank'",
          "Standard Markdown supports this",
          "Add ! to the link",
          "Use special syntax"
        ],
        correct: 0
      },
      {
        id: 'p2-19',
        type: 'practice',
        question: "What is Markdown Extra?",
        options: [
          "An extended Markdown implementation",
          "Extra Markdown files",
          "A Markdown editor",
          "A deprecated format"
        ],
        correct: 0
      },
      {
        id: 'p2-20',
        type: 'practice',
        question: "How do you create abbreviation definitions in Markdown?",
        options: [
          "Use *[ABBR]: Definition syntax (in some flavors)",
          "Standard Markdown supports this",
          "Abbreviations not supported",
          "Use HTML only"
        ],
        correct: 0
      },
      {
        id: 'p2-21',
        type: 'practice',
        question: "What is the purpose of Markdown directories?",
        options: [
          "Organize multiple Markdown files systematically",
          "Store Markdown templates",
          "Compile Markdown files",
          "Directories are not useful"
        ],
        correct: 0
      },
      {
        id: 'p2-22',
        type: 'practice',
        question: "How do you create mathematical equations in Markdown?",
        options: [
          "Use LaTeX syntax with $ or $$ delimiters",
          "Standard Markdown supports equations",
          "Equations not supported",
          "Use images only"
        ],
        correct: 0
      },
      {
        id: 'p2-23',
        type: 'practice',
        question: "What is MkDocs?",
        options: [
          "A static site generator for Markdown documentation",
          "A Markdown editor",
          "A Markdown flavor",
          "A testing framework"
        ],
        correct: 0
      },
      {
        id: 'p2-24',
        type: 'practice',
        question: "How do you create syntax-highlighted code blocks?",
        options: [
          "Use triple backticks with language name",
          "Standard code blocks only",
          "Use HTML only",
          "Syntax highlighting not possible"
        ],
        correct: 0
      },
      {
        id: 'p2-25',
        type: 'practice',
        question: "What is the purpose of Markdown navigation?",
        options: [
          "Help readers move through documents easily",
          "Add decorative elements",
          "Navigation is not needed",
          "Only for websites"
        ],
        correct: 0
      },
      {
        id: 'p2-26',
        type: 'practice',
        question: "How do you create internal anchor links?",
        options: [
          "Use [link](#heading-id) syntax",
          "Internal links not possible",
          "Use full URLs only",
          "Use HTML only"
        ],
        correct: 0
      },
      {
        id: 'p2-27',
        type: 'practice',
        question: "What is Docusaurus?",
        options: [
          "A documentation framework that uses Markdown",
          "A Markdown editor",
          "A Markdown flavor",
          "A testing tool"
        ],
        correct: 0
      },
      {
        id: 'p2-28',
        type: 'practice',
        question: "How do you create callouts or alerts in Markdown?",
        options: [
          "Use blockquote with special formatting or HTML",
          "Standard Markdown has callouts",
          "Callouts not possible",
          "Use images only"
        ],
        correct: 0
      },
      {
        id: 'p2-29',
        type: 'practice',
        question: "What is the benefit of Markdown for documentation?",
        options: [
          "Easy to write, version-control friendly, portable",
          "It's the only format",
          "Documentation must use Markdown",
          "No real benefits"
        ],
        correct: 0
      },
      {
        id: 'p2-30',
        type: 'practice',
        question: "How do you handle large Markdown documents?",
        options: [
          "Break into smaller files with navigation between them",
          "Keep everything in one file",
          "Large documents not possible",
          "Use PDF instead"
        ],
        correct: 0
      }
    ],
    3: [ // Chapter 3 Practice
      {
        id: 'p3-1',
        type: 'practice',
        question: "What is the key characteristic of a general agent?",
        options: [
          "Ability to handle diverse tasks across domains",
          "Specialization in one task only",
          "Physical embodiment",
          "Limited learning capability"
        ],
        correct: 0
      },
      {
        id: 'p3-2',
        type: 'practice',
        question: "What is cognitive flexibility in AI?",
        options: [
          "The ability to adapt thinking to new situations",
          "Physical flexibility",
          "Rigid rule following",
          "Memory capacity"
        ],
        correct: 0
      },
      {
        id: 'p3-3',
        type: 'practice',
        question: "What is the frame problem in AI?",
        options: [
          "Determining what stays the same when actions change the world",
          "Creating visual frames",
          "A hardware problem",
          "A memory issue"
        ],
        correct: 0
      },
      {
        id: 'p3-4',
        type: 'practice',
        question: "What is symbolic AI?",
        options: [
          "AI based on manipulating symbols and rules",
          "AI that creates art",
          "AI with physical symbols",
          "AI without logic"
        ],
        correct: 0
      },
      {
        id: 'p3-5',
        type: 'practice',
        question: "What is connectionist AI?",
        options: [
          "AI based on neural networks and learning",
          "AI that connects to databases",
          "AI with physical connections",
          "AI without learning"
        ],
        correct: 0
      },
      {
        id: 'p3-6',
        type: 'practice',
        question: "What is the binding problem?",
        options: [
          "How the brain combines features into unified objects",
          "Tying objects together",
          "A programming issue",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p3-7',
        type: 'practice',
        question: "What is embodied cognition?",
        options: [
          "The theory that cognition is shaped by the body",
          "Physical exercise for AI",
          "Cognitive body building",
          "A medical condition"
        ],
        correct: 0
      },
      {
        id: 'p3-8',
        type: 'practice',
        question: "What is the Chinese Room argument?",
        options: [
          "A thought experiment about understanding and consciousness",
          "A room in China",
          "A programming challenge",
          "A memory test"
        ],
        correct: 0
      },
      {
        id: 'p3-9',
        type: 'practice',
        question: "What is reinforcement learning?",
        options: [
          "Learning through rewards and punishments",
          "Learning through reading",
          "Learning through repetition only",
          "Learning without feedback"
        ],
        correct: 0
      },
      {
        id: 'p3-10',
        type: 'practice',
        question: "What is unsupervised learning?",
        options: [
          "Learning patterns from unlabeled data",
          "Learning without teachers",
          "Learning without trying",
          "Learning without data"
        ],
        correct: 0
      },
      {
        id: 'p3-11',
        type: 'practice',
        question: "What is the symbol grounding problem?",
        options: [
          "How symbols get their meaning",
          "Creating physical symbols",
          "A printing issue",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p3-12',
        type: 'practice',
        question: "What is theory of mind in AI?",
        options: [
          "Understanding others' mental states and beliefs",
          "A theory about minds",
          "Mind reading capability",
          "A psychological test"
        ],
        correct: 0
      },
      {
        id: 'p3-13',
        type: 'practice',
        question: "What is the hard problem of consciousness?",
        options: [
          "Explaining why and how we have subjective experiences",
          "A difficult programming problem",
          "A hardware issue",
          "A memory challenge"
        ],
        correct: 0
      },
      {
        id: 'p3-14',
        type: 'practice',
        question: "What is swarm intelligence?",
        options: [
          "Intelligence emerging from collective behavior",
          "Insect intelligence",
          "Group thinking only",
          "A swarm of robots"
        ],
        correct: 0
      },
      {
        id: 'p3-15',
        type: 'practice',
        question: "What is the localization problem in robotics?",
        options: [
          "Determining where a robot is in its environment",
          "Translating robot language",
          "A software bug",
          "A memory issue"
        ],
        correct: 0
      },
      {
        id: 'p3-16',
        type: 'practice',
        question: "What is affordance in AI?",
        options: [
          "Perceived action possibilities an object offers",
          "The cost of AI",
          "A type of algorithm",
          "A memory feature"
        ],
        correct: 0
      },
      {
        id: 'p3-17',
        type: 'practice',
        question: "What is the homunculus fallacy?",
        options: [
          "Explaining intelligence by positing a little person inside",
          "A type of robot",
          "A programming pattern",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p3-18',
        type: 'practice',
        question: "What is predictive processing?",
        options: [
          "The brain as a prediction machine minimizing surprise",
          "Predicting the future",
          "Data processing",
          "A memory model"
        ],
        correct: 0
      },
      {
        id: 'p3-19',
        type: 'practice',
        question: "What is the computational theory of mind?",
        options: [
          "The mind as a computational system",
          "Computing with minds",
          "A software theory",
          "A hardware model"
        ],
        correct: 0
      },
      {
        id: 'p3-20',
        type: 'practice',
        question: "What is active inference?",
        options: [
          "Acting to minimize prediction error",
          "Active learning only",
          "Inference without data",
          "A statistical method"
        ],
        correct: 0
      },
      {
        id: 'p3-21',
        type: 'practice',
        question: "What is the free energy principle?",
        options: [
          "A theory about self-organizing systems minimizing surprise",
          "Free energy generation",
          "A physics principle",
          "A memory principle"
        ],
        correct: 0
      },
      {
        id: 'p3-22',
        type: 'practice',
        question: "What is morphological computation?",
        options: [
          "Computation performed by body morphology",
          "Shape calculation",
          "A type of algorithm",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p3-23',
        type: 'practice',
        question: "What is enactivism?",
        options: [
          "Cognition as enacted through action in the world",
          "Activating neurons",
          "A programming paradigm",
          "A memory model"
        ],
        correct: 0
      },
      {
        id: 'p3-24',
        type: 'practice',
        question: "What is the extended mind thesis?",
        options: [
          "The mind extends beyond the brain into the environment",
          "Mind expansion techniques",
          "A software extension",
          "A memory extension"
        ],
        correct: 0
      },
      {
        id: 'p3-25',
        type: 'practice',
        question: "What is developmental robotics?",
        options: [
          "Robots that learn and develop like children",
          "Building robots",
          "Robot manufacturing",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p3-26',
        type: 'practice',
        question: "What is intrinsic motivation in AI?",
        options: [
          "Internal drives like curiosity and competence",
          "External rewards",
          "Money motivation",
          "Forced motivation"
        ],
        correct: 0
      },
      {
        id: 'p3-27',
        type: 'practice',
        question: "What is the exploration-exploitation tradeoff?",
        options: [
          "Balancing trying new things vs using known good strategies",
          "Mining exploration",
          "Business strategy",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p3-28',
        type: 'practice',
        question: "What is hierarchical reinforcement learning?",
        options: [
          "Learning with actions at multiple levels of abstraction",
          "Learning hierarchies",
          "A management technique",
          "A memory model"
        ],
        correct: 0
      },
      {
        id: 'p3-29',
        type: 'practice',
        question: "What is model-based reinforcement learning?",
        options: [
          "Learning with a model of the environment",
          "Model building only",
          "Base learning",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p3-30',
        type: 'practice',
        question: "What is the credit assignment problem?",
        options: [
          "Determining which actions led to outcomes",
          "Credit card processing",
          "Assignment writing",
          "A memory issue"
        ],
        correct: 0
      }
    ],
    4: [ // Chapter 4 Practice
      {
        id: 'p4-1',
        type: 'practice',
        question: "What is context embedding?",
        options: [
          "Representing context as numerical vectors",
          "Physical embedding",
          "Hiding context",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-2',
        type: 'practice',
        question: "What is the attention mechanism?",
        options: [
          "Focusing on relevant parts of input",
          "Paying attention in class",
          "A memory technique",
          "A visual feature"
        ],
        correct: 0
      },
      {
        id: 'p4-3',
        type: 'practice',
        question: "What is positional encoding?",
        options: [
          "Adding position information to sequences",
          "Physical positioning",
          "A location service",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-4',
        type: 'practice',
        question: "What is context masking?",
        options: [
          "Hiding or blocking parts of context",
          "Wearing masks",
          "A visual effect",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-5',
        type: 'practice',
        question: "What is the context bottleneck?",
        options: [
          "Limitations in processing or transmitting context",
          "A physical bottleneck",
          "A traffic issue",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p4-6',
        type: 'practice',
        question: "What is context augmentation?",
        options: [
          "Enhancing context with additional information",
          "Physical augmentation",
          "A medical procedure",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-7',
        type: 'practice',
        question: "What is the context window limitation?",
        options: [
          "The finite amount of context a model can process",
          "A visual window",
          "A physical limitation",
          "A memory issue"
        ],
        correct: 0
      },
      {
        id: 'p4-8',
        type: 'practice',
        question: "What is context summarization?",
        options: [
          "Condensing context while preserving key information",
          "Physical summarization",
          "A meeting technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-9',
        type: 'practice',
        question: "What is context ranking?",
        options: [
          "Ordering context by relevance or importance",
          "Physical ranking",
          "A competition",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-10',
        type: 'practice',
        question: "What is context filtering?",
        options: [
          "Removing irrelevant or noisy context",
          "Physical filtering",
          "A water technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-11',
        type: 'practice',
        question: "What is context fusion?",
        options: [
          "Combining multiple context sources",
          "Physical fusion",
          "A nuclear process",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-12',
        type: 'practice',
        question: "What is context drift?",
        options: [
          "Gradual change in context relevance over time",
          "Physical drift",
          "A navigation issue",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p4-13',
        type: 'practice',
        question: "What is context anchoring?",
        options: [
          "Establishing stable reference points in context",
          "Physical anchoring",
          "A boat technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-14',
        type: 'practice',
        question: "What is context propagation?",
        options: [
          "Spreading context through a system",
          "Physical propagation",
          "A wave phenomenon",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-15',
        type: 'practice',
        question: "What is context isolation?",
        options: [
          "Separating context for different tasks or users",
          "Physical isolation",
          "A medical procedure",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-16',
        type: 'practice',
        question: "What is context compression?",
        options: [
          "Reducing context size while preserving information",
          "Physical compression",
          "A file technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-17',
        type: 'practice',
        question: "What is context expansion?",
        options: [
          "Adding relevant information to context",
          "Physical expansion",
          "A universe theory",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-18',
        type: 'practice',
        question: "What is context switching overhead?",
        options: [
          "The cost of changing between different contexts",
          "Physical switching",
          "A network issue",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p4-19',
        type: 'practice',
        question: "What is context alignment?",
        options: [
          "Ensuring context matches the task requirements",
          "Physical alignment",
          "A car technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-20',
        type: 'practice',
        question: "What is context degradation?",
        options: [
          "Loss of context quality over time or use",
          "Physical degradation",
          "A material issue",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p4-21',
        type: 'practice',
        question: "What is context sensitivity?",
        options: [
          "How responses change based on context",
          "Physical sensitivity",
          "An emotional trait",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-22',
        type: 'practice',
        question: "What is context invariance?",
        options: [
          "Maintaining consistent behavior across contexts",
          "Physical invariance",
          "A math concept",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-23',
        type: 'practice',
        question: "What is context dependency?",
        options: [
          "Reliance on specific context for correct behavior",
          "Physical dependency",
          "An addiction",
          "A memory problem"
        ],
        correct: 0
      },
      {
        id: 'p4-24',
        type: 'practice',
        question: "What is context generalization?",
        options: [
          "Applying context knowledge to new situations",
          "Physical generalization",
          "A learning technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-25',
        type: 'practice',
        question: "What is context specialization?",
        options: [
          "Adapting context for specific tasks",
          "Physical specialization",
          "A medical procedure",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-26',
        type: 'practice',
        question: "What is context normalization?",
        options: [
          "Standardizing context format and scale",
          "Physical normalization",
          "A database technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-27',
        type: 'practice',
        question: "What is context denoising?",
        options: [
          "Removing noise from context information",
          "Physical denoising",
          "A sound technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-28',
        type: 'practice',
        question: "What is context enrichment?",
        options: [
          "Adding valuable information to context",
          "Physical enrichment",
          "A financial term",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-29',
        type: 'practice',
        question: "What is context validation?",
        options: [
          "Checking context accuracy and relevance",
          "Physical validation",
          "A testing technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p4-30',
        type: 'practice',
        question: "What is context optimization?",
        options: [
          "Improving context for better performance",
          "Physical optimization",
          "A math technique",
          "A memory technique"
        ],
        correct: 0
      }
    ],
    5: [ // Chapter 5 Practice
      {
        id: 'p5-1',
        type: 'practice',
        question: "What is spec-driven testing?",
        options: [
          "Creating tests directly from specifications",
          "Testing specifications only",
          "Random testing",
          "Testing without specs"
        ],
        correct: 0
      },
      {
        id: 'p5-2',
        type: 'practice',
        question: "What is a specification review?",
        options: [
          "Formal examination of specifications for quality",
          "A product review",
          "A code review",
          "A performance review"
        ],
        correct: 0
      },
      {
        id: 'p5-3',
        type: 'practice',
        question: "What is requirements traceability?",
        options: [
          "Tracking requirements through implementation",
          "Tracing requirements on paper",
          "A drawing technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-4',
        type: 'practice',
        question: "What is specification refinement?",
        options: [
          "Iteratively improving specification detail and accuracy",
          "Physical refinement",
          "A chemical process",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-5',
        type: 'practice',
        question: "What is a living specification?",
        options: [
          "A specification that evolves with the system",
          "A biological specification",
          "A temporary specification",
          "A dead specification"
        ],
        correct: 0
      },
      {
        id: 'p5-6',
        type: 'practice',
        question: "What is specification coverage?",
        options: [
          "The extent to which specs describe system behavior",
          "Physical coverage",
          "A news term",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-7',
        type: 'practice',
        question: "What is spec-based code generation?",
        options: [
          "Automatically generating code from specifications",
          "Writing specs from code",
          "Manual coding",
          "Random code generation"
        ],
        correct: 0
      },
      {
        id: 'p5-8',
        type: 'practice',
        question: "What is specification consistency?",
        options: [
          "Ensuring specs don't contradict each other",
          "Physical consistency",
          "A food term",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-9',
        type: 'practice',
        question: "What is a specification baseline?",
        options: [
          "An approved specification used as reference",
          "A physical baseline",
          "A sports term",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-10',
        type: 'practice',
        question: "What is specification governance?",
        options: [
          "Managing and controlling specification processes",
          "Government specifications",
          "Political governance",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-11',
        type: 'practice',
        question: "What is spec-driven architecture?",
        options: [
          "Designing architecture based on specifications",
          "Physical architecture",
          "Building design",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-12',
        type: 'practice',
        question: "What is specification validation?",
        options: [
          "Checking specs meet requirements and are correct",
          "Physical validation",
          "A testing technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-13',
        type: 'practice',
        question: "What is specification verification?",
        options: [
          "Confirming specs are complete and consistent",
          "Physical verification",
          "An identity check",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-14',
        type: 'practice',
        question: "What is a specification document?",
        options: [
          "A formal document describing system requirements",
          "Any document",
          "A code document",
          "A memory document"
        ],
        correct: 0
      },
      {
        id: 'p5-15',
        type: 'practice',
        question: "What is specification iteration?",
        options: [
          "Repeatedly improving specifications",
          "Physical iteration",
          "A loop technique",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-16',
        type: 'practice',
        question: "What is spec-driven design?",
        options: [
          "Creating designs that fulfill specifications",
          "Physical design",
          "Artistic design",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-17',
        type: 'practice',
        question: "What is specification compliance?",
        options: [
          "Meeting all specification requirements",
          "Physical compliance",
          "A legal term",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-18',
        type: 'practice',
        question: "What is specification evolution?",
        options: [
          "How specifications change over time",
          "Biological evolution",
          "Physical evolution",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-19',
        type: 'practice',
        question: "What is a specification template?",
        options: [
          "A reusable specification structure",
          "A physical template",
          "A design template",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-20',
        type: 'practice',
        question: "What is specification quality?",
        options: [
          "How well specifications serve their purpose",
          "Physical quality",
          "Product quality",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-21',
        type: 'practice',
        question: "What is spec-driven integration?",
        options: [
          "Integrating components based on specifications",
          "Physical integration",
          "Social integration",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-22',
        type: 'practice',
        question: "What is specification risk?",
        options: [
          "Problems that can arise from poor specifications",
          "Physical risk",
          "Financial risk",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-23',
        type: 'practice',
        question: "What is specification maturity?",
        options: [
          "How complete and stable specifications are",
          "Physical maturity",
          "Emotional maturity",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-24',
        type: 'practice',
        question: "What is specification alignment?",
        options: [
          "Ensuring specs match business goals",
          "Physical alignment",
          "Car alignment",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-25',
        type: 'practice',
        question: "What is specification debt?",
        options: [
          "Accumulated specification work that needs to be done",
          "Financial debt",
          "Physical debt",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-26',
        type: 'practice',
        question: "What is spec-driven deployment?",
        options: [
          "Deploying based on specification requirements",
          "Physical deployment",
          "Military deployment",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-27',
        type: 'practice',
        question: "What is specification ownership?",
        options: [
          "Who is responsible for specifications",
          "Physical ownership",
          "Legal ownership",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-28',
        type: 'practice',
        question: "What is specification transparency?",
        options: [
          "How visible and accessible specifications are",
          "Physical transparency",
          "Glass transparency",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-29',
        type: 'practice',
        question: "What is specification velocity?",
        options: [
          "How quickly specifications are created and updated",
          "Physical velocity",
          "Speed measurement",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p5-30',
        type: 'practice',
        question: "What is specification sustainability?",
        options: [
          "Maintaining specifications long-term",
          "Environmental sustainability",
          "Physical sustainability",
          "A memory technique"
        ],
        correct: 0
      }
    ],
    6: [ // Chapter 6 Practice
      {
        id: 'p6-1',
        type: 'practice',
        question: "What is the essence of the clarity principle?",
        options: [
          "Making intentions and requirements unambiguous",
          "Physical clarity",
          "Visual clarity",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-2',
        type: 'practice',
        question: "What does simplicity prevent?",
        options: [
          "Unnecessary complexity and maintenance burden",
          "Physical problems",
          "Visual issues",
          "Memory problems"
        ],
        correct: 0
      },
      {
        id: 'p6-3',
        type: 'practice',
        question: "What is modular design?",
        options: [
          "Building with independent, interchangeable components",
          "Physical modules",
          "Building design",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-4',
        type: 'practice',
        question: "What makes code testable?",
        options: [
          "Clear interfaces, low coupling, and predictable behavior",
          "Physical properties",
          "Visual properties",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-5',
        type: 'practice',
        question: "What is code readability?",
        options: [
          "How easily humans can understand code",
          "Physical readability",
          "Visual readability",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-6',
        type: 'practice',
        question: "What is system extensibility?",
        options: [
          "The ability to add new features easily",
          "Physical extension",
          "Visual extension",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-7',
        type: 'practice',
        question: "What is fault tolerance?",
        options: [
          "Continuing operation despite failures",
          "Physical tolerance",
          "Emotional tolerance",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-8',
        type: 'practice',
        question: "What is the DRY violation?",
        options: [
          "Duplicated code or logic",
          "Physical violation",
          "Legal violation",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-9',
        type: 'practice',
        question: "What violates KISS?",
        options: [
          "Over-engineering and unnecessary complexity",
          "Physical violations",
          "Visual complexity",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-10',
        type: 'practice',
        question: "What causes astonishment in users?",
        options: [
          "Unexpected or surprising system behavior",
          "Physical surprise",
          "Visual surprise",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-11',
        type: 'practice',
        question: "What is concern separation?",
        options: [
          "Keeping different responsibilities distinct",
          "Physical separation",
          "Emotional separation",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-12',
        type: 'practice',
        question: "What violates single responsibility?",
        options: [
          "A class doing multiple unrelated things",
          "Physical violations",
          "Visual issues",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-13',
        type: 'practice',
        question: "What is YAGNI violation?",
        options: [
          "Building features that aren't needed yet",
          "Physical violations",
          "Visual issues",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-14',
        type: 'practice',
        question: "What is the 80/20 rule in software?",
        options: [
          "80% of value from 20% of features",
          "Physical ratio",
          "Visual ratio",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-15',
        type: 'practice',
        question: "What does Conway's Law predict?",
        options: [
          "System structure mirrors team communication",
          "Physical predictions",
          "Visual predictions",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-16',
        type: 'practice',
        question: "What is principle-based refactoring?",
        options: [
          "Improving code based on design principles",
          "Physical refactoring",
          "Visual refactoring",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-17',
        type: 'practice',
        question: "What is technical debt?",
        options: [
          "Future work caused by taking shortcuts now",
          "Financial debt",
          "Physical debt",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-18',
        type: 'practice',
        question: "What is design smell?",
        options: [
          "Indicators of poor design decisions",
          "Physical smell",
          "Visual issues",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-19',
        type: 'practice',
        question: "What is coupling?",
        options: [
          "How much components depend on each other",
          "Physical coupling",
          "Emotional coupling",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-20',
        type: 'practice',
        question: "What is cohesion?",
        options: [
          "How related a module's responsibilities are",
          "Physical cohesion",
          "Emotional cohesion",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-21',
        type: 'practice',
        question: "What is abstraction leakage?",
        options: [
          "When implementation details escape the abstraction",
          "Physical leakage",
          "Visual leakage",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-22',
        type: 'practice',
        question: "What is premature optimization?",
        options: [
          "Optimizing before it's necessary",
          "Physical optimization",
          "Visual optimization",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-23',
        type: 'practice',
        question: "What is golden path testing?",
        options: [
          "Testing the happy path or expected flow",
          "Physical paths",
          "Visual paths",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-24',
        type: 'practice',
        question: "What is defensive programming?",
        options: [
          "Writing code to handle unexpected inputs gracefully",
          "Physical defense",
          "Visual defense",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-25',
        type: 'practice',
        question: "What is fail-fast principle?",
        options: [
          "Detecting and reporting errors immediately",
          "Physical failure",
          "Visual failure",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-26',
        type: 'practice',
        question: "What is convention over configuration?",
        options: [
          "Using sensible defaults instead of explicit config",
          "Physical conventions",
          "Visual conventions",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-27',
        type: 'practice',
        question: "What is least privilege principle?",
        options: [
          "Giving minimum necessary permissions",
          "Physical privilege",
          "Visual privilege",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-28',
        type: 'practice',
        question: "What is idempotency?",
        options: [
          "Operations that produce same result regardless of repetition",
          "Physical property",
          "Visual property",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-29',
        type: 'practice',
        question: "What is loose coupling?",
        options: [
          "Minimizing dependencies between components",
          "Physical coupling",
          "Emotional coupling",
          "A memory technique"
        ],
        correct: 0
      },
      {
        id: 'p6-30',
        type: 'practice',
        question: "What is high cohesion?",
        options: [
          "Keeping related functionality together",
          "Physical cohesion",
          "Emotional cohesion",
          "A memory technique"
        ],
        correct: 0
      }
    ]
  }
}
