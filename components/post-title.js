export default function PostTitle({ children }) {
  return (
    <h1
      className="text-4xl 2xl:text-7xl  font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
