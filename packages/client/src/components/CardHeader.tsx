import React from 'react'
import { styled } from '@app/theme'
import type { DatabaseQuery, QueryMeta } from '@types'
import QueryTooltip from './QueryTooltip'

interface Props {
  title: string,
  query?: DatabaseQuery,
  meta: QueryMeta,
  description: string
}

export default function CardHeader ({ title, query, meta, description }: Props) {
  return (
    <>
      <StyledHeading>{title}
        {query && <QueryTooltip query={query} meta={meta} />}
      </StyledHeading>
      {description &&
        <StyleDescription>{description}</StyleDescription>}
    </>
  )
}

const StyledHeading = styled('h3', {
  display: 'flex',
  margin: 0,
  marginBottom: '$2',
  color: '$neutral20',
  fontWeight: 400
})

const StyleDescription = styled('p', {
  fontSize: '$small',
  lineHeight: 1.4,
  color: '$neutral30',
  marginTop: -8,
  marginBottom: '$2'
})
