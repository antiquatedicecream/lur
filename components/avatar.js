import Image from 'next/image'
import Link from 'next/link';

export default function Avatar({ author, route }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <div className="flex items-center">
      {route === 'translates' ?
        <a href={`/translates/translators/${author.lastName?.toLowerCase()}`}>
          <div className="text-lg font-adriane-text-italic font-bold underline">{name}</div>
        </a>
        :
          <div className="text-lg font-adriane-text-italic font-bold">{name}</div>}

    </div>
  )
}
