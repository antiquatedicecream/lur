import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="flex text-center bg-uil-post py-12 font-adriane-text mt-32">
      <Container>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div>
            <a href="https://www.londonukrainianreview.org/" target="_blank" className="underline">©2021-2025 London Ukrainian Review</a>
          </div>
          <div>
            Twitter: <a href="https://twitter.com/ukrlondonreview" target="_blank" className="underline">@ukrlondonreview</a>
          </div>
          {/*<div>*/}
          {/*  Facebook: <a href="https://www.facebook.com/UkrainianInstitute.London" target="_blank" className="underline">@UkrainianInstitute.London</a>*/}
          {/*</div>*/}
          <div>
            Instagram: <a href="https://www.instagram.com/londonukrainianreview/" target="_blank" className="underline">@londonukrainianreview</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
