import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 0px;
      border-bottom: 1px solid transparent;
      color: ${({ theme }) => theme.colors['brand-blue']};
      transition: 0.4s;

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }

      span {
        font-size: ${({ theme }) => theme.textSizes['components-link']};
        text-transform: uppercase;
        font-weight: 700;
        height: 19px;
        line-height: 19px;
        border-bottom: 1px solid transparent;
      }

      &:hover {
        border-color: ${({ theme }) => theme.colors['brand-blue']};
      }
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors['base-span']};
      line-height: 0px;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
