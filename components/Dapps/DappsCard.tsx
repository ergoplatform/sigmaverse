import React from 'react';
import { BACKEND_URL } from '../../api/axios';
import styles from './Dapps.module.scss';

export default function DappsCard({ data }: any) {
  return (
    <>
      <div className="dapps">
        {data.map(({ attributes: { logotype, preview, name, description, websiteLink } }: any) => (
          <a href={websiteLink} target="_blank" key={websiteLink} className={styles.dappsCard}>
            <div className={styles.dappsCard__preview}>
              <img
                src={`${BACKEND_URL}${preview?.data?.attributes?.url}`}
                alt={`${name} logotype`}
              />
            </div>
            <div className={styles.dappsCard__content}>
              <div className={styles.dappsCard__logotype}>
                <img
                  src={`${BACKEND_URL}${logotype?.data?.attributes?.url}`}
                  alt={`${name} logotype`}
                />
              </div>
              <div className={styles.dappsCard__name}>{name}</div>
              <p className={styles.dappsCard__description}>
                {description.length > 110 ? `${description.slice(0, 110)}...` : description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
