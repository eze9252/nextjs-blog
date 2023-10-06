import MarkdownPreview from "@/components/markdownPreview";
import getPost from "@/services/getPost";

const Post = ({ params: { slug } }: { params: { slug: string } }) => {
    const post  = getPost(slug)
    
     return (
        <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <h2 className="font-serif">{post.category}</h2>
        <MarkdownPreview source={post.content} />
        <p>{post.author}</p>
        <p>{post.date}</p>
      </div>
      );
};

export default Post;
