import { BgGradient } from "./components/BgGradient";
import { HorizontalLine } from "./components/HorizontalLine";
// import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ToolboxBento } from "./components/ToolboxBento";
import { ProfilePicture } from "./components/ProfilePicture";
import { AboutMeBento } from "./components/AboutMeBento";
import { AboutPattern, BlogPattern, HeaderPattern } from "./components/SvgPatterns";
import { siteMetadata } from "app/data/siteMetadata";
import { BentoCard } from "./components/BentoCard";
import { Button } from "./components/Button";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 3);

  return (
    <section>
      <HeaderPattern />
      <ProfilePicture />
      <div className="space-y-16">
        <section>
          <div className="mx-auto mt-6 relative max-w-4xl">
            <h1 className=" text-text-primary text-center text-balance font-medium text-6xl leading-[64px] tracking-tighter">
              Hey, I&apos;m <span className="text-indigo-600 dark:text-indigo-600">Gehad</span>!
              <br /> A software engineer and quantum computing researcher.
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-16 relative">
          <AboutPattern />
          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>About</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tight max-w-lg leading-10">
              Here&apos;s what sets me apart and makes me unique
            </h2>
          </div>

          {/* About Grid */}
          <div>
            <HorizontalLine />
            <div className="px-5 grid grid-cols-1 md:grid-cols-10 gap-2 grid-rows-[14]">
              <div className="col-span-3 row-span-12">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="col-span-7 row-span-5">
                <CalendarBento />
              </div>

              <div className="col-span-2 row-span-7">
                <BentoCard height="h-[300px]" linkTo={siteMetadata.linkedin}>
                  <div className="flex flex-col h-full space-y-4 group items-center">
                    {/* Circle for LinkedIn Picture or Logo */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                      <img
                        src="./profile_linkedin.jpeg"
                        alt="LinkedIn Profile"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-text-secondary text-sm  mb-2">Gehad Salem</p>
                      <h2 className="text-base font-medium">Let&apos;s connect over LinkedIn</h2>
                    </div>

                    <div className="flex justify-center">
                      <Button variant="secondary" href={siteMetadata.linkedin} target="_blank">
                        Connect
                      </Button>
                    </div>
                  </div>
                </BentoCard>
              </div>

              <div className="col-span-5 row-span-7">
                <ToolboxBento linkTo="/toolbox" />
              </div>
            </div>
            <HorizontalLine />
          </div>
        </section>

        {/* Blog Section */}
        <section className="space-y-16 relative">
          <BlogPattern />
          <div className="space-y-4 relative">
            <span className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none">
              <BgGradient />
            </span>
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>Blog</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tighter max-w-lg leading-10">
              I like sharing my experiments and knowledge with others
            </h2>
          </div>

          <div className="z-10 px-5">
            <ul className="grid grid-cols-3 gap-2 z-50">
              <HorizontalLine />
              {featuredArticles.length > 0 ? (
                <>
                  {featuredArticles.slice(0, 3).map((post) => (
                    <FeaturedBlogCard
                      key={post.slug}
                      slug={post.slug}
                      imageName={post.imageName}
                      title={post.title}
                      publishedAt={post.publishedAt}
                      numReads={post.numReads}
                    />
                  ))}
                </>
              ) : (
                <p>Nothing to see here yet...</p>
              )}
            </ul>
            <HorizontalLine />
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section>
          <NewsletterSignUp />
        </section> */}
      </div>
    </section>
  );
}
