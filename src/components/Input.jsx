import React from 'react'

export default function Input({lable, invalid,...props }) {
    let lableClasses= ' block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClasses=' w-full px-3 py-2 leading-tight border rounded shadow';
  if (invalid){
    lableClasses += ' text-red-400';
    inputClasses += ' tex-red-500 bg-red-100 border-red-300'
  }else{
    lableClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300'
  }
    return (
    <p>
     <lable className={lableClasses}>{lable}</lable>
     <input className={inputClasses}  {...props}/> 

    </p>
   
    )
}
