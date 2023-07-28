'use client';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useModalStore } from '@/store/ModalStore';
import { useBoardStore } from '@/store/BoardStore';
import TaskTypeRadioGroup from './TaskTypeRadioGroup';

function Modal() {
//   let [isOpen, setIsOpen] = useState(true);
  const[isOpen,closeModal]= useModalStore((state)=>[
    state.isOpen,
    state.closeModal,
  ]);

  const [newTaskInput,setNewTaskInput] = useBoardStore((state)=>[
    state.newTaskInput,
    state.setNewTaskInput
  ]);

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
      as="form"
      className="relative z-10"
      onClose={closeModal}>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className='flixed inset-0 overflow-y-auto bg-opacity-50 '>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <Dialog.Panel className="fixed inset-0 flex items-center justify-center">
  <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
    <Dialog.Title className="text-lg font-medium loading-6 text-gray-900 pb-2" as="h3">
      Add a Task
    </Dialog.Title>
    <div className="mt-2">
      <input
        type="text"
        value={newTaskInput}
        onChange={(e) => setNewTaskInput(e.target.value)}
        placeholder="Enter a task here..."
        className="w-full border border-gray-300 rounded-md outline-none p-5"
      />
    </div>

    <TaskTypeRadioGroup />
  </div>
</Dialog.Panel>

        </Transition.Child>
        </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal;