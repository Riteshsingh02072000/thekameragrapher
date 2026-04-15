import { Link } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';

function NotFoundPage() {
  return (
    <PageTransition className="page page--not-found">
      <section className="section section--not-found">
        <p className="eyebrow">404</p>
        <h1>This frame does not exist.</h1>
        <p>The gallery you were looking for could not be found.</p>
        <Link className="button" to="/">
          Return Home
        </Link>
      </section>
    </PageTransition>
  );
}

export default NotFoundPage;
