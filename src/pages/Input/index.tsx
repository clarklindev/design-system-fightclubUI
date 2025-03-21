import { useRef, useState } from 'react';

import { Layout, Heading, Tabs, CodeBlock, Icon, Input, Button } from '@fightclub/components';

import { SpeechIcon } from '@fightclub/icons'; //input + icon example
import { SearchIcon, CloseIcon } from '@fightclub/icons'; //search example
import { ShowPasswordIcon, HidePasswordIcon } from '@fightclub/icons'; //password example icons

import Code from './code.mdx';

const InputExample = () => {
    const [savedData, setSavedData] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); //password input
    const ref = useRef<HTMLInputElement | null>(null); //input search

    const preview = (
        <>
        <Layout>
            <Heading variation="h5" size="level2">
            Basic input
            </Heading>
            <Input>
            <Input.InputElement
                value={savedData}
                onChange={event => {
                setSavedData(event.target.value);
                }}
            />
            </Input>
        </Layout>

        <Layout>
            <Heading variation="h5" size="level2">
            Input (readonly)
            </Heading>
            <Input>
            <Input.InputElement
                value={savedData}
                readOnly
                onChange={event => {
                setSavedData(event.target.value);
                }}
            />
            </Input>
        </Layout>

        <Layout>
            <Heading variation="h5" size="level2">
            Input + Icon
            </Heading>
            <Input variants={{ variant: 'default' }}>
            <Icon size="L">
                <SpeechIcon />
            </Icon>
            <Input.InputElement
                value={savedData}
                placeholder="placeholder"
                onChange={event => {
                setSavedData(event.target.value);
                }}
            />
            </Input>
        </Layout>

        <Layout>
            <Heading variation="h5" size="level2">
            Input Password
            </Heading>
            <Input>
            <Input.InputElement
                value={savedData}
                placeholder={'placeholder'}
                type={passwordVisible ? 'text' : 'password'}
                onChange={event => {
                setSavedData(event.target.value);
                }}
            />
            <Button intent="icon" onClick={() => setPasswordVisible(!passwordVisible)}>
                <Icon size="L">{passwordVisible ? <HidePasswordIcon /> : <ShowPasswordIcon />}</Icon>
            </Button>
            </Input>
        </Layout>

        <Layout>
            <Heading variation="h5" size="level2">
            Input Filter
            </Heading>
            <Input>
            <Icon size="M">
                <SearchIcon />
            </Icon>
            <Input.InputElement
                value={savedData}
                placeholder="placeholder"
                onChange={event => {
                setSavedData(event.target.value);
                }}
            />
            {savedData.length > 0 && (
                <Button
                intent="icon"
                onClick={() => {
                    setSavedData('');
                }}>
                <Icon size="M">
                    <CloseIcon />
                </Icon>
                </Button>
            )}
            </Input>
        </Layout>

        <Layout>
            <Heading variation="h5" size="level2">
            Input Search
            </Heading>
            <Input>
            <Input.InputElement
                ref={ref}
                value={savedData}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const val = event.target.value;
                setSavedData(val);
                }}
                placeholder="placeholder"
            />
            <Button
                intent="icon"
                onClick={() => {
                if (ref.current) {
                    console.log('value: ', ref.current.value);
                }
                }}>
                <Icon size="M">
                <SearchIcon />
                </Icon>
            </Button>
            </Input>
        </Layout>

        <Layout>
            <Heading variation="h5" size="level2">
            Input (no-border / no-bg)
            </Heading>
            <Input variants={{ variant: 'unstyled' }}>
            <Input.InputElement
                value={savedData}
                placeholder="placeholder"
                onChange={event => {
                setSavedData(event.target.value);
                }}
            />
            </Input>
        </Layout>
        </>
    );

    return (
        <>
            <Heading variation="h1" data-observable="true">
                Input
            </Heading>

            <Tabs>
                <Tabs.TriggerGroup>
                <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
                <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
                </Tabs.TriggerGroup>
                <Tabs.ContentGroup>
                <Tabs.Content data-tab="0">{preview}</Tabs.Content>
                <Tabs.Content data-tab="1">
                    <CodeBlock>
                        <Code />
                    </CodeBlock>
                </Tabs.Content>
                </Tabs.ContentGroup>
            </Tabs>
        </>
    );
};

export default InputExample;
