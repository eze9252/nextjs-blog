import getPosts from "@/services/getPosts";
import Link from "next/link";

const HomePage = () => {
    const posts  = getPosts()
    
     return (
        <div className="flex flex-col space-y-2">
          {posts.map(post => (
            <div key={post.slug} className="flex flex-col">
              <Link className="text-blue-500" href={post.slug}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </Link>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      );
};

export default HomePage;
