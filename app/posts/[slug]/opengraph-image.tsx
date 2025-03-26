/* eslint-disable */

import { Post } from "@/lib/posts";
import { ImageResponse } from "next/og";

const URL = process.env.VERCEL_URL || "http://localhost:3000";
const alt = "Safwan Blog image preview";
const size = {
  width: 1200,
  height: 630,
};

export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;
  const post = (await fetch(`${URL}/api/posts/${slug}`).then((res) =>
    res.json()
  )) as Post;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 60,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <img
          alt={alt}
          src={`${URL}/og.png`}
          tw="absolute top-0 left-0 right-0 bottom-0"
        />
        <div tw="h-full w-full flex flex-col items-center justify-center">
          <h1 tw="text-3xl">{post.title}</h1>
          <p tw="text-xl mt-0">{post.description}</p>
          <p tw="text-xl m-[200px]">Publié le {post.publishedAt}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
