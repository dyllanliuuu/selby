import NextImage from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <NextImage src={'/logos/logo-selby.svg'} alt={""} width={192} height={120} />
  );
}
