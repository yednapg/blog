import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts } from '../../lib/getPost'

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10 space-y-4 max-w-2xl m-auto px-4">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold color"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <div>
              <time className='color'>{distanceToNow(new Date(post.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'date'])

  return {
    props: { allPosts },
  }
}
