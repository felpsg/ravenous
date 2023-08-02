import React from 'react';
import './footer.css';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          © {year} Ravenoso | Todos os direitos reservados.
        </p>
        <p className="text-center">
          Feito com{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          por{' '}
          <a
            href="https://github.com/felpsg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
