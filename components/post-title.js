export default function PostTitle({ children }) {
  return (
    <h1
      className="max-2xl:text-4xl 2xl:text-6xl font-bold tracking-tighter max-md:leading-tight md:leading-none text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
