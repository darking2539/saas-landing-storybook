import { Button } from './Button'

export type SignUpButtonProps = {
    onClick?: any;
}

export const SignUpButton = ({
    onClick,
}: SignUpButtonProps) => {
    return (
        <Button
            onClick={onClick}
            title="Sign Up"
            className='text-white bg-transparent hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg w-full' 
        />
    )
}