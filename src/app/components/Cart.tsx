import { FacebookIcon, GiftIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, SmartphoneIcon } from "lucide-react"

export const Cart = () => {

  return (
    <div className="infos w-ful xl:w-96 lg:w-96 md:w-96" data-aos='fade-down'>
      <div className="shadow-box ps-8 pe-8 pb-8 pt-0">
        <div className="flex justify-center">
          <img src='3d-headshot.png' alt="profile" />
        </div>
        <h1 className="text-center text-white text-4xl font-semibold">Ray Sanjaya</h1>
        <div className="flex justify-center mt-2 mb-2">
          <h1 style={{ backgroundColor: 'rgb(17 17 17)' }} className='d-inline-block p-2 font-content rounded'>Software Engineer</h1>
        </div>

        <div className='flex justify-center icon-boxes p-2'>
          <a href="#" className='pe-2'>
            <InstagramIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
          <a href="#" className='pe-2'>
            <i className='iconoir-facebook-tag social-media fs-2' />
            <FacebookIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
          <a href="#" className='pe-2'>
            <GithubIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
          <a href="#">
            <LinkedinIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
        </div>

        <div className='mt-3 p-4 rounded-lg icon-boxes' style={{ backgroundColor: 'rgb(17 17 17)' }}>
            <div className='flex flex-row'>
              <div className='flex items-center w-14'>
                <SmartphoneIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
              </div>
              <div className=''>
                <small className='text-gray-400'>Phone</small>
                <br />
                <label className="font-content">+62 813 XXXX XX66</label>
              </div>
            </div>
            <hr />
            <div className='flex flex-row'>
              <div className='flex items-center w-14'>
                <MailIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
              </div>
              <div className=''>
                <small className='text-gray-400'>Email</small>
                <br />
                <label className="font-content">ray.snjya@gmail.com</label>
              </div>
            </div>
            <hr />
            <div className='flex flex-row'>
              <div className='flex items-center w-14'>
                <MapPinIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
              </div>
              <div className=''>
                <small className='text-gray-400'>Location</small>
                <br />
                <label className="font-content">Medan, Indonesia</label>
              </div>
            </div>
            <hr />
            <div className='flex flex-row'>
              <div className='flex items-center w-14'>
                <GiftIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
              </div>
              <div className=''>
                <small className='text-gray-400'>Birthday</small>
                <br />
                <label className="font-content">March 06, 1998</label>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}