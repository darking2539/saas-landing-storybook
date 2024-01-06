import { TopBar } from '../components/TopBar'
import { LogosBar } from '../components/LogosBar'
import { Header } from '../components/Header'
import { ProductImage } from '../components/ProductImage'

type Props = {}

export const Landing = ({}: Props) => {
    return (
        <>
            <TopBar />
            <div className='flex flex-col gap-10 px-36 bg-gray-900'>
                <Header 
                    title="SaaS Landing Page Template"
                    detail="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
                <LogosBar/>
                <ProductImage/>
            </div>
        </>
    )
}