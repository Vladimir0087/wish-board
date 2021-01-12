import classNames from 'classnames';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import styles from '@/components/SmallWish/SmallWish.scss';
import { TDataWish } from '@/types/data';

import Avatar from '../Avatar';
import MaterialIcon from '../MaterialIcon';
import Price from '../Price';
import WishImage from '../WishImage';

interface WishProps extends HTMLAttributes<HTMLDivElement> {
  wishData: TDataWish;
}

const SmallWish: FunctionComponent<WishProps> = ({ wishData }) => {
  const [isStatsShown, setStatsShown] = React.useState<boolean | HTMLElement>(false);

  const hideStats = () => {
    setStatsShown(false);
  };

  const showStats = () => {
    setStatsShown(true);
  };

  return (
    <div className={styles.wish_wrapper}>
      <div className={styles.wish_container}>
        <div className={styles.wish_img} onMouseLeave={hideStats} onMouseEnter={showStats}>
          <WishImage
            imageUrl={wishData.image.small}
            name={wishData.name}
            color={wishData.backgroundColor}
          />
          <Link className={styles['link']} to={`/wish/${wishData.id}`}>
            <div
              className={classNames(
                styles.wish_container_curtain,
                isStatsShown ? styles.wish_container_curtain_display : ''
              )}
            />
          </Link>
          <Price price={wishData.price} />
          <div
            className={classNames(
              styles.wish_stats_container,
              isStatsShown ? styles.wish_stats_container_display : ''
            )}
          >
            <MaterialIcon color="red" iconName="heart" count={wishData.likeCount} />
            <MaterialIcon color="orange" iconName="active" count={wishData.activeCount} />
            <MaterialIcon color="green" iconName="fulfilled" count={wishData.fulfilledCount} />
            <MaterialIcon color="blue" iconName="comments" count={wishData.commentCount} />
          </div>
        </div>
        <div className={styles.wish_description}>
          <Avatar creator={wishData.creator} size="normal" />
          <Link className={styles['link']} to={`/wish/${wishData.id}`}>
            <span className={styles.wish_name}>{wishData.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallWish;
