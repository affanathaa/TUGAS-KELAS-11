export interface BlogItem {
   id: number;
   title: string;
   slug: string;
   category: string;
   content: string;
 }
export const arrayBlog: BlogItem[] = [
   {
     id: 1,
     title: "Getting Started with Next.js",
     slug: "getting-started-with-nextjs",
      category: "keheningan",
     
     content: `
     Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.


     Key Features of Next.js:


     - Server-Side Rendering (SSR)
     - Static Site Generation (SSG)
     - File-based Routing
     - API Routes


     In this tutorial, we'll walk through the process of setting up a Next.js project and creating your first pages.
   `
   },
   

   {
     id: 2,
     title: "CSS Tips and Tricks",
     slug: "css-tips-and-tricks",
     category: "kebiasaan",
     content: `Improve your CSS skills with these handy tips and tricks
     `
   },
   {
     id: 3,
     title: "CSS Tips and Tricks",
     slug: "css-tips-and-tricks",
     category: "kucing",
     content: `Improve your CSS skills with these handy tips and tricks
     `
   },
     
  {
     id:4,
     title: "CSS Tips and Tricks",
     slug: "css-tips-and-tricks",
     category: "kucing",
     content: `Improve your CSS skills with these handy tips and tricks
     `
   },
   {
     id:4,
     title: "CSS Tips and Tricks",
     slug: "css-tips-and-tricks",
     category: "kucing",
     content: `Improve your CSS skills with these handy tips and tricks
     `
   },

  ];
export default BlogItem;