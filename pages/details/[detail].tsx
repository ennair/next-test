import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import dynamic from 'next/dynamic';

const Heading = dynamic(() => import('../../components/Heading'));

export default function Detail({
  configuration,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Heading text='This is a detail page' />
  );
}

export const getServerSideProps: GetServerSideProps = async ({
}) => {

  return { props: { } };
};