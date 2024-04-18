import { Helmet } from 'react-helmet-async';

export default function DocumentTitle({ children }) {
  return (
    <Helmet>
      <title style={{color: 'black'}}>{children}</title>
    </Helmet>
  );
}
