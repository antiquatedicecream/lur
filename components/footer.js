import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="flex text-center bg-uil-post py-12 font-adriane-text mt-32">
      <Container>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div>
            <a href="https://ukrainianinstitute.org.uk/" target="_blank" className="underline">©2021-2024 Ukrainian Institute London</a>
          </div>
          <div>
            Twitter: <a href="https://twitter.com/Ukr_Institute" target="_blank" className="underline">@Ukr_Institute</a>
          </div>
          <div>
            Facebook: <a href="https://www.facebook.com/UkrainianInstitute.London" target="_blank" className="underline">@UkrainianInstitute.London</a>
          </div>
          <div>
            Instagram: <a href="https://www.instagram.com/ukr_institute/" target="_blank" className="underline">@ukr_institute</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
