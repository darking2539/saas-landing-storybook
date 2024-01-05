import { TopBar } from '../components/TopBar'
import { LogosBar } from '../components/LogosBar'
import { Header } from '../components/Header'

type Props = {}

export const Landing = ({}: Props) => {
    return (
        <div>
            <TopBar />
            <Header />
            <LogosBar />
        </div>
    )
}