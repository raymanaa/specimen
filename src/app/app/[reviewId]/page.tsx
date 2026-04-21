import { notFound } from "next/navigation";
import { ReviewReader } from "@/components/review-reader";
import { REVIEWS, getReview } from "@/lib/corpora";

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ reviewId: r.slug }));
}

export const dynamicParams = false;

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const { reviewId } = await params;
  const review = getReview(reviewId);
  if (!review) notFound();
  return <ReviewReader review={review} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const { reviewId } = await params;
  const review = getReview(reviewId);
  if (!review) return { title: "Review · Specimen" };
  return {
    title: `${review.title} · Specimen`,
    description: review.abstract,
  };
}
