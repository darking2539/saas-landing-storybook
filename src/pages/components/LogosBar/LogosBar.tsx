import Logo from '../../../components/Logo/Logos'
import AccentureLogo from '../../../assets/Accenture.svg'
import AppleLogo from '../../../assets/Apple.svg'
import MicrosoftLogo from '../../../assets/Microsoft.svg'
import GoogleLogo from '../../../assets/Google.svg'
import BearingPointLogo from '../../../assets/BearingPoint.svg'


type Props = {}

export const LogosBar = ({}: Props) => {
    return (
        <div className='flex justify-center bg-gray-900 w-full h-max'>
            <div className='flex justify-center place-items-center gap-[20px] mx-5 w-[80%] h-[100px] border-y-2 border-gray-600'>
                <Logo LogoIcon={AccentureLogo} invert={true}/>
                <Logo LogoIcon={AppleLogo} invert={true} scale='0.3'/>
                <Logo LogoIcon={MicrosoftLogo} />
                <Logo LogoIcon={GoogleLogo} />
                <Logo LogoIcon={BearingPointLogo} invert={true} />
            </div>
        </div>
    )
}