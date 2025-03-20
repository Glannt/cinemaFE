import React from "react";
import { Icon } from "@iconify/react";
import { Select, SelectItem, SelectSection } from "@heroui/react";

const languages = [
  { code: "EN", label: "English" },
  { code: "JP", label: "Japanese" },
  { code: "VI", label: "Vietnamese" },
];

export const LanguageDropdown = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["EN"]));
  const headingClasses =
    "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
  const selectedLanguage = React.useMemo(() => {
    const selectedKey = Array.from(selectedKeys)[0];

    return languages.find((lang) => lang.code === selectedKey) || languages[0];
  }, [selectedKeys]);

  return (
    <Select
      aria-label='Select Language'
      className='max-w-sm'
      defaultSelectedKeys={selectedKeys}
      placeholder='Select Language'
      scrollShadowProps={{
        isEnabled: false,
      }}
    >
      <SelectSection
        classNames={{
          heading: headingClasses,
        }}
      >
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            startContent={<Icon className='text-lg' icon='lucide:globe' />}
          >
            {lang.label}
          </SelectItem>
        ))}
      </SelectSection>
    </Select>
  );
};
