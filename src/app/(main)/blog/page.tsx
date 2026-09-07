import BlogsCard from '@/components/site/blogs-card'
import React from 'react'

const BlogsPage = () => {
  return (
    <section className='py-10'>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-muted-foreground">
          <span className="text-primary">Thoughts</span> beyond the equations and code
        </h1>
        <p className="text-lg text-muted-foreground">
          Thought pieces, essays, and deep dives exploring physics, code, and philosophy. Tech, Science, Humanties - all covered.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-2">
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </section>
  )
}

export default BlogsPage