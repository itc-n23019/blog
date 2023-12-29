import Container from 'compornents/container'
import Hero from 'compornents/hero';
import Meta from 'compornents/meta'

const Blog = () => {
  return (
    <>
	  <Container>
<Meta pageTitle='ブログ'pageDesc="ブログの記事一覧" />        <Hero 
	  title="blog"
	  subtitle="Recent Posts"
	  />
	  </Container>
    </>
  );
};

export default Blog;

