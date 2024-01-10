import { getPostBySlug } from 'lib/api';
import Container from 'compornents/container';

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return <h1>{title}</h1>;
};

const getStaticProps = async () => {
  const slug = 'schedule';

  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
};

export default Schedule;
export { getStaticProps };
