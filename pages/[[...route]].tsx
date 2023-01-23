import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Heading from '../components/Heading';
import Image from 'next/image';
import picture from '../public/minion.jpg';

export default function Route({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Heading text='This is another page' />
      <Image
        src={picture}
        alt='Picture alt'
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
}) => {

  return { props: { } };
};