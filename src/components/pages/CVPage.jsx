function CVPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* CV preview via iframe */}
      <div className="w-full max-w-4xl aspect-[8.5/11] bg-white shadow-lg rounded-xl overflow-hidden">
        <iframe
          src="https://www.canva.com/design/DAF-bg7i-Qo/w168ZE8jeep0zwLmdG9Z5w/edit?ui=eyJEIjp7IlQiOnsiQSI6IlBCSm1MN2I1TGJoR0c3ZFQifX19"
          title="CV Preview"
          className="w-full h-full"
        />
      </div>

      {/* Download button */}
      <a
  href="https://www.canva.com/design/DAF-bg7i-Qo/HudWbPog4LbDnY9iHUyhUA/view"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
>
  View CV on Canva
</a>

    </div>
  )
}

export default CVPage
