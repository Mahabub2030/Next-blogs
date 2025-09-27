// "use server";

// import { redirect } from "next/navigation";

// export const create = async (data: FormData) => {
//   const blogInfo = Object.fromEntries(data.entries());
//   const modifiedData = {
//     ...blogInfo,
//     authorId: 1,
//     tags: blogInfo.tags
//       .toString()
//       .split(",")
//       .map((tag) => tag.trim()),
//   };
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(modifiedData),
//   });
//   const result = await res.json();
//   console.log(modifiedData);
//   if (result) {
//     redirect("/blogs");
//   }
//   return result;
// };
"use server";

import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const blogInfo = Object.fromEntries(data.entries());

  const modifiedData = {
    ...blogInfo,
    authorId: 1,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  if (!res.ok) {
    console.error("Blog creation failed:", res.status, res.statusText);
    throw new Error("Failed to create blog");
  }

  const result = await res.json();
  console.log("Created blog:", result);

  redirect("/blogs");
};
