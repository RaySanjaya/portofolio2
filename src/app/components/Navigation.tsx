type NavigationProps = {
  current_menu: number;
  setCurrentMenu: Function;
}


export const Navigation = ({ current_menu, setCurrentMenu }: NavigationProps) => {
  let landingClass: string = 'pe-4 action'
  let contactMeClass: string = 'pe-4 action'
  if (current_menu === 1) landingClass = 'pe-4 active'
  if (current_menu === 3) contactMeClass = 'pe-4 active'

  return (
    <div className="mb-5" data-aos='zoom-in'>
      <div className="flex justify-center xl:justify-start lg:justify-start md:justify-start sm:justify-start">
        <ul className="flex flex-row">
          <li className={ landingClass } style={{ cursor: 'pointer' }} onClick={() => { setCurrentMenu(1) }}>Landing</li>
          {/* <li className="pe-4 action" style={{ cursor: 'pointer' }}>Experience</li> */}
          <li className={ contactMeClass } style={{ cursor: 'pointer' }} onClick={() => { setCurrentMenu(3) }}>Contact Me</li>
        </ul>
      </div>
    </div>
  )
}