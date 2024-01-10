import { getClient } from 'lib/api';

const client = getClient();

const Schedule = () => {
  return <h1>title</h1>;
};

const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs',
  });

  resPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  return {
    props: {},
  };
};

export default Schedule;
export { getStaticProps };

