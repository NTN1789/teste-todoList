import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-wrap: wrap;
  gap: 15px;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 640px) {
    padding: 10px 5px
  }

  &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #0007;
    }
`