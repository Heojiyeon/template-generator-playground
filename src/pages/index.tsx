import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TG Playground</title>
        <meta
          name="description"
          content="create template with TG Playground!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>템플릿이 존재하지 않습니다.</div>
        <FloatingButton>
          <button onClick={() => router.push('/create')}>
            템플릿 생성하기
          </button>
        </FloatingButton>
      </div>
    </>
  );
}
const FloatingButton = styled('div')`
  right: 2rem;
  bottom: 10rem;
  position: fixed;
`;
