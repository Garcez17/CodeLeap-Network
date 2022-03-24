import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    background: var(--white);
    padding: 2rem 1.5rem;
  }

  @media (min-width: 640px) {
    main {
      padding: 2.75rem 2.25rem;
    }
  }
`;

export const Form = styled.form`
  border: 1px solid var(--gray-700);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.375rem;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 1.875rem;
    gap: 0.5rem;

    input {
      padding: 0.5rem 1rem;
      color: var(--gray-800);
      border: 1px solid var(--gray-800);
      border-radius: 0.25rem;

      ::placeholder {
        font-size: 0.875rem;
        color: var(--gray-600);
      }
    }

    textarea {
      padding: 0.5rem 1rem;
      color: var(--gray-800);
      border: 1px solid var(--gray-800);
      border-radius: 0.25rem;
      height: 5rem;
      resize: none;

      ::placeholder {
        font-size: 0.875rem;
        color: var(--gray-600);
      }
    }
  }

  button {
    margin-top: 1.25rem;
    width: fit-content;
    align-self: end;
    padding: 0.5rem 2rem;
    background: var(--black);
    color: var(--white);
    font-weight: 700;
    border: none;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;