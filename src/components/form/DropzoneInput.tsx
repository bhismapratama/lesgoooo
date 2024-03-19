import * as React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { FaRegFileLines } from 'react-icons/fa6';
import { GoUpload } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import ErrorMessage from '@/components/form/ErrorMessage';
import FilePreview from '@/components/form/FilePreview';
import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';

import { FileWithPreview } from '@/types/form/dropzone';

export type DropzoneInputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  accept?: string;
  acceptTypes?: string;
  maxFiles?: number;
  className?: string;
};

export default function DropzoneInput({
  id,
  label,
  validation,
  helperText,
  accept = ".jpg, .jpeg, .png",
  // accept = ".jpg, .jpeg, .png",
  maxFiles = 1,
  className,
}: DropzoneInputProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const dropzoneRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [error]);

  const [files, setFiles] = React.useState<FileWithPreview[]>(
    getValues(id) || []
  );

  const onDrop = React.useCallback(
    <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ?? [...files]);
        setError(id, {
          type: 'manual',
          message:
            rejectedFiles &&
            `${rejectedFiles[0].errors[0].code === 'file-too-large'
              ? 'File tidak boleh lebih dari 3MB'
              : rejectedFiles[0].errors[0].code === 'file-invalid-type'
                ? 'Tipe file tidak didukung'
                : rejectedFiles[0].errors[0].message
            }`,
        });
      } else {
        const acceptedFilesPreview = acceptedFiles.map((file: T) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );

        setFiles(
          files
            ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
            : acceptedFilesPreview
        );

        setValue(
          id,
          files
            ? [...files, ...acceptedFiles].slice(0, maxFiles)
            : acceptedFiles,
          { shouldValidate: true }
        );

        clearErrors(id);
      }
    },
    [clearErrors, files, id, maxFiles, setError, setValue]
  );

  React.useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const deleteFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview
  ) => {
    e.preventDefault();
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);

    setFiles(newFiles.length > 0 ? newFiles : []);
    setValue(id, newFiles.length > 0 ? newFiles : null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: accept as unknown as string,
    accept: accept as string,
    maxFiles,
    maxSize: 3545728,
  });

  return (
    <div className='w-full space-y-1.5 rounded-md'>
      {label && (
        <label htmlFor={id} className='flex space-x-1 mb-6'>
          <Typography
            font='poppins'
            weight='bold'
            variant='t'
            color='label'
            className='text-[16px] leading-[24px] text-whites-1100'
          >
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-danger-600'>*</Typography>
          )}
        </label>
      )}

      <Controller
        control={control}
        name={id}
        rules={validation}
        render={() => (
          <div
            ref={dropzoneRef}
            className='focus:outline-none group'
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {files.length > 0 &&
              files.map((file, index) => (
                <div key={index} className='mt-1'>
                  <FilePreview file={file} deleteFile={deleteFile} />
                </div>
              ))}
            {files.length === 0 && (
              <div
                className={clsxm(
                  'w-full cursor-pointer bg-white rounded-md',
                  'flex flex-col items-center space-y-2 px-3 py-8',
                  'border-dashed border-2 border-typo-inline',
                  error
                    ? 'border-red-500 group-focus:border-red-500'
                    : 'group-focus:border-typo-primary group-hover:border-typo-primary',
                  className
                )}
              >
                <div className='flex flex-col items-center gap-1'>
                  <FaRegFileLines className='w-16 h-16' />
                  <Typography
                    className='text-center md:text-[18px] font-poppins'
                    variant='btn'
                    weight='bold'
                  >
                    Upload File
                  </Typography>
                  <Typography
                    className='text-center md:text-[12px] font-poppins'
                    weight='medium'
                  >
                    Klik atau Drag & Drop <br />
                    File yang disupport : .png, .jpg, .jpeg
                  </Typography>
                </div>
              </div>
            )}
            {files.length === 0 && (
              <Button className='mt-3 py-2 px-4'>
                <Typography
                  variant='btn'
                  weight='bold'
                  className='md:text-[14px] font-poppins text-white flex items-center gap-2'
                >
                  Upload File
                  <GoUpload className='text-[20px] font-medium' />
                </Typography>
              </Button>
            )}
          </div>
        )}
      />

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}
