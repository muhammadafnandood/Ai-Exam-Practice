// Chapter 2: Markdown Writing Instructions - 50 Questions
// 15 Basic + 20 Conceptual + 15 Advanced

module.exports = {
  chapter: 2,
  title: "Markdown Writing Instructions",
  questions: [
    // BASIC QUESTIONS (1-15)
    {
      id: 1,
      type: "basic",
      question: "What does Markdown stand for?",
      options: [
        "It's named after its creator, not an acronym",
        "Mark Down Language",
        "Markup Document",
        "Markdown is not a real format"
      ],
      correct: 0
    },
    {
      id: 2,
      type: "basic",
      question: "How do you create a level 1 heading in Markdown?",
      options: [
        "# Heading",
        "<h1>Heading</h1>",
        "**Heading**",
        "__Heading__"
      ],
      correct: 0
    },
    {
      id: 3,
      type: "basic",
      question: "How do you make text bold in Markdown?",
      options: [
        "**bold** or __bold__",
        "<bold>text</bold>",
        "##bold##",
        "//bold//"
      ],
      correct: 0
    },
    {
      id: 4,
      type: "basic",
      question: "How do you create a link in Markdown?",
      options: [
        "[text](url)",
        "<link>text</link>",
        "{text|url}",
        "link: text -> url"
      ],
      correct: 0
    },
    {
      id: 5,
      type: "basic",
      question: "How do you create an unordered list in Markdown?",
      options: [
        "Using -, *, or + at the start of each line",
        "<ul><li>item</li></ul>",
        "1. item",
        "// item"
      ],
      correct: 0
    },
    {
      id: 6,
      type: "basic",
      question: "How do you insert an image in Markdown?",
      options: [
        "![alt text](image-url)",
        "<img src='url'>",
        "{image: url}",
        "image: url"
      ],
      correct: 0
    },
    {
      id: 7,
      type: "basic",
      question: "How do you create inline code in Markdown?",
      options: [
        "`code`",
        "<code>code</code>",
        "#code#",
        "'code'"
      ],
      correct: 0
    },
    {
      id: 8,
      type: "basic",
      question: "How do you create a code block in Markdown?",
      options: [
        "Using triple backticks (```)",
        "<pre><code></code></pre>",
        "###code###",
        "// code block"
      ],
      correct: 0
    },
    {
      id: 9,
      type: "basic",
      question: "How do you create a blockquote in Markdown?",
      options: [
        "> quoted text",
        "<blockquote>text</blockquote>",
        "\"quoted text\"",
        "## quoted text"
      ],
      correct: 0
    },
    {
      id: 10,
      type: "basic",
      question: "How do you create a horizontal rule in Markdown?",
      options: [
        "--- or *** or ___",
        "<hr>",
        "=== ",
        "..."
      ],
      correct: 0
    },
    {
      id: 11,
      type: "basic",
      question: "How do you make text italic in Markdown?",
      options: [
        "*italic* or _italic_",
        "<i>italic</i>",
        "//italic//",
        "~italic~"
      ],
      correct: 0
    },
    {
      id: 12,
      type: "basic",
      question: "How do you create a numbered list in Markdown?",
      options: [
        "1. Item 1, 2. Item 2, etc.",
        "<ol><li>Item</li></ol>",
        "# Item",
        "* Item"
      ],
      correct: 0
    },
    {
      id: 13,
      type: "basic",
      question: "How do you create a table in Markdown?",
      options: [
        "Using pipes | and dashes -",
        "<table></table>",
        "{table}data{/table}",
        "Markdown doesn't support tables"
      ],
      correct: 0
    },
    {
      id: 14,
      type: "basic",
      question: "How do you create strikethrough text in Markdown?",
      options: [
        "~~strikethrough~~",
        "<s>text</s>",
        "--text--",
        "##text##"
      ],
      correct: 0
    },
    {
      id: 15,
      type: "basic",
      question: "How do you escape special characters in Markdown?",
      options: [
        "Use a backslash \\ before the character",
        "Use quotes around the character",
        "You cannot escape characters",
        "Use double characters"
      ],
      correct: 0
    },
    // CONCEPTUAL QUESTIONS (16-35)
    {
      id: 16,
      type: "conceptual",
      question: "Why is Markdown preferred over HTML for documentation?",
      options: [
        "It's simpler, more readable, and faster to write",
        "It has more features than HTML",
        "It's the only format available",
        "HTML cannot be used for documentation"
      ],
      correct: 0
    },
    {
      id: 17,
      type: "conceptual",
      question: "What is the purpose of alt text in images?",
      options: [
        "To provide accessibility and context when images don't load",
        "To make images load faster",
        "To decorate the image",
        "Alt text is not important"
      ],
      correct: 0
    },
    {
      id: 18,
      type: "conceptual",
      question: "Why use code blocks with language specification?",
      options: [
        "For syntax highlighting and better readability",
        "To make the code run automatically",
        "To compress the code",
        "Language specification is not useful"
      ],
      correct: 0
    },
    {
      id: 19,
      type: "conceptual",
      question: "What is the benefit of using relative links in Markdown?",
      options: [
        "They work across different environments and are portable",
        "They load faster",
        "They are more secure",
        "There is no benefit"
      ],
      correct: 0
    },
    {
      id: 20,
      type: "conceptual",
      question: "Why is consistent heading hierarchy important?",
      options: [
        "It improves document structure and accessibility",
        "It makes the document longer",
        "It's required by Markdown",
        "Hierarchy doesn't matter"
      ],
      correct: 0
    },
    {
      id: 21,
      type: "conceptual",
      question: "What is the purpose of task lists in Markdown?",
      options: [
        "To create checkable items for tracking progress",
        "To create regular lists",
        "To add decorative checkboxes",
        "Task lists are not useful"
      ],
      correct: 0
    },
    {
      id: 22,
      type: "conceptual",
      question: "Why use reference-style links?",
      options: [
        "For better readability when URLs are long or reused",
        "To make links invisible",
        "To break links",
        "Reference links are outdated"
      ],
      correct: 0
    },
    {
      id: 23,
      type: "conceptual",
      question: "What is the advantage of using tables in Markdown?",
      options: [
        "To present structured data in a readable format",
        "To make documents look complex",
        "Tables are not supported in Markdown",
        "To replace images"
      ],
      correct: 0
    },
    {
      id: 24,
      type: "conceptual",
      question: "Why is whitespace important in Markdown formatting?",
      options: [
        "It affects how elements are rendered and parsed",
        "It doesn't matter in Markdown",
        "It only affects visual appearance",
        "Whitespace is ignored"
      ],
      correct: 0
    },
    {
      id: 25,
      type: "conceptual",
      question: "What is the purpose of footnotes in Markdown?",
      options: [
        "To add supplementary information without cluttering the main text",
        "To make documents longer",
        "To confuse readers",
        "Footnotes are not supported"
      ],
      correct: 0
    },
    {
      id: 26,
      type: "conceptual",
      question: "Why use definition lists in Markdown?",
      options: [
        "To present terms and their definitions clearly",
        "To create regular lists",
        "Definition lists are not useful",
        "To replace tables"
      ],
      correct: 0
    },
    {
      id: 27,
      type: "conceptual",
      question: "What is the benefit of using Markdown linters?",
      options: [
        "To ensure consistent style and catch formatting errors",
        "To make documents longer",
        "To add more features",
        "Linters are not useful"
      ],
      correct: 0
    },
    {
      id: 28,
      type: "conceptual",
      question: "Why is it important to preview Markdown before publishing?",
      options: [
        "To catch formatting issues and ensure proper rendering",
        "To make the document longer",
        "Preview is not necessary",
        "All Markdown renders the same"
      ],
      correct: 0
    },
    {
      id: 29,
      type: "conceptual",
      question: "What is the purpose of Markdown frontmatter?",
      options: [
        "To add metadata like title, date, and tags to documents",
        "To add decorative headers",
        "Frontmatter is not useful",
        "To hide content"
      ],
      correct: 0
    },
    {
      id: 30,
      type: "conceptual",
      question: "Why use Markdown extensions like GFM (GitHub Flavored Markdown)?",
      options: [
        "To access additional features like tables, task lists, and syntax highlighting",
        "To make Markdown more complicated",
        "Extensions are not compatible",
        "Standard Markdown has all features"
      ],
      correct: 0
    },
    {
      id: 31,
      type: "conceptual",
      question: "What is the benefit of using Markdown for API documentation?",
      options: [
        "Easy to write, version control friendly, and widely supported",
        "It's the only format available",
        "API documentation cannot use other formats",
        "Markdown is too simple for APIs"
      ],
      correct: 0
    },
    {
      id: 32,
      type: "conceptual",
      question: "Why is it important to keep line length reasonable in Markdown?",
      options: [
        "For better readability in raw text and easier diffs",
        "To make documents longer",
        "Line length doesn't matter",
        "To use more pages"
      ],
      correct: 0
    },
    {
      id: 33,
      type: "conceptual",
      question: "What is the purpose of Markdown in README files?",
      options: [
        "To provide formatted project documentation that's easy to read",
        "README files don't use Markdown",
        "To make files larger",
        "To confuse users"
      ],
      correct: 0
    },
    {
      id: 34,
      type: "conceptual",
      question: "Why use nested lists in Markdown?",
      options: [
        "To show hierarchical relationships between items",
        "To make lists longer",
        "Nested lists are not supported",
        "To confuse readers"
      ],
      correct: 0
    },
    {
      id: 35,
      type: "conceptual",
      question: "What is the advantage of Markdown's plain text nature?",
      options: [
        "Files are portable, versionable, and don't require special software",
        "Plain text is outdated",
        "It makes files larger",
        "Plain text cannot be read"
      ],
      correct: 0
    },
    // ADVANCED QUESTIONS (36-50)
    {
      id: 36,
      type: "advanced",
      question: "How would you create a complex documentation structure with cross-references?",
      options: [
        "Use heading anchors, internal links, and a clear hierarchy",
        "Create separate documents without links",
        "Use only external links",
        "Cross-references are not possible"
      ],
      correct: 0
    },
    {
      id: 37,
      type: "advanced",
      question: "What is the best approach for documenting code examples with multiple languages?",
      options: [
        "Use fenced code blocks with appropriate language identifiers",
        "Put all code in one block",
        "Don't specify language",
        "Use images instead of code"
      ],
      correct: 0
    },
    {
      id: 38,
      type: "advanced",
      question: "How would you handle dynamic content in Markdown documentation?",
      options: [
        "Use Markdown with templating or static site generators",
        "Markdown cannot handle dynamic content",
        "Update manually every time",
        "Use only static content"
      ],
      correct: 0
    },
    {
      id: 39,
      type: "advanced",
      question: "What strategy would you use for multi-language documentation?",
      options: [
        "Organize by language folders with consistent structure",
        "Mix all languages in one file",
        "Use only one language",
        "Translate inline"
      ],
      correct: 0
    },
    {
      id: 40,
      type: "advanced",
      question: "How would you create interactive documentation with Markdown?",
      options: [
        "Combine Markdown with HTML and JavaScript where supported",
        "Markdown cannot be interactive",
        "Use only plain text",
        "Interactive elements are not possible"
      ],
      correct: 0
    },
    {
      id: 41,
      type: "advanced",
      question: "What is the best practice for documenting APIs with Markdown?",
      options: [
        "Use consistent structure with endpoints, parameters, examples, and response formats",
        "List all endpoints without details",
        "Only show successful responses",
        "API documentation doesn't need structure"
      ],
      correct: 0
    },
    {
      id: 42,
      type: "advanced",
      question: "How would you handle version-specific documentation?",
      options: [
        "Use separate branches or folders for each version with clear labeling",
        "Mix all versions together",
        "Document only the latest version",
        "Ignore versioning"
      ],
      correct: 0
    },
    {
      id: 43,
      type: "advanced",
      question: "What approach would you take for documentation with complex diagrams?",
      options: [
        "Use Mermaid.js or embed SVG images with alt text fallbacks",
        "Describe diagrams in text only",
        "Don't include diagrams",
        "Use low-quality images"
      ],
      correct: 0
    },
    {
      id: 44,
      type: "advanced",
      question: "How would you implement a searchable documentation system with Markdown?",
      options: [
        "Use a static site generator with search functionality like Docusaurus or MkDocs",
        "Markdown cannot be searchable",
        "Manual search only",
        "Search is not important"
      ],
      correct: 0
    },
    {
      id: 45,
      type: "advanced",
      question: "What is the best way to handle code output and error messages in documentation?",
      options: [
        "Use code blocks with appropriate styling to distinguish from executable code",
        "Don't show output",
        "Mix output with code",
        "Use images for output"
      ],
      correct: 0
    },
    {
      id: 46,
      type: "advanced",
      question: "How would you create a tutorial series in Markdown?",
      options: [
        "Use numbered files with clear prerequisites and navigation links between parts",
        "Put everything in one file",
        "Don't link between parts",
        "Tutorials don't need structure"
      ],
      correct: 0
    },
    {
      id: 47,
      type: "advanced",
      question: "What strategy would you use for documentation that needs code execution?",
      options: [
        "Use Jupyter notebooks or tools that combine Markdown with executable code",
        "Markdown cannot execute code",
        "Run code separately",
        "Don't show code execution"
      ],
      correct: 0
    },
    {
      id: 48,
      type: "advanced",
      question: "How would you handle documentation for a component library?",
      options: [
        "Create consistent templates with props tables, examples, and usage guidelines",
        "List components without details",
        "Show only code without explanation",
        "Components don't need documentation"
      ],
      correct: 0
    },
    {
      id: 49,
      type: "advanced",
      question: "What is the best approach for maintaining changelog documentation?",
      options: [
        "Use Keep a Changelog format with categorized changes and version headers",
        "List changes randomly",
        "Don't track changes",
        "Only track major changes"
      ],
      correct: 0
    },
    {
      id: 50,
      type: "advanced",
      question: "How would you create documentation that supports both developers and non-technical users?",
      options: [
        "Organize content by audience with appropriate technical depth and glossaries",
        "Write only for developers",
        "Write only for non-technical users",
        "Don't consider the audience"
      ],
      correct: 0
    }
  ]
}
