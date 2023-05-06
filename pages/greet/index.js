import { useRouter } from 'next/router';

export default function FirstPost() {
  const router = useRouter();
  const { query } = router;


  return <h1>Hello, {query.name}</h1>;
}
