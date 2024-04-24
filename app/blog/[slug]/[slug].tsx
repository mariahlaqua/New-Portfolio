import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

const POSTS_FOLDER = path.join(process.cwd(), "app/public/posts");

const getPost = async (slug: string) => {
  const filePath = path.join(POSTS_FOLDER, `${slug}.mdx`);
  
  try {
    await access(filePath)
    const fileContent = await readFile(filePath, { encoding: "utf8" });
    console.log(fileContent)
    return fileContent;
  } catch (err) {
    return console.log("Post not found");
  }

}

  export default async function PostPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const router = useRouter();
    const markdown = await getPost(router.query.slug as string);
  
    if (!markdown) {
      console.log("Not markdown")
      notFound();
    }
  
    const { content} = await compileMDX<{ title: string }>({
      source: markdown,
      options: { parseFrontmatter: true },
    });
  
    return (
        <>{content}</>
    )
  }