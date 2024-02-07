import { cn } from '@/utils/cn';
import * as React from 'react';
import { IoSearch } from "react-icons/io5";

type Props = {
  className? : string
  value: string
  onSubmit:  React.FormEventHandler<HTMLFormElement> | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export default function SearchBox (props: Props) {
  return (
    <div>
      <form className={cn(
        'flex relative items-center justify-center h-10', props.className
      )}
      onSubmit={props.onSubmit}
      >
        <input type="text" 
        placeholder='Search location...'
        className='px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full'
        onChange={props.onChange}
        value={props.value}
        />
        <button
        className='px-4 -y-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 whitespace-nowrap h-full'
        ><IoSearch /></button>
      </form>
    </div>
  );
}
