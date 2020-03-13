import React from 'react';
import {ReactComponent as GraphQL} from '../../assets/sbox-logo.svg';
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
      <GraphQL width={60} height={60} fill={colors.secondary} />
      <Title style={{color: colors.primary}}>
        {data.site.siteMetadata.title}
      </Title>
    </Wrapper>
  );
}
