import { getAllPosts } from 'lib/api'
import Meta from 'compornents/meta'
import Container from 'compornents/container'
import Hero from 'compornents/hero'
import Posts from 'compornents/posts'
import Pagination from 'compornents/pagination'
import { getPlaiceholder } from 'plaiceholder'

import { eyecatchLocal } from 'lib/constants'

const Home = ({ posts }) => {
  return (
    <Container>
      <Meta />

      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}
export const getStaticProps = async () => {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}

export default Home

