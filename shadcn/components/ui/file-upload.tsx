"use client";

import { X } from "lucide-react";
import { PropsWithChildren, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "shadcn/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "shadcn/components/ui/dialog";
import { cn } from "shadcn/lib/utils";

interface FileUploadProps {
  onUpload: (file: File[]) => Promise<any>;
}

export function FileUpload({ onUpload, children }: PropsWithChildren<FileUploadProps>) {
  const [files, setFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    maxSize: 1024 * 1024 * 2,
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md" topClose={false}>
        <div className="flex items-center space-x-2">
          {files.length > 0 ? (
            files.map((file) => (
              <div className="stack">
                <button
                  onClick={() => setFiles([])}
                  className="z-0 ml-auto mr-2 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-white p-2"
                >
                  <X className="h-4 w-4 text-red-500" />
                </button>
                <img className="h-64 max-h-full rounded-md" src={URL.createObjectURL(file)} />
              </div>
            ))
          ) : (
            <div className="flex w-full items-center justify-center" {...getRootProps()}>
              <label
                htmlFor="dropzone-file"
                className={cn(
                  "dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
                  { "border-blue-300 text-blue-300": isDragActive }
                )}
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input className="hidden" multiple={false} {...getInputProps()} />
              </label>
            </div>
          )}
        </div>
        <DialogFooter className="justify-between sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() =>
              onUpload(files).then(() => {
                setFiles([]);
                setIsOpen(false);
              })
            }
          >
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
