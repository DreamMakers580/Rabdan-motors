import Link from 'next/link';
import Image from 'next/image';

function Logo() {
    return (
        <Link href="/">
            <a className="inline-block align-middle leading-[1]">
                <Image
                    src="/images/rabdanlogo.png"
                    alt="Logo"
                    width={120}
                    height={80}
                />
            </a>
        </Link>
    );
}

export default Logo;
