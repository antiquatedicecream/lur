import { useEffect, useState } from 'react'
import CoverImage from '../components/cover-image'

export default function ImageTest() {
  const [measurements, setMeasurements] = useState([])
  const [baseline, setBaseline] = useState(null)

  // Sample test images - replace with real image URLs from your WordPress content
  // Example: Find a real image URL by viewing a post and copying the featured image URL
  const testImages = [
    {
      id: 'hero-large',
      title: 'Hero Large Image',
      coverImage: { sourceUrl: 'https://secure.gravatar.com/avatar/placeholder' },
      slug: 'test-hero',
      route: 'posts'
    },
    {
      id: 'preview-standard',
      title: 'Preview Standard Image',
      coverImage: { sourceUrl: 'https://secure.gravatar.com/avatar/placeholder' },
      slug: 'test-preview',
      route: 'posts'
    }
  ]

  useEffect(() => {
    // Wait for images to load
    const timer = setTimeout(() => {
      const imgs = document.querySelectorAll('[data-test-image]')
      const measured = Array.from(imgs).map(container => {
        const img = container.querySelector('img')
        const span = container.querySelector('span')

        return {
          id: container.dataset.testImage,
          containerWidth: container.offsetWidth,
          containerHeight: container.offsetHeight,
          imgWidth: img?.offsetWidth || 0,
          imgHeight: img?.offsetHeight || 0,
          imgNaturalWidth: img?.naturalWidth || 0,
          imgNaturalHeight: img?.naturalHeight || 0,
          aspectRatio: img?.offsetWidth && img?.offsetHeight
            ? (img.offsetWidth / img.offsetHeight).toFixed(4)
            : 'N/A',
          spanWidth: span?.offsetWidth || 0,
          spanHeight: span?.offsetHeight || 0,
        }
      })
      setMeasurements(measured)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const saveBaseline = () => {
    const data = {
      timestamp: new Date().toISOString(),
      nextVersion: '12.3.4', // Update this when testing
      measurements: measurements
    }
    localStorage.setItem('image-baseline', JSON.stringify(data))
    setBaseline(data)
    alert('Baseline saved to localStorage!')
  }

  const loadBaseline = () => {
    const saved = localStorage.getItem('image-baseline')
    if (saved) {
      setBaseline(JSON.parse(saved))
    } else {
      alert('No baseline found')
    }
  }

  const compareToBaseline = () => {
    if (!baseline) {
      alert('Please load baseline first')
      return
    }

    let allMatch = true
    const differences = measurements.map(current => {
      const base = baseline.measurements.find(m => m.id === current.id)
      if (!base) return { id: current.id, status: 'NOT_IN_BASELINE' }

      const matches = {
        containerWidth: current.containerWidth === base.containerWidth,
        containerHeight: current.containerHeight === base.containerHeight,
        imgWidth: current.imgWidth === base.imgWidth,
        imgHeight: current.imgHeight === base.imgHeight,
        aspectRatio: current.aspectRatio === base.aspectRatio,
      }

      const allPropsMatch = Object.values(matches).every(v => v === true)
      if (!allPropsMatch) allMatch = false

      return {
        id: current.id,
        matches,
        current,
        baseline: base,
        status: allPropsMatch ? 'MATCH' : 'DIFFERENT'
      }
    })

    console.log('Comparison Results:', differences)

    if (allMatch) {
      alert('✅ All images match baseline perfectly!')
    } else {
      alert('❌ Differences detected! Check console for details.')
      console.table(differences.map(d => ({
        id: d.id,
        status: d.status,
        widthMatch: d.matches?.containerWidth ? '✓' : '✗',
        heightMatch: d.matches?.containerHeight ? '✓' : '✗',
        aspectRatioMatch: d.matches?.aspectRatio ? '✓' : '✗',
      })))
    }
  }

  const downloadBaseline = () => {
    const data = {
      timestamp: new Date().toISOString(),
      nextVersion: '12.3.4', // Update this
      measurements: measurements
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `image-baseline-${new Date().toISOString().split('T')[0]}.json`
    a.click()
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 bg-gray-100 p-6 rounded">
        <h1 className="text-3xl font-bold mb-4">Image Layout Test</h1>

        <div className="mb-4 space-y-2">
          <p className="text-sm"><strong>Instructions:</strong></p>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>Before upgrading Next.js, click "Save Baseline" (saves to localStorage)</li>
            <li>Optionally click "Download Baseline" to save a JSON file backup</li>
            <li>Upgrade Next.js to version 13</li>
            <li>Return to this page and click "Load Baseline"</li>
            <li>Click "Compare to Baseline" to verify pixel-perfect match</li>
          </ol>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={saveBaseline}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Baseline
          </button>
          <button
            onClick={loadBaseline}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Load Baseline
          </button>
          <button
            onClick={compareToBaseline}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Compare to Baseline
          </button>
          <button
            onClick={downloadBaseline}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Download Baseline
          </button>
        </div>

        {baseline && (
          <div className="bg-yellow-100 p-3 rounded text-sm">
            <strong>Baseline loaded:</strong> {baseline.timestamp} (Next.js {baseline.nextVersion})
          </div>
        )}
      </div>

      <div className="space-y-8">
        {testImages.map((test) => (
          <div key={test.id} className="border-2 border-blue-500 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{test.title}</h2>
            <p className="text-sm text-gray-600 mb-4">ID: {test.id}</p>

            <div
              data-test-image={test.id}
              className="border-2 border-red-500 mb-4 bg-gray-50"
            >
              <CoverImage {...test} />
            </div>

            {measurements.find(m => m.id === test.id) && (
              <div className="bg-gray-100 p-3 rounded">
                <h3 className="font-bold mb-2">Measurements:</h3>
                <pre className="text-xs overflow-auto">
                  {JSON.stringify(measurements.find(m => m.id === test.id), null, 2)}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {measurements.length > 0 && (
        <div className="mt-8 bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">All Measurements</h2>
          <div className="overflow-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Container W×H</th>
                  <th className="border p-2">Image W×H</th>
                  <th className="border p-2">Aspect Ratio</th>
                  <th className="border p-2">Natural W×H</th>
                </tr>
              </thead>
              <tbody>
                {measurements.map(m => (
                  <tr key={m.id}>
                    <td className="border p-2">{m.id}</td>
                    <td className="border p-2">{m.containerWidth}×{m.containerHeight}</td>
                    <td className="border p-2">{m.imgWidth}×{m.imgHeight}</td>
                    <td className="border p-2">{m.aspectRatio}</td>
                    <td className="border p-2">{m.imgNaturalWidth}×{m.imgNaturalHeight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
