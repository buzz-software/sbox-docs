import React from 'react';
import {ReactComponent as GraphQL} from '../../assets/saasbox-logo-round.jpg';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';
import {colors} from 'gatsby-theme-apollo-core';

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center'
});

const Title = styled.span({
  fontSize: 24,
  marginLeft: 16
});

export default function Logo() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <Wrapper>
      <GraphQL width={48} height={48} fill={colors.primary} />
      <Title style={{color: colors.secondary}}>
        {data.site.siteMetadata.title}
      </Title>
    </Wrapper>
  );
}
