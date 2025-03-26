import ArticleCard from "@/article/article-card";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const fileNames = await getPosts();

  return (
    <div className="space-y-4 w-full lg:max-w-4xl max-w-2xl xl:max-w-5xl mx-auto">
      {fileNames.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}
