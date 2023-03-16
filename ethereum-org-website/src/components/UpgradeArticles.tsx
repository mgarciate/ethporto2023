import React from "react"
import styled from "@emotion/styled"
import { dannyArticles, benArticles } from "../data/ethUpgradeArticles"

import CardList from "./CardList"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const LeftColumn = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
  margin-right: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 0rem;
  }
`

const RightColumn = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
  margin-left: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 0rem;
  }
`

const UpgradeArticles: React.FC = () => (
  <Container>
    <LeftColumn>
      <h4>Danny Ryan (Ethereum Foundation)</h4>
      <CardList content={dannyArticles} />
    </LeftColumn>
    <RightColumn>
      <h4>Ben Edgington (PegaSys, ConsenSys)</h4>
      <CardList content={benArticles} />
    </RightColumn>
  </Container>
)

export default UpgradeArticles
