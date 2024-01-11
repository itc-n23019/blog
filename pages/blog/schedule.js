import { getPostBySlug } from '../../lib/api'
import Container from 'compornents/container'
import PostHeader from 'compornents/post-header'
import PostBody from 'compornents/post-body'
import ConvertBody from 'compornents/convert-body'
import PostCategories from 'compornents/post-categories'

import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'compornents/two-column'

import Image from 'next/image'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
                       <ConvertBody contentHTML={content} />
   
	  </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
	              <PostCategories categories={categories} />
</TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

const getStaticProps = async () => {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}

export { Schedule as default, getStaticProps }
