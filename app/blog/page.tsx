import { type Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { Container } from "@/components/Container";
import Link from "next/link";
import { BlurImage } from "@/components/BlurImage";

export const metadata: Metadata = {
  title: "Blogs - Akrin IT Services",
  description:
    "Akrin provides enterprise-grade IT infrastructure services including 24/7 monitoring, cloud migrations, and network security to help your business operate reliably and securely.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default async function ArticlesIndex() {
  let blogs = await getAllBlogs();

  return (
    <Container
      title="Blogs | Akrin IT Services"
      className="pb-20"
      description="Latest insights on IT infrastructure, network security, and cloud migration strategies to maximize your operational efficiency."
    >
      <div className="pb-4 pt-4 md:pb-20 md:pt-10 relative">
        <div className="mx-auto max-w-2xl sm:text-center pb-10 ">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            IT Infrastructure Insights & Best Practices
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Expert guidance on managed services, cloud migrations, and enterprise-grade
            security solutions for your business.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {blogs.map((resource: any) => (
          <BlogCard
            link={"/blog/" + resource.slug}
            title={resource.title}
            description={resource.description}
            image={resource.image}
            author={resource.author}
            authorAvatar={resource.authorAvatar}
            publishedAt={resource.publishedAt}
          />
        ))}
      </div>
    </Container>
  );
}

const BlogCard = ({
  title,
  description,
  image,
  link,
  author,
  authorAvatar,
  publishedAt,
}: any) => {
  const truncate = (text: string) => {
    if (text.length > 100) {
      return text.substring(0, 200) + "...";
    } else {
      return text;
    }
  };
  return (
    <Link
      href={link}
      className="relative  rounded-2xl p-4 transition duration-200"
    >
      <div className="flex flex-col cursor-pointer">
        <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
          <BlurImage
            src={image}
            alt="thumbnail"
            fill={true}
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <div className="flex space-x-2  my-2 items-center"></div>
        <h2 className="font-bold my-4 text-2xl text-zinc-700">{title}</h2>
        <h4 className="text-base text-zinc-600">{truncate(description)}</h4>
      </div>
    </Link>
  );
};
