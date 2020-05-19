import React, { useState } from 'react';
import styles from '../../css/settings.module.css';

const Aboutus = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const onChange = (e) => {
    setTag(e.target.value);
  };

  const removeTag = (indexToRemove) => {
    setTags([...tags.filter((element, index) => index !== indexToRemove)]);
  };

  return (
    <div>
      <div className={styles['basic-head']}>
        <p>What do you do?</p>
      </div>
      <div className={styles.qns}>
        <p>Title</p>
        <input
          className={styles.input}
          placeholder="Developer, Student, Programmer"
        />
        <p>About</p>
        <input
          className={styles['input-bio']}
          placeholder="A short bio of less than 120 characters"
        />
        <p>Skills</p>
        <form
          className={styles.skills}
          onSubmit={(e) => {
            setTags([...tags, tag]);
            setTag('');
            e.target.reset();
            e.preventDefault();
          }}
        >
          <input
            className={styles.input}
            id="myInput"
            placeholder="Enter your skills"
            onKeyUp={(e) => onChange(e)}
          />
          <input type="submit" className={styles.addButton} value="+" />
        </form>
        <ul className={styles.skillList}>
          {tags.map((Tag, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={styles.skill}>
              <li>{Tag}</li>
              <div
                style={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontWeight: '600',
                }}
                role="button"
                tabIndex={0}
                onClick={() => removeTag(index)}
                onKeyDown={() => removeTag(index)}
              >
                x
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Aboutus;
