import { Blog } from "@/mocks/blog.test"

const BlogPage = () => {
    return (
        <section className="py-6 sm:py-12 text-gray-100 font-BAI">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl text-primary-color font-bold font-IBM">Carbon Credit Blog</h2>
                    <p className="text-sm text-gray-400">Explore a wealth of informative articles, expert tips, and actionable advice on a wide range of credit topics. </p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {Blog.map((blog, index) => (
                        <article className="flex flex-col bg-slate-50" key={index}>
                            <a rel="noopener noreferrer" href="#">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blog.imageURL} />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-primary-color">{blog.category}</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold text-secondary-color">{blog.title}</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-secondary-color">
                                    <span>{blog.date}</span>
                                    <span>{blog.views} views</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogPage