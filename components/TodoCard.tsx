'use client'
import { Todo, TypedColumn } from '@/typings'
import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'
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
  return (
    <div
    {...dragHandleProps}
    {...draggableProps}
    ref={innerRef}
    className='bg-white rounded-md space-y-2 drop-shadow-md'
    >
    <div className='flex justify-between items-center p-5'>
        <p >{todo.title}</p>
        <button className='text-red-500 hover:text-red-600'>
            <XCircleIcon className='ml-5 h-8 w-8' />
        </button>
    </div>
    {/* add image here  */}
    </div>
  )
}

export default TodoCard