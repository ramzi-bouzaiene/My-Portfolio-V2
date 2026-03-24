import { useState, useEffect } from 'react';
import { Skeleton, Box, Alert } from '@mui/material';
import { IoLogoMedium } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { fetchMediumArticles, MediumArticle } from '../../services/mediumService';
import styles from './Articles.module.css';

interface ArticleCardProps {
  article: MediumArticle;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  const { t } = useTranslation();
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.card} data-aos="fade-up" data-aos-delay={index * 100}>
      <div className={styles.imageContainer}>
        <img
          src={article.thumbnail}
          alt={article.title}
          className={styles.thumbnail}
          loading="lazy"
        />
        <div className={styles.mediumBadge}>
          <IoLogoMedium />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{article.description}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{formatDate(article.pubDate)}</span>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.readMore}
          >
            {t('articles.readMore')} <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className={styles.skeletonCard}>
    <Skeleton variant="rectangular" className={styles.skeletonImage} />
    <div className={styles.skeletonContent}>
      <Skeleton variant="text" width="80%" height={28} />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="60%" />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Skeleton variant="text" width={80} />
        <Skeleton variant="rounded" width={100} height={32} />
      </Box>
    </div>
  </div>
);

export const MediumArticles = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMediumArticles(4);
        setArticles(data);
      } catch (err) {
        setError(t('articles.error'));
        console.error('Failed to load articles:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [t]);

  return (
    <section>
      <h1 className={styles.sectionTitle} data-aos="slide-down">
        <IoLogoMedium className={styles.titleIcon} />
        {t('articles.title')}
      </h1>

      {loading ? (
        <div className={styles.grid}>
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : error ? (
        <Alert severity="error" className={styles.errorAlert}>
          {error}
        </Alert>
      ) : articles.length === 0 ? (
        <Alert severity="info" className={styles.infoAlert}>
          {t('articles.noArticles')}
        </Alert>
      ) : (
        <>
          <div className={styles.grid}>
            {articles.map((article, index) => (
              <ArticleCard key={article.link} article={article} index={index} />
            ))}
          </div>

          <div className={styles.viewAll}>
            <a
              href="https://medium.com/@ramzibouzaiene.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAllBtn}
            >
              <IoLogoMedium />
              {t('articles.viewAll')}
              <FaExternalLinkAlt />
            </a>
          </div>
        </>
      )}
    </section>
  );
};
