import { Dropdown, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const DropdownExample = () => {
  const preview = (
    <Dropdown>
      <Dropdown.DropdownWrapper id="2">
        <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
        <Dropdown.DropdownMenu className="w-40">
          <Dropdown.DropdownMenuItem>A</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>B</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>C</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>D</Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenu>
      </Dropdown.DropdownWrapper>
    </Dropdown>
  );

  const previewString = reactElementToJSXString(preview);

  const tabsData = [
    { label: 'preview', content: preview },
    {
      label: 'code',
      content: <CodeBlock>{`${previewString}`}</CodeBlock>,
    },
  ];

  return (
    <>
      <Heading variation="h4">Dropdown</Heading>

      <Tabs>
        <Tabs.TabWrapper data={tabsData}>
          <Tabs.TabHeaders />
          <Tabs.TabContent />
        </Tabs.TabWrapper>
      </Tabs>
    </>
  );
};

export default DropdownExample;
