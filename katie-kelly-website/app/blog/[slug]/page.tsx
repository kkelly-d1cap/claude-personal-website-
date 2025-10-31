import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '../getPosts';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} | Katie Kelly`,
    description: post.frontmatter.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-medium-gray hover:text-orange transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          {/* Post Date */}
          <p className="text-sm text-medium-gray mb-4">
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          {/* Post Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {post.frontmatter.title}
          </h1>

          {/* Author */}
          <p className="text-medium-gray">By {post.frontmatter.author}</p>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange hover:text-charcoal font-semibold transition-colors"
          >
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  );
}
