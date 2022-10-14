import Hamburger from 'hamburger-react';

function BtnMenu({menuActive, setMenuActive}) {
    

  return (
    <Hamburger
      toggled={menuActive}
      toggle={()=>setMenuActive(!menuActive)}
      size={20}
      />
  )
}

export default BtnMenu;