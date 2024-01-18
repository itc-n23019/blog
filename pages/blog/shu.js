import { getPostBySlug,getAllSlugs } from 'lib/api'
import Container from 'compornents/container'
import PostHeader from 'compornents/post-header'
import PostBody from 'compornents/post-body'
import ConvertBody from 'compornents/convert-body'
import PostCategories from 'compornents/post-categories'
import { extractText } from 'lib/extract-text'
import Meta from 'compornents/meta'

import {
  Twocolumn,
  TwocolumnMain,
  TwocolumnSidebar
} from 'compornents/two-column'

import Image from 'next/image'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

const Post = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

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
      placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}

	  />
        </figure>
        <Twocolumn>
          <TwocolumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwocolumnMain>
          <TwocolumnSidebar>
            <PostCategories categories={categories} />
          </TwocolumnSidebar>
        </Twocolumn>
      </article>
    </Container>
  )
}

const getStaticPaths = async () => {
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

const getStaticProps = async (context) => {
  const slug =context.params.slug
 

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64


  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description
    }
  }
}

export { Post as default, getStaticProps, getStaticPaths }
