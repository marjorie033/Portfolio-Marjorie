// components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, icon = "/src/assets/cat-black-logo.svg" }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Marj's Portfolio` : "Marj's Portfolio"}</title>
      <link rel="icon" type="image/svg+xml" href={icon} />
    </Helmet>
  );
}