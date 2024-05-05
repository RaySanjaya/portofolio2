import { CodeXmlIcon } from "lucide-react"

export const FrontEnd = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-16 me-4">
          <CodeXmlIcon size={52} strokeWidth={3.5} absoluteStrokeWidth className="text-amber-400" />
        </div>
        <div className="w-full">
          <h4 className="font-semibold text-xl pb-2">
            <u>
              Front End Developer
            </u>
          </h4>
          <div className="space-y-5">
            <p className="font-content">Here are two front-end frameworks that I commonly use in my projects.</p>
            <div className="flex flex-row">
              <img
                className="react-icon"
                src="react-icon.png"
                alt="platform_icon"
                style={{
                  maxWidth: '25px'
                }}
              />
              <div className="ps-1 pe-3">
                <a href="https://react.dev" target="_blank" className="platform-text">React JS</a>
              </div>

              <img
                className="react-icon"
                src="nextjs-2-icon.png"
                alt="platform_icon"
                style={{
                  maxWidth: '25px'
                }}
              />
              <div className="ps-1">
                <a href="https://nextjs.org" target="_blank" className="platform-text">Next JS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}