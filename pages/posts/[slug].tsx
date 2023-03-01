import type { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import { getAllPosts, getPostBySlug } from '../../lib/getPost'
import markdownToHtml from '../../lib/markdownToHtml'
import Head from 'next/head'
import distanceToNow from '../../lib/dateRelative'

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | Gaurav Pandey</title>
      </Head>

      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div className="space-y-9 max-w-2xl m-auto px-4">
          <article>
            <header>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              {post.excerpt ? (
                <p className="mt-4">{post.excerpt}</p>
              ) : null}
              <time className="flex mt-4 color">
                {distanceToNow(new Date(post.date))}
              </time>
            </header>
            <div
              className="prose mt-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      )}
    </Container>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'excerpt',
    'date',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
