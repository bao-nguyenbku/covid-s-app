import NextImage, { ImageProps } from 'next/image'

export default function Image(props: ImageProps) {
  const { src, ...rest } = props
  if (!src) {
    return (
      <NextImage
        src={
          'https://res.cloudinary.com/dfmvkj36q/image/upload/v1683343439/samples/cloudinary-icon.png'
        }
        sizes='10vw'
        {...rest}
      />
    )
  }
  return <NextImage src={src} {...rest} />
}
