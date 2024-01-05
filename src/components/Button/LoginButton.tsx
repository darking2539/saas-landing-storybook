import { Button } from './Button'

export type LoginButtonProps = {
    onClick?: any;
}

export const LoginButton = ({
    onClick,
}: LoginButtonProps) => {
    return (
        <Button
            onClick={onClick}
            title="Log in"
            className='bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg w-full' />
    )
}