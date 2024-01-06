import ProductImageData  from "../../../assets/ProductImage.png"

type Props = {}

export const ProductImage = ({}: Props) => {
  return (
    <div className='flex justify-center w-full h-max'>
    <div className='flex justify-center bg-yellow-200 rounded-2xl'>
        <img src={ProductImageData} />
    </div>
</div>
  )
}