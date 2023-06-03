import React from 'react';
import { Select, TextInput, Group, Image, Button, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { IconChevronDown } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import person from './../../assets/person.svg'
import shop from './../../assets/shop.svg'
import date from './../../assets/date.svg'


const useStyles = createStyles(() => ({
    formContainer: {
        justifyContent: 'space-between',
        paddingBottom: "20px"
    },
    leftinputWrapper: {
        gap: '9px'
    }
}));

const Form = () => {
    const { classes } = useStyles();
    const form = useForm({
        initialValues: {
            searchText: '',
            provider: '',
            branch: '',
            date: '',
            client: '',
            service: '',
        }
    });
    return (
        <form onSubmit={form.onSubmit((values) => console.log({ values }))}>
            <Group className={classes.formContainer}>
                <TextInput
                    radius="8px"
                    size="md"
                    rightSection={
                        <IconSearch size="1.1rem" stroke={1.5} />
                    }
                    placeholder="بحث بإسم العميل او هاتف العميل"
                    rightSectionWidth={42}
                    styles={() => ({
                        root: {
                            width: '300px',
                        }
                    })}
                    {...form.getInputProps('searchText')}
                />
                <Group className={classes.leftinputWrapper}>
                    <Button
                        type="submit"
                        radius="8px"
                        styles={(theme) => ({
                            root: {
                                width: '50px',
                                color: "#6E7176",
                                fontWeight: 500,
                                background: '#FFFFFF',
                                border: '1px solid #B8BBC2',
                                margin: 0,
                                padding: 0,
                                fontSize: '14px',
                                '&:not([data-disabled])': theme.fn.hover({
                                    backgroundColor: '#fff',
                                }),
                            }
                        })}
                    >
                        تطبق
                    </Button>
                    <Select
                        radius="8px"
                        icon={<Image src={person} width={16} height={16} />}
                        placeholder="مقدم الخدمة"
                        rightSection={<IconChevronDown size="1rem" />}
                        data={['مقدم الخدمة 1', 'مقدم الخدمة 2', 'مقدم الخدمة 3']}
                        styles={() => ({
                            root: {
                                width: '160px',
                                color: "#6E7176",
                                fontWeight: 500,
                            },
                            rightSection: { pointerEvents: 'none' }
                        })}
                        {...form.getInputProps('provider')}
                    />
                    <Select
                        radius="8px"
                        icon={<Image src={shop} width={16} height={16} />}
                        placeholder="الفرع"
                        rightSection={<IconChevronDown size="1rem" />}
                        data={[' الفرع 1', ' الفرع 2', ' الفرع 3']}
                        styles={() => ({
                            root: {
                                width: '160px',
                                color: "#6E7176",
                                fontWeight: 500,

                            },
                            rightSection: { pointerEvents: 'none' }
                        })}
                        {...form.getInputProps('branch')}
                    />
                    <DateInput
                        icon={<Image src={date} width={16} height={16} />}
                        rightSection={<IconChevronDown size="1rem" />}
                        radius="8px"
                        placeholder="التاريخ"
                        mx="auto"
                        maw={400}
                        styles={() => ({
                            root: {
                                width: '160px',
                                color: "#6E7176",
                                fontWeight: 500,

                            },
                            rightSection: { pointerEvents: 'none' }
                        })}
                        {...form.getInputProps('date')}
                    />
                    <Select
                        radius="8px"
                        icon={<Image src={person} width={16} height={16} />}
                        placeholder=" العميل"
                        rightSection={<IconChevronDown size="1rem" />}
                        data={[' العميل 1', ' العميل 2', ' العميل 3']}
                        styles={() => ({
                            root: {
                                width: '160px',
                                color: "#6E7176",
                                fontWeight: 500,
                            },
                            rightSection: { pointerEvents: 'none' }
                        })}
                        {...form.getInputProps('client')}
                    />
                    <Select
                        radius="8px"
                        icon={<Image src={shop} width={16} height={16} />}
                        placeholder=" الخدمة"
                        rightSection={<IconChevronDown size="1rem" />}
                        data={[' الخدمة 1', ' الخدمة 2', ' الخدمة 3']}
                        styles={() => ({
                            root: {
                                width: '160px',
                                color: "#6E7176",
                                fontWeight: 500,
                            },
                            rightSection: { pointerEvents: 'none' }
                        })}
                        {...form.getInputProps('service')}
                    />
                </Group>
            </Group>
        </form>
    )
}

export default Form