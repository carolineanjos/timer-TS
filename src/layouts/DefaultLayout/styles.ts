import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 45rem;
  margin: 5rem;
  padding: 2.5rem;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-800']};
`
