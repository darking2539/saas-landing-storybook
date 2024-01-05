import { Button } from './Button'

export type GetStartProps = {
    onClick?: any;
}

export const GetStartButton = ({
    onClick,
}: GetStartProps) => {
    return (
        <Button
            onClick={onClick}
            title="Get Started"
            className='bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg w-full' />
    )
}