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
import Image from "next/image";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 6);

  return (
    <section>
      <HeaderPattern />
      <ProfilePicture />
      <div className="space-y-16">
        <section>
          <div className="mx-auto mt-6 relative max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-text-primary text-center text-balance font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.3] lg:leading-[64px] tracking-tighter">
              Hey, I&apos;m <span className="text-indigo-600 dark:text-indigo-600">Gehad</span>!
              <br /> A software engineer and quantum computing researcher.
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-8 md:space-y-16 relative">
          <AboutPattern />
          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>About</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-2xl sm:text-3xl tracking-tight max-w-lg leading-8 sm:leading-10">
              Here&apos;s what sets me apart and makes me unique
            </h2>
          </div>

          {/* About Grid */}
          <div>
            <HorizontalLine />
            <div className="px-4 sm:px-5 grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-2 grid-rows-[auto] lg:grid-rows-[14]">
              {/* About Me Bento */}
              <div className="col-span-1 lg:col-span-3 row-span-1 lg:row-span-12">
                <AboutMeBento linkTo="/about" />
              </div>

              {/* Calendar Bento */}
              <div className="col-span-1 lg:col-span-7 row-span-1 lg:row-span-5">
                <CalendarBento />
              </div>

              {/* LinkedIn Bento */}
              <div className="hidden lg:block col-span-1 lg:col-span-2 row-span-1 lg:row-span-7">
                <BentoCard height="h-[250px] lg:h-[300px]" linkTo={siteMetadata.linkedin}>
                  <div className="flex flex-col h-full space-y-4 group items-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-gray-300">
                      <Image
                        src="/profile_linkedin.jpeg"
                        alt="LinkedIn Profile"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-text-secondary text-sm mb-2">Gehad Salem</p>
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

              {/* Toolbox Bento */}
              <div className="col-span-1 lg:col-span-5 row-span-1 lg:row-span-7">
                <ToolboxBento linkTo="/toolbox" />
              </div>
            </div>
            <HorizontalLine />
          </div>
        </section>

        {/* Blog Section */}
        <section className="space-y-8 md:space-y-16 relative">
          <BlogPattern />
          <div className="space-y-4 relative">
            <span className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none">
              <BgGradient />
            </span>
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>Blog</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-2xl sm:text-3xl tracking-tighter max-w-lg leading-8 sm:leading-10">
              I like sharing my experiments and knowledge with others
            </h2>
          </div>

          <div className="z-10 sm:px-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-2 z-50">
              <HorizontalLine />
              {featuredArticles.length > 0 ? (
                <>
                  {featuredArticles.map((post) => (
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
