import Layout from '@/app/Component/Layout';

export const meta = {
  author: 'Georgey',
  title: 'Introduction to Technical Writing',
  slug: 'introduction-to-technical-writing',
  topics: [
    'technical writing',
    'software engineering',
    'technical writing basics',
  ],
};

# fp

Fungsional programming adalah sebuah paradigma programming yang mengaplikasikan fungsi murni untuk
memecahkan masalah rumit.

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;