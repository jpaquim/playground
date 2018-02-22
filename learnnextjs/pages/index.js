import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const shows = await res.json();
  console.log(`Show data fetched. Count: ${shows.length}`);
  return {
    shows,
  };
};

export default Index;
