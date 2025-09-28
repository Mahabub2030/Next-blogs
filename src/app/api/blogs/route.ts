export const blogs = [
  {
    id: 1,
    title: "My First Post",
    content: "This is a test post created via Postman after migration reset",
    thumbnail: "https://picsum.photos/seed/post1/400/300",
    isFeatured: true,
    tags: ["prisma", "migration", "reset"],
    view: 24,
    authorId: 1,
    createdAt: "2025-09-24T11:14:36.479Z",
    updatedAt: "2025-09-27T18:47:05.773Z",
  },
  {
    id: 2,
    title: "Our Fast Time ",
    content: "This is a test post1",
    thumbnail: "https://picsum.photos/seed/post1/400/300",
    isFeatured: false,
    tags: ["test", "prisma1"],
    view: 9,
    authorId: 1,
    createdAt: "2025-09-24T11:16:27.621Z",
    updatedAt: "2025-09-25T08:24:27.455Z",
  },
  {
    id: 3,
    title: "My First Post1",
    content: "This is a test post1",
    thumbnail: "https://picsum.photos/seed/post1/400/300",
    isFeatured: false,
    tags: ["test", "prisma1"],
    view: 3,
    authorId: 1,
    createdAt: "2025-09-25T04:06:34.109Z",
    updatedAt: "2025-09-25T08:07:25.599Z",
  },
  {
    id: 8,
    title: "JavaScript ES6+ Features",
    content:
      "Explore modern JavaScript features like arrow functions, promises, async/await, and modules.",
    thumbnail: "https://picsum.photos/seed/post6/400/300",
    isFeatured: false,
    tags: ["javascript", "es6", "frontend"],
    view: 17,
    authorId: 3,
    createdAt: "2025-09-25T09:29:53.262Z",
    updatedAt: "2025-09-27T07:31:57.812Z",
  },
  {
    id: 9,
    title: "JavaScript ES6+ Features1",
    content:
      "Explore modern JavaScript features like arrow functions, promises, async/await, and modules.",
    thumbnail: "https://picsum.photos/seed/post6/400/300",
    isFeatured: false,
    tags: ["javascript", "es6", "frontend"],
    view: 15,
    authorId: 3,
    createdAt: "2025-09-27T07:49:16.361Z",
    updatedAt: "2025-09-27T07:49:16.361Z",
  },
  {
    id: 10,
    title: "Aut suscipit illo oc",
    content: "Ea do et voluptatem ",
    thumbnail: "https://www.fuzonybu.net",
    isFeatured: true,
    tags: ["Next js", "React.js", "Node.js", "Javascripit"],
    view: 1,
    authorId: 1,
    createdAt: "2025-09-27T17:57:13.516Z",
    updatedAt: "2025-09-27T18:46:49.650Z",
  },
  {
    id: 11,
    title: "Node js In Next js",
    content:
      "Efficiently brand cross-media solutions via worldwide models. Dramatically administrate backend outsourcing without stand-alone growth strategies. Quickly unleash sustainable intellectual.",
    thumbnail:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=500&fm=webp",
    isFeatured: true,
    tags: ["Node Js"],
    view: 1,
    authorId: 1,
    createdAt: "2025-09-27T18:48:05.502Z",
    updatedAt: "2025-09-27T18:48:14.045Z",
  },
];

export async function GET() {
  return Response.json(blogs);
}

export const POST = async (request: Request) => {
  const blog = request.json();
};
