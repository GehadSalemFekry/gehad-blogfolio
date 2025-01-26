import Link from "next/link";

type FeaturedBlogCardProps = {
  slug: string;
  imageName: string;
  title: string;
  publishedAt: string;
  numReads: number;
};

export function FeaturedBlogCard({
  slug,
  imageName,
  title,
  publishedAt,
  numReads,
}: FeaturedBlogCardProps) {
  return (
    <li className="flex flex-col h-full m-2">
      <Link className="flex flex-col rounded-2xl h-full" href={`/blog/${slug}`}>
        <div className="relative rounded-2xl h-[225px] overflow-hidden">
          <img
            src={
              `/blog/${imageName}` ||
              "https://image.isu.pub/190918160849-8822f46c79620853d26cb2aad7175839/jpg/page_1_thumb_large.jpg"
            }
            alt=""
            className="rounded-2xl h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white px-4 py-3">
            <h2 className="tracking-tight text-lg font-medium leading-7">{title}</h2>

            <div className="text-sm mt-2 flex justify-between">
              <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                <svg className="w-5 h-5 text-slate-200" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 4.75V8.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 4.75V8.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 10.75H16.25"
                  ></path>
                </svg>

                <time dateTime={publishedAt}>
                  {new Date(publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-1 text-slate-200 text-xs">
                <svg className="text-slate-300 w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="2.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
                <p>{numReads} reads</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
