import { extractUniqueBlogCategories, fetchAndSortBlogPosts } from "app/lib/utils";
// import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
// import { BlogPostList } from "@/app/components/BlogPostList";
import { BlogPageHeader } from "@/app/components/BlogPageHeader";
// import { CategorySelect } from "@/app/components/CategorySelect";
import { FeaturedBlogCard } from "../components/FeaturedBlogCard";
import { AboutPattern } from "../components/SvgPatterns";

export default async function BlogPage({}: // searchParams,
{
  // searchParams: Promise<{ category?: string }>;
}) {
  const allPublishedBlogPosts = fetchAndSortBlogPosts();
  // const categories = Array.from(
  //   extractUniqueBlogCategories(allPublishedBlogPosts)
  // );
  // const category = (await searchParams).category?.toLowerCase() || "";

  // const displayedPosts = category
  //   ? allPublishedBlogPosts.filter((post) =>
  //       post.categories?.map((cat) => cat.toLowerCase()).includes(category)
  //     )
  //   : allPublishedBlogPosts;

  // const featuredPosts = !category && (
  //   <ul className="grid grid-cols-3 gap-2">
  //     {allPublishedBlogPosts.map((post) => (
  //       <FeaturedBlogCard
  //         key={post.slug}
  //         slug={post.slug}
  //         imageName={post.imageName}
  //         title={post.title}
  //         publishedAt={post.publishedAt}
  //         numReads={post.numReads}
  //       />
  //     ))}
  //   </ul>
  // );

  return (
    <div className="space-y-[40px] md:space-y-[80px]  md:px-5 my-[60px] md:my-[100px] w-full">
      <AboutPattern />
      <BlogPageHeader title="Insightful & helpful content curated for you." />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-2">
        {allPublishedBlogPosts.map((post) => (
          <FeaturedBlogCard
            key={post.slug}
            slug={post.slug}
            imageName={post.imageName}
            title={post.title}
            publishedAt={post.publishedAt}
            numReads={post.numReads}
          />
        ))}
      </ul>
      {/* <div>
        <CategorySelect categories={categories} currentCategory={category} />
        <BlogPostList posts={displayedPosts} />
      </div> */}
      {/* <NewsletterSignUp
        title={
          category ? `Stay updated on ${category} articles` : "Stay updated"
        }
        description="Sign up to receive notifications about new blog posts, insights, and exclusive content directly in your inbox."
        buttonText="Get Notified"
      /> */}
    </div>
  );
}
