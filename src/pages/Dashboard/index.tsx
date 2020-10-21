import React, { useEffect } from 'react';

import Layout from 'components/Layout';

import APIService from 'services/api';

import * as s from './styles';

export default function Dashboard() {
  useEffect(() => {
    APIService.getAllAccounts().then(res => console.log('respondeu', res));
  }, []);

  return (
    <s.DashboardContainer>
      <Layout>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto, esse
        minima asperiores accusamus suscipit temporibus. Dolor modi cumque,
        quibusdam illum sunt harum voluptates cupiditate? Nesciunt consectetur,
        sint nisi, ullam, odit reprehenderit repudiandae pariatur sed distinctio
        ex ab eos quam nam officia. Quisquam neque non eum vel doloremque quae,
        unde minima illo soluta similique dolores eius facilis? Explicabo saepe
        quaerat odio in ad dolorum eaque quia natus cum culpa maiores suscipit
        quod mollitia, consectetur cupiditate. Obcaecati magni doloremque enim
        veniam ut quia numquam dolor aspernatur eligendi quae maiores ipsa
        tempora, aut, ex ipsam officiis nemo vel, reprehenderit consequatur
        quidem. Eaque!
      </Layout>
    </s.DashboardContainer>
  );
}
