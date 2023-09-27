import NextImage, { ImageProps } from 'next/image';

export default function Image(props: ImageProps) {
  const { src, ...rest } = props;
  return <NextImage src={src} {...rest} />
}