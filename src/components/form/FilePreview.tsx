import 'yet-another-react-lightbox/styles.css';

import * as React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi2';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import Button from '@/components/buttons/Button';
import Typography from '@/components/Typography';
import { FileWithPreview } from '@/types/form/dropzone';

type FilePreviewProps = {
  file: FileWithPreview;
  deleteFile?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview
  ) => void;
  readOnly?: boolean;
};

export default function FilePreview({
  file,
  deleteFile,
  readOnly,
}: FilePreviewProps) {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const zoomRef = React.useRef(null);

  return (
    <li key={file.name} className='list-none flex w-full justify-between gap-3'>
      <div className='w-[80%] md:w-[70%] flex items-center gap-2 px-3 py-2 rounded-md bg-primary-600'>
        <Typography
          className='flex items-center gap-2 text-[14px] truncate capitalize'
          color='white'
        >
          <FaRegFileAlt />
          {file.name}
        </Typography>
        <Lightbox
          open={isOpen}
          slides={[{ src: file.preview }]}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          plugins={[Zoom]}
          zoom={{ ref: zoomRef }}
          close={() => setIsOpen(false)}
        />
      </div>
      {!readOnly && (
        <Button
          className='flex items-center w-[155px] h-[40px] bg-white border-[1px] border-red-600 group-hover:bg-white'
          leftIcon={HiOutlineTrash}
          leftIconClassName='text-[16px] text-red-600'
          onClick={handleDelete}
        >
          <Typography color='danger' className='md:text-[14px]' weight='bold'>
            Hapus File
          </Typography>
        </Button>
      )}
    </li>
  );
}
