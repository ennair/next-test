import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import dynamic from 'next/dynamic';

const Heading = dynamic(() => import('../components/Heading'));

export default function Route({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Heading text='This is another page' />
  );
}

export const getServerSideProps: GetServerSideProps = async ({
}) => {

  return { props: { } };
};