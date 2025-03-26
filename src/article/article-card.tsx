import { Post } from "@/lib/posts";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "../components/ui/badge";
import { Card, CardFooter, CardHeader } from "../components/ui/card";

const ArticleCard = ({ article }: { article: Post }) => {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-primary">
      <Link href={`/posts/${article.slug}`}>
        <CardHeader>
          <div className="space-y-1">
            <h3 className="line-clamp-1 text-base font-medium transition-colors group-hover:text-primary">
              {article.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {article.description}
            </p>
          </div>
        </CardHeader>
        <CardFooter className="text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.publishedAt}>
              {format(article.publishedAt, "EEEE")}
            </time>
          </div>
          {!article.published && (
            <Badge variant="secondary" className="ml-auto">
              Draft
            </Badge>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ArticleCard;
