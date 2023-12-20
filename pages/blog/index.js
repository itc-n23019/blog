import Container from 'compornents/contaiiner'
import Hero from 'compornents/hero';

const Blog = () => {
  return (
    <>
	  <Container>
        <Hero 
	  title="blog"
	  subtitle="Recent Posts"
	  />
	  </Container>
    </>
  );
};

export default Blog;

