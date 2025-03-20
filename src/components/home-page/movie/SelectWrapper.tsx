import { Select, SelectItem } from "@heroui/react";

type SelectItem = {
  value: string;
  label: string;
};

export default function SelectWrapper({
  placeholder,
  items,
}: {
  placeholder: string;
  items: SelectItem[];
}) {
  return (
    <Select
      className='max-w-full'
      classNames={{
        trigger: "bg-zinc-700 hover:bg-zinc-600 rounded-2xl data-[hover=true]:bg-zinc-600",
        value: "text-white",
        listbox: "bg-zinc-800",
        popoverContent: "bg-zinc-800 rounded-2xl",
        base: "max-w-full",
      }}
      placeholder={placeholder}
      variant='flat'
    >
      {items.map((item) => (
        <SelectItem
          key={item.value}
          // value={item.value}
          className='text-white data-[hover=true]:bg-violet-600 data-[hover=true]:text-white'
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}
