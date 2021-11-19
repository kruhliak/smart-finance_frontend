import Charts from 'components/Charts/AllCharts';
import ReportLine from 'components/ReportLine/ReportLine';
import ReportList from 'components/ReportList/ReportList';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import UserNav from 'components/UserNav';
import ReportBalance from 'components/Balance/Report/ReportBalance';
import Container from 'components/Container';
import { HomePageWrap } from './HomePage.styled';
import Background from 'components/Background';

import React, { useState } from 'react';

export default function ReportPage() {
  const [selectedCard, setSelectedCard] = useState('');
  const [category, setCategory] = useState(true);

  return (
    <>
      <Header>
        <Logo />
        <UserNav />
      </Header>

      <Background typePage="home" />

      <Container>
        <HomePageWrap>
          <ReportBalance />
          <ReportLine></ReportLine>
          <ReportList
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            category={category}
            setCategory={setCategory}
          ></ReportList>
          <Charts />
        </HomePageWrap>
      </Container>
    </>
  );
}
