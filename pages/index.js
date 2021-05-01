import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <ul>
        <li>
          <a>
          <Link href="/about">
            <a>About</a>
          </Link>
          </a>
        </li>
        <li>
          <a>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          </a>
        </li>
      </ul>
    </div>
  )
}
