import React from 'react';
import './Footer.scss';
import {DEV_REPO_URL} from "../../utils/Constants";

export const Footer = () => {
  return (
      <div className="footer">
          <span>
              Copyright © 2021 <a target="_blank" rel="noreferrer" href={DEV_REPO_URL}>Michael Soultanidis</a>
          </span>
      </div>
  );
}

