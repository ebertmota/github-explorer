import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório..." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48302018?s=460&v=4"
            alt="Ebert Mota"
          />
          <div>
            <strong>ebertmota/tracking-corona</strong>
            <p>
              React native app to show number of cases ,suspects, and deaths by
              coronavirus in Brazil.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48302018?s=460&v=4"
            alt="Ebert Mota"
          />
          <div>
            <strong>ebertmota/tracking-corona</strong>
            <p>
              React native app to show number of cases ,suspects, and deaths by
              coronavirus in Brazil.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48302018?s=460&v=4"
            alt="Ebert Mota"
          />
          <div>
            <strong>ebertmota/tracking-corona</strong>
            <p>
              React native app to show number of cases ,suspects, and deaths by
              coronavirus in Brazil.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
