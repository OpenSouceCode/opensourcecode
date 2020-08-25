import Router from 'next/router';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react'

import { getPulls } from '../../firestore/projectData';
import styles from '../../scss/projectInfo.module.scss';
import Spinner from '../Spinner';


const PullRequests = ({url}) => {
  const [pulls, setPulls] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPullsForRepo() {
    getPulls(Router.query.pid).then((res) => {
      setPulls(res);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (Router.query.pid) {
      getPullsForRepo();
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        {pulls != null &&
        pulls &&
        pulls.map((pull) => {
          return (
            <div className={styles['data-item']} key={pull.node_id}>
              <a
                href={pull.html_url}
                target="_blank"
                rel="noopener noreferrer">
                <div className={styles['data-left-col']}>
                  <h3 className={styles['issue-name']}>{pull.title}</h3>
                  <p>
                    #{pull.number} Opened on{' '}
                    {pull.created_at.slice(0, 10)} by {pull.user.login}
                  </p>
                </div>
              </a>
              <div className={styles['data-right-col']}>
                {pull.labels.map((label) => {
                  return (
                    <p
                      key={label.node_id}
                      className={styles.tags}
                      style={{ backgroundColor: `#${label.color}` }}>
                      {label.name}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
        {pulls != null && pulls.length === 0 && (
          <div className={styles['not-found']}> No Issues Found ! </div>
        )}
        <div className={styles['all-button']}>
          <a href={`${url}/issues`} target="_blank" rel="noopener noreferrer">
            <button type="button" disabled={url == null}>
              All Issues
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

PullRequests.propTypes = {
  url: PropTypes.string.isRequired,
}

export default PullRequests;