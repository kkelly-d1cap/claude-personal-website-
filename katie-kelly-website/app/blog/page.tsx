import Link from 'next/link';
import { getPosts } from './getPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Katie Kelly',
  description: 'Insights on FinTech operations, team building, and scaling platforms.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">
            Blog
          </h1>
          <p className="text-xl text-medium-gray">
            Thoughts on operations, leadership, and building scalable systems.
          </p>
        </div>

        {/* Blog Posts List */}
        {posts.length === 0 ? (
          <p className="text-medium-gray text-center py-12">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-12 last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  {/* Post Date */}
                  <p className="text-sm text-medium-gray mb-2">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>

                  {/* Post Title */}
                  <h2 className="text-3xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors">
                    {post.frontmatter.title}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-lg text-medium-gray mb-4">
                    {post.frontmatter.excerpt}
                  </p>

                  {/* Read More Link */}
                  <span className="text-orange font-semibold group-hover:text-charcoal transition-colors">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
