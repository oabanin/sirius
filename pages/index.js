import Head from 'next/head'

import styled from '@emotion/styled';
import Aside from "../components/aside";
import Content from "../components/content";

const PageContainer = styled.div`
  display:flex;
  min-width: 100vw;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sirius Future</title>
      </Head>
      <PageContainer>
        <Aside />
        <Content />
      </PageContainer>
    </>
  )
}
