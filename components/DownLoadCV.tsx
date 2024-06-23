import { FiDownload } from 'react-icons/fi';
import { Button } from './ui/button';

const DownLoadCV = () => {
  return (
    <div className='uppercase flex items-center gap-2'>
      <a
        href='./Vladyslav_Ivanov_Full-Stack_CV.pdf'
        download
        className='leading-12'
      >
        <Button
          variant='outline'
          size='lg'
          className='uppercase flex items-center gap-2'
        >
          Download CV
          <FiDownload className='text-xl' />
        </Button>
      </a>
    </div>
  );
};

export default DownLoadCV;
