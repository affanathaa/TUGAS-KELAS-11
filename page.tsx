import Image from 'next/image';
import Link from 'next/link';
import { arrayBlog } from '../../../data/blog';


type Prop = {
   params: Promise<{
    id: string
   }>
}


export default async function ProjectDetail(props: Prop) {
 const {id} = await props.params
 const blog = arrayBlog.find(p => p.id === parseInt(id)); 
 if (!blog) return <div>Project not found</div>;


 return (
   <div className="container mx-auto p-4">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       <Link href="/blog" className="inline-block mb-6 text-soft-brown hover:underline">
         ← Back to blog
       </Link>
       <p className='font-semibold text-sm text-soft-brown'>{blog.category}</p>
       <h1 className="text-2xl font-bold text-white">{blog.title}</h1>
       <p className="mb-4">{blog.content}</p>
        </div>
   </div>
 );
}