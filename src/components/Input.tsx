import { IInputField } from "../types"

export const Input: React.FC<IInputField> = ({
  labelFor,
  labelText,
  ...props
}) => {
  return (
    <div className='my-5'>
      <div className='flex justify-between'>
        <label htmlFor={labelFor} className='block font-medium text-gray-700'>
          {labelText}
        </label>
      </div>
      <input
        {...props}
        className='block w-full p-4 rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring-sky-500'
      />
    </div>
  )
}
