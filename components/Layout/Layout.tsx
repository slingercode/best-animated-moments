import React, { ReactNode } from 'react';

import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
