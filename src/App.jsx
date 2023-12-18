import AboutFirst from "./Components/AboutFirst"
import { NavbarWithSearch } from "./Components/Navbar"
import SecondPart from "./Components/SecondPart"
import CookiePolicy from "./Components/CookiePolicy"
import PrivacyPolicy from "./Components/PrivacyPolicy"
import TermsAndConditions from "./Components/TermsAndConditions"
import ThirdPart from "./Components/ThirdPart"
import SecurityGuidelines from "./Components/SecurityGuidelines"


function App() {

  return (
    <>
      <NavbarWithSearch/>
      <AboutFirst/>
      <SecondPart/>
      <ThirdPart/>
      <TermsAndConditions/>
      <PrivacyPolicy/>
      <CookiePolicy/>
      <SecurityGuidelines/>
    </>
  )
}

export default App
