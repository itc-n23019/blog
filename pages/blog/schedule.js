import { getPostBySlug} from 'lib/api'
import Container from 'components/container'

const client = getClient();

const Schedule = (title,
  publish,
  content,
  eyecatch,
  categories,) => {
  return <h1>{title}</h1>;
};

const getStaticProps = async () => {
  const slug = 'schedule'
 
	const post = await getPostBySlug(suug)
  return {
    props: {  title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
},
  };
};

export default Schedule;
export { getStaticProps };

