'use client'
import getUrl from '@/lib/getUrl';
import { useBoardStore } from '@/store/BoardStore';
import { Todo, TypedColumn } from '@/typings'
import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

type Props={
    todo:Todo;
    index:number;
    id:TypedColumn;
    innerRef:(element:HTMLElement|null)=>void;
    draggableProps:DraggableProvidedDraggableProps;
    dragHandleProps : DraggableProvidedDraggableProps|null|undefined;
}

function TodoCard(
    {todo,index,id,innerRef,draggableProps,dragHandleProps}:Props
) {

  const [imageUrl,setImageUrl] = useState<string|null>(null);

  useEffect(()=>{
    if (todo.image){
      const fetchImage = async ()=>{
        const url = await getUrl(todo.image!);
        if(url){
          setImageUrl(url.toString());
        }
      }
      fetchImage();
    }
  },[todo])

  const deleteTask = useBoardStore((state)=>state.deleteTask);
  return (
    <div
    {...dragHandleProps}
    {...draggableProps}
    ref={innerRef}
    className='bg-white rounded-md space-y-2 drop-shadow-md'
    >
    <div className='flex justify-between items-center p-5'>
        <p >{todo.title}</p>
        <button className='text-red-500 hover:text-red-600' onClick={()=> deleteTask(index,todo,id)}>
            <XCircleIcon className='ml-5 h-8 w-8' />
        </button>
    </div>
    {/* add image here  */}
    {imageUrl && (
      <div className="w-full h-44 rounded-b-mb">
      <Image 
      src={imageUrl }
      alt="task image"
      width={400}
      height={200}
      className='w-full h-44 object-cover rounded-b-md'
      />
      
      </div>
    )}

    </div>
  )
}

export default TodoCard