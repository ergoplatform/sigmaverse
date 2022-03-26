import React from 'react';
import styles from './Dapps.module.scss';

export default function DappsCard({ data }: any) {
  return (
    <>
      {data.map(({ logo, preview, name, description, website }: any) => (
        <a href={website} target="_blank" key={website} className={styles.dappsCard}>
          <div className={styles.dappsCard__preview}>
            <img src={preview} alt={`${name} preview`} />
          </div>
          <div className={styles.dappsCard__content}>
            <div className={styles.dappsCard__logotype}>
              <img src={logo} alt={`${name} logotype`} />
            </div>
            <div className={styles.dappsCard__name}>{name}</div>
            <p className={styles.dappsCard__description}>
              {description.length > 110 ? `${description.slice(0, 110)}...` : description}
            </p>
          </div>
        </a>
      ))}
    </>
  );
}
