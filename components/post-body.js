import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto px-2">
      <div
        // className={styles.content}
        className={`${styles.content} max-w-full break-words`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
