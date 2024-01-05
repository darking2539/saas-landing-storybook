import { LoginButton, SignUpButton } from '../../../components/Button'

type Props = {

}

export const TopBar = ({

}: Props) => {
    return (
        <div className='flex justify-between bg-black w-full'>
            <div className='flex justify-between place-items-center mx-10 m-5 w-full'>
                <div className="text-2xl text-white font-extrabold">
                    Wallet
                </div>

                <div className="flex w-80">
                    <SignUpButton/>
                    <LoginButton/>
                </div>
            </div>
        </div>
    )
}