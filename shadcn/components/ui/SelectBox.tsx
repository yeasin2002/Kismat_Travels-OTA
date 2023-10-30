import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "shadcn/components/ui/select";



interface SelectBoxProps {
  label : string , 
value : string,
  selectBoxItem: {
    title: string;
    value: string;
}[]

}

export function SelectBox({selectBoxItem =[] , label,value} : SelectBoxProps) {
  const id = React.useId()
  return (
    <Select key={id}>
      <SelectTrigger className="min-w-full">
        <SelectValue placeholder={value}   />
      </SelectTrigger>
      <SelectContent  >
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
           {
            selectBoxItem.map((item) => { 
              return (
                <SelectItem value={item.value}>{item.title}</SelectItem>
              )
             })
          } 


        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
