import NextImage from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <NextImage src={'/logos/logo-no-background.svg'} alt={""} width={192} height={192} />
  );
}
