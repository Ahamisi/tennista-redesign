import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticle, newsPosts } from "@/components/sections/news-article";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.title,
    alternates: { canonical: `/media/tennis-news/${post.slug}` },
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return <NewsArticle post={post} />;
}
