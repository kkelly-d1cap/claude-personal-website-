import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-charcoal mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-charcoal mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-charcoal mb-3 mt-5">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-medium-gray mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-medium-gray space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-medium-gray space-y-2">{children}</ol>
    ),
    li: ({ children }) => <li className="text-lg">{children}</li>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-orange hover:text-charcoal transition-colors underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange pl-4 italic my-6 text-medium-gray">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-light-gray px-2 py-1 rounded text-sm font-mono text-charcoal">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-charcoal text-white p-4 rounded-lg overflow-x-auto mb-6">
        {children}
      </pre>
    ),
    ...components,
  };
}
