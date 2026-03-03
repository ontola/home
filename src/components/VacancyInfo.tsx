import React from 'react';
import { useTranslation } from 'next-i18next';

export const VacancyInfo = () => {
  const { t } = useTranslation('jobs');

  return (
    <>
      <h2>{t('whatWeDo.title')}</h2>
      <p>{t('whatWeDo.intro')}</p>
      <ul>
        {(
          t('whatWeDo.items', { returnObjects: true }) as {
            name: string;
            desc: string;
            link?: string;
          }[]
        ).map((item, idx) => (
          <li key={idx}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <strong>{item.name}:</strong>
              </a>
            ) : (
              <strong>{item.name}:</strong>
            )}{' '}
            {item.desc}
          </li>
        ))}
      </ul>

      <h2>{t('whatWeOffer.title')}</h2>
      <ul>
        {(t('whatWeOffer.items', { returnObjects: true }) as string[]).map(
          (item, idx) => (
            <li key={idx}>{item}</li>
          )
        )}
      </ul>
    </>
  );
};
