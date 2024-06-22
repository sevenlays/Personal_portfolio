import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram, FaMobile } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/sevenlays' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/vladyslav-ivanov-34ab4b223/',
  },
  { icon: <FaTelegram />, path: 'https://t.me/Vladislav_Ivanov_Dev' },
  { icon: <FaMobile />, path: 'tel:+380688765877' },
];

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Social: React.FunctionComponent<Props> = ({
  containerStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target='_blank'
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
