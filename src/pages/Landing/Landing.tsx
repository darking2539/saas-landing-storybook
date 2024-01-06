import { TopBar } from '../components/TopBar'
import { LogosBar } from '../components/LogosBar'
import { Header } from '../components/Header'

type Props = {}

export const Landing = ({}: Props) => {
    return (
        <div>
            <TopBar />
            <Header 
                title="SaaS Landing Page Template"
                detail="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
            <LogosBar/>
        </div>
    )
}